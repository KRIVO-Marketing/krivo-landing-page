import sharp from "sharp";
await sharp("/private/tmp/claude-501/-Users-gustavopallaagostinho-Downloads--Projetos-Krivo-Landing-Page/c10ea6b2-ae59-43df-bd5f-2f42c5763c78/scratchpad/norm/2.png").webp({ quality: 94, alphaQuality: 100, effort: 6 }).toFile("assets-src/socio-2.webp");
