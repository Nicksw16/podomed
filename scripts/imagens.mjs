// Baixa as fotos PROVISÓRIAS do Unsplash (licença livre), converte para WebP
// e gera og-image.jpg + apple-touch-icon.png. Rodar: npm run imagens
// Trocar por fotos reais da clínica quando chegarem (mesmos nomes de arquivo).
import sharp from 'sharp'
import { mkdir, writeFile, readFile } from 'node:fs/promises'

const OUT = new URL('../public/img/', import.meta.url)
const PUB = new URL('../public/', import.meta.url)
await mkdir(OUT, { recursive: true })

const fotos = [
  { nome: 'hero', id: '1537094082840-dcbbfa99385f', larguras: [800, 1600], ratio: 2 },
  { nome: 'atendimento', id: '1545463913-5083aa7359a6', larguras: [900], ratio: 4 / 5 },
  { nome: 'recepcao', id: '1629909614456-6b1c5c94cecc', larguras: [900], ratio: 4 / 3 },
  { nome: 'cuidado', id: '1633526543913-d30e3c230d1f', larguras: [900], ratio: 4 / 3 },
]

let heroBuf
for (const f of fotos) {
  const url = `https://images.unsplash.com/photo-${f.id}?auto=format&fit=crop&w=1600&q=80`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${f.nome}: HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (f.nome === 'hero') heroBuf = buf
  for (const w of f.larguras) {
    const h = Math.round(w / f.ratio)
    const file = f.larguras.length > 1 ? `${f.nome}-${w}.webp` : `${f.nome}.webp`
    await sharp(buf).resize(w, h, { fit: 'cover' }).webp({ quality: 74 }).toFile(new URL(file, OUT).pathname)
    console.log(file, `${w}x${h}`)
  }
}
// Cópia para o JSON-LD (image)
await sharp(heroBuf).resize(1600, 800, { fit: 'cover' }).webp({ quality: 74 }).toFile(new URL('hero.webp', OUT).pathname)

// og-image 1200x630 com o nome sobreposto
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#0B2A4A" stop-opacity=".85"/><stop offset=".6" stop-color="#0B2A4A" stop-opacity="0"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="64" y="540" font-family="Outfit, DejaVu Sans, sans-serif" font-size="76" font-weight="600" fill="#F4F9FE">Podomed Podologia</text>
  <text x="66" y="590" font-family="Figtree, DejaVu Sans, sans-serif" font-size="32" fill="#BFDDF7">Aparecida de Goiânia - GO</text>
</svg>`)
await sharp(heroBuf).resize(1200, 630, { fit: 'cover' }).composite([{ input: overlay }]).jpeg({ quality: 82 }).toFile(new URL('og-image.jpg', PUB).pathname)

// apple-touch-icon 180px a partir do favicon SVG
const svg = await readFile(new URL('favicon.svg', PUB))
await writeFile(new URL('apple-touch-icon.png', PUB), await sharp(svg, { density: 300 }).resize(180, 180).png().toBuffer())
console.log('og-image.jpg, apple-touch-icon.png')
