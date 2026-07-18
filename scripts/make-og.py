"""Genera public/og.png (1200x630) para Open Graph / Twitter Cards."""
import os

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (7, 11, 22)
LIME = (200, 245, 49)
INK = (242, 245, 255)
MUTED = (150, 163, 200)

FONT = "/System/Library/Fonts/Avenir Next.ttc"
HEAVY, DEMI, MEDIUM = 8, 2, 5


def font(size, index=HEAVY):
    if os.path.exists(FONT):
        return ImageFont.truetype(FONT, size, index=index)
    return ImageFont.load_default(size)


img = Image.new("RGB", (W, H), BG)

# --- Resplandor lima radial y suave (se construye pequeño y se escala) ---
SM = 120
glow = Image.new("L", (SM, SM), 0)
gd = ImageDraw.Draw(glow)
cx, cy = SM * 0.78, SM * 0.30
for i in range(60, 0, -1):
    r = i * 0.95
    gd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=int(60 * (1 - i / 60) ** 2))
glow = glow.resize((W, H), Image.BICUBIC)
img = Image.composite(Image.new("RGB", (W, H), LIME), img, glow.point(lambda v: v))

d = ImageDraw.Draw(img)

# --- Icono de la app ---
icon_path = os.path.join(os.path.dirname(__file__), "icon_src.png")
if os.path.exists(icon_path):
    icon = Image.open(icon_path).convert("RGBA").resize((132, 132), Image.LANCZOS)
    mask = Image.new("L", (132, 132), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, 131, 131], radius=30, fill=255)
    img.paste(icon, (86, 92), mask)

# --- Marca ---
d.text((246, 116), "CercaYa", font=font(46, HEAVY), fill=INK)
d.text((248, 176), "Alarma de llegada por GPS", font=font(25, DEMI), fill=LIME)

# --- Titular ---
d.text((86, 296), "Duérmete en el bus.", font=font(68, HEAVY), fill=INK)
d.text((86, 380), "Nosotros te despertamos.", font=font(68, HEAVY), fill=LIME)

# --- Pie ---
d.text((86, 512), "Gratis  ·  Funciona sin datos  ·  Sin registro",
       font=font(27, MEDIUM), fill=MUTED)

# --- Filo lima inferior ---
d.rectangle([0, H - 10, W, H], fill=LIME)

out = os.environ.get("OG_OUT", os.path.join(os.path.dirname(__file__), "og.png"))
img.save(out, "PNG", optimize=True)
print("ok ->", out)
