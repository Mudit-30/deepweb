import fitz  # PyMuPDF
import sys
import os

pdf_path = sys.argv[1]
doc = fitz.open(pdf_path)

with open('events_output.txt', 'w', encoding='utf-8') as out_f:
    out_f.write("--- TEXT CONTENT ---\\n")
    for i, page in enumerate(doc):
        out_f.write(f"\\n--- PAGE {i+1} ---\\n")
        out_f.write(page.get_text())

    out_f.write("\\n--- IMAGE CONTENT ---\\n")
    out_dir = "public/img/archives"
    os.makedirs(out_dir, exist_ok=True)

    for i, page in enumerate(doc):
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_name = f"{out_dir}/page{i+1}_img{img_index}.{image_ext}"
            out_f.write(f"Saving image to {image_name}\\n")
            with open(image_name, "wb") as f:
                f.write(image_bytes)
