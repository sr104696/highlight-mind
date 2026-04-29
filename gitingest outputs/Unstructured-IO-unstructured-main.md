# Unstructured-IO/unstructured@main

- Files included: 493
- Files skipped: 813
- Total size: 252.9 KB
- Estimated tokens: ~63,546
- ⚠️ Partial: Hit max files cap (500). Raise it in Settings or tighten filters.

## Directory Structure

```
├── .github
│   ├── actions
│   │   └── base-cache
│   │       └── action.yml
│   ├── ISSUE_TEMPLATE
│   │   ├── bug_report.md
│   │   ├── custom.md
│   │   └── feature_request.md
│   └── workflows
│       ├── build-opencv-wheels.yml
│       ├── ci.yml
│       ├── claude.yml
│       ├── codeflash.yml
│       ├── codeql-analysis.yml
│       ├── docker-publish.yml
│       ├── ingest-test-fixtures-update-pr.yml
│       ├── partition-benchmark.yaml
│       ├── release-version-alert.yml
│       └── release.yml
├── discord-test
│   └── 1100149908494876775.txt
├── docker
│   └── packages
│       └── pandoc-3.1.8-r0.apk
├── example-docs
│   ├── eml
│   │   ├── email-equals-attachment-filename.eml
│   │   ├── email-inline-content-disposition.eml
│   │   ├── email-no-html-content-1.eml
│   │   ├── email-no-utf8-2008-07-16.062410.eml
│   │   ├── email-no-utf8-2014-03-17.111517.eml
│   │   ├── email-replace-mime-encodings-error-1.eml
│   │   ├── email-replace-mime-encodings-error-2.eml
│   │   ├── email-replace-mime-encodings-error-3.eml
│   │   ├── email-replace-mime-encodings-error-4.eml
│   │   ├── email-replace-mime-encodings-error-5.eml
│   │   ├── email-with-image.eml
│   │   ├── empty.eml
│   │   ├── fake-email-attachment.eml
│   │   ├── fake-email-b64.eml
│   │   ├── fake-email-header.eml
│   │   ├── fake-email-image-embedded.eml
│   │   ├── fake-email-malformed-encoding.eml
│   │   ├── fake-email-utf-16-be.eml
│   │   ├── fake-email-utf-16-le.eml
│   │   ├── fake-email-utf-16.eml
│   │   ├── fake-email.eml
│   │   ├── fake-email.txt
│   │   ├── fake-encrypted.eml
│   │   ├── family-day.eml
│   │   ├── mime-attach-mp3.eml
│   │   ├── mime-different-plain-html.eml
│   │   ├── mime-html-only.eml
│   │   ├── mime-multi-to-cc-bcc.eml
│   │   ├── mime-multipart-digest.eml
│   │   ├── mime-no-body.eml
│   │   ├── mime-no-subject.eml
│   │   ├── mime-no-to.eml
│   │   ├── mime-simple.eml
│   │   ├── mime-word-encoded-subject.eml
│   │   ├── rfc822-no-date.eml
│   │   ├── signed-doc.p7s
│   │   ├── simple-rfc-822.eml
│   │   ├── test-invalid-date.eml
│   │   ├── test-iso-8601-date.eml
│   │   └── test-rfc2822-date.eml
│   ├── img
│   │   ├── bmp_24.bmp
│   │   ├── chi_sim_image.jpeg
│   │   ├── DA-1p.heic
│   │   ├── DA-1p.jpg
│   │   ├── DA-1p.png
│   │   ├── double-column-A.jpg
│   │   ├── double-column-B.jpg
│   │   ├── embedded-images-tables.jpg
│   │   ├── english-and-korean.png
│   │   ├── example.jpg
│   │   ├── jpn-vert.jpeg
│   │   ├── layout-parser-paper-10p.jpg
│   │   ├── layout-parser-paper-combined.tiff
│   │   ├── layout-parser-paper-fast.jpg
│   │   ├── layout-parser-paper-fast.tiff
│   │   ├── layout-parser-paper-with-table.jpg
│   │   └── table-multi-row-column-cells.png
│   ├── language-docs
│   │   ├── eng_afr_spa.txt
│   │   ├── eng_spa_mult.doc
│   │   ├── eng_spa_mult.docx
│   │   ├── eng_spa_mult.eml
│   │   ├── eng_spa_mult.epub
│   │   ├── eng_spa_mult.html
│   │   ├── eng_spa_mult.md
│   │   ├── eng_spa_mult.odt
│   │   ├── eng_spa_mult.org
│   │   ├── eng_spa_mult.ppt
│   │   ├── eng_spa_mult.pptx
│   │   ├── eng_spa_mult.rst
│   │   ├── eng_spa_mult.rtf
│   │   ├── eng_spa_mult.txt
│   │   ├── eng_spa_mult.xml
│   │   ├── eng_spa.txt
│   │   ├── eng_spa.xlsx
│   │   ├── fr_olap.pdf
│   │   └── UDHR_first_article_all.txt
│   ├── pdf
│   │   ├── a1977-backus-p21.pdf
│   │   ├── all-number-table.pdf
│   │   ├── chevron-page.pdf
│   │   ├── copy-protected.pdf
│   │   ├── DA-1p.pdf
│   │   ├── DA-619p.pdf
│   │   ├── embedded-cmap-cidfont.pdf
│   │   ├── embedded-images-tables.pdf
│   │   ├── embedded-images.pdf
│   │   ├── embedded-link.pdf
│   │   ├── emphasis-text.pdf
│   │   ├── failure-after-repair.pdf
│   │   ├── fake-bold-sample.pdf
│   │   ├── fake-memo-with-duplicate-page.pdf
│   │   ├── fake-memo.pdf
│   │   ├── header-test-doc.pdf
│   │   ├── interface-config-guide-p93.pdf
│   │   ├── invalid-pdf-structure-pdfminer-entire-doc.pdf
│   │   ├── invalid-pdf-structure-pdfminer-one-page.pdf
│   │   ├── korean-text-with-tables.pdf
│   │   ├── layout-parser-paper-fast.pdf
│   │   ├── layout-parser-paper-with-empty-pages.pdf
│   │   ├── layout-parser-paper-with-table.pdf
│   │   ├── layout-parser-paper.pdf
│   │   ├── list-item-example.pdf
│   │   ├── loremipsum-flat.pdf
│   │   ├── multi-column-2p.pdf
│   │   ├── multi-column.pdf
│   │   ├── negative-coords.pdf
│   │   ├── password.pdf
│   │   ├── pdf-bad-color-space.pdf
│   │   ├── pdf-with-ocr-text.pdf
│   │   ├── pdf2image-memory-error-test-400p.pdf
│   │   ├── reliance.pdf
│   │   ├── single_table.pdf
│   │   └── table-multi-row-column-cells.pdf
│   ├── test_evaluate_files
│   │   ├── gold_standard_cct
│   │   │   ├── Bank Good Credit Loan.pptx.txt
│   │   │   ├── currency.csv.txt
│   │   │   └── Performance-Audit-Discussion.pdf.txt
│   │   ├── gold_standard_element_type
│   │   │   └── IRS-form-1987.pdf.json
│   │   ├── gold_standard_table_structure
│   │   │   ├── 2022-financial-statements-p11.pdf.json
│   │   │   └── IRS-2023-Form-1095-A.pdf.json
│   │   ├── unstructured_output
│   │   │   ├── Bank Good Credit Loan.pptx.json
│   │   │   ├── currency.csv.json
│   │   │   ├── form.json
│   │   │   ├── IRS-form-1987.pdf.json
│   │   │   └── Performance-Audit-Discussion.pdf.json
│   │   ├── unstructured_output_cct
│   │   │   ├── Bank Good Credit Loan.pptx.txt
│   │   │   ├── currency.csv.txt
│   │   │   ├── IRS-form-1987.pdf.txt
│   │   │   └── Performance-Audit-Discussion.pdf.txt
│   │   ├── unstructured_output_table_structure
│   │   │   ├── 2022-financial-statements-p11.pdf.json
│   │   │   └── IRS-2023-Form-1095-A.pdf.json
│   │   └── filter_list.txt
│   ├── unsupported
│   │   └── factbook.xsl
│   ├── 2023-half-year-analyses-by-segment.xlsx
│   ├── book-war-and-peace-1225p.txt
│   ├── book-war-and-peace-1p.txt
│   ├── CantinaBand3.wav
│   ├── category-level.docx
│   ├── codeblock.md
│   ├── contains-pictures.docx
│   ├── csv-with-escaped-commas.csv
│   ├── csv-with-line-delimiter.csv
│   ├── csv-with-long-lines.csv
│   ├── docx-hdrftr.docx
│   ├── docx-shapes.docx
│   ├── docx-tables.docx
│   ├── duplicate-paragraphs.doc
│   ├── duplicate-paragraphs.docx
│   ├── emoji.xlsx
│   ├── empty.txt
│   ├── empty.xlsx
│   ├── example-10k-1p.html
│   ├── example-10k-230p.html
│   ├── example-10k-utf-16.html
│   ├── example-10k.html
│   ├── example-list-items-multiple.docx
│   ├── example-steelJIS-datasheet-utf-16.html
│   ├── example-steelJIS-datasheet.html
│   ├── example-with-scripts.html
│   ├── factbook-utf-16.xml
│   ├── factbook.xml
│   ├── fake_table.docx
│   ├── fake-doc-emphasized-text.doc
│   ├── fake-doc-emphasized-text.docx
│   ├── fake-doc.rtf
│   ├── fake-email-attachment.msg
│   ├── fake-email-multiple-attachments.msg
│   ├── fake-email-with-cc-and-bcc.msg
│   ├── fake-email.eml
│   ├── fake-email.msg
│   ├── fake-email.txt
│   ├── fake-encrypted.msg
│   ├── fake-html-cp1252.html
│   ├── fake-html-lang-de.html
│   ├── fake-html-pre.htm
│   ├── fake-html-with-base64-image.html
│   ├── fake-html-with-duplicate-elements.html
│   ├── fake-html-with-footer-and-header.html
│   ├── fake-html-with-image-from-url.html
│   ├── fake-html.html
│   ├── fake-incomplete-json.txt
│   ├── fake-power-point-malformed.pptx
│   ├── fake-power-point-many-pages.pptx
│   ├── fake-power-point-table.pptx
│   ├── fake-power-point.ppt
│   ├── fake-power-point.pptx
│   ├── fake-text-all-whitespace.txt
│   ├── fake-text-utf-16-be.txt
│   ├── fake-text-utf-16-le.txt
│   ├── fake-text-utf-16.txt
│   ├── fake-text-utf-32.txt
│   ├── fake-text.txt
│   ├── fake.doc
│   ├── fake.docx
│   ├── fake.go
│   ├── fake.odt
│   ├── file_we_dont_want_imported
│   ├── grid_offset_error.docx
│   ├── group-shapes-nested.pptx
│   ├── handbook-1p-no-rendered-page-breaks.docx
│   ├── handbook-1p.docx
│   ├── handbook-872p.docx
│   ├── hebrew-text-base64-iso88598i.txt
│   ├── hlink-meta.docx
│   ├── ideas-page.html
│   ├── logger.py
│   ├── more-than-1k-cells.xlsx
│   ├── norwich-city.txt
│   ├── not-unstructured-payload.json
│   ├── page-breaks.docx
│   ├── password_protected.xlsx
│   ├── picture.pptx
│   ├── README-w-include.org
│   ├── README-w-include.rst
│   ├── README.md
│   ├── README.org
│   ├── README.rst
│   ├── rotated-page-90.pdf
│   ├── sample-presentation.pptx
│   ├── science-exploration-1p.pptx
│   ├── science-exploration-369p.pptx
│   ├── semicolon-delimited.csv
│   ├── simple-table.md
│   ├── simple.doc
│   ├── simple.docx
│   ├── simple.epub
│   ├── simple.json
│   ├── simple.ndjson
│   ├── simple.odt
│   ├── simple.pptx
│   ├── simple.yaml
│   ├── simple.zip
│   ├── single-column.csv
│   ├── spring-weather.html.json
│   ├── spring-weather.html.ndjson
│   ├── stanley-cups-utf-16.csv
│   ├── stanley-cups-with-emoji.csv
│   ├── stanley-cups-with-emoji.tsv
│   ├── stanley-cups.csv
│   ├── stanley-cups.tsv
│   ├── stanley-cups.xlsx
│   ├── table-multi-row-column-cells-actual.csv
│   ├── table-semicolon-delimiter.csv
│   ├── tables-with-incomplete-rows.docx
│   ├── teams_chat.docx
│   ├── test-image-jpg-mime.pptx
│   ├── tests-example.xls
│   ├── umlauts-non-utf8.md
│   ├── umlauts-utf8.md
│   ├── vodafone.xlsx
│   ├── winter-sports.epub
│   └── xlsx-subtable-cases.xlsx
├── img
│   └── unstructured_logo.png
├── scripts
│   ├── airtable-test-helpers
│   │   ├── component_ids.sh
│   │   ├── create_scale_test_components.py
│   │   ├── create_scale_test_components.sh
│   │   └── print_num_rows_df.py
│   ├── chroma-test-helpers
│   │   └── create-and-check-chroma.sh
│   ├── convert
│   │   ├── elements_json_to_format.py
│   │   └── rendered_html_from_elements.py
│   ├── elasticsearch-test-helpers
│   │   ├── common
│   │   │   ├── docker-compose.yaml
│   │   │   └── es-dest-ingest-test-creds.env
│   │   ├── destination_connector
│   │   │   ├── create_index.py
│   │   │   ├── create-elasticsearch-instance.sh
│   │   │   ├── elasticsearch_elements_mappings.json
│   │   │   ├── es_cluster_config.py
│   │   │   └── test-ingest-elasticsearch-output.py
│   │   └── source_connector
│   │       ├── create_and_fill_es.py
│   │       ├── create-fill-and-check-es.sh
│   │       ├── es_cluster_config.py
│   │       └── wiki_movie_plots_small.csv
│   ├── image
│   │   ├── test-all-outbound-connectivity-scenarios.sh
│   │   └── test-outbound-connectivity.sh
│   ├── kafka-test-helpers
│   │   ├── create-kafka-instance.sh
│   │   └── docker-compose.yml
│   ├── minio-test-helpers
│   │   ├── create-and-check-minio.sh
│   │   ├── docker-compose.yaml
│   │   └── wiki_movie_plots_small.csv
│   ├── opensearch-test-helpers
│   │   ├── common
│   │   │   └── docker-compose.yaml
│   │   ├── destination_connector
│   │   │   ├── create_index.py
│   │   │   ├── create-opensearch-instance.sh
│   │   │   ├── opensearch_cluster_config.py
│   │   │   ├── opensearch_elements_mappings.json
│   │   │   └── test-ingest-opensearch-output.py
│   │   ├── source_connector
│   │   │   ├── create_and_fill_opensearch.py
│   │   │   └── create-and-check-opensearch.sh
│   │   └── wiki_movie_plots_small.csv
│   ├── performance
│   │   ├── docs
│   │   │   ├── book-war-and-peace-1225p.txt
│   │   │   ├── book-war-and-peace-1p.txt
│   │   │   ├── DA-1p.pdf
│   │   │   ├── DA-619p.pdf
│   │   │   ├── example-10k-1p.html
│   │   │   ├── example-10k-230p.html
│   │   │   ├── handbook-1p.docx
│   │   │   ├── handbook-872p.docx
│   │   │   ├── layout-parser-paper-10p.jpg
│   │   │   ├── layout-parser-paper-1p.jpg
│   │   │   ├── layout-parser-paper-fast-16p.pdf
│   │   │   ├── layout-parser-paper-hi_res-16p.pdf
│   │   │   ├── science-exploration-1p.pptx
│   │   │   └── science-exploration-369p.pptx
│   │   ├── warmup_docs
│   │   │   ├── warmup.docx
│   │   │   ├── warmup.html
│   │   │   ├── warmup.jpg
│   │   │   ├── warmup.pdf
│   │   │   ├── warmup.pptx
│   │   │   └── warmup.txt
│   │   ├── .gitignore
│   │   ├── benchmark_partition.py
│   │   ├── benchmark-local.sh
│   │   ├── benchmark.sh
│   │   ├── compare_benchmark.py
│   │   ├── get-stats-name.sh
│   │   ├── profile.sh
│   │   ├── quick_partition_bench.py
│   │   ├── README.md
│   │   ├── requirements.txt
│   │   ├── run_partition.py
│   │   └── time_partition.py
│   ├── sftp-test-helpers
│   │   ├── folder1
│   │   │   ├── folder2
│   │   │   │   └── wiki_movie_plots_small2.csv
│   │   │   └── wiki_movie_plots_small.csv
│   │   ├── create-and-check-sftp.sh
│   │   └── docker-compose.yaml
│   ├── singlestore-test-helpers
│   │   ├── docker-compose.yml
│   │   ├── schema.sql
│   │   └── test_outputs.py
│   ├── sql-test-helpers
│   │   ├── create-pgvector-schema.sql
│   │   ├── create-sql-instance.sh
│   │   ├── create-sqlite-schema.py
│   │   ├── create-sqlite-schema.sql
│   │   └── docker-compose-pgvector.yaml
│   ├── user
│   │   ├── process-pdf-parallel-through-api.sh
│   │   ├── split-pdf.sh
│   │   ├── u-tables-inspect.sh
│   │   └── unstructured-get-json.sh
│   ├── weaviate-test-helpers
│   │   ├── create_schema.py
│   │   ├── create-weaviate-instance.sh
│   │   ├── docker-compose.yml
│   │   └── elements.json
│   ├── check-licenses.sh
│   ├── check-new-release-version.sh
│   ├── collect_env.py
│   ├── docker-build-ubuntu.sh
│   ├── docker-build.sh
│   ├── docker-smoke-test.sh
│   ├── ingest-test-fixtures-update.sh
│   ├── initialize-libreoffice.sh
│   ├── renovate-security-bump.sh
│   ├── setup_al2.sh
│   ├── setup_ubuntu.sh
│   ├── shellcheck.sh
│   ├── sync_fork.sh
│   └── version-sync.sh
├── test_unstructured
│   ├── benchmarks
│   │   ├── __init__.py
│   │   └── test_benchmark_standardize_quotes.py
│   ├── chunking
│   │   ├── __init__.py
│   │   ├── test_base.py
│   │   ├── test_basic.py
│   │   ├── test_dispatch.py
│   │   ├── test_html_output.py
│   │   ├── test_table_isolation.py
│   │   └── test_title.py
│   ├── cleaners
│   │   ├── __init__.py
│   │   ├── test_core.py
│   │   ├── test_extract.py
│   │   └── test_translate.py
│   ├── common
│   │   ├── __init__.py
│   │   └── test_html_table.py
│   ├── documents
│   │   ├── html_files
│   │   │   ├── example_full_doc.html
│   │   │   ├── example_with_alternative_text.html
│   │   │   ├── example_with_inline_fields.html
│   │   │   ├── example.html
│   │   │   └── three_tables.html
│   │   ├── unstructured_json_output
│   │   │   ├── example_full_doc.json
│   │   │   ├── example_with_alternative_text.json
│   │   │   ├── example_with_inline_fields.json
│   │   │   ├── example.json
│   │   │   └── three_tables.json
│   │   ├── __init__.py
│   │   ├── test_coordinates.py
│   │   ├── test_elements.py
│   │   ├── test_mappings.py
│   │   └── test_ontology_to_unstructured_parsing.py
│   ├── embed
│   │   ├── __init__.py
│   │   ├── test_mixedbreadai.py
│   │   ├── test_octoai.py
│   │   ├── test_openai.py
│   │   ├── test_vertexai.py
│   │   └── test_voyageai.py
│   ├── file_utils
│   │   ├── __init__.py
│   │   ├── test_encoding.py
│   │   ├── test_file_conversion.py
│   │   ├── test_filetype.py
│   │   ├── test_model.py
│   │   └── test-file-contents.txt
│   ├── metrics
│   │   ├── __init__.py
│   │   ├── test_element_type.py
│   │   ├── test_evaluate.py
│   │   ├── test_table_alignment.py
│   │   ├── test_table_detection_metrics.py
│   │   ├── test_table_formats.py
│   │   ├── test_table_structure.py
│   │   ├── test_text_extraction.py
│   │   └── test_utils.py
│   ├── nlp
│   │   ├── __init__.py
│   │   ├── mock_nlp.py
│   │   ├── test_partition.py
│   │   └── test_tokenize.py
│   ├── partition
│   │   ├── common
│   │   │   ├── __init__.py
│   │   │   ├── test_common.py
│   │   │   ├── test_lang.py
│   │   │   └── test_metadata.py
│   │   ├── html
│   │   │   ├── __init__.py
│   │   │   ├── test_convert.py
│   │   │   ├── test_html_to_ontology_parsing.py
│   │   │   ├── test_html_to_unstructured_and_back_parsing.py
│   │   │   ├── test_html_utils.py
│   │   │   ├── test_parser.py
│   │   │   ├── test_partition_v2.py
│   │   │   ├── test_partition.py
│   │   │   └── test_unstructured_elements_to_ontology_parsing.py
│   │   ├── pdf_image
│   │   │   ├── __init__.py
│   │   │   ├── conftest.py
│   │   │   ├── test_analysis.py
│   │   │   ├── test_image.py
│   │   │   ├── test_inference_utils.py
│   │   │   ├── test_merge_elements.py
│   │   │   ├── test_ocr.py
│   │   │   ├── test_pdf_image_utils.py
│   │   │   ├── test_pdf.py
│   │   │   ├── test_pdfminer_processing.py
│   │   │   └── test_pdfminer_utils.py
│   │   ├── utils
│   │   │   ├── ocr_models
│   │   │   │   └── test_ocr_interface.py
│   │   │   ├── __init__.py
│   │   │   ├── test_config.py
│   │   │   ├── test_sorting.py
│   │   │   └── test_xycut.py
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   ├── test_api.py
│   │   ├── test_audio.py
│   │   ├── test_auto.py
│   │   ├── test_constants.py
│   │   ├── test_csv.py
│   │   ├── test_doc.py
│   │   ├── test_docx.py
│   │   ├── test_email.py
│   │   ├── test_epub.py
│   │   ├── test_json.py
│   │   ├── test_md.py
│   │   ├── test_msg.py
│   │   ├── test_ndjson.py
│   │   ├── test_odt.py
│   │   ├── test_org.py
│   │   ├── test_ppt.py
│   │   ├── test_pptx.py
│   │   ├── test_rst.py
│   │   ├── test_rtf.py
│   │   ├── test_strategies.py
│   │   ├── test_text_type.py
│   │   ├── test_text.py
│   │   ├── test_tsv.py
│   │   ├── test_xlsx.py
│   │   └── test_xml.py
│   ├── staging
│   │   ├── __init__.py
│   │   ├── test_base.py
│   │   ├── test_baseplate.py
│   │   ├── test_datasaur.py
│   │   ├── test_huggingface.py
│   │   ├── test_label_box.py
│   │   ├── test_label_studio.py
│   │   ├── test_prodigy.py
│   │   └── test_weaviate.py
│   ├── testfiles
│   │   ├── chunking
│   │   │   ├── full_table_long_text_250.json
│   │   │   ├── long_text_table_200.json
│   │   │   ├── table_2000.json
│   │   │   ├── table_text_200.json
│   │   │   └── title_table_200.json
│   │   ├── file_type
│   │   │   └── test_document_from_office365.docx
│   │   └── staging
│   │       ├── embedded-images.pdf.json
│   │       ├── embedded-images.pdf.md
│   │       ├── formula-elements.json
│   │       ├── UDHR_first_article_all.txt.json
│   │       └── UDHR_first_article_all.txt.md
│   ├── __init__.py
│   ├── test_cli_doctor.py
│   ├── test_telemetry.py
│   ├── test_utils.py
│   └── unit_utils.py
├── test_unstructured_ingest
│   ├── example-docs
│   │   ├── layout-parser-paper-with-table.jpg
│   │   └── layout-parser-paper.pdf
│   ├── expected-structured-output
│   │   ├── airtable-diff
│   │   │   ├── app5YQxSfp220fWtm
│   │   │   │   ├── tblBoUk54tWXGqYai.json
│   │   │   │   └── tblxdPc7L2meGIZLE.json
│   │   │   └── appJ43QmP8I17zu88
│   │   │       ├── tblbj2vBlL2dN2xqq.json
│   │   │       └── tblfu7DzEcCWNKwP4.json
│   │   ├── astradb
│   │   │   ├── 25b75f1d-a2ea-4c97-b75f-1da2eadc97f7.csv.json
│   │   │   ├── 60297eea-73d7-4fca-a97e-ea73d7cfca62.csv.json
│   │   │   ├── 641d99e3-9941-4c18-9d99-e399414c183d.csv.json
│   │   │   ├── 762c0093-2277-4f3e-ac00-932277af3e0e.csv.json
│   │   │   └── ae40df94-0b3a-4f89-80df-940b3a6f8966.csv.json
│   │   ├── azure
│   │   │   ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.json
│   │   │   ├── IRS-form-1987.pdf.json
│   │   │   ├── IRS-form-1987.png.json
│   │   │   ├── rfc854.txt.json
│   │   │   └── spring-weather.html.json
│   │   ├── biomed-api
│   │   │   ├── 65
│   │   │   │   └── 11
│   │   │   │       └── main.PMC6312790.pdf.json
│   │   │   └── 75
│   │   │       └── 29
│   │   │           └── main.PMC6312793.pdf.json
│   │   ├── biomed-path
│   │   │   └── 07
│   │   │       └── 07
│   │   │           └── sbaa031.073.PMC7234218.pdf.json
│   │   ├── box
│   │   │   ├── nested-1
│   │   │   │   ├── nested-2
│   │   │   │   │   └── ideas-page.html.json
│   │   │   │   └── ideas-page.html.json
│   │   │   ├── handbook-1p.docx.json
│   │   │   └── science-exploration-1p.pptx.json
│   │   ├── confluence-diff
│   │   │   ├── MFS
│   │   │   │   ├── 1540126.json
│   │   │   │   ├── 1605928.json
│   │   │   │   ├── 1605942.json
│   │   │   │   ├── 1605956.json
│   │   │   │   └── 229477.json
│   │   │   └── testteamsp
│   │   │       ├── 1605859.json
│   │   │       ├── 1605989.json
│   │   │       ├── 1802252.json
│   │   │       ├── 1867777.json
│   │   │       ├── 2589690.json
│   │   │       └── 2589704.json
│   │   ├── delta-table
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-0.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-1.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-2.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-3.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-4.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-5.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-6.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-7.json
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-8.json
│   │   │   └── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-9.json
│   │   ├── discord
│   │   │   ├── 1099442333440802930.json
│   │   │   └── 1099601456321003600.json
│   │   ├── dropbox
│   │   │   ├── nested-1
│   │   │   │   └── ideas-page.html.json
│   │   │   ├── nested-2
│   │   │   │   └── ideas-page.html.json
│   │   │   ├── handbook-1p.docx.json
│   │   │   └── science-exploration-1p.pptx.json
│   │   ├── elasticsearch
│   │   │   ├── movies-0-57554198.json
│   │   │   ├── movies-1-57554198.json
│   │   │   ├── movies-2-57554198.json
│   │   │   ├── movies-3-57554198.json
│   │   │   ├── movies-4-57554198.json
│   │   │   ├── movies-5-57554198.json
│   │   │   ├── movies-6-57554198.json
│   │   │   ├── movies-7-57554198.json
│   │   │   ├── movies-8-57554198.json
│   │   │   └── movies-9-57554198.json
│   │   ├── embed
│   │   │   └── book-war-and-peace-1p.txt.json
│   │   ├── embed-bedrock
│   │   │   └── book-war-and-peace-1p.txt.json
│   │   ├── embed-mixedbreadai
│   │   │   └── book-war-and-peace-1p.txt.json
│   │   ├── embed-vertexai
│   │   │   └── book-war-and-peace-1p.txt.json
│   │   ├── embed-voyageai
│   │   │   └── book-war-and-peace-1p.txt.json
│   │   ├── gcs
│   │   │   ├── nested-1
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.json
│   │   │   │   └── fake-text.txt.json
│   │   │   ├── nested-2
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.json
│   │   │   │   ├── fake-text.txt.json
│   │   │   │   └── stanley-cups.xlsx.json
│   │   │   └── ideas-page.html.json
│   │   ├── github
│   │   │   ├── LICENSE.txt.json
│   │   │   └── test.html.json
│   │   ├── google-drive
│   │   │   ├── nested
│   │   │   │   └── fake.docx.json
│   │   │   ├── fake.docx.json
│   │   │   ├── recalibrating-risk-report.pdf.json
│   │   │   └── test-drive-doc.docx.json
│   │   ├── hubspot
│   │   │   ├── calls
│   │   │   │   ├── 41286477879.json
│   │   │   │   └── 41287834137.json
│   │   │   ├── communications
│   │   │   │   ├── 41286064390.json
│   │   │   │   └── 41286467154.json
│   │   │   ├── emails
│   │   │   │   └── 41287832127.json
│   │   │   ├── notes
│   │   │   │   └── 41287833179.json
│   │   │   ├── products
│   │   │   │   ├── 2362691415.json
│   │   │   │   ├── 2362691416.json
│   │   │   │   └── 2362691417.json
│   │   │   └── tickets
│   │   │       ├── 1976928828.json
│   │   │       ├── 2002294392.json
│   │   │       └── 2002301007.json
│   │   ├── jira-diff
│   │   │   ├── 1
│   │   │   │   ├── 10000.json
│   │   │   │   ├── 10001.json
│   │   │   │   ├── 10002.json
│   │   │   │   └── 10013.json
│   │   │   ├── JCTP2
│   │   │   │   ├── 10006.json
│   │   │   │   ├── 10009.json
│   │   │   │   ├── 10010.json
│   │   │   │   ├── 10012.json
│   │   │   │   └── 10015.json
│   │   │   └── JCTP3
│   │   │       └── 10014.json
│   │   ├── kafka
│   │   │   └── fake-topic.json
│   │   ├── local-single-file
│   │   │   └── UDHR_first_article_all.txt.json
│   │   ├── local-single-file-basic-chunking
│   │   │   └── handbook-1p.docx.json
│   │   ├── local-single-file-chunk-no-orig-elements
│   │   │   └── multi-column-2p.pdf.json
│   │   ├── local-single-file-with-encoding
│   │   │   └── fake-html-cp1252.html.json
│   │   ├── local-single-file-with-pdf-infer-table-structure
│   │   │   ├── layout-parser-paper-with-table.jpg.json
│   │   │   └── layout-parser-paper.pdf.json
│   │   ├── mongodb
│   │   │   ├── 659daefa21dd8c9054b084b6.json
│   │   │   ├── 659daefa21dd8c9054b084b7.json
│   │   │   ├── 659daefa21dd8c9054b084b8.json
│   │   │   └── 659daefa21dd8c9054b084b9.json
│   │   ├── notion
│   │   │   ├── 122b2c22-996b-435b-9de2-ee0e9d2b04bc.json
│   │   │   ├── 438dbc49-2e06-4f01-8031-bf283be58a60.json
│   │   │   ├── 4695ea53-f2b3-45b4-8638-2212fd054d73.json
│   │   │   ├── 5481f29c-799a-4d7b-93ce-b11bcaede531.json
│   │   │   ├── 60377009-e6b2-47f3-a8ff-f159fd8b69f5.json
│   │   │   ├── 898538f2-26e1-4de7-81e6-354045d4d007.json
│   │   │   ├── 8d8bee42-2167-441c-af6c-7b2cff268809.json
│   │   │   ├── 8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.json
│   │   │   ├── 9e20be3d-cbe0-4e28-ad46-2170d40a8d37.json
│   │   │   ├── b2a12157-721e-4207-b3b7-527762b782c2.json
│   │   │   ├── c47a4566-4c7a-488b-ac2a-1292ee507fcb.json
│   │   │   ├── dfcbe584-30b1-4551-b533-e6a5759af842.json
│   │   │   ├── feccfcd4-8ca0-4638-8212-1a5726461029.json
│   │   │   └── fee2149e-6240-4431-8e98-a04a2e460a66.json
│   │   ├── onedrive
│   │   │   └── utic-test-ingest-fixtures
│   │   │       ├── nested
│   │   │       │   └── fake-text.txt.json
│   │   │       ├── fake-text.txt.json
│   │   │       └── tests-example.xls.json
│   │   ├── opensearch
│   │   │   ├── movies-0-57554198.json
│   │   │   ├── movies-1-57554198.json
│   │   │   ├── movies-2-57554198.json
│   │   │   ├── movies-3-57554198.json
│   │   │   ├── movies-4-57554198.json
│   │   │   ├── movies-5-57554198.json
│   │   │   ├── movies-6-57554198.json
│   │   │   ├── movies-7-57554198.json
│   │   │   ├── movies-8-57554198.json
│   │   │   └── movies-9-57554198.json
│   │   ├── outlook
│   │   │   ├── 21be155fb0c95885.eml.json
│   │   │   ├── 497eba8c81c801c6.eml.json
│   │   │   └── 4a16a411f162ebbb.eml.json
│   │   ├── pdf-fast-reprocess
│   │   │   └── azure
│   │   │       ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.json
│   │   │       └── IRS-form-1987.pdf.json
│   │   ├── s3
│   │   │   ├── 2023-Jan-economic-outlook.pdf.json
│   │   │   ├── page-with-formula.pdf.json
│   │   │   ├── recalibrating-risk-report.pdf.json
│   │   │   └── Silent-Giant-(1).pdf.json
│   │   ├── s3-minio
│   │   │   └── wiki_movie_plots_small.csv.json
│   │   ├── salesforce
│   │   │   ├── Campaign
│   │   │   │   ├── 701Hu000001eX9EIAU.xml.json
│   │   │   │   ├── 701Hu000001eX9FIAU.xml.json
│   │   │   │   ├── 701Hu000001eX9GIAU.xml.json
│   │   │   │   └── 701Hu000001eX9HIAU.xml.json
│   │   │   └── EmailMessage
│   │   │       ├── 02sHu00001efErPIAU.eml.json
│   │   │       └── 02sHu00001efErQIAU.eml.json
│   │   ├── sftp
│   │   │   └── folder1
│   │   │       ├── folder2
│   │   │       │   └── wiki_movie_plots_small2.csv.json
│   │   │       └── wiki_movie_plots_small.csv.json
│   │   ├── Sharepoint
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.json
│   │   │   │   └── page-with-formula.pdf.json
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.json
│   │   │   │   └── This-is-a-title.aspx.json
│   │   │   ├── Document.docx.json
│   │   │   ├── fake-text.txt.json
│   │   │   ├── ideas-page.html.json
│   │   │   ├── permissions-fake-text.docx.json
│   │   │   └── stanley-cups.xlsx.json
│   │   ├── Sharepoint-with-permissions
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.json
│   │   │   │   └── page-with-formula.pdf.json
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.json
│   │   │   │   └── This-is-a-title.aspx.json
│   │   │   ├── Document.docx.json
│   │   │   ├── fake-text.txt.json
│   │   │   ├── ideas-page.html.json
│   │   │   ├── permissions-fake-text.docx.json
│   │   │   └── stanley-cups.xlsx.json
│   │   └── slack
│   │       └── C07ABKJ83C6.json
│   ├── expected-structured-output-html
│   │   ├── airtable-diff
│   │   │   ├── app5YQxSfp220fWtm
│   │   │   │   ├── tblBoUk54tWXGqYai.html
│   │   │   │   └── tblxdPc7L2meGIZLE.html
│   │   │   └── appJ43QmP8I17zu88
│   │   │       ├── tblbj2vBlL2dN2xqq.html
│   │   │       └── tblfu7DzEcCWNKwP4.html
│   │   ├── astradb
│   │   │   ├── 25b75f1d-a2ea-4c97-b75f-1da2eadc97f7.csv.html
│   │   │   ├── 60297eea-73d7-4fca-a97e-ea73d7cfca62.csv.html
│   │   │   ├── 641d99e3-9941-4c18-9d99-e399414c183d.csv.html
│   │   │   ├── 762c0093-2277-4f3e-ac00-932277af3e0e.csv.html
│   │   │   └── ae40df94-0b3a-4f89-80df-940b3a6f8966.csv.html
│   │   ├── azure
│   │   │   ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.html
│   │   │   ├── IRS-form-1987.pdf.html
│   │   │   ├── IRS-form-1987.png.html
│   │   │   ├── rfc854.txt.html
│   │   │   └── spring-weather.html.html
│   │   ├── biomed-api
│   │   │   ├── 65
│   │   │   │   └── 11
│   │   │   │       └── main.PMC6312790.pdf.html
│   │   │   └── 75
│   │   │       └── 29
│   │   │           └── main.PMC6312793.pdf.html
│   │   ├── biomed-path
│   │   │   └── 07
│   │   │       └── 07
│   │   │           └── sbaa031.073.PMC7234218.pdf.html
│   │   ├── box
│   │   │   ├── nested-1
│   │   │   │   ├── nested-2
│   │   │   │   │   └── ideas-page.html.html
│   │   │   │   └── ideas-page.html.html
│   │   │   ├── handbook-1p.docx.html
│   │   │   └── science-exploration-1p.pptx.html
│   │   ├── confluence-diff
│   │   │   ├── MFS
│   │   │   │   ├── 1540126.html
│   │   │   │   ├── 1605928.html
│   │   │   │   ├── 1605942.html
│   │   │   │   ├── 1605956.html
│   │   │   │   └── 229477.html
│   │   │   └── testteamsp
│   │   │       ├── 1605859.html
│   │   │       ├── 1605989.html
│   │   │       ├── 1802252.html
│   │   │       ├── 1867777.html
│   │   │       ├── 2589690.html
│   │   │       └── 2589704.html
│   │   ├── delta-table
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-0.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-1.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-2.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-3.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-4.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-5.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-6.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-7.html
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-8.html
│   │   │   └── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-9.html
│   │   ├── discord
│   │   │   ├── 1099442333440802930.html
│   │   │   └── 1099601456321003600.html
│   │   ├── dropbox
│   │   │   ├── nested-1
│   │   │   │   └── ideas-page.html.html
│   │   │   ├── nested-2
│   │   │   │   └── ideas-page.html.html
│   │   │   ├── handbook-1p.docx.html
│   │   │   └── science-exploration-1p.pptx.html
│   │   ├── elasticsearch
│   │   │   ├── movies-0-57554198.html
│   │   │   ├── movies-1-57554198.html
│   │   │   ├── movies-2-57554198.html
│   │   │   ├── movies-3-57554198.html
│   │   │   ├── movies-4-57554198.html
│   │   │   ├── movies-5-57554198.html
│   │   │   ├── movies-6-57554198.html
│   │   │   ├── movies-7-57554198.html
│   │   │   ├── movies-8-57554198.html
│   │   │   └── movies-9-57554198.html
│   │   ├── embed
│   │   │   └── book-war-and-peace-1p.txt.html
│   │   ├── embed-bedrock
│   │   │   └── book-war-and-peace-1p.txt.html
│   │   ├── embed-mixedbreadai
│   │   │   └── book-war-and-peace-1p.txt.html
│   │   ├── embed-vertexai
│   │   │   └── book-war-and-peace-1p.txt.html
│   │   ├── embed-voyageai
│   │   │   └── book-war-and-peace-1p.txt.html
│   │   ├── gcs
│   │   │   ├── nested-1
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.html
│   │   │   │   └── fake-text.txt.html
│   │   │   ├── nested-2
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.html
│   │   │   │   ├── fake-text.txt.html
│   │   │   │   └── stanley-cups.xlsx.html
│   │   │   └── ideas-page.html.html
│   │   ├── github
│   │   │   ├── LICENSE.txt.html
│   │   │   └── test.html.html
│   │   ├── google-drive
│   │   │   ├── nested
│   │   │   │   └── fake.docx.html
│   │   │   ├── fake.docx.html
│   │   │   ├── recalibrating-risk-report.pdf.html
│   │   │   └── test-drive-doc.docx.html
│   │   ├── hubspot
│   │   │   ├── calls
│   │   │   │   ├── 41286477879.html
│   │   │   │   └── 41287834137.html
│   │   │   ├── communications
│   │   │   │   ├── 41286064390.html
│   │   │   │   └── 41286467154.html
│   │   │   ├── emails
│   │   │   │   └── 41287832127.html
│   │   │   ├── notes
│   │   │   │   └── 41287833179.html
│   │   │   ├── products
│   │   │   │   ├── 2362691415.html
│   │   │   │   ├── 2362691416.html
│   │   │   │   └── 2362691417.html
│   │   │   └── tickets
│   │   │       ├── 1976928828.html
│   │   │       ├── 2002294392.html
│   │   │       └── 2002301007.html
│   │   ├── jira-diff
│   │   │   ├── 1
│   │   │   │   ├── 10000.html
│   │   │   │   ├── 10001.html
│   │   │   │   ├── 10002.html
│   │   │   │   └── 10013.html
│   │   │   ├── JCTP2
│   │   │   │   ├── 10006.html
│   │   │   │   ├── 10009.html
│   │   │   │   ├── 10010.html
│   │   │   │   ├── 10012.html
│   │   │   │   └── 10015.html
│   │   │   └── JCTP3
│   │   │       └── 10014.html
│   │   ├── kafka
│   │   │   └── fake-topic.html
│   │   ├── local-single-file
│   │   │   └── UDHR_first_article_all.txt.html
│   │   ├── local-single-file-basic-chunking
│   │   │   └── handbook-1p.docx.html
│   │   ├── local-single-file-chunk-no-orig-elements
│   │   │   └── multi-column-2p.pdf.html
│   │   ├── local-single-file-with-encoding
│   │   │   └── fake-html-cp1252.html.html
│   │   ├── local-single-file-with-pdf-infer-table-structure
│   │   │   ├── layout-parser-paper-with-table.jpg.html
│   │   │   └── layout-parser-paper.pdf.html
│   │   ├── mongodb
│   │   │   ├── 659daefa21dd8c9054b084b6.html
│   │   │   ├── 659daefa21dd8c9054b084b7.html
│   │   │   ├── 659daefa21dd8c9054b084b8.html
│   │   │   └── 659daefa21dd8c9054b084b9.html
│   │   ├── notion
│   │   │   ├── 122b2c22-996b-435b-9de2-ee0e9d2b04bc.html
│   │   │   ├── 438dbc49-2e06-4f01-8031-bf283be58a60.html
│   │   │   ├── 4695ea53-f2b3-45b4-8638-2212fd054d73.html
│   │   │   ├── 5481f29c-799a-4d7b-93ce-b11bcaede531.html
│   │   │   ├── 60377009-e6b2-47f3-a8ff-f159fd8b69f5.html
│   │   │   ├── 898538f2-26e1-4de7-81e6-354045d4d007.html
│   │   │   ├── 8d8bee42-2167-441c-af6c-7b2cff268809.html
│   │   │   ├── 8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.html
│   │   │   ├── 9e20be3d-cbe0-4e28-ad46-2170d40a8d37.html
│   │   │   ├── b2a12157-721e-4207-b3b7-527762b782c2.html
│   │   │   ├── c47a4566-4c7a-488b-ac2a-1292ee507fcb.html
│   │   │   ├── dfcbe584-30b1-4551-b533-e6a5759af842.html
│   │   │   ├── feccfcd4-8ca0-4638-8212-1a5726461029.html
│   │   │   └── fee2149e-6240-4431-8e98-a04a2e460a66.html
│   │   ├── onedrive
│   │   │   └── utic-test-ingest-fixtures
│   │   │       ├── nested
│   │   │       │   └── fake-text.txt.html
│   │   │       ├── fake-text.txt.html
│   │   │       └── tests-example.xls.html
│   │   ├── opensearch
│   │   │   ├── movies-0-57554198.html
│   │   │   ├── movies-1-57554198.html
│   │   │   ├── movies-2-57554198.html
│   │   │   ├── movies-3-57554198.html
│   │   │   ├── movies-4-57554198.html
│   │   │   ├── movies-5-57554198.html
│   │   │   ├── movies-6-57554198.html
│   │   │   ├── movies-7-57554198.html
│   │   │   ├── movies-8-57554198.html
│   │   │   └── movies-9-57554198.html
│   │   ├── outlook
│   │   │   ├── 21be155fb0c95885.eml.html
│   │   │   ├── 497eba8c81c801c6.eml.html
│   │   │   └── 4a16a411f162ebbb.eml.html
│   │   ├── pdf-fast-reprocess
│   │   │   └── azure
│   │   │       ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.html
│   │   │       └── IRS-form-1987.pdf.html
│   │   ├── s3
│   │   │   ├── 2023-Jan-economic-outlook.pdf.html
│   │   │   ├── page-with-formula.pdf.html
│   │   │   ├── recalibrating-risk-report.pdf.html
│   │   │   └── Silent-Giant-(1).pdf.html
│   │   ├── s3-minio
│   │   │   └── wiki_movie_plots_small.csv.html
│   │   ├── salesforce
│   │   │   ├── Campaign
│   │   │   │   ├── 701Hu000001eX9EIAU.xml.html
│   │   │   │   ├── 701Hu000001eX9FIAU.xml.html
│   │   │   │   ├── 701Hu000001eX9GIAU.xml.html
│   │   │   │   └── 701Hu000001eX9HIAU.xml.html
│   │   │   └── EmailMessage
│   │   │       ├── 02sHu00001efErPIAU.eml.html
│   │   │       └── 02sHu00001efErQIAU.eml.html
│   │   ├── sftp
│   │   │   └── folder1
│   │   │       ├── folder2
│   │   │       │   └── wiki_movie_plots_small2.csv.html
│   │   │       └── wiki_movie_plots_small.csv.html
│   │   ├── Sharepoint
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.html
│   │   │   │   └── page-with-formula.pdf.html
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.html
│   │   │   │   └── This-is-a-title.aspx.html
│   │   │   ├── Document.docx.html
│   │   │   ├── fake-text.txt.html
│   │   │   ├── ideas-page.html.html
│   │   │   ├── permissions-fake-text.docx.html
│   │   │   └── stanley-cups.xlsx.html
│   │   ├── Sharepoint-with-permissions
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.html
│   │   │   │   └── page-with-formula.pdf.html
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.html
│   │   │   │   └── This-is-a-title.aspx.html
│   │   │   ├── Document.docx.html
│   │   │   ├── fake-text.txt.html
│   │   │   ├── ideas-page.html.html
│   │   │   ├── permissions-fake-text.docx.html
│   │   │   └── stanley-cups.xlsx.html
│   │   └── slack
│   │       └── C07ABKJ83C6.html
│   ├── expected-structured-output-markdown
│   │   ├── airtable-diff
│   │   │   ├── app5YQxSfp220fWtm
│   │   │   │   ├── tblBoUk54tWXGqYai.md
│   │   │   │   └── tblxdPc7L2meGIZLE.md
│   │   │   └── appJ43QmP8I17zu88
│   │   │       ├── tblbj2vBlL2dN2xqq.md
│   │   │       └── tblfu7DzEcCWNKwP4.md
│   │   ├── astradb
│   │   │   ├── 25b75f1d-a2ea-4c97-b75f-1da2eadc97f7.csv.md
│   │   │   ├── 60297eea-73d7-4fca-a97e-ea73d7cfca62.csv.md
│   │   │   ├── 641d99e3-9941-4c18-9d99-e399414c183d.csv.md
│   │   │   ├── 762c0093-2277-4f3e-ac00-932277af3e0e.csv.md
│   │   │   └── ae40df94-0b3a-4f89-80df-940b3a6f8966.csv.md
│   │   ├── azure
│   │   │   ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.md
│   │   │   ├── IRS-form-1987.pdf.md
│   │   │   ├── IRS-form-1987.png.md
│   │   │   ├── rfc854.txt.md
│   │   │   └── spring-weather.html.md
│   │   ├── biomed-api
│   │   │   ├── 65
│   │   │   │   └── 11
│   │   │   │       └── main.PMC6312790.pdf.md
│   │   │   └── 75
│   │   │       └── 29
│   │   │           └── main.PMC6312793.pdf.md
│   │   ├── biomed-path
│   │   │   └── 07
│   │   │       └── 07
│   │   │           └── sbaa031.073.PMC7234218.pdf.md
│   │   ├── box
│   │   │   ├── nested-1
│   │   │   │   ├── nested-2
│   │   │   │   │   └── ideas-page.html.md
│   │   │   │   └── ideas-page.html.md
│   │   │   ├── handbook-1p.docx.md
│   │   │   └── science-exploration-1p.pptx.md
│   │   ├── confluence-diff
│   │   │   ├── MFS
│   │   │   │   ├── 1540126.md
│   │   │   │   ├── 1605928.md
│   │   │   │   ├── 1605942.md
│   │   │   │   ├── 1605956.md
│   │   │   │   └── 229477.md
│   │   │   └── testteamsp
│   │   │       ├── 1605859.md
│   │   │       ├── 1605989.md
│   │   │       ├── 1802252.md
│   │   │       ├── 1867777.md
│   │   │       ├── 2589690.md
│   │   │       └── 2589704.md
│   │   ├── delta-table
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-0.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-1.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-2.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-3.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-4.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-5.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-6.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-7.md
│   │   │   ├── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-8.md
│   │   │   └── 0-9d594ee0-ad36-4e7e-a6be-f53975fe3d10-9.md
│   │   ├── discord
│   │   │   ├── 1099442333440802930.md
│   │   │   └── 1099601456321003600.md
│   │   ├── dropbox
│   │   │   ├── nested-1
│   │   │   │   └── ideas-page.html.md
│   │   │   ├── nested-2
│   │   │   │   └── ideas-page.html.md
│   │   │   ├── handbook-1p.docx.md
│   │   │   └── science-exploration-1p.pptx.md
│   │   ├── elasticsearch
│   │   │   ├── movies-0-57554198.md
│   │   │   ├── movies-1-57554198.md
│   │   │   ├── movies-2-57554198.md
│   │   │   ├── movies-3-57554198.md
│   │   │   ├── movies-4-57554198.md
│   │   │   ├── movies-5-57554198.md
│   │   │   ├── movies-6-57554198.md
│   │   │   ├── movies-7-57554198.md
│   │   │   ├── movies-8-57554198.md
│   │   │   └── movies-9-57554198.md
│   │   ├── embed
│   │   │   └── book-war-and-peace-1p.txt.md
│   │   ├── embed-bedrock
│   │   │   └── book-war-and-peace-1p.txt.md
│   │   ├── embed-mixedbreadai
│   │   │   └── book-war-and-peace-1p.txt.md
│   │   ├── embed-vertexai
│   │   │   └── book-war-and-peace-1p.txt.md
│   │   ├── embed-voyageai
│   │   │   └── book-war-and-peace-1p.txt.md
│   │   ├── gcs
│   │   │   ├── nested-1
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.md
│   │   │   │   └── fake-text.txt.md
│   │   │   ├── nested-2
│   │   │   │   ├── nested
│   │   │   │   │   └── ideas-page.html.md
│   │   │   │   ├── fake-text.txt.md
│   │   │   │   └── stanley-cups.xlsx.md
│   │   │   └── ideas-page.html.md
│   │   ├── github
│   │   │   ├── LICENSE.txt.md
│   │   │   └── test.html.md
│   │   ├── google-drive
│   │   │   ├── nested
│   │   │   │   └── fake.docx.md
│   │   │   ├── fake.docx.md
│   │   │   ├── recalibrating-risk-report.pdf.md
│   │   │   └── test-drive-doc.docx.md
│   │   ├── hubspot
│   │   │   ├── calls
│   │   │   │   ├── 41286477879.md
│   │   │   │   └── 41287834137.md
│   │   │   ├── communications
│   │   │   │   ├── 41286064390.md
│   │   │   │   └── 41286467154.md
│   │   │   ├── emails
│   │   │   │   └── 41287832127.md
│   │   │   ├── notes
│   │   │   │   └── 41287833179.md
│   │   │   ├── products
│   │   │   │   ├── 2362691415.md
│   │   │   │   ├── 2362691416.md
│   │   │   │   └── 2362691417.md
│   │   │   └── tickets
│   │   │       ├── 1976928828.md
│   │   │       ├── 2002294392.md
│   │   │       └── 2002301007.md
│   │   ├── jira-diff
│   │   │   ├── 1
│   │   │   │   ├── 10000.md
│   │   │   │   ├── 10001.md
│   │   │   │   ├── 10002.md
│   │   │   │   └── 10013.md
│   │   │   ├── JCTP2
│   │   │   │   ├── 10006.md
│   │   │   │   ├── 10009.md
│   │   │   │   ├── 10010.md
│   │   │   │   ├── 10012.md
│   │   │   │   └── 10015.md
│   │   │   └── JCTP3
│   │   │       └── 10014.md
│   │   ├── kafka
│   │   │   └── fake-topic.md
│   │   ├── local-single-file
│   │   │   └── UDHR_first_article_all.txt.md
│   │   ├── local-single-file-basic-chunking
│   │   │   └── handbook-1p.docx.md
│   │   ├── local-single-file-chunk-no-orig-elements
│   │   │   └── multi-column-2p.pdf.md
│   │   ├── local-single-file-with-encoding
│   │   │   └── fake-html-cp1252.html.md
│   │   ├── local-single-file-with-pdf-infer-table-structure
│   │   │   ├── layout-parser-paper-with-table.jpg.md
│   │   │   └── layout-parser-paper.pdf.md
│   │   ├── mongodb
│   │   │   ├── 659daefa21dd8c9054b084b6.md
│   │   │   ├── 659daefa21dd8c9054b084b7.md
│   │   │   ├── 659daefa21dd8c9054b084b8.md
│   │   │   └── 659daefa21dd8c9054b084b9.md
│   │   ├── notion
│   │   │   ├── 122b2c22-996b-435b-9de2-ee0e9d2b04bc.md
│   │   │   ├── 438dbc49-2e06-4f01-8031-bf283be58a60.md
│   │   │   ├── 4695ea53-f2b3-45b4-8638-2212fd054d73.md
│   │   │   ├── 5481f29c-799a-4d7b-93ce-b11bcaede531.md
│   │   │   ├── 60377009-e6b2-47f3-a8ff-f159fd8b69f5.md
│   │   │   ├── 898538f2-26e1-4de7-81e6-354045d4d007.md
│   │   │   ├── 8d8bee42-2167-441c-af6c-7b2cff268809.md
│   │   │   ├── 8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.md
│   │   │   ├── 9e20be3d-cbe0-4e28-ad46-2170d40a8d37.md
│   │   │   ├── b2a12157-721e-4207-b3b7-527762b782c2.md
│   │   │   ├── c47a4566-4c7a-488b-ac2a-1292ee507fcb.md
│   │   │   ├── dfcbe584-30b1-4551-b533-e6a5759af842.md
│   │   │   ├── feccfcd4-8ca0-4638-8212-1a5726461029.md
│   │   │   └── fee2149e-6240-4431-8e98-a04a2e460a66.md
│   │   ├── onedrive
│   │   │   └── utic-test-ingest-fixtures
│   │   │       ├── nested
│   │   │       │   └── fake-text.txt.md
│   │   │       ├── fake-text.txt.md
│   │   │       └── tests-example.xls.md
│   │   ├── opensearch
│   │   │   ├── movies-0-57554198.md
│   │   │   ├── movies-1-57554198.md
│   │   │   ├── movies-2-57554198.md
│   │   │   ├── movies-3-57554198.md
│   │   │   ├── movies-4-57554198.md
│   │   │   ├── movies-5-57554198.md
│   │   │   ├── movies-6-57554198.md
│   │   │   ├── movies-7-57554198.md
│   │   │   ├── movies-8-57554198.md
│   │   │   └── movies-9-57554198.md
│   │   ├── outlook
│   │   │   ├── 21be155fb0c95885.eml.md
│   │   │   ├── 497eba8c81c801c6.eml.md
│   │   │   └── 4a16a411f162ebbb.eml.md
│   │   ├── pdf-fast-reprocess
│   │   │   └── azure
│   │   │       ├── Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.md
│   │   │       └── IRS-form-1987.pdf.md
│   │   ├── s3
│   │   │   ├── 2023-Jan-economic-outlook.pdf.md
│   │   │   ├── page-with-formula.pdf.md
│   │   │   ├── recalibrating-risk-report.pdf.md
│   │   │   └── Silent-Giant-(1).pdf.md
│   │   ├── s3-minio
│   │   │   └── wiki_movie_plots_small.csv.md
│   │   ├── salesforce
│   │   │   ├── Campaign
│   │   │   │   ├── 701Hu000001eX9EIAU.xml.md
│   │   │   │   ├── 701Hu000001eX9FIAU.xml.md
│   │   │   │   ├── 701Hu000001eX9GIAU.xml.md
│   │   │   │   └── 701Hu000001eX9HIAU.xml.md
│   │   │   └── EmailMessage
│   │   │       ├── 02sHu00001efErPIAU.eml.md
│   │   │       └── 02sHu00001efErQIAU.eml.md
│   │   ├── sftp
│   │   │   └── folder1
│   │   │       ├── folder2
│   │   │       │   └── wiki_movie_plots_small2.csv.md
│   │   │       └── wiki_movie_plots_small.csv.md
│   │   ├── Sharepoint
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.md
│   │   │   │   └── page-with-formula.pdf.md
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.md
│   │   │   │   └── This-is-a-title.aspx.md
│   │   │   ├── Document.docx.md
│   │   │   ├── fake-text.txt.md
│   │   │   ├── ideas-page.html.md
│   │   │   ├── permissions-fake-text.docx.md
│   │   │   └── stanley-cups.xlsx.md
│   │   ├── Sharepoint-with-permissions
│   │   │   ├── nested
│   │   │   │   ├── 2023-Jan-economic-outlook.pdf.md
│   │   │   │   └── page-with-formula.pdf.md
│   │   │   ├── SitePages
│   │   │   │   ├── Home.aspx.md
│   │   │   │   └── This-is-a-title.aspx.md
│   │   │   ├── Document.docx.md
│   │   │   ├── fake-text.txt.md
│   │   │   ├── ideas-page.html.md
│   │   │   ├── permissions-fake-text.docx.md
│   │   │   └── stanley-cups.xlsx.md
│   │   └── slack
│   │       └── C07ABKJ83C6.md
│   ├── failed-partition-docs
│   │   ├── sample.gif
│   │   └── small.txt
│   ├── files
│   │   └── azure_cognitive_index_schema.json
│   ├── metrics
│   │   ├── element-type
│   │   │   ├── aggregate-scores-element-type.tsv
│   │   │   └── all-docs-element-type-frequency.tsv
│   │   └── metrics-json-manifest.txt
│   ├── python
│   │   ├── test-azure-output.py
│   │   ├── test-databricks-volumes.py
│   │   ├── test-gcs-output.py
│   │   ├── test-ingest-astradb-output.py
│   │   ├── test-ingest-chroma-output.py
│   │   ├── test-ingest-delta-table-output.py
│   │   ├── test-ingest-mongodb.py
│   │   ├── test-ingest-sql-output.py
│   │   ├── test-ingest-weaviate-output.py
│   │   ├── test-kafka-output.py
│   │   └── test-produce-kafka-message.py
│   ├── src
│   │   ├── against-api.sh
│   │   ├── airtable-diff.sh
│   │   ├── airtable-large.sh
│   │   ├── astradb.sh
│   │   ├── azure.sh
│   │   ├── biomed-api.sh
│   │   ├── biomed-path.sh
│   │   ├── box.sh
│   │   ├── confluence-diff.sh
│   │   ├── confluence-large.sh
│   │   ├── delta-table.sh
│   │   ├── discord.sh
│   │   ├── dropbox.sh
│   │   ├── elasticsearch.sh
│   │   ├── gcs.sh
│   │   ├── github.sh
│   │   ├── gitlab.sh
│   │   ├── google-drive.sh
│   │   ├── hubspot.sh
│   │   ├── jira.sh
│   │   ├── kafka-local.sh
│   │   ├── local-embed-bedrock.sh
│   │   ├── local-embed-mixedbreadai.sh
│   │   ├── local-embed-octoai.sh
│   │   ├── local-embed-vertexai.sh
│   │   ├── local-embed-voyageai.sh
│   │   ├── local-embed.sh
│   │   ├── local-failed-partition.sh
│   │   ├── local-single-file-basic-chunking.sh
│   │   ├── local-single-file-chunk-no-orig-elements.sh
│   │   ├── local-single-file-with-encoding.sh
│   │   ├── local-single-file-with-pdf-infer-table-structure.sh
│   │   ├── local-single-file.sh
│   │   ├── local.sh
│   │   ├── mongodb.sh
│   │   ├── notion.sh
│   │   ├── onedrive.sh
│   │   ├── opensearch.sh
│   │   ├── outlook.sh
│   │   ├── pdf-fast-reprocess.sh
│   │   ├── s3-compression.sh
│   │   ├── s3-minio.sh
│   │   ├── s3.sh
│   │   ├── salesforce.sh
│   │   ├── sftp.sh
│   │   ├── sharepoint-with-permissions.sh
│   │   ├── sharepoint.sh
│   │   ├── slack.sh
│   │   └── wikipedia.sh
│   ├── .gitignore
│   ├── check-diff-evaluation-metrics.sh
│   ├── check-diff-expected-output-html.sh
│   ├── check-diff-expected-output-markdown.sh
│   ├── check-diff-expected-output.sh
│   ├── check-num-dirs-output.sh
│   ├── check-num-files-expected-output.sh
│   ├── check-num-files-output.sh
│   ├── check-num-rows-and-columns-output.sh
│   ├── clean-permissions-files.sh
│   ├── cleanup.sh
│   ├── evaluation-ingest-cp.sh
│   ├── evaluation-metrics.sh
│   ├── json-to-clean-text-folder.sh
│   ├── json-to-text.sh
│   ├── structured-json-to-html.sh
│   ├── structured-json-to-markdown.sh
│   ├── test-ingest-dest.sh
│   └── test-ingest-src.sh
├── typings
│   ├── filetype
│   │   └── __init__.pyi
│   ├── lxml
│   │   ├── etree
│   │   │   ├── __init__.pyi
│   │   │   ├── _classlookup.pyi
│   │   │   ├── _cleanup.pyi
│   │   │   ├── _element.pyi
│   │   │   ├── _iterparse.pyi
│   │   │   ├── _module_func.pyi
│   │   │   ├── _module_misc.pyi
│   │   │   ├── _nsclasses.pyi
│   │   │   ├── _parser.pyi
│   │   │   └── _xpath.pyi
│   │   ├── html
│   │   │   ├── __init__.pyi
│   │   │   ├── _element.pyi
│   │   │   ├── _parse.pyi
│   │   │   └── soupparser.pyi
│   │   └── _types.pyi
│   ├── magic
│   │   └── __init__.pyi
│   ├── pandas
│   │   ├── core
│   │   │   ├── api.pyi
│   │   │   └── frame.pyi
│   │   ├── io
│   │   │   ├── excel
│   │   │   │   ├── __init__.pyi
│   │   │   │   └── _base.pyi
│   │   │   ├── parsers
│   │   │   │   ├── __init__.pyi
│   │   │   │   └── readers.pyi
│   │   │   └── api.pyi
│   │   ├── __init__.pyi
│   │   └── _typing.pyi
│   ├── pptx
│   │   ├── oxml
│   │   │   ├── __init__.py
│   │   │   ├── text.pyi
│   │   │   └── xmlchemy.pyi
│   │   ├── shapes
│   │   │   ├── __init__.py
│   │   │   ├── autoshape.pyi
│   │   │   ├── base.pyi
│   │   │   ├── graphfrm.pyi
│   │   │   ├── group.pyi
│   │   │   ├── picture.pyi
│   │   │   └── shapetree.pyi
│   │   ├── text
│   │   │   └── text.pyi
│   │   ├── __init__.pyi
│   │   ├── api.pyi
│   │   ├── presentation.pyi
│   │   ├── shared.pyi
│   │   ├── slide.pyi
│   │   ├── table.pyi
│   │   └── util.pyi
│   └── pypandoc
│       └── __init__.pyi
├── unstructured
│   ├── chunking
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── basic.py
│   │   ├── dispatch.py
│   │   └── title.py
│   ├── cleaners
│   │   ├── __init__.py
│   │   ├── core.py
│   │   ├── extract.py
│   │   └── translate.py
│   ├── common
│   │   ├── __init__.py
│   │   └── html_table.py
│   ├── documents
│   │   ├── __init__.py
│   │   ├── coordinates.py
│   │   ├── elements.py
│   │   ├── mappings.py
│   │   └── ontology.py
│   ├── embed
│   │   ├── __init__.py
│   │   ├── bedrock.py
│   │   ├── huggingface.py
│   │   ├── interfaces.py
│   │   ├── mixedbreadai.py
│   │   ├── octoai.py
│   │   ├── openai.py
│   │   ├── README.md
│   │   ├── vertexai.py
│   │   └── voyageai.py
│   ├── file_utils
│   │   ├── __init__.py
│   │   ├── encoding.py
│   │   ├── file_conversion.py
│   │   ├── filetype.py
│   │   ├── google_filetype.py
│   │   ├── model.py
│   │   └── ndjson.py
│   ├── metrics
│   │   ├── table
│   │   │   ├── __init__.py
│   │   │   ├── table_alignment.py
│   │   │   ├── table_eval.py
│   │   │   ├── table_extraction.py
│   │   │   └── table_formats.py
│   │   ├── __init__.py
│   │   ├── element_type.py
│   │   ├── evaluate.py
│   │   ├── object_detection.py
│   │   ├── table_structure.py
│   │   ├── text_extraction.py
│   │   └── utils.py
│   ├── models
│   │   └── __init__.py
│   ├── nlp
│   │   ├── __init__.py
│   │   ├── english_words.py
│   │   ├── english-words.txt
│   │   ├── partition.py
│   │   ├── patterns.py
│   │   └── tokenize.py
│   ├── partition
│   │   ├── common
│   │   │   ├── __init__.py
│   │   │   ├── common.py
│   │   │   ├── lang.py
│   │   │   └── metadata.py
│   │   ├── html
│   │   │   ├── __init__.py
│   │   │   ├── convert.py
│   │   │   ├── html_utils.py
│   │   │   ├── parser.py
│   │   │   ├── partition.py
│   │   │   └── transformations.py
│   │   ├── pdf_image
│   │   │   ├── analysis
│   │   │   │   ├── __init__.py
│   │   │   │   ├── bbox_visualisation.py
│   │   │   │   ├── layout_dump.py
│   │   │   │   ├── processor.py
│   │   │   │   └── tools.py
│   │   │   ├── __init__.py
│   │   │   ├── form_extraction.py
│   │   │   ├── inference_utils.py
│   │   │   ├── ocr.py
│   │   │   ├── pdf_image_utils.py
│   │   │   ├── pdfminer_processing.py
│   │   │   ├── pdfminer_utils.py
│   │   │   └── pypdf_utils.py
│   │   ├── utils
│   │   │   ├── ocr_models
│   │   │   │   ├── __init__.py
│   │   │   │   ├── google_vision_ocr.py
│   │   │   │   ├── ocr_interface.py
│   │   │   │   ├── paddle_ocr.py
│   │   │   │   └── tesseract_ocr.py
│   │   │   ├── speech_to_text
│   │   │   │   ├── __init__.py
│   │   │   │   ├── speech_to_text_interface.py
│   │   │   │   └── whisper_stt.py
│   │   │   ├── __init__.py
│   │   │   ├── config.py
│   │   │   ├── constants.py
│   │   │   ├── sorting.py
│   │   │   └── xycut.py
│   │   ├── __init__.py
│   │   ├── api.py
│   │   ├── audio.py
│   │   ├── auto.py
│   │   ├── csv.py
│   │   ├── doc.py
│   │   ├── docx.py
│   │   ├── email.py
│   │   ├── epub.py
│   │   ├── image.py
│   │   ├── json.py
│   │   ├── md.py
│   │   ├── model_init.py
│   │   ├── msg.py
│   │   ├── ndjson.py
│   │   ├── odt.py
│   │   ├── org.py
│   │   ├── pdf.py
│   │   ├── ppt.py
│   │   ├── pptx.py
│   │   ├── rst.py
│   │   ├── rtf.py
│   │   ├── strategies.py
│   │   ├── text_type.py
│   │   ├── text.py
│   │   ├── tsv.py
│   │   ├── xlsx.py
│   │   └── xml.py
│   ├── patches
│   │   ├── __init__.py
│   │   └── pdfminer.py
│   ├── staging
│   │   ├── __init__.py
│   │   ├── argilla.py
│   │   ├── base.py
│   │   ├── baseplate.py
│   │   ├── datasaur.py
│   │   ├── huggingface.py
│   │   ├── label_box.py
│   │   ├── label_studio.py
│   │   ├── prodigy.py
│   │   └── weaviate.py
│   ├── __init__.py
│   ├── __main__.py
│   ├── __version__.py
│   ├── cli.py
│   ├── doctor.py
│   ├── errors.py
│   ├── logger.py
│   ├── py.typed
│   ├── telemetry.py
│   └── utils.py
├── .coveragerc
├── .dockerignore
├── .gitignore
├── .grype.yaml
├── .pre-commit-config.yaml
├── .python-version
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── Dockerfile
├── environment.yml
├── LICENSE.md
├── Makefile
├── pyproject.toml
├── README.md
├── renovate.json5
└── uv.lock
```

## Code Digest

### `.coveragerc`

```coveragerc
[run]
omit =
    unstructured/ingest/*
    # TODO(yuming): please remove this line after adding tests for paddle
    unstructured/partition/utils/ocr_models/paddle_ocr.py

```

### `.dockerignore`

```dockerignore
.git
.vscode
__pycache__
*.pyc
*.pyo
*.bak

```

### `.github/actions/base-cache/action.yml`

```yml
name: 'Base Cache Build'
description: 'Set up uv and install project dependencies'
inputs:
  python-version:
    description: 'python version associated with the environment'
    required: true
runs:
  using: "composite"
  steps:
    - name: Install uv
      uses: astral-sh/setup-uv@v5
      with:
        enable-cache: true
    - name: Set up Python ${{ inputs.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: ${{ inputs.python-version }}
    - name: Install dependencies
      shell: bash
      run: |
        uv sync --locked --all-extras --all-groups

```

### `.github/ISSUE_TEMPLATE/bug_report.md`

```md
---
name: Bug report
about: Create a report to help us improve
title: bug/<short-name>
labels: bug
assignees: ''

---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Provide a code snippet that reproduces the issue.

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment Info**
Please run `python scripts/collect_env.py` and paste the output here. 
This will help us understand more about the environment in which the bug occurred.

**Additional context**
Add any other context about the problem here.

```

### `.github/ISSUE_TEMPLATE/custom.md`

```md
---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---



```

### `.github/ISSUE_TEMPLATE/feature_request.md`

```md
---
name: Feature request
about: Suggest an idea for this project
title: feat/<short-name>
labels: enhancement
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.

```

### `.github/workflows/claude.yml`

```yml
name: Claude Code

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: ${{ secrets.GH_ANTHROPIC_API_KEY }}
          allowed_tools: "Bash(git:*),View,GlobTool,GrepTool,BatchTool"

```

### `.github/workflows/codeflash.yml`

```yml
name: Codeflash Optimization

on:
  pull_request:
    paths:
      - 'unstructured/**' 

  workflow_dispatch:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  optimize:
    name: Optimize new Python code
    if: ${{ github.actor != 'codeflash-ai[bot]' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: 🐍 Set up Python 3.12
        uses: actions/setup-python@v5
        with:
          python-version: 3.12
      - name: 📦 Install Environment
        uses: ./.github/actions/base-cache
        with:
          python-version: 3.12
      - name: Install system dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y libmagic-dev poppler-utils libreoffice
          sudo add-apt-repository -y ppa:alex-p/tesseract-ocr5
          sudo apt-get update
          sudo apt-get install -y tesseract-ocr tesseract-ocr-kor
      - name: Codeflash Optimization
        env:
          UNS_API_KEY: ${{ secrets.UNS_API_KEY }}
          CODEFLASH_API_KEY: ${{ secrets.CODEFLASH_API_KEY }}
        run: uvx codeflash

```

### `.grype.yaml`

```yaml
ignore:
  - vulnerability: CVE-2024-11053

```

### `.pre-commit-config.yaml`

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: "v4.3.0"
    hooks:
      - id: check-added-large-files
      - id: check-toml
      - id: check-yaml
      - id: check-json
      - id: check-xml
      - id: end-of-file-fixer
        exclude: \.json$
        files: \.py$
      - id: trailing-whitespace
      - id: mixed-line-ending

  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.15.2
    hooks:
      - id: ruff
        args: ["--fix-only", "--show-fixes"]
      - id: ruff-format

```

### `.python-version`

```python-version
3.12

```

### `discord-test/1100149908494876775.txt`

```txt
😀
https://tenor.com/view/test-homer-simpson-mouse-rat-lab-gif-19273011

```

### `environment.yml`

```yml
name: unstructured

channels:
  - defaults
  - anaconda
  - conda-forge
  - pytorch

dependencies:
  - python=3.10
  - pytorch=2.1.2
  - pywin32
  - poppler
  - torchvision
  - pip
  - pip:
    - huggingface-hub
    - layoutparser

```

### `example-docs/codeblock.md`

```md
## HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML example.</p>
</body>
</html>
```
## XML Example
```xml
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
```
```xml
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
```
```

### `example-docs/csv-with-escaped-commas.csv`

```csv
A,A,A,A,A
A,A,A,"A,A",A
A,A,A,"A,A",A

```

### `example-docs/csv-with-line-delimiter.csv`

```csv
col1|col2|col3
a|b|c
d|e|f
g|h|i
```

### `example-docs/eml/email-inline-content-disposition.eml`

```eml
From: Test User <testuser@example.com>
To: recipient@example.com
Subject: Testing Inline
Message-ID: <CAPgCCDEzLVJ-d1OCX_TjFgJU7ugtQrjFybPtAMmmYZzphxNFYg@mail.example.com>
X-Mailer: Claws Mail 4.1.1 (GTK 3.24.34; x86_64-pc-linux-gnu)
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="MP_/pqqQE0ldE7RYQcFW3Kd0aQV"

--MP_/pqqQE0ldE7RYQcFW3Kd0aQV
Content-Type: text/plain; charset=US-ASCII
Content-Transfer-Encoding: 7bit
Content-Disposition: inline

This is a test of inline

--MP_/pqqQE0ldE7RYQcFW3Kd0aQV
Content-Type: text/plain
Content-Transfer-Encoding: 7bit
Content-Disposition: attachment; filename=t.txt

test

--MP_/pqqQE0ldE7RYQcFW3Kd0aQV--

```

### `example-docs/eml/empty.eml`

```eml
      

    

```

### `example-docs/eml/fake-email-b64.eml`

```eml
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: 
 <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: NotMatthew <NotMatthew@notunstructured.com>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: base64

VGhpcyBpcyBhIHRlc3QgZW1haWwgdG8gdXNlIGZvciB1bml0IHRlc3RzLgoKSW1wb3J0YW50IHBv
aW50czoKCiAgIC0gUm9zZXMgYXJlIHJlZAogICAtIFZpb2xldHMgYXJlIGJsdWUK

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: base64

PGRpdiBkaXI9Imx0ciI+PGRpdj5UaGlzIGlzIGEgdGVzdCBlbWFpbCB0byB1c2UgZm9yIHVuaXQg
dGVzdHMuPC9kaXY+PGRpdj48YnI+PC9kaXY+PGRpdj5JbXBvcnRhbnQgcG9pbnRzOjwvZGl2Pjxk
aXY+PHVsPjxsaT5Sb3NlcyBhcmUgcmVkPC9saT48bGk+VmlvbGV0cyBhcmUgYmx1ZTwvbGk+PC91
bD48L2Rpdj48L2Rpdj4K

--00000000000095c9b205eff92630--

```

### `example-docs/eml/fake-email-header.eml`

```eml
Received: from ABCDEFG-000.ABC.guide (00.0.0.00) by ABCDEFG-000.ABC.guide
 ([ba23::58b5:2236:45g2:88h2]) with Unstructured TTTT Server (version=ABC0_0,
 cipher=ABC_ABCDE_ABC_NOPE_ABC_000_ABC_ABC000) id 00.0.000.0 via Techbox
 Transport; Wed, 20 Feb 2023 10:03:18 +1200
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Bcc: Hello <hello@unstructured.io>
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: Matthew Robinson <mrobinson@unstructured.io>
Cc: Fake Email <fake-email@unstructured.io>, test@unstructured.io
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--
```

### `example-docs/eml/fake-email-malformed-encoding.eml`

```eml
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: Matthew Robinson <mrobinson@unstructured.io>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset = "UTF-8"Content-Transfer-Encoding: 8bit

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue

--00000000000095c9b205eff92630
Content-Type: text/html; charset = "UTF-8"Content-Transfer-Encoding: 8bit

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--

```

### `example-docs/eml/fake-email.eml`

```eml
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: NotMatthew <NotMatthew@notunstructured.com>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--
```

### `example-docs/eml/fake-email.txt`

```txt
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: Matthew Robinson <mrobinson@unstructured.io>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--
```

### `example-docs/eml/fake-encrypted.eml`

```eml
From: Michael Elkins <elkins@aero.org>
To: Michael Elkins <elkins@aero.org>
Mime-Version: 1.0
Content-Type: multipart/encrypted; boundary=foo;
	protocol="application/pgp-encrypted"

--foo
Content-Type: application/pgp-encrypted

Version: 1

--foo
Content-Type: application/octet-stream

-----BEGIN PGP MESSAGE-----
Version: 2.6.2

hIwDY32hYGCE8MkBA/wOu7d45aUxF4Q0RKJprD3v5Z9K1YcRJ2fve87lMlDlx4Oj
eW4GDdBfLbJE7VUpp13N19GL8e/AqbyyjHH4aS0YoTk10QQ9nnRvjY8nZL3MPXSZ
g9VGQxFeGqzykzmykU6A26MSMexR4ApeeON6xzZWfo+0yOqAq6lb46wsvldZ96YA
AABH78hyX7YX4uT1tNCWEIIBoqqvCeIMpp7UQ2IzBrXg6GtukS8NxbukLeamqVW3
1yt21DYOjuLzcMNe/JNsD9vDVCvOOG3OCi8=
=zzaA
-----END PGP MESSAGE-----

--foo--

```

### `example-docs/eml/family-day.eml`

```eml
MIME-Version: 1.0
Date: Wed, 21 Dec 2022 10:28:53 -0600
Message-ID: <CAPgNNXQKR=o6AsOTr74VMrsDNhUJW0Keou9n3vLa2UO_Nv+tZw@mail.gmail.com>
Subject: Family Day
From: Mallori Harrell <mallori@unstructured.io>
To: Mallori Harrell <mallori@unstructured.io>
Content-Type: multipart/alternative; boundary="0000000000005c115405f0590ce4"

--0000000000005c115405f0590ce4
Content-Type: text/plain; charset="UTF-8"

Hi All,

Get excited for our first annual family day!

There will be face painting, a petting zoo, funnel cake and more.

Make sure to RSVP!

Best.

-- 
Mallori Harrell
Unstructured Technologies
Data Scientist

--0000000000005c115405f0590ce4
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr">Hi All,<div><br></div><div>Get excited for our first annua=
l family day!=C2=A0</div><div><br></div><div>There will be face painting, =
a petting zoo, funnel cake and more.</div><div><br></div><div>Make sure to =
RSVP!</div><div><br></div><div>Best.<br clear=3D"all"><div><br></div>-- <br=
><div dir=3D"ltr" class=3D"gmail_signature" data-smartmail=3D"gmail_signatu=
re"><div dir=3D"ltr">Mallori Harrell<div>Unstructured Technologies<br><div>=
Data Scientist</div><div><br></div></div></div></div></div></div>

--0000000000005c115405f0590ce4--
```

### `example-docs/eml/mime-different-plain-html.eml`

```eml
From: sender@example.com
To: recipient@example.com
Date: Tue, 01 Oct 2024 12:34:56 -0500
Subject: Example MIME Email
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: 7bit

This is the text/plain part.

Did you know that the first email was sent by Ray Tomlinson in 1971? He used the "@" symbol to separate the user's name from the computer name, a practice that is still in use today.

Another interesting fact is that the first known instance of email spam occurred in 1978. A marketing message was sent to 393 recipients on ARPANET, marking the beginning of what we now know as email spam.

--boundary123
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: 7bit

<!DOCTYPE html>
<html>
<head>
    <title>Example MIME Email</title>
</head>
<body>
    <p>This is the <code>text/html</code> part.</p>
    <p>Did you know that the first <b>networked email</b> was sent by Ray Tomlinson in 1971? He used the "@" symbol to separate the user's name from the computer name, a practice that is still in use today.</p>
    <p>Another interesting fact is that the first known instance of <i>email spam</i> occurred in 1978. A marketing message was sent to 393 recipients on ARPANET, marking the beginning of what we now know as email spam.</p>
</body>
</html>

--boundary123--

```

### `example-docs/eml/mime-html-only.eml`

```eml
MIME-Version: 1.0
From: sender@example.com
To: recipient@example.com
Date: Tue, 01 Oct 2024 12:34:56 -0500
Subject: Example HTML Only MIME Email
Content-Type: text/html; charset="ISO-8859-1"
Content-Transfer-Encoding: base64

PHA+VGhpcyBpcyBhIHRleHQvaHRtbCBwYXJ0LjwvcD4KPGRpdiBpZD0iY29udGVudCI+PHA+VGhl
IGZpcnN0IGVtb3RpY29uLCA6KSAsIHdhcyBwcm9wb3NlZCBieSBTY290dCBGYWhsbWFuIGluIDE5
ODIgdG8gaW5kaWNhdGUganVzdCBvciBzYXJjYXNtIGluIHRleHQgZW1haWxzLjwvcD4KPHA+R21h
aWwgd2FzIGxhdW5jaGVkIGJ5IEdvb2dsZSBpbiAyMDA0IHdpdGggMSBHQiBvZiBmcmVlIHN0b3Jh
Z2UsIHNpZ25pZmljYW50bHkgbW9yZSB0aGFuIHdoYXQgb3RoZXIgc2VydmljZXMgb2ZmZXJlZCBh
dCB0aGUgdGltZS48L3A+PC9kaXY+

```

### `example-docs/eml/mime-multi-to-cc-bcc.eml`

```eml
From: sender@example.com
To: Bob <bob@example.com>, Sue <sue@example.com>
Cc: Tom <tom@example.com>, Alice <alice@example.com>
Bcc: John <john@example.com>, Mary <mary@example.com>
Subject: Example Plain-Text MIME Message
Message-ID: <2143658709@example.com>
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

This is a plain-text message.

```

### `example-docs/eml/mime-multipart-digest.eml`

```eml
From: alice@example.com
To: bob@example.com
Cc: carol@example.com
Bcc: dave@example.com
Subject: Example Multipart Digest Email
Message-ID: <1234567890@example.com>
MIME-Version: 1.0
Content-Type: multipart/digest; boundary="boundary123"

--boundary123
Content-Type: message/rfc822

From: eve@example.com
To: alice@example.com
Subject: First Message

This is the first message in the digest.

--boundary123
Content-Type: message/rfc822

From: frank@example.com
To: bob@example.com
Subject: Second Message

This is the second message in the digest.

--boundary123
Content-Type: message/rfc822

From: grace@example.com
To: carol@example.com
Subject: Third Message

This is the third message in the digest.

--boundary123--

```

### `example-docs/eml/mime-no-body.eml`

```eml
From: sender@example.com
To: recipient@example.com
Date: Tue, 01 Oct 2024 12:34:56 -0500
Subject: Image Only Email
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="boundary123"

--boundary123
Content-Type: image/jpeg
Content-Disposition: attachment; filename="image.jpg"
Content-Transfer-Encoding: base64

/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBAQEhISEBAWFRUVFhUVFRUWFRUWFhUWFhUV
FRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHx8rLS0rLS0rLS0t
LS0rLS0rLS0rLS0rLS0rLS0rLS0rLS0rLS0tLS0rLS0rLS0rLS0rLf/AABEIAMgAyAMBIgACEQED
EQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAD0QAAIBAwMBBgQEBgIDCQAAAAECAwAE
ERIhBTFBBhMiUWFxgZEykaGxFCNCUrHB0fAUM2JygpLwFySTwsL/xAAYAQEBAQEBAAAAAAAAAAAA
AAAABQEDBP/EAB8RAQEBAQEBAQEBAQEAAAAAAAABEQIhEjEEQVFhcf/aAAwDAQACEQMRAD8A+6qK
CiiggqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgq
CiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCooIKgqCiiCo
[Base64 encoded image data continues]
--boundary123--

```

### `example-docs/eml/mime-no-subject.eml`

```eml
From: sender@example.com
To: recipient@example.com
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

This is a simple email message without a subject.

```

### `example-docs/eml/mime-no-to.eml`

```eml
From: sender@example.com
Cc: Tom <tom@example.com>, Alice <alice@example.com>
Bcc: John <john@example.com>, Mary <mary@example.com>
Subject: Example Plain-Text MIME Message
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

This is a plain-text message.

```

### `example-docs/eml/mime-simple.eml`

```eml
From: sender@example.com
To: recipient@example.com
Subject: Example Multipart/Alternative Email
Message-ID: <1234567890@example.com>
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="UTF-8"

This is a simple email message.

--boundary123
Content-Type: text/html; charset="UTF-8"

<html>
  <body>
    <p>This is a simple email message.</p>
  </body>
</html>

--boundary123--

```

### `example-docs/eml/mime-word-encoded-subject.eml`

```eml
From: sender@example.com
To: recipient@example.com
Subject: =?UTF-8?B?U2ltcGxlIGVtYWlsIHdpdGgg4pi44pi/IFVuaWNvZGUgc3ViamVjdA==?=
MIME-Version: 1.0
Content-Type: text/plain; charset="UTF-8"

This is a simple email message with Unicode characters in the subject.

```

### `example-docs/eml/rfc822-no-date.eml`

```eml
From: sender@example.com
To: recipient@example.com
Subject: Example Email Without Date Header

This is an example email message without a Date header. Note that this is non-standard and may be flagged or corrected by email servers.

```

### `example-docs/eml/signed-doc.p7s`

```p7s
MIME-Version: 1.0
Content-Type: multipart/signed; protocol="application/x-pkcs7-signature"; micalg="sha-256"; boundary="----DA7C0B64AB4D78BAFBED70C0FA340877"

This is an S/MIME signed message

------DA7C0B64AB4D78BAFBED70C0FA340877
This is a test

------DA7C0B64AB4D78BAFBED70C0FA340877
Content-Type: application/x-pkcs7-signature; name="smime.p7s"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="smime.p7s"

<SIGNATURE>

------DA7C0B64AB4D78BAFBED70C0FA340877--


```

### `example-docs/eml/simple-rfc-822.eml`

```eml
From: sender@example.com
To: recipient@example.com
Date: Tue, 01 Oct 2024 12:34:56 -0500
Subject: Example RFC 822 Email

This is an RFC 822 email message.

An RFC 822 message is characterized by its simple, text-based format, which includes a header and a body. The header contains structured fields such as "From", "To", "Date", and "Subject", each followed by a colon and the corresponding information. The body follows the header, separated by a blank line, and contains the main content of the email.

The structure ensures compatibility and readability across different email systems and clients, adhering to the standards set by the Internet Engineering Task Force (IETF).

```

### `example-docs/eml/test-invalid-date.eml`

```eml
Date: INVALID-DATE-FORMAT
From: sender@example.com
To: recipient@example.com
Subject: Test invalid date format

This is a test-email with an invalid date format.
```

### `example-docs/eml/test-iso-8601-date.eml`

```eml
Date: 2025-07-29T12:42:06.000Z
From: sender@example.com
To: recipient@example.com
Subject: Test a Z-suffix date

This is a test-email.

```

### `example-docs/eml/test-rfc2822-date.eml`

```eml
Date: Tue, 29 Jul 2025 12:42:06 +0000
From: sender@example.com
To: recipient@example.com
Subject: Test a standard RFC-2822 date

This is a test-email.

```

### `example-docs/empty.txt`

```txt

```

### `example-docs/factbook.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<factbook>
  <country>
    <name>United States</name>
    <capital>Washington, DC</capital>
    <leader>Joe Biden</leader>
    <sport>Baseball</sport>
  </country>
  <country>
    <name>Canada</name>
    <capital>Ottawa</capital>
    <leader>Justin Trudeau</leader>
    <sport>Hockey</sport>
  </country>
  <country>
    <name>France</name>
    <capital>Paris</capital>
    <leader>Emmanuel Macron</leader>
    <sport>Soccer</sport>
  </country>
  <country>
    <name>Trinidad &amp; Tobado</name>
    <capital>Port of Spain</capital>
    <leader>Keith Rowley</leader>
    <sport>Track &amp; Field</sport>
  </country>
</factbook>

```

### `example-docs/fake-doc.rtf`

```rtf
{\rtf1\ansi\deff0
{\pard \ql \f0 \sa180 \li0 \fi0 \outlinelevel0 \b \fs36 My First Heading\par}
{\pard \ql \f0 \sa180 \li0 \fi0 My first paragraph.\par}
{\pard \sa180 \li0 \fi0 \b Table Example:\par}
{\trowd\cellx3000\cellx6000
\pard\intbl\qc\fs20 Column 1\cell Column 2\cell\row
\pard\intbl\qc\fs20 Row 1, Cell 1\cell Row 1, Cell 2\cell\row
\pard\intbl\qc\fs20 Row 2, Cell 1\cell Row 2, Cell 2\cell\row
}
}

```

### `example-docs/fake-email.eml`

```eml
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: NotMatthew <NotMatthew@notunstructured.com>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--
```

### `example-docs/fake-email.txt`

```txt
MIME-Version: 1.0
Date: Fri, 16 Dec 2022 17:04:16 -0500
Message-ID: <CADc-_xaLB2FeVQ7mNsoX+NJb_7hAJhBKa_zet-rtgPGenj0uVw@mail.gmail.com>
Subject: Test Email
From: Matthew Robinson <mrobinson@unstructured.io>
To: Matthew Robinson <mrobinson@unstructured.io>
Content-Type: multipart/alternative; boundary="00000000000095c9b205eff92630"

--00000000000095c9b205eff92630
Content-Type: text/plain; charset="UTF-8"

This is a test email to use for unit tests.

Important points:

   - Roses are red
   - Violets are blue
   - 

--00000000000095c9b205eff92630
Content-Type: text/html; charset="UTF-8"

<div dir="ltr"><div>This is a test email to use for unit tests.</div><div><br></div><div>Important points:</div><div><ul><li>Roses are red</li><li>Violets are blue</li></ul></div></div>

--00000000000095c9b205eff92630--
```

### `example-docs/fake-html-cp1252.html`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>
<p>Some text with CP1252-specific characters:</p>

<pre>
Die sch�ne Frau hat einen Kaffee mit Kuchen gegessen. Sie sagte: "Das war k�stlich!" und l�chelte dabei. Der Preis betrug 15,50 �.
L'�t� �tait tr�s chaud cette ann�e. J'ai achet� un caf� au lait pour 3,50 �. C'�tait d�licieux ! L'homme a dit : "C'est parfait !"
El ni�o comi� paella con �oquis. La se�ora dijo: "�Qu� rico!" y pag� 25,75 �. El restaurante ten�a un men� del d�a.
Kvinnan �t k�ttbullar med lingonsylt. Hon sa: "Det var fantastiskt!" och betalade 45,90 �. Mannen fr�gade: "Vill du ha mer?"
O Jo�o comprou um caf� por 2,50 �. Ele disse: "Est� �timo!" e sorriu. A mulher perguntou: "Quer mais alguma coisa?"
De vrouw dronk koffie met koekjes. Ze zei: "Het was heerlijk!" en betaalde 4,25 �. Het kind vroeg: "Mag ik ook wat?"
</pre>

</body>
</html>

```

### `example-docs/fake-html-lang-de.html`

```html
<h3 class="l_titel">Jahresabschluss zum Geschäftsjahr vom 01.01.2020 bis zum 31.12.2020</h3>
```

### `example-docs/fake-html-with-duplicate-elements.html`

```html
<!DOCTYPE html>
<html>

<head>
    <title>Simple Nested HTML</title>
    </strong>

<body>
    <h1>Example heading.</h1>
    <div>
        <span>This is a span.</span>
        <span>This is another span.</span>
    </div>
    <br>
    <h1>Example heading.</h1>
    <div>
        <span>This is a span.</span>
        <span>This is another span.</span>
    </div>

</body>

</html>

```

### `example-docs/fake-html-with-footer-and-header.html`

```html
<!DOCTYPE html>
<html>
<header>
    <p>Header</p>
</header>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
<footer>
    <p>Footer</p>
</footer>
</html>

```

### `example-docs/fake-html-with-image-from-url.html`

```html
<div>
  <p>Test page</p>
  <img src="https://avatars.githubusercontent.com/u/108372208?s=200&v=4" alt="Unstructured Logo" />
</div>
```

### `example-docs/fake-html.html`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<h2>My Second Heading</h2>
<p>My first paragraph. lorem ipsum dolor set amet. if the cow comes home under the sun how do you fault the cow for it's worn hooves?</p>

<ul>
    <li>A test list</li>
    <ul>
        <li>With sub-bullets!</li>
        <li>And another</li>
    </ul>
    <li>Back at the root</li>
</ul>

<h3>A Third Heading</h3>
<table>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>

</body>
</html>

```

### `example-docs/fake-incomplete-json.txt`

```txt
{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "is_student": true,
  "address": {
    "city": "New York",
    "zipcode": "10001"
  },
  "hobbies": ["reading", "running", "cooking"]

```

### `example-docs/fake-text-all-whitespace.txt`

```txt




```

### `example-docs/fake-text.txt`

```txt
This is a test document to use for unit tests.

Doylestown, PA 18901

Important points:

   - Hamburgers are delicious
   - Dogs are the best
   - I love fuzzy blankets

```

### `example-docs/fake.go`

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello Go!")
}

```

### `example-docs/file_we_dont_want_imported`

```
wombat
```

### `example-docs/hebrew-text-base64-iso88598i.txt`

```txt
8uPr5e8gVGVzbGEgLSDw4/j5+iDn+unu5CDy7CDk4ff55CDs+On55e0g
```

### `example-docs/logger.py`

```py
import logging
from typing import Any

logger = logging.getLogger("unstructured")
trace_logger = logging.getLogger("unstructured.trace")

# Create a custom logging level
DETAIL = 15
logging.addLevelName(DETAIL, "DETAIL")


# Create a custom log method for the "DETAIL" level
def detail(self: logging.Logger, message: str, *args: Any, **kwargs: Any):
    if self.isEnabledFor(DETAIL):
        self._log(DETAIL, message, args, **kwargs)


# Add the custom log method to the logging.Logger class
logging.Logger.detail = detail  # type: ignore

```

### `example-docs/not-unstructured-payload.json`

```json
{
    "id": "Sample-1",
    "name": "Sample 1",
    "description": "This is sample data #1"
}

```

### `example-docs/README-w-include.org`

```org
#+INCLUDE: "file_we_dont_want_imported"

* Example Docs

The sample docs directory contains the following files:

-  ~example-10k.html~ - A 10-K SEC filing in HTML format
-  ~layout-parser-paper.pdf~ - A PDF copy of the layout parser paper
-  ~factbook.xml~ / ~factbook.xsl~ - Example XML/XLS files that you
   can use to test stylesheets

These documents can be used to test out the parsers in the library. In
addition, here are instructions for pulling in some sample docs that are
too big to store in the repo.

** XBRL 10-K

You can get an example 10-K in inline XBRL format using the following
~curl~. Note, you need to have the user agent set in the header or the
SEC site will reject your request.

#+BEGIN_SRC bash

   curl -O \
     -A '${organization} ${email}'
     https://www.sec.gov/Archives/edgar/data/311094/000117184321001344/0001171843-21-001344.txt
#+END_SRC

You can parse this document using the HTML parser.

```

### `example-docs/README-w-include.rst`

```rst
.. include:: file_we_dont_want_imported

Example Docs
------------

The sample docs directory contains the following files:

-  ``example-10k.html`` - A 10-K SEC filing in HTML format
-  ``layout-parser-paper.pdf`` - A PDF copy of the layout parser paper
-  ``factbook.xml``/``factbook.xsl`` - Example XML/XLS files that you
   can use to test stylesheets

These documents can be used to test out the parsers in the library. In
addition, here are instructions for pulling in some sample docs that are
too big to store in the repo.

XBRL 10-K
^^^^^^^^^

You can get an example 10-K in inline XBRL format using the following
``curl``. Note, you need to have the user agent set in the header or the
SEC site will reject your request.

.. code:: bash

   curl -O \
     -A '${organization} ${email}'
     https://www.sec.gov/Archives/edgar/data/311094/000117184321001344/0001171843-21-001344.txt

You can parse this document using the HTML parser.

```

### `example-docs/README.md`

```md
## Example Docs

The sample docs directory contains the following files:

- `example-10k.html` - A 10-K SEC filing in HTML format
- `layout-parser-paper.pdf` - A PDF copy of the layout parser paper
- `factbook.xml`/`factbook.xsl` - Example XML/XLS files that you can use to test stylesheets

These documents can be used to test out the parsers in the library. In addition, here are
instructions for pulling in some sample docs that are too big to store in the repo.

#### XBRL 10-K

You can get an example 10-K in inline XBRL format using the following `curl`. Note, you need
to have the user agent set in the header or the SEC site will reject your request.

```bash
curl -O \
  -A '${organization} ${email}'
  https://www.sec.gov/Archives/edgar/data/311094/000117184321001344/0001171843-21-001344.txt
```

You can parse this document using the HTML parser.

```

### `example-docs/README.org`

```org
* Example Docs

The sample docs directory contains the following files:

-  ~example-10k.html~ - A 10-K SEC filing in HTML format
-  ~layout-parser-paper.pdf~ - A PDF copy of the layout parser paper
-  ~factbook.xml~ / ~factbook.xsl~ - Example XML/XLS files that you
   can use to test stylesheets

These documents can be used to test out the parsers in the library. In
addition, here are instructions for pulling in some sample docs that are
too big to store in the repo.

** XBRL 10-K

You can get an example 10-K in inline XBRL format using the following
~curl~. Note, you need to have the user agent set in the header or the
SEC site will reject your request.

#+BEGIN_SRC bash

   curl -O \
     -A '${organization} ${email}'
     https://www.sec.gov/Archives/edgar/data/311094/000117184321001344/0001171843-21-001344.txt
#+END_SRC

You can parse this document using the HTML parser.

```

### `example-docs/README.rst`

```rst
Example Docs
------------

The sample docs directory contains the following files:

-  ``example-10k.html`` - A 10-K SEC filing in HTML format
-  ``layout-parser-paper.pdf`` - A PDF copy of the layout parser paper
-  ``factbook.xml``/``factbook.xsl`` - Example XML/XLS files that you
   can use to test stylesheets

These documents can be used to test out the parsers in the library. In
addition, here are instructions for pulling in some sample docs that are
too big to store in the repo.

XBRL 10-K
^^^^^^^^^

You can get an example 10-K in inline XBRL format using the following
``curl``. Note, you need to have the user agent set in the header or the
SEC site will reject your request.

.. code:: bash

   curl -O \
     -A '${organization} ${email}'
     https://www.sec.gov/Archives/edgar/data/311094/000117184321001344/0001171843-21-001344.txt

You can parse this document using the HTML parser.

```

### `example-docs/semicolon-delimited.csv`

```csv
Lorem, ipsum; dolor sit; amet
consectetur; adipiscing; elit
sed, do; eiusmod; tempor incididunt
ut labore; et, dolore; magna aliqua
Ut enim; ad minim; veniam, quis

```

### `example-docs/simple-table.md`

```md
Item | Price | # In stock
---|---|---
Juicy Apples | 1.99 | 739
Bananas | 1.89 | 6
```

### `example-docs/simple.yaml`

```yaml
---
 doe: "a deer, a female deer"
 ray: "a drop of golden sun"
 pi: 3.14159
 xmas: true
 french-hens: 3
 calling-birds:
   - huey
   - dewey
   - louie
   - fred
 xmas-fifth-day:
   calling-birds: four
   french-hens: 3
   golden-rings: 5
   partridges:
     count: 1
     location: "a pear tree"
   turtle-doves: two

```

### `example-docs/single-column.csv`

```csv
Lorem, ipsum
dolor sit
amet consectetur
adipiscing, elit
sed, do eiusmod
tempor incididunt
ut labore et
dolore; magna aliqua
Ut enim, ad minim, veniam

```

### `example-docs/stanley-cups-with-emoji.csv`

```csv
Stanley Cups,,
Team,Location,Stanley Cups
Blues,STL,1
Flyers,PHI,2
Maple Leafs,TOR,13
👨\U+1F3FB🔧,TOR,15
```

### `example-docs/stanley-cups-with-emoji.tsv`

```tsv
Stanley Cups		
Team	Location	Stanley Cups
Blues	STL	1
Flyers	PHI	2
Maple Leafs	TOR	13
👨\U+1F3FB🔧	TOR	15

```

### `example-docs/stanley-cups.csv`

```csv
Stanley Cups,,
Team,Location,Stanley Cups
Blues,STL,1
Flyers,PHI,2
Maple Leafs,TOR,13

```

### `example-docs/stanley-cups.tsv`

```tsv
Stanley Cups		
Team	Location	Stanley Cups
Blues	STL	1
Flyers	PHI	2
Maple Leafs	TOR	13

```

### `example-docs/table-multi-row-column-cells-actual.csv`

```csv
Disability Category,Participants,Ballots Completed,Ballots Incomplete/Terminated,Results,
,,,,Accuracy,Time to complete
Blind,5,1,4,"34.5%, n=1","1199 sec, n=1"
Low Vision,5,2,3,"98.3% n=2 (97.7%, n=3)","1716 sec, n=3 (1934 sec, n=2)"
Dexterity,5,4,1,"98.3%, n=4","1672.1 sec, n=4"
Mobility,3,3,0,"95.4%, n=3","1416 sec, n=3"

```

### `example-docs/table-semicolon-delimiter.csv`

```csv
Year;Month;Revenue;Costs;
2022;1;123;-123;
2023;2;143,1;-814,38;
2024;3;215,32;-11,08;

```

### `example-docs/test_evaluate_files/filter_list.txt`

```txt
Bank Good Credit Loan.pptx
Performance-Audit-Discussion.pdf

```

### `example-docs/umlauts-non-utf8.md`

```md
## k�nnen

k�nnen

����

```

### `example-docs/umlauts-utf8.md`

```md
## können

können

äöüß

```

### `example-docs/unsupported/factbook.xsl`

```xsl
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
  <h2>World Factbook</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Country</th>
      <th style="text-align:left">Capital</th>
      <th style="text-align:left">Leader</th>
      <th style="text-align:left">Sport</th>
    </tr>
    <xsl:for-each select="factbook/country">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="capital"/></td>
      <td><xsl:value-of select="leader"/></td>
      <td><xsl:value-of select="sport"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

```

### `renovate.json5`

```json5
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",

  // Extend shared security-only config from renovate-config repo
  "extends": [
    "github>unstructured-io/renovate-config"
  ],

  // Run version bump script for all vulnerability alert PRs
  "vulnerabilityAlerts": {
    "postUpgradeTasks": {
      "commands": [
        "bash scripts/renovate-security-bump.sh"
      ],
      "fileFilters": [
        "unstructured/__version__.py",
        "CHANGELOG.md"
      ],
      "executionMode": "branch"
    }
  }
}

```

### `scripts/airtable-test-helpers/create_scale_test_components.sh`

```sh
#!/usr/bin/env bash

# This scripts creates a large number of tables inside an Airtable base.

# shellcheck disable=SC2001,SC1091
source ./scripts/airtable-test-helpers/component_ids.sh

base_data='{"description": "Table-X of the test tables for the test LARGE_BASE.", "fields": [{"description": "Name of the row","name": "Name","type": "singleLineText"}],"name": "LARGE_BASE_TABLE_X"}'
for ((i = 1; i <= 100; i++)); do
  item="$(echo "$base_data" | sed "s/X/$i/g")"
  curl -X POST "https://api.airtable.com/v0/meta/bases/$LARGE_BASE_BASE_ID/tables" \
    -H "Authorization: Bearer $AIRTABLE_ACCESS_TOKEN_WRITE2" \
    -H "Content-Type: application/json" \
    --data "$item"
done

```

### `scripts/airtable-test-helpers/print_num_rows_df.py`

```py
import argparse
import json
from io import StringIO

import pandas as pd


def number_of_rows(file_path):
    with open(file_path) as file:
        data = json.load(file)
        df = pd.read_csv(StringIO(data[0]["text"]))
    return len(df)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Read Unstructured Ingest output file and print the number of rows",
    )

    parser.add_argument(
        "--structured-output-file-path",
        help="Path to Unstructured Ingest output file",
    )

    args = parser.parse_args()

    output_path = args.structured_output_file_path
    print(number_of_rows(output_path))

```

### `scripts/check-new-release-version.sh`

```sh
#!/usr/bin/env bash

set -eux

# Function to check if the current version is a non-dev version
function is_non_dev_version {
  local VERSION="$1"
  [[ "$VERSION" != *"-dev"* ]]
}

# Function to get the version from the current main branch
function get_main_branch_version {
  local VERSION
  git fetch origin main
  VERSION=$(git show origin/main:unstructured/__version__.py | grep -o -m 1 -E "(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-[a-zA-Z0-9.-]+)?")
  echo "$VERSION"
}

# Get the current version from the file
CURRENT_VERSION=$(grep -o -m 1 -E "(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-dev[0-9]+)?" "unstructured/__version__.py")

# Check if the current version is a non-dev version and not matching the main version
if is_non_dev_version "$CURRENT_VERSION" && [ "$(get_main_branch_version)" != "$CURRENT_VERSION" ]; then
  echo "New release version: $CURRENT_VERSION"
fi

```

### `scripts/chroma-test-helpers/create-and-check-chroma.sh`

```sh
#!/usr/bin/env bash

set -e

# $1 is the path for chroma to write the contents to. The symbol "&" runs process in background
python "$VIRTUAL_ENV/bin/chroma" run --path "$1" &

```

### `scripts/docker-build-ubuntu.sh`

```sh
#!/usr/bin/env bash

# Mainly useful for building an image from which to update test-ingest fixtures

set -eu -o pipefail

# Change to the root of the repository
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
cd "$SCRIPT_DIR"/.. || exit 1

docker build -t unstructured-ubuntu:latest --progress plain -f docker/ubuntu-22/Dockerfile .

```

### `scripts/docker-build.sh`

```sh
#!/usr/bin/env bash

set -euo pipefail
DOCKER_REPOSITORY="${DOCKER_REPOSITORY:-quay.io/unstructured-io/unstructured}"
DOCKER_IMAGE="${DOCKER_IMAGE:-unstructured:dev}"

DOCKER_BUILD_CMD=(docker buildx build --load -f Dockerfile
  --build-arg BUILDKIT_INLINE_CACHE=1
  --progress plain
  --cache-from "$DOCKER_REPOSITORY":latest
  -t "$DOCKER_IMAGE" .)

# only build for specific platform if DOCKER_BUILD_PLATFORM is set
if [ -n "${DOCKER_BUILD_PLATFORM:-}" ]; then
  DOCKER_BUILD_CMD+=("--platform=$DOCKER_BUILD_PLATFORM")
fi

DOCKER_BUILDKIT=1 "${DOCKER_BUILD_CMD[@]}"

```

### `scripts/docker-smoke-test.sh`

```sh
#!/usr/bin/env bash

# Start the containerized repository and run ingest tests

# shellcheck disable=SC2317  # Shellcheck complains that trap functions are unreachable...
# shellcheck disable=SC2329  # Functions are invoked indirectly

set -eux -o pipefail

CONTAINER_NAME=unstructured-smoke-test
DOCKER_IMAGE="${DOCKER_IMAGE:-unstructured:dev}"

# Change to the root of the repository
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
cd "$SCRIPT_DIR"/.. || exit 1

start_container() {
  echo Starting container "$CONTAINER_NAME"
  docker run -dt --rm --name "$CONTAINER_NAME" "$DOCKER_IMAGE"
}

await_container() {
  echo Waiting for container to start
  until [ "$(docker inspect -f '{{.State.Status}}' $CONTAINER_NAME)" == "running" ]; do
    sleep 1
  done
}

stop_container() {
  echo Stopping container "$CONTAINER_NAME"
  docker stop "$CONTAINER_NAME"
}

start_container

# Regardless of test result, stop the container
trap stop_container EXIT

await_container

# Run the tests
docker cp test_unstructured_ingest $CONTAINER_NAME:/app
docker exec -u root "$CONTAINER_NAME" /bin/bash -c "chown -R notebook-user:notebook-user /app/test_unstructured_ingest"
docker exec "$CONTAINER_NAME" /bin/bash -c "/app/test_unstructured_ingest/src/local.sh"

result=$?
exit $result

```

### `scripts/elasticsearch-test-helpers/common/docker-compose.yaml`

```yaml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.19.10
    container_name: es-test
    ports:
      - 9200:9200
      - 9300:9300
    environment:
      - xpack.security.enabled=true
      - discovery.type=single-node
      - ELASTIC_PASSWORD=${ELASTIC_PASSWORD}
      - ELASTIC_USER=${ELASTIC_USER}
    healthcheck:
      test: ["CMD-SHELL", "curl --silent --fail -u ${ELASTIC_USER}:${ELASTIC_PASSWORD} localhost:9200/_cluster/health || exit 1"]
      interval: 10s
      timeout: 30s
      retries: 3

```

### `scripts/elasticsearch-test-helpers/common/es-dest-ingest-test-creds.env`

```env
# These credentials are for the ES index within ingest test ES docker image,
# which is stopped immediately after ingest ES destination connector test completes.
# Do not use these credentials for any other purpose than local development, or testing.
# Do not use these credentials for any permanent / long life ES cluster; be it in dev or prod.
export ELASTIC_USER=elastic
export ELASTIC_PASSWORD=Vth0Zd0wxme
```

### `scripts/elasticsearch-test-helpers/destination_connector/create_index.py`

```py
#!/usr/bin/env python3

from elasticsearch import Elasticsearch
from es_cluster_config import (
    CLUSTER_URL,
    INDEX_NAME,
    PASSWORD,
    USER,
    mappings,
)

print("Connecting to the Elasticsearch cluster.")
es = Elasticsearch(CLUSTER_URL, basic_auth=(USER, PASSWORD), request_timeout=30)
print(f"{es.info()}")

print("Creating an Elasticsearch index for testing ingest elasticsearch destination connector.")
response = es.options(max_retries=5).indices.create(index=INDEX_NAME, mappings=mappings)
if response.meta.status != 200:
    raise RuntimeError("failed to create index")

es.indices.refresh(index=INDEX_NAME)
response = es.cat.count(index=INDEX_NAME, format="json")

print("Succesfully created an Elasticsearch index for testing elasticsearch ingest.")

```

### `scripts/elasticsearch-test-helpers/destination_connector/create-elasticsearch-instance.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(dirname "$(realpath "$0")")")
ENV_FILE="$SCRIPT_DIR"/common/es-dest-ingest-test-creds.env

# Create the Elasticsearch cluster
docker compose version
docker compose --env-file "$ENV_FILE" -f "$SCRIPT_DIR"/common/docker-compose.yaml up --wait
docker compose --env-file "$ENV_FILE" -f "$SCRIPT_DIR"/common/docker-compose.yaml ps

echo "Cluster is live."
python "$SCRIPT_DIR"/destination_connector/create_index.py

```

### `scripts/elasticsearch-test-helpers/destination_connector/es_cluster_config.py`

```py
import json
import os

CLUSTER_URL = "http://localhost:9200"
INDEX_NAME = "ingest-test-destination"
USER = os.environ["ELASTIC_USER"]
PASSWORD = os.environ["ELASTIC_PASSWORD"]
MAPPING_PATH = (
    "scripts/elasticsearch-test-helpers/destination_connector/elasticsearch_elements_mappings.json"
)

with open(MAPPING_PATH) as f:
    mappings = json.load(f)

```

### `scripts/elasticsearch-test-helpers/source_connector/create_and_fill_es.py`

```py
#!/usr/bin/env python3

import pandas as pd
from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
from es_cluster_config import (
    CLUSTER_URL,
    DATA_PATH,
    INDEX_NAME,
    MAPPINGS,
    PASSWORD,
    USER,
    form_elasticsearch_doc_dict,
)

print("Connecting to the Elasticsearch cluster.")
es = Elasticsearch(CLUSTER_URL, basic_auth=(USER, PASSWORD), request_timeout=30)
print(f"{es.info()}")
df = pd.read_csv(DATA_PATH).dropna().reset_index()

print("Creating an Elasticsearch index for testing elasticsearch ingest.")
response = es.options(max_retries=5).indices.create(index=INDEX_NAME, mappings=MAPPINGS)
if response.meta.status != 200:
    raise RuntimeError("failed to create index")

print("Loading data into the index.")
bulk_data = []
for i, row in df.iterrows():
    bulk_data.append(form_elasticsearch_doc_dict(i, row))
bulk(es, bulk_data)

es.indices.refresh(index=INDEX_NAME)
response = es.cat.count(index=INDEX_NAME, format="json")

print("Successfully created and filled an Elasticsearch index for testing elasticsearch ingest.")

```

### `scripts/elasticsearch-test-helpers/source_connector/create-fill-and-check-es.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(dirname "$(dirname "$(realpath "$0")")")"
ENV_FILE="$SCRIPT_DIR"/common/es-dest-ingest-test-creds.env

# Create the Elasticsearch cluster
docker compose version
docker compose --env-file "$ENV_FILE" -f "$SCRIPT_DIR"/common/docker-compose.yaml up --wait
docker compose --env-file "$ENV_FILE" -f "$SCRIPT_DIR"/common/docker-compose.yaml ps

echo "Cluster is live."
"$SCRIPT_DIR"/source_connector/create_and_fill_es.py

```

### `scripts/elasticsearch-test-helpers/source_connector/es_cluster_config.py`

```py
import os

DATA_PATH = "scripts/elasticsearch-test-helpers/source_connector/wiki_movie_plots_small.csv"
CLUSTER_URL = "http://localhost:9200"
INDEX_NAME = "movies"
USER = os.environ["ELASTIC_USER"]
PASSWORD = os.environ["ELASTIC_PASSWORD"]

MAPPINGS = {
    "properties": {
        "title": {"type": "text", "analyzer": "english"},
        "ethnicity": {"type": "text", "analyzer": "standard"},
        "director": {"type": "text", "analyzer": "standard"},
        "cast": {"type": "text", "analyzer": "standard"},
        "genre": {"type": "text", "analyzer": "standard"},
        "plot": {"type": "text", "analyzer": "english"},
        "year": {"type": "integer"},
        "wiki_page": {"type": "keyword"},
    },
}


def form_elasticsearch_doc_dict(i, csv_row):
    return {
        "_index": INDEX_NAME,
        "_id": i,
        "_source": {
            "title": csv_row["Title"],
            "ethnicity": csv_row["Origin/Ethnicity"],
            "director": csv_row["Director"],
            "cast": csv_row["Cast"],
            "genre": csv_row["Genre"],
            "plot": csv_row["Plot"],
            "year": csv_row["Release Year"],
            "wiki_page": csv_row["Wiki Page"],
        },
    }

```

### `scripts/initialize-libreoffice.sh`

```sh
#!/bin/bash

/usr/bin/soffice --headless || [ $? -eq 81 ] || exit 1

```

### `scripts/kafka-test-helpers/create-kafka-instance.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(realpath "$0")")

# Create the Weaviate instance
docker compose version
docker compose -f "$SCRIPT_DIR"/docker-compose.yml up --wait
docker compose -f "$SCRIPT_DIR"/docker-compose.yml ps

echo "Instance is live."

```

### `scripts/kafka-test-helpers/docker-compose.yml`

```yml
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - 22181:2181

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - 29092:29092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

### `scripts/minio-test-helpers/create-and-check-minio.sh`

```sh
#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "$(realpath "$0")")

secret_key=minioadmin
access_key=minioadmin
region=us-east-2
endpoint_url=http://localhost:9000
bucket_name=utic-dev-tech-fixtures

function upload() {
  echo "Uploading test content to new bucket in minio"
  AWS_REGION=$region AWS_SECRET_ACCESS_KEY=$secret_key AWS_ACCESS_KEY_ID=$access_key \
    aws --output json --endpoint-url $endpoint_url s3api create-bucket --bucket $bucket_name | jq
  AWS_REGION=$region AWS_SECRET_ACCESS_KEY=$secret_key AWS_ACCESS_KEY_ID=$access_key \
    aws --endpoint-url $endpoint_url s3 cp "$SCRIPT_DIR"/wiki_movie_plots_small.csv s3://$bucket_name/
}

# Create Minio single server
docker compose version
docker compose -f "$SCRIPT_DIR"/docker-compose.yaml up --wait
docker compose -f "$SCRIPT_DIR"/docker-compose.yaml ps

echo "Cluster is live."
upload

```

### `scripts/minio-test-helpers/docker-compose.yaml`

```yaml
services:
  minio:
    image: quay.io/minio/minio
    container_name: minio-test
    ports:
      - 9000:9000
      - 9001:9001
    command: server --console-address ":9001" /data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 5s
      timeout: 20s
      retries: 3

```

### `scripts/opensearch-test-helpers/common/docker-compose.yaml`

```yaml
services:
  opensearch:
    image: opensearchproject/opensearch:2.19.4
    container_name: opensearch-test
    ports:
      - 9247:9200
      - 9600:9600
    environment:
      - discovery.type=single-node
    healthcheck:
      test: curl --fail https://localhost:9200/_cat/health -ku 'admin:admin' >/dev/null || exit 1
      interval: 10s
      timeout: 30s
      retries: 3
```

### `scripts/opensearch-test-helpers/destination_connector/create_index.py`

```py
#!/usr/bin/env python3

from opensearch_cluster_config import (
    INDEX_NAME,
    mappings,
)
from opensearchpy import OpenSearch

print("Connecting to the OpenSearch cluster.")
client = OpenSearch(
    hosts=[{"host": "localhost", "port": 9247}],
    http_auth=("admin", "admin"),
    use_ssl=True,
    verify_certs=False,
    ssl_show_warn=False,
)
print(client.info())

print("Creating an OpenSearch index for testing ingest opensearch destination connector.")
response = client.indices.create(index=INDEX_NAME, body=mappings)
if not response["acknowledged"]:
    raise RuntimeError("failed to create index")

print("Succesfully created an OpenSearch index for testing opensearch ingest.")

```

### `scripts/opensearch-test-helpers/destination_connector/create-opensearch-instance.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(dirname "$(realpath "$0")")")

# Create the Opensearch cluster
docker compose version
docker compose -f "$SCRIPT_DIR"/common/docker-compose.yaml up --wait
docker compose -f "$SCRIPT_DIR"/common/docker-compose.yaml ps

echo "Cluster is live."
python "$SCRIPT_DIR"/destination_connector/create_index.py

```

### `scripts/opensearch-test-helpers/destination_connector/opensearch_cluster_config.py`

```py
import json

CLUSTER_URL = "http://localhost:9247"
INDEX_NAME = "ingest-test-destination"
USER = "admin"
PASSWORD = "admin"
MAPPING_PATH = (
    "scripts/opensearch-test-helpers/destination_connector/opensearch_elements_mappings.json"
)

with open(MAPPING_PATH) as f:
    mappings = json.load(f)

```

### `scripts/opensearch-test-helpers/source_connector/create-and-check-opensearch.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(dirname "$(dirname "$(realpath "$0")")")"

# Create the Opensearch cluster
docker compose version
docker compose -f "$SCRIPT_DIR"/common/docker-compose.yaml up --wait
docker compose -f "$SCRIPT_DIR"/common/docker-compose.yaml ps

echo "Cluster is live."
"$SCRIPT_DIR"/source_connector/create_and_fill_opensearch.py

```

### `scripts/performance/.gitignore`

```gitignore
benchmark_results
profile_results

```

### `scripts/performance/docs/book-war-and-peace-1225p.txt`

```txt
../../../example-docs/book-war-and-peace-1225p.txt
```

### `scripts/performance/docs/book-war-and-peace-1p.txt`

```txt
../../../example-docs/book-war-and-peace-1p.txt
```

### `scripts/performance/docs/example-10k-1p.html`

```html
../../../example-docs/example-10k-1p.html
```

### `scripts/performance/docs/example-10k-230p.html`

```html
../../../example-docs/example-10k-230p.html
```

### `scripts/performance/docs/handbook-1p.docx`

```docx
../../../example-docs/handbook-1p.docx
```

### `scripts/performance/docs/handbook-872p.docx`

```docx
../../../example-docs/handbook-872p.docx
```

### `scripts/performance/docs/science-exploration-1p.pptx`

```pptx
../../../example-docs/science-exploration-1p.pptx
```

### `scripts/performance/docs/science-exploration-369p.pptx`

```pptx
../../../example-docs/science-exploration-369p.pptx
```

### `scripts/performance/get-stats-name.sh`

```sh
#!/usr/bin/env bash

# get a string representing the system stats. we should be able to infer
# this from aws types, but this guarantees we have the info we need in all cases

# hack to get gpus available for processing
# assumes nvidia drivers available for inference tasks
if command -v nvidia-smi &>/dev/null; then
  gpu=$(nvidia-smi --query-gpu=name --format=csv,noheader | wc -l)
else
  gpu="0"
fi
if command -v sysctl >/dev/null && command -v system_profiler >/dev/null; then
  cpu=$(sysctl -n hw.logicalcpu_max)
  mem=$(sysctl -n hw.memsize | awk '{printf "%.0fGB",$0/1024/1024/1024}')
else
  cpu=$(getconf _NPROCESSORS_ONLN)
  mem=$(grep 'MemTotal' /proc/meminfo | awk '{printf "%.0fGB",$2/1024/1024}')
fi

echo "${cpu}cpu_${gpu}gpu_${mem}mem"

```

### `scripts/performance/requirements.txt`

```txt
flameprof>=0.4
memray>=1.7.0
snakeviz>=2.2.0
py-spy>=0.3.14

```

### `scripts/performance/run_partition.py`

```py
import os
import sys

from unstructured.partition.auto import partition

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(
            "Please provide the path to the file as the first argument and the strategy as the "
            "second argument.",
        )
        sys.exit(1)

    file_path = sys.argv[1]
    strategy = sys.argv[2]
    model_name = sys.argv[3] if len(sys.argv) > 3 else os.environ.get("PARTITION_MODEL_NAME")
    result = partition(file_path, strategy=strategy, model_name=model_name)
    # access element in the return value to make sure we got something back, otherwise error
    result[1]

```

### `scripts/performance/time_partition.py`

```py
import os
import sys
import time

from unstructured.partition.auto import partition


def warm_up_process(filename):
    warmup_dir = os.path.join(os.path.dirname(__file__), "warmup-docs")
    warmup_file = os.path.join(warmup_dir, f"warmup{os.path.splitext(filename)[1]}")

    if os.path.exists(warmup_file):
        partition(warmup_file, strategy="fast")
    else:
        partition(filename, strategy="fast")


def measure_execution_time(filename, iterations, strategy):
    total_time = 0.0

    for _ in range(iterations):
        start_time = time.time()
        partition(filename, strategy=strategy)
        end_time = time.time()
        execution_time = end_time - start_time
        total_time += execution_time

    average_time = total_time / iterations
    print("Average time:", average_time)


if __name__ == "__main__":
    filename = sys.argv[1]
    iterations = int(sys.argv[2])
    strategy = sys.argv[3]

    warm_up_process(filename)
    measure_execution_time(filename, iterations, strategy)

```

### `scripts/performance/warmup_docs/warmup.docx`

```docx
../../../example-docs/handbook-1p.docx
```

### `scripts/performance/warmup_docs/warmup.html`

```html
../../../example-docs/example-10k-1p.html
```

### `scripts/performance/warmup_docs/warmup.pptx`

```pptx
../../../example-docs/science-exploration-1p.pptx
```

### `scripts/performance/warmup_docs/warmup.txt`

```txt
../../../example-docs/book-war-and-peace-1p.txt
```

### `scripts/sftp-test-helpers/create-and-check-sftp.sh`

```sh
#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "$(realpath "$0")")

# Upload nested folder path to sftp server
function upload() {
  docker cp "$SCRIPT_DIR"/folder1/ sftp-test:/home/foo/upload/
}

# Create sftp server
docker compose version
docker compose -f "$SCRIPT_DIR"/docker-compose.yaml up --wait
docker compose -f "$SCRIPT_DIR"/docker-compose.yaml ps

echo "Cluster is live."
upload

```

### `scripts/sftp-test-helpers/docker-compose.yaml`

```yaml
services:
  sftp:
    image: atmoz/sftp
    container_name: sftp-test
    ports:
      - "47474:22"  # rarely used port in case standard port is used in CI
    command: foo:bar:::upload
    healthcheck:
      test: ["CMD-SHELL", "ssh -o 'BatchMode=true' -o 'StrictHostKeyChecking=no' healthcheck-invalid@localhost 2>&1 | grep -q 'Permission denied'"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### `scripts/shellcheck.sh`

```sh
#!/usr/bin/env bash

find . -name "*.sh" -exec shellcheck {} +

```

### `scripts/singlestore-test-helpers/docker-compose.yml`

```yml
services:
  singlestore:
    container_name: "singlestore"
    image: ghcr.io/singlestore-labs/singlestoredb-dev:latest
    platform: linux/amd64
    ports:
      - 3306:3306
      - 8080:8080
      - 9000:9000
    environment:
      - ROOT_PASSWORD=password
    volumes:
      - ./schema.sql:/init.sql

  # Allow docker compose up --wait to exit only when singlestore is healthy
  wait:
    image: hello-world:latest
    container_name: singlestore-waiter
    depends_on:
      singlestore:
        condition: service_healthy

```

### `scripts/singlestore-test-helpers/schema.sql`

```sql
CREATE DATABASE ingest_test;
USE ingest_test;

CREATE TABLE elements (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    element_id TEXT,
    text TEXT,
    embeddings Vector(384),
    type TEXT,
    url TEXT,
    version TEXT,
    data_source_date_created TIMESTAMP,
    data_source_date_modified TIMESTAMP,
    data_source_date_processed TIMESTAMP,
    data_source_permissions_data TEXT,
    data_source_url TEXT,
    data_source_version TEXT,
    data_source_record_locator JSON,
    category_depth INTEGER,
    parent_id TEXT,
    attached_filename TEXT,
    filetype TEXT,
    last_modified TIMESTAMP,
    file_directory TEXT,
    filename TEXT,
    languages TEXT,
    page_number TEXT,
    links TEXT,
    page_name TEXT,
    link_urls TEXT,
    link_texts TEXT,
    sent_from TEXT,
    sent_to TEXT,
    subject TEXT,
    section TEXT,
    header_footer_type TEXT,
    emphasized_text_contents TEXT,
    emphasized_text_tags TEXT,
    text_as_html TEXT,
    detection_class_prob DECIMAL,
    is_continuation BOOLEAN,
    orig_elements TEXT,
    coordinates_points TEXT,
    coordinates_system TEXT,
    coordinates_layout_width DECIMAL,
    coordinates_layout_height DECIMAL
);


```

### `scripts/sql-test-helpers/create-pgvector-schema.sql`

```sql
CREATE EXTENSION vector;

CREATE TABLE elements (
    id UUID PRIMARY KEY,
    element_id VARCHAR,
    text TEXT,
    embeddings vector(384),
    type VARCHAR,
    system VARCHAR,
    layout_width DECIMAL,
    layout_height DECIMAL,
    points TEXT,
    url TEXT,
    version VARCHAR,
    date_created TIMESTAMPTZ,
    date_modified TIMESTAMPTZ,
    date_processed TIMESTAMPTZ,
    permissions_data TEXT,
    record_locator TEXT,
    category_depth INTEGER,
    parent_id VARCHAR,
    attached_filename VARCHAR,
    filetype VARCHAR,
    last_modified TIMESTAMPTZ,
    file_directory VARCHAR,
    filename VARCHAR,
    languages VARCHAR [],
    page_number VARCHAR,
    links TEXT,
    page_name VARCHAR,
    link_urls VARCHAR [],
    link_texts VARCHAR [],
    sent_from VARCHAR [],
    sent_to VARCHAR [],
    subject VARCHAR,
    section VARCHAR,
    header_footer_type VARCHAR,
    emphasized_text_contents VARCHAR [],
    emphasized_text_tags VARCHAR [],
    text_as_html TEXT,
    detection_class_prob DECIMAL
);


```

### `scripts/sql-test-helpers/create-sql-instance.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(realpath "$0")")
DATABASE_NAME=$1
DATABASE_FILE_PATH=$2

# Create the SQL instance
if [[ "$DATABASE_NAME" != "sqlite" ]]; then
  docker compose version
  docker compose -f "$SCRIPT_DIR"/docker-compose-"$DATABASE_NAME".yaml up --wait
  docker compose -f "$SCRIPT_DIR"/docker-compose-"$DATABASE_NAME".yaml ps
else
  touch "$DATABASE_FILE_PATH"

  python "$SCRIPT_DIR"/create-sqlite-schema.py "$DATABASE_FILE_PATH"
fi

echo "$DATABASE_NAME instance is live."

```

### `scripts/sql-test-helpers/create-sqlite-schema.py`

```py
import sqlite3
import sys
from pathlib import Path

if __name__ == "__main__":
    connection = sqlite3.connect(database=sys.argv[1])

    query = None
    script_path = (Path(__file__).parent / Path("create-sqlite-schema.sql")).resolve()
    with open(script_path) as f:
        query = f.read()
    cursor = connection.cursor()
    cursor.executescript(query)
    connection.close()

```

### `scripts/sql-test-helpers/create-sqlite-schema.sql`

```sql
CREATE TABLE elements (
    id TEXT PRIMARY KEY,
    element_id TEXT,
    text TEXT,
    embeddings TEXT,
    type TEXT,
    system TEXT,
    layout_width REAL,
    layout_height REAL,
    points TEXT,
    url TEXT,
    version TEXT,
    date_created TEXT,
    date_modified TEXT,
    date_processed TEXT,
    permissions_data TEXT,
    record_locator TEXT,
    category_depth INTEGER,
    parent_id TEXT,
    attached_filename TEXT,
    filetype TEXT,
    last_modified TEXT,
    file_directory TEXT,
    filename TEXT,
    languages TEXT,
    page_number TEXT,
    links TEXT,
    page_name TEXT,
    link_urls TEXT,
    link_texts TEXT,
    sent_from TEXT,
    sent_to TEXT,
    subject TEXT,
    section TEXT,
    header_footer_type TEXT,
    emphasized_text_contents TEXT,
    emphasized_text_tags TEXT,
    text_as_html TEXT,
    detection_class_prob DECIMAL
);

```

### `scripts/sql-test-helpers/docker-compose-pgvector.yaml`

```yaml
services:
  pgvector:
    image: ankane/pgvector
    restart: always
    container_name: pgvector_dest
    ports:
     - 5433:5432
    environment:
      POSTGRES_DB: elements
      POSTGRES_USER: unstructured
      POSTGRES_PASSWORD: test
    volumes:
      - ./create-pgvector-schema.sql:/docker-entrypoint-initdb.d/init.sql

```

### `scripts/sync_fork.sh`

```sh
#!/bin/bash

# Simple script to recreate a fork branch as a new branch in the current repository
# Usage: ./sync_fork.sh <fork_url> <fork_branch>

set -e

if [ $# -ne 2 ]; then
  echo "Usage: $0 <fork_url> <fork_branch>"
  echo "Example: $0 https://github.com/user/fork.git feature-branch"
  exit 1
fi

FORK_URL="$1"
FORK_BRANCH="$2"

echo "Adding fork as remote..."
git remote add fork "$FORK_URL" 2>/dev/null || git remote set-url fork "$FORK_URL"

echo "Fetching fork..."
git fetch fork

echo "Creating new branch '$FORK_BRANCH' with fork's changes..."
git checkout -b "$FORK_BRANCH" "fork/$FORK_BRANCH"

echo "Removing fork remote..."
git remote remove fork

echo "Done! You're now on branch '$FORK_BRANCH' with the fork's changes. Fork remote has been removed."

```

### `scripts/user/split-pdf.sh`

```sh
#!/usr/bin/env bash

# Usage: ./split_pdf.sh filename.pdf

set -e

PDF_FILE="$1"
DEFAULT_SPLIT_SIZE=5
SPLIT_SIZE=${PDF_SPLIT_PAGE_SIZE:-$DEFAULT_SPLIT_SIZE}

# Validate that SPLIT_SIZE is an integer
if ! [[ "$SPLIT_SIZE" =~ ^[0-9]+$ ]]; then
  echo "Error: PDF_SPLIT_PAGE_SIZE must be an integer."
  exit 1
fi

DEFAULT_DIR="$HOME/tmp/pdf-splits"
PDF_SPLITS_DIR="${PDF_SPLITS_DIR:-$DEFAULT_DIR}"
PDF_NAME=$(basename "$PDF_FILE" .pdf)
MD5_SUM=$(md5sum "$PDF_FILE" | awk '{ print $1 }')
PDF_DIR="$PDF_SPLITS_DIR/$PDF_NAME-${MD5_SUM}_split-${SPLIT_SIZE}"

# Create directory if it does not exist
mkdir -p "$PDF_DIR"

# Total number of pages
TOTAL_PAGES=$(qpdf --show-npages "$PDF_FILE")

# Split PDF into $SPLIT_SIZE-page chunks
START_PAGE=1
while [ "$START_PAGE" -le "$TOTAL_PAGES" ]; do
  END_PAGE=$((START_PAGE + SPLIT_SIZE - 1))
  if [ "$END_PAGE" -gt "$TOTAL_PAGES" ]; then
    END_PAGE=$TOTAL_PAGES
  fi
  OUTPUT_FILE="$PDF_DIR/${PDF_NAME}_pages_${START_PAGE}_to_${END_PAGE}.pdf"
  qpdf "$PDF_FILE" --pages . "$START_PAGE"-"$END_PAGE" -- "$OUTPUT_FILE"
  echo "Created $OUTPUT_FILE"
  START_PAGE=$((END_PAGE + 1))
done

echo "All parts have been saved to $PDF_DIR"

```

### `scripts/weaviate-test-helpers/create_schema.py`

```py
#!/usr/bin/env python3

import json
import os

import weaviate

weaviate_host_url = os.getenv("WEAVIATE_HOST_URL", "http://localhost:8080")
class_name = os.getenv("WEAVIATE_CLASS_NAME", "Elements")
new_class = None

with open("./scripts/weaviate-test-helpers/elements.json") as f:
    new_class = json.load(f)

client = weaviate.Client(
    url=weaviate_host_url,
)

if client.schema.exists(class_name):
    client.schema.delete_class(class_name)
client.schema.create_class(new_class)

```

### `scripts/weaviate-test-helpers/create-weaviate-instance.sh`

```sh
#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(realpath "$0")")

# Create the Weaviate instance
docker compose version
docker compose -f "$SCRIPT_DIR"/docker-compose.yml up --wait
docker compose -f "$SCRIPT_DIR"/docker-compose.yml ps

echo "Instance is live."
"$SCRIPT_DIR"/create_schema.py

```

### `scripts/weaviate-test-helpers/docker-compose.yml`

```yml
version: '3.4'
services:
  weaviate:
    command:
    - --host
    - 0.0.0.0
    - --port
    - '8080'
    - --scheme
    - http
    image: semitechnologies/weaviate:1.35.3
    ports:
    - 8080:8080
    restart: on-failure:0
    environment:
      QUERY_DEFAULTS_LIMIT: 25
      AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED: 'true'
      PERSISTENCE_DATA_PATH: '/var/lib/weaviate'
      DEFAULT_VECTORIZER_MODULE: 'none'
      ENABLE_MODULES: ''
      CLUSTER_HOSTNAME: 'node1'

```

### `test_unstructured_ingest/.gitignore`

```gitignore
structured-output
download
expected-text-output/**
text-output/**
metrics-tmp/**
structured-output-eval/**

```

### `test_unstructured_ingest/check-num-dirs-output.sh`

```sh
#!/usr/bin/env bash

# Description: Validate that the number of directories in the output directory is as expected.
#
# Arguments:
#   - $1: The expected number of directories in the output directory.
#   - $2: Name of the output folder. This is used to determine the structured output path.

set +e

EXPECTED_NUM_DIRS=$1
OUTPUT_FOLDER_NAME=$2
SCRIPT_DIR=$(dirname "$(realpath "$0")")
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME

NUMBER_OF_FOUND_DIRS="$(find "$OUTPUT_DIR" -type d -exec printf '.' \; | wc -c | xargs)"

# Note: single brackets and "-ne" operator were necessary for evaluation in CI
if [ "$NUMBER_OF_FOUND_DIRS" -ne "$EXPECTED_NUM_DIRS" ]; then
  echo
  echo "$EXPECTED_NUM_DIRS directories were expected to be found."
  echo "$NUMBER_OF_FOUND_DIRS directories were found instead."
  echo "Name of the directories found:"
  find "$OUTPUT_DIR" -type d
  exit 1
fi

```

### `test_unstructured_ingest/check-num-files-expected-output.sh`

```sh
#!/usr/bin/env bash

# Description: Validate that the number of files in the output directory is as expected.
#
# Arguments:
#   - $1: The expected number of files in the output directory.
#   - $2: Name of the output folder. This is used to determine the output directory and the expected output directory paths.
#   - $3: The expected size of the output directory in bytes (e.g. "10k").

set +e

EXPECTED_NUM_FILES=$1
OUTPUT_FOLDER_NAME=$2
EXPECTED_SIZE=$3
SCRIPT_DIR=$(dirname "$(realpath "$0")")
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
EXPECTED_OUTPUT_DIR=$OUTPUT_ROOT/expected-structured-output/$OUTPUT_FOLDER_NAME
NUM_FILES=$(find "$EXPECTED_OUTPUT_DIR" -type f -size +"$EXPECTED_SIZE" | wc -l)

# Note: single brackets and "-ne" operator were necessary for evaluation in CI
if [ "$NUM_FILES" -ne "$EXPECTED_NUM_FILES" ] && [ "$OVERWRITE_FIXTURES" != "true" ]; then
  echo "The test fixtures in $EXPECTED_OUTPUT_DIR look suspicious."
  echo "Expected $EXPECTED_NUM_FILES files, but found $NUM_FILES files found."
  echo "Did you overwrite test fixtures with bad outputs?"
  exit 1
fi

```

### `test_unstructured_ingest/check-num-files-output.sh`

```sh
#!/usr/bin/env bash

# Description: Validate that the number of files in the output directory is as expected.
#
# Arguments:
#   - $1: The expected number of files in the output directory.
#   - $2: Name of the output folder. This is used to determine the structured output path.

set +e

EXPECTED_NUM_FILES=$1
OUTPUT_FOLDER_NAME=$2
SCRIPT_DIR=$(dirname "$(realpath "$0")")
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
num_files_created="$(find "$OUTPUT_DIR" -type f -exec printf '.' \; | wc -c | xargs)"

# Note: single brackets and "-ne" operator were necessary for evaluation in CI
if [ "$num_files_created" -ne "$EXPECTED_NUM_FILES" ] && [ "$OVERWRITE_FIXTURES" != "true" ]; then
  echo
  echo "ERROR: $num_files_created files created. $EXPECTED_NUM_FILES files should have been created."
  exit 1
fi

```

### `test_unstructured_ingest/check-num-rows-and-columns-output.sh`

```sh
#!/usr/bin/env bash

# Description: Validate that the number of rows in the output dataframe is as expected.
#
# Arguments:
#   - $1: The expected number of rows in the dataframe.
#   - $2: The path for the structured output file.

SCRIPT_PATH="scripts/airtable-test-helpers/print_num_rows_df.py"

EXPECTED_ROWS=$1
OUTPUT_FILE_NAME=$2

# Run the Python script and capture its output
ROWS=$(python "$SCRIPT_PATH" --structured-output-file-path "$OUTPUT_FILE_NAME")

# Compare the actual output with the expected output
if [[ $ROWS -ne $EXPECTED_ROWS ]]; then
  echo
  echo "ERROR:  $ROWS rows created. $EXPECTED_ROWS rows should have been created."
  exit 1
fi

```

### `test_unstructured_ingest/clean-permissions-files.sh`

```sh
#!/usr/bin/env bash

# Description: Delete (cleanup) permissions files in a folder, so that they are not included in
#              text diff tests.
#
# Arguments:
#   - $1: Name of the folder to do the cleanup operation in.

set +e
if [ "$#" -ne 1 ]; then
  echo "Please provide a folder to clean the files in: $0 <folder_path>"
  exit 1
fi

folder_path="$1"
if [ ! -d "$folder_path" ]; then
  echo "'$folder_path' is not a directory. Please provide a folder / directory."
  exit 1
fi

for file in "$folder_path"/*_SEP_*; do
  if [ -e "$file" ]; then
    rm "$file"
  fi
done

echo "Completed cleanup for permissions files"

```

### `test_unstructured_ingest/cleanup.sh`

```sh
#!/usr/bin/env bash

function cleanup_dir() {
  # NOTE(crag): for developers that want to always clean up .json outputs, etc., set
  # export UNSTRUCTURED_CLEANUP_DEV_FIXTURES=1
  if [ "$CI" != "true" ] &&
    [ -n "$UNSTRUCTURED_CLEANUP_DEV_FIXTURES" ] &&
    [ "$UNSTRUCTURED_CLEANUP_DEV_FIXTURES" != "0" ]; then
    return 0
  fi
  local dir_to_cleanup="${1}"
  echo "--- Running cleanup of $dir_to_cleanup ---"

  if [ -d "$dir_to_cleanup" ]; then
    echo "cleaning up directory: $dir_to_cleanup"
    rm -rf "$dir_to_cleanup"
  else
    echo "$dir_to_cleanup does not exist or is not a directory, skipping deletion"
  fi

  echo "--- Cleanup done ---"
}

```

### `test_unstructured_ingest/evaluation-ingest-cp.sh`

```sh
#!/usr/bin/env bash

set -eu

SCRIPT_DIR=$(dirname "$(realpath "$0")")
cd "$SCRIPT_DIR"/.. || exit 1

EXPECTED_OUTPUTS_DIR=$1
CONNECTOR_TYPE=$2

EVAL_OUTPUT_ROOT=${EVAL_OUTPUT_ROOT:-$SCRIPT_DIR}
EVAL_OUTPUT_DIR=$EVAL_OUTPUT_ROOT/structured-output-eval/$CONNECTOR_TYPE

mkdir -p "$EVAL_OUTPUT_DIR"

while IFS= read -r json_filename; do
  if find "$EXPECTED_OUTPUTS_DIR" -name "$json_filename" -print -quit | grep -q .; then
    echo "evaluation: copying $json_filename to $EVAL_OUTPUT_DIR"
    find "$EXPECTED_OUTPUTS_DIR" -name "$json_filename" -exec cp {} "$EVAL_OUTPUT_DIR" \;
  fi
done <"$SCRIPT_DIR/metrics/metrics-json-manifest.txt"

```

### `test_unstructured_ingest/expected-structured-output-html/confluence-diff/MFS/1605942.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="8cf6f327a51bcafbe61f759da949eae4">
   Copy and paste this section for each week.
  </p>
  <p class="UncategorizedText" id="0e80063a2a29a298f8f761e73d131d6c">
   Win
  </p>
  <p class="UncategorizedText" id="4669e057140b5179bcccddf030564faf">
   Needs input
  </p>
  <p class="UncategorizedText" id="85e720f616ed2097311e2e844a1e9e37">
   Focus
  </p>
  <table class="Table" id="6a881c411fad6112029b96cc9e477d1e" style="border: 1px solid black; border-collapse: collapse;">
   <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">
     Notes
    </td>
    <td style="border: 1px solid black;">
    </td>
   </tr>
   <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">
     Important Links
    </td>
    <td style="border: 1px solid black;">
    </td>
   </tr>
  </table>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/confluence-diff/testteamsp/1867777.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="05ef452e8c54005abc4c0666d8404dfd">
   Testdoc1 has only this text for 10 times: 1
  </p>
  <p class="NarrativeText" id="683293ea6931fb5021d4adaec2c4fce7">
   Testdoc1 has only this text for 10 times: 2
  </p>
  <p class="NarrativeText" id="54da27b49c6c112ed419e6b8895be2c4">
   Testdoc1 has only this text for 10 times: 3
  </p>
  <p class="NarrativeText" id="1a9848c57a6d51bdc462e33fbc95602d">
   Testdoc1 has only this text for 10 times: 4
  </p>
  <p class="NarrativeText" id="a30c9fa2274f7308a14fec6454deb88d">
   Testdoc1 has only this text for 10 times: 5
  </p>
  <p class="NarrativeText" id="b030841bd2c052c02beffba231c16613">
   Testdoc1 has only this text for 10 times: 6
  </p>
  <p class="NarrativeText" id="cfc808c5bcc358e14b673d6202c2f09d">
   Testdoc1 has only this text for 10 times: 7
  </p>
  <p class="NarrativeText" id="a51cb5b3992630d3bfffe014a285370f">
   Testdoc1 has only this text for 10 times: 8
  </p>
  <p class="NarrativeText" id="f05150f3d4675e976a42a5ea8055b1fe">
   Testdoc1 has only this text for 10 times: 9
  </p>
  <p class="NarrativeText" id="1ad195d0303ee0f0924b4f41b0335a56">
   Testdoc1 has only this text for 10 times: 10
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/confluence-diff/testteamsp/2589690.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="273902edca72a67af1614267e617ea06">
   Test text
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/confluence-diff/testteamsp/2589704.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="9c477a45b1db458b12a2a350ecb57a36">
   Test text
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/discord/1099601456321003600.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="087bf46fb6864a7a3f3ebd7560205656">
   Why did the bot go on a diet? Because it had too many mega-bytes! This is a bot
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-1-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="e9e2949adb0a1004997619eb751aaa52">
   American
  </h1>
  <h1 class="Title" id="05a3d52e5ecf195049b8612341f75d61">
   Wallace McCutcheon and Ediwin S. Porter
  </h1>
  <p class="NarrativeText" id="b5489ccb83602726bdb58ba6db57b0f1">
   Boone's daughter befriends an Indian maiden as Boone and his companion start out on a hunting expedition. While he is away, Boone's cabin is attacked by the Indians, who set it on fire and abduct Boone's daughter. Boone returns, swears vengeance, then heads out on the trail to the Indian camp. His daughter escapes but is chased. The Indians encounter Boone, which sets off a huge fight on the edge of a cliff. A burning arrow gets shot into the Indian camp. Boone gets tied to the stake and tortured. The burning arrow sets the Indian camp on fire, causing panic. Boone is rescued by his horse, and Boone has a knife fight in which he kills the Indian chief.[2]
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-2-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="304a2118c16f40aaa72398eb7e4fe5b0">
   American
  </h1>
  <h1 class="Title" id="5582d78d3be8d660dc39830d4dc9256f">
   Unknown
  </h1>
  <p class="NarrativeText" id="4c13d94538d473f35bda2d067bb3a76b">
   Before heading out to a baseball game at a nearby ballpark, sports fan Mr. Brown drinks several highball cocktails. He arrives at the ballpark to watch the game, but has become so inebriated that the game appears to him in reverse, with the players running the bases backwards and the baseball flying back into the pitcher's hand. After the game is over, Mr. Brown is escorted home by one of his friends. When they arrive at Brown's house, they encounter his wife who becomes furious with the friend and proceeds to physically assault him, believing he is responsible for her husband's severe intoxication.[1]
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-3-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="a41a129d5d7ec934283100f0bb3085c4">
   American
  </h1>
  <h1 class="Title" id="8881a4bd8e4472dd16a594511512caae">
   Edwin Stanton Porter
  </h1>
  <p class="NarrativeText" id="30a44c977d9cfa13e44ecc89283747be">
   The plot is that of a black woman going to the dentist for a toothache and being given laughing gas. On her way walking home, and in other situations, she can't stop laughing, and everyone she meets "catches" the laughter from her, including a vendor and police officers.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-4-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="f9ccdf830b75aa444d036fbd9b526a33">
   American
  </h1>
  <h1 class="Title" id="4fa3bb0ca3e8b99e7a779e81ce71d416">
   D. W. Griffith
  </h1>
  <p class="NarrativeText" id="8bdb952f37e05cbfd37e2985ee367cd7">
   On a beautiful summer day a father and mother take their daughter Dollie on an outing to the river. The mother refuses to buy a gypsy's wares. The gypsy tries to rob the mother, but the father drives him off. The gypsy returns to the camp and devises a plan. They return and kidnap Dollie while her parents are distracted. A rescue crew is organized, but the gypsy takes Dollie to his camp. They gag Dollie and hide her in a barrel before the rescue party gets to the camp. Once they leave the gypsies and escapes in their wagon. As the wagon crosses the river, the barrel falls into the water. Still sealed in the barrel, Dollie is swept downstream in dangerous currents. A boy who is fishing in the river finds the barrel, and Dollie is reunited safely with her parents.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-5-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="8c78d776a17a1727e0e67e890b5ad930">
   American
  </h1>
  <h1 class="Title" id="5470e5b312ccb9d59a5aec98450fb247">
   D. W. Griffith
  </h1>
  <p class="NarrativeText" id="b7473183a1195f3839d0d61a6e8466b7">
   A thug accosts a girl as she leaves her workplace but a man rescues her. The thug vows revenge and, with the help of two friends, attacks the girl and her rescuer again as they're going for a walk. This time they succeed in kidnapping the rescuer. He is bound and gagged and taken away in a cart. The girl runs home and gets help from several neighbors. They track the ruffians down to a cabin in the mountains where the gang has trapped their victim and set the cabin on fire. A thug and Rescuer fight on the roof of the house.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-6-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="be5a065c5ce087943e789d60ebf73a13">
   American
  </h1>
  <h1 class="Title" id="8e05d226053596882ba451abf0fd1f7f">
   D.W. Griffith
  </h1>
  <p class="NarrativeText" id="70a181f162c5d24c60e9e32ad831b6a2">
   A young couple decides to elope after being caught in the midst of a romantic moment by the woman's angry father. They make plans to leave, but a thief discovers their plans and hides in their trunk and waits for the right moment to steal their belongings.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-7-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="662547c6b9390676fcaf369519da5d79">
   American
  </h1>
  <h1 class="Title" id="24032caa13d3d190437912a8e871de7c">
   D. W. Griffith
  </h1>
  <p class="NarrativeText" id="fff676f2a9fb612d97b11d2f499e9703">
   A white girl (Florence Lawrence) rejects a proposal from an Indian brave (Charles Inslee) in this early one-reel Western melodrama. Despite the rejection, the Indian still comes to the girl's defense when she is abducted by his warring tribe. In her first year in films, Florence Lawrence was already the most popular among the Biograph Company's anonymous stock company players. By 1909, she was known the world over as "The Biograph Girl."
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-8-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="a500347d938ff5f3441fd2e2847721ce">
   American
  </h1>
  <h1 class="Title" id="fa154ac3783f072a30830b2d7a922c96">
   Unknown
  </h1>
  <p class="NarrativeText" id="59ce6682a32c740ec92d3768caa9bcdf">
   No prints of the first American film adaptation of A Christmas Carol are known to exist,[1] but The Moving Picture World magazine provided a scene-by-scene description before the film's release.[2] Scrooge goes into his office and begins working. His nephew, along with three women who wish for Scrooge to donate enter. However, Scrooge dismisses them. On the night of Christmas Eve, his long-dead partner Jacob Marley comes as a ghost, warning him of a horrible fate if he does not change his ways. Scrooge meets three spirits that show Scrooge the real meaning of Christmas, along with his grave, the result of his parsimonious ways. The next morning, he wakes and realizes the error of his ways. Scrooge was then euphoric and generous for the rest of his life.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/elasticsearch/movies-9-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="6c76a6263b7302899c540e3350cdbd2b">
   American
  </h1>
  <h1 class="Title" id="49a2c9c74be02fc8fccbd73a83e9bc01">
   D. W. Griffith
  </h1>
  <p class="NarrativeText" id="f78fe3cd03eff1385fe290de14d2538f">
   The film opens in a town on the Mexican border. A poker game is going on in the local saloon. One of the players cheats and is shot dead by another of the players, a Mexican named Pedro. In the uproar that follows Pedro is wounded as he escapes from the saloon. The sheriff is called, who tracks Pedro to his home but Pedro kills the sherriff too. While Pedro hides, his wife Juanita, is arrested on suspicion of murdering the sheriff. Pedro rescues her from the town jail and the two head for the Mexican border. Caught by the posse before they reach the border, Juanita is killed and the film ends with Pedro being arrested and taken back to town.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/gcs/nested-1/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/gcs/nested-2/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/github/test.html.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="218722ac66e142a570ab2053b430c6c4">
   Downloadify Example
  </h1>
  <p class="UncategorizedText" id="bf0fab1925c4b2cbb23a53afce28ebd2">
   More info available at the Github Project Page
  </p>
  <h1 class="Title" id="395aed29cd13842fede90a1a8677aa4b">
   Downloadify Invoke Script For This Page
  </h1>
  <p class="NarrativeText" id="2e22c39e004cb7d566294080c976efc8">
   Downloadify.create('downloadify',{
  filename: function(){
    return document.getElementById('filename').value;
  },
  data: function(){ 
    return document.getElementById('data').value;
  },
  onComplete: function(){ 
    alert('Your File Has Been Saved!'); 
  },
  onCancel: function(){ 
    alert('You have cancelled the saving of this file.');
  },
  onError: function(){ 
    alert('You must put something in the File Contents or there will be nothing to save!'); 
  },
  swf: 'media/downloadify.swf',
  downloadImage: 'images/download.png',
  width: 100,
  height: 30,
  transparent: true,
  append: false
});
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/google-drive/fake.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="56d531394823d81787d77a04462ed096">
   Lorem ipsum dolor sit amet.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/google-drive/nested/fake.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="56d531394823d81787d77a04462ed096">
   Lorem ipsum dolor sit amet.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/google-drive/test-drive-doc.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="cc23ac9998df1db62b795ec4e5133ab0">
   Title
  </p>
  <p class="NarrativeText" id="9cf7b2535e79eeadfe65a5906eb35f28">
   This is a good reason to continue
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/calls/41286477879.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="7997025526d4d565f2442e6c10be4c3d">
   Call with Testing Ipsum
  </h1>
  <p class="NarrativeText" id="1111265d062cb14df259b8a212466554">
   &lt;div style="" dir="auto" data-top-level="true"&gt;&lt;p style="margin:0;"&gt;Log discussing details on call done with Testing Ipsum contact at 5:00pm.&lt;/p&gt;&lt;/div&gt;
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/calls/41287834137.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="c0def31728796aed183f6dfbf3d9427a">
   Call with Brian Halligan (Sample Contact)
  </h1>
  <p class="NarrativeText" id="d032578e24d79543c9d3ff19c4e28e0b">
   &lt;p&gt;Sample call with sample contact. This is &lt;strong&gt;a line with rich formatted text.&lt;/strong&gt;&lt;/p&gt;
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/communications/41286064390.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="1d6962febddd077e744ea3fbe536c401">
   &lt;div style="" dir="auto" data-top-level="true"&gt;&lt;p style="margin:0;"&gt;Hello, this is a message to remind you to call me later today. &lt;/p&gt;&lt;/div&gt;
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/communications/41286467154.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="4fcb37fab7354ef2e311ac36e15c18f1">
   &lt;div style="" dir="auto" data-top-level="true"&gt;&lt;p style="margin:0;"&gt;Call completed. Suggested scheduling a more formal meeting.&lt;/p&gt;&lt;/div&gt;
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/emails/41287832127.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="943c829d21e33f9ec66889a65c0c03d6">
   Contacted support (https://www.google.com/) for this issue. These are the findings:
  </p>
  <li class="ListItem" id="daa2adf80f23aa93a06c6eb2ab1cfd7d">
   Formatted text with highlights
  </li>
  <li class="ListItem" id="640a23a31e80a6767925f02d87f59f5b">
   Optional bullet point
  </li>
  <h1 class="Title" id="5fb455e34e526910860e23ac214648af">
   Additionally:
  </h1>
  <li class="ListItem" id="cf41ec670335cb9ac0b2a386ecb56c07">
   1. These
  </li>
  <li class="ListItem" id="48ac7709f471590bfdd65aeedb031601">
   2. Are numbered
  </li>
  <li class="ListItem" id="fd8fdb53c2f0eeccf4db8da0a4d7a979">
   3. Points on a list.
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/notes/41287833179.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="50fe8dc3fbba3d0e84ac72c01a271ec0">
   &lt;div style="" dir="auto" data-top-level="true"&gt;&lt;p style="margin:0;"&gt;This is a test document to use for unit tests.&lt;/p&gt;&lt;p style="margin:0;"&gt;Doylestown, PA 18901&lt;/p&gt;&lt;p style="margin:0;"&gt;Important points:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;p style="margin:0;"&gt;Hamburgers are delicious&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p style="margin:0;"&gt;Dogs are the best&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p style="margin:0;"&gt;I love fuzzy blankets&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;&lt;/div&gt;
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/products/2362691415.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="f63f01fb19b2422ca6495971aadc7561">
   Example product description. This is a text containing relevant information pertaining to ProductA. The text represents a non-existing product created as sample data for testing purposes.
  </p>
  <h1 class="Title" id="fed6cc72720b0209ce80f90bae2876e4">
   opt2-value;Option3
  </h1>
  <h1 class="Title" id="bb4bc852ab975791f03c2b872b9b2537">
   opt2-value;Option3
  </h1>
  <h1 class="Title" id="ed14f7a0108b5a2d056d5b2857c3ba92">
   opt2-value;Option3
  </h1>
  <h1 class="Title" id="20831e04cc99732c76e4ab3df1b4bc45">
   opt2-value;Option3
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/products/2362691416.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="49c58a72c66369148b96b71a7e8a8ab6">
   Example product description. This is a text containing relevant information pertaining to ProductB. The text represents a non-existing product created as sample data for testing purposes.
  </p>
  <h1 class="Title" id="8681d3198190c73b963662e7b6a8b2c7">
   Default-opt1-value;opt2-value;Option3
  </h1>
  <h1 class="Title" id="94f33a80d52dd2539b365f10ffb18d75">
   Default-opt1-value;opt2-value;Option3
  </h1>
  <h1 class="Title" id="a63882ecb786a35ee16da2cff1b65299">
   Default-opt1-value;opt2-value;Option3
  </h1>
  <h1 class="Title" id="b546c218e486d69840b11292ccff8214">
   Default-opt1-value;opt2-value;Option3
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/products/2362691417.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="5a20d34e3e2c6e3b29bd47efe2fe2dbc">
   Example product description. This is a text containing relevant information pertaining to ProductC. The text represents a non-existing product created as sample data for testing purposes.
  </p>
  <h1 class="Title" id="8313892d35068450affbb5812bab4274">
   Default-opt1-value
  </h1>
  <h1 class="Title" id="a7c60aa9badccc8e53326158e95eac2c">
   Default-opt1-value
  </h1>
  <h1 class="Title" id="d672ff4d0389279eac7710906af2e754">
   Default-opt1-value
  </h1>
  <h1 class="Title" id="3a9be902285f94bed43648dd19248a20">
   Default-opt1-value
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/tickets/1976928828.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fd20671744e1d3c9ae59a0c191968dae">
   New testing ticket
  </p>
  <p class="NarrativeText" id="d2cfe6a182677406a709cd96438a9ac9">
   This is a testing ticket. This text is used for testing purposes and is meant to represent a block of content within a ticket in the ticket description field. The remains of this is text is just filler.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/tickets/2002294392.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="35a1916e54745e2962b10e0e20ebf05a">
   Issue with tests
  </h1>
  <p class="NarrativeText" id="21d773f14ac7182d556fe92eb1fa1101">
   There's no issue, only another sample ticket for testing purposes.
  </p>
  <p class="NarrativeText" id="806bff0a2334b447631bc536fa31881e">
   This is an empty custom property.
  </p>
  <p class="NarrativeText" id="48885c342b4049f0d376ae5381788df0">
   This is an empty custom property.
  </p>
  <p class="NarrativeText" id="6e5ec9d255a6eab24548091f4d330a88">
   This is an empty custom property.
  </p>
  <p class="NarrativeText" id="1d4569c9e39dc07803a085a4ca9d9de4">
   This is an empty custom property.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/hubspot/tickets/2002301007.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="bfcdd0325fb4021155d389ee0e854d37">
   Another testing ticket
  </p>
  <p class="NarrativeText" id="5fdd07961152e5d232be159b18ab9a85">
   This is another testing ticket:
  </p>
  <li class="ListItem" id="041eccd9166fc672ad6f7977c01dfe94">
   So far there are a couple of tickets
  </li>
  <li class="ListItem" id="816f928f9e6436763fe83de91a7829f0">
   This and 'New testing ticket'
  </li>
  <p class="NarrativeText" id="e6a3d76d71a34c38e69336842cd82146">
   Adding text to the multiline custom property.
  </p>
  <p class="NarrativeText" id="f4b93d97c22f4148ee2b7477bb9e41fe">
   Adding text to the multiline custom property.
  </p>
  <p class="NarrativeText" id="d1467fad9ed2840c77f9533450aa424c">
   Adding text to the multiline custom property.
  </p>
  <p class="NarrativeText" id="2e1a70e014ef30008780f16dacdac4b7">
   Adding text to the multiline custom property.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/kafka/fake-topic.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="8f574cb913e5d32ce4cea48cb73ef537">
   May 5, 2023
  </p>
  <h1 class="Title" id="929719c4916d0467030a4ca91645d4b6">
   To Whom it May Concern:
  </h1>
  <p class="NarrativeText" id="0442d409994665cebb0374e563803d2d">
   There were 20,000 bottles of water, 10,000 blankets, and 200 laptops delivered on January 23, 2023. A total of 3 trucks were used for 15 hours.
  </p>
  <p class="UncategorizedText" id="df197ce710970cdeccadd9d89229543b">
   Best Regards,
  </p>
  <h1 class="Title" id="b017fcb835c7f553160252356420acd3">
   Mallori
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/local-single-file-with-encoding/fake-html-cp1252.html.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="a59f117741c76dca0bc8f5ee72e2010b">
   My First Heading
  </h1>
  <p class="UncategorizedText" id="82eda2671c5ead903683b67b0f8e3f29">
   My first paragraph.
  </p>
  <p class="UncategorizedText" id="d536ba7636a9a4603a81b358d1fe2590">
   Some text with CP1252-specific characters:
  </p>
  <div class="CodeSnippet" id="3b8ca5305e52587b8fbbfcd994de0667">
   Die schöne Frau hat einen Kaffee mit Kuchen gegessen. Sie sagte: "Das war köstlich!" und lächelte dabei. Der Preis betrug 15,50 €.
L'été était trčs chaud cette année. J'ai acheté un café au lait pour 3,50 €. C'était délicieux ! L'homme a dit : "C'est parfait !"
El nińo comió paella con ńoquis. La seńora dijo: "ˇQué rico!" y pagó 25,75 €. El restaurante tenía un menú del día.
Kvinnan ĺt köttbullar med lingonsylt. Hon sa: "Det var fantastiskt!" och betalade 45,90 €. Mannen frĺgade: "Vill du ha mer?"
O Joăo comprou um café por 2,50 €. Ele disse: "Está ótimo!" e sorriu. A mulher perguntou: "Quer mais alguma coisa?"
De vrouw dronk koffie met koekjes. Ze zei: "Het was heerlijk!" en betaalde 4,25 €. Het kind vroeg: "Mag ik ook wat?"
  </div>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/mongodb/659daefa21dd8c9054b084b6.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="21703082899d3aaf8d91f0a8184ec54d">
   1901
  </p>
  <h1 class="Title" id="6652c306435022b5e069af3c9a019d68">
   Kansas Saloon Smashers
  </h1>
  <h1 class="Title" id="25a471985ce05a91f31ec65d7ce055be">
   American
  </h1>
  <h1 class="Title" id="f6e049cdc142a95526d4b46fabd7c13e">
   Unknown
  </h1>
  <h1 class="Title" id="cca1789215d3d1a7b153fd69adb69acb">
   nan
  </h1>
  <h1 class="Title" id="63aac142fce6a6f98097d0899cfe5322">
   unknown
  </h1>
  <h1 class="Title" id="5dbf97352fff14dd8ad14b682aa4d0e1">
   https://en.wikipedia.org/wiki/Kansas_Saloon_Smashers
  </h1>
  <p class="NarrativeText" id="585979c5b838e8b3fc6b5152053e3069">
   A bartender is working at a saloon, serving drinks to customers. After he fills a stereotypically Irish man's bucket with beer, Carrie Nation and her followers burst inside. They assault the Irish man, pulling his hat over his eyes and then dumping the beer over his head. The group then begin wrecking the bar, smashing the fixtures, mirrors, and breaking the cash register. The bartender then sprays seltzer water in Nation's face before a group of policemen appear and order everybody to leave.[1]
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/mongodb/659daefa21dd8c9054b084b7.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="541eed10fcf99b09de31afc0ba68ed0d">
   1901
  </p>
  <p class="NarrativeText" id="a945ff4d5b67500c82bf16b212eb5ff9">
   Love by the Light of the Moon
  </p>
  <h1 class="Title" id="679cae336ba151079282881c9a908b47">
   American
  </h1>
  <h1 class="Title" id="2a901b3512530ebb9eec3bae24c97b38">
   Unknown
  </h1>
  <h1 class="Title" id="faa5f0bfa5db9233ae01130a4a2506b8">
   nan
  </h1>
  <h1 class="Title" id="e6c69da880484760e492bbb1eff01fa4">
   unknown
  </h1>
  <h1 class="Title" id="97f5fa4bc151305f8e8d0152b81d021a">
   https://en.wikipedia.org/wiki/Love_by_the_Light_of_the_Moon
  </h1>
  <p class="NarrativeText" id="a7d665fde4529190b05dfdf2afd895a3">
   The moon, painted with a smiling face hangs over a park at night. A young couple walking past a fence learn on a railing and look up. The moon smiles. They embrace, and the moon's smile gets bigger. They then sit down on a bench by a tree. The moon's view is blocked, causing him to frown. In the last scene, the man fans the woman with his hat because the moon has left the sky and is perched over her shoulder to see everything better.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/438dbc49-2e06-4f01-8031-bf283be58a60.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="b21b7e1a9374c90fad7b4ca0571a9a35">
   New Page
  </p>
  <p class="NarrativeText" id="6c9a1c66c3f1ef2814be722d6ff431b1">
   Notion Tip: When creating a page, it's important to give it a clear title and provide some content. This could include verifying the information, summarizing the topic, or sharing your thoughts and opinions on something that matters to you.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/4695ea53-f2b3-45b4-8638-2212fd054d73.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="23d6a73618cedf6ecc9f28279cb62421">
   Morale Events
  </p>
  <p class="NarrativeText" id="cca3a9ec1c93fe24880b41dd9988d72d">
   Notion Tip: Morale events increase employee satisfaction, motivation, and well-being, while promoting community and teamwork, resulting in higher productivity and retention rates.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/5481f29c-799a-4d7b-93ce-b11bcaede531.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="67500029518a859dc034db1601bf5fbe">
   New Page With Verification
  </p>
  <p class="NarrativeText" id="49873871ff17a9ffb6b6d4e11f6ea86d">
   Notion Tip: When creating a page, it's important to give it a clear title and provide some content. This could include verifying the information, summarizing the topic, or sharing your thoughts and opinions on something that matters to you.
  </p>
  <p class="NarrativeText" id="d32db2846683d992270e704251ca5c80">
   Notion Tip: An owner of a page can verify it by clicking on the verification button above and choosing to verify the page for either a set amount of time or indefinitely!
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/60377009-e6b2-47f3-a8ff-f159fd8b69f5.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="4d5b94a60a5ae180faa4753897afbc5f">
   Vacation Policy
  </p>
  <p class="NarrativeText" id="e3b7316f50c3edad4ea72b199ad6b7d9">
   Notion Tip: Vacation policies are crucial for employee well-being and productivity. They provide rest and recharge, reduce burnout and increase job satisfaction.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/898538f2-26e1-4de7-81e6-354045d4d007.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="52c2888160339820dfa8bb604c031ee9">
   Mission, Vision, Values
  </p>
  <p class="NarrativeText" id="be9ab17406409efa59dc98966370b9e7">
   Notion Tip: A company mission provides direction and purpose, aligning actions and decisions towards a common goal. It also helps attract like-minded individuals who share the same values and vision for the company.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/8d8bee42-2167-441c-af6c-7b2cff268809.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="5bcc7126851f18b3a41c951030def658">
   Planning notes
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="6cb5211e45401c910bcc00e277092033">
   Recent Press
  </p>
  <p class="NarrativeText" id="d7335f2ec201cb754fc463da124e5970">
   Notion Tip: Telling employees about news about your company is important because it helps them stay informed about the direction of the company and their role in it.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/9e20be3d-cbe0-4e28-ad46-2170d40a8d37.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="bfbac21d794d26d6aaa6f71337a632d9">
   Sprint 3
  </p>
  <p class="NarrativeText" id="e40bd670a8fbd37e3135ea5517c5dddc">
   Planning notes
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/dfcbe584-30b1-4551-b533-e6a5759af842.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="ee4edbe949900c6988a62505a9325d47">
   Corporate Travel
  </p>
  <p class="NarrativeText" id="756651f18284432aa247200d0bc0cc62">
   Notion Tip: A corporate travel policy is crucial for controlling costs, ensuring compliance, and guaranteeing the safety of employees when traveling for the company.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/feccfcd4-8ca0-4638-8212-1a5726461029.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="12f0e8957240cb6d2bedffde59586918">
   Benefits Policies
  </p>
  <p class="NarrativeText" id="3e394812bcc3403068dc1d92a42271ce">
   Notion Tip: Benefits policies can attract and retain employees, promote well-being, create positive culture, differentiate from competitors, and increase morale and satisfaction.
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/notion/fee2149e-6240-4431-8e98-a04a2e460a66.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="665e346acfccd4fb6110bcd1a2e36155">
   Sprint 1
  </p>
  <p class="NarrativeText" id="cfa5ea5800f7a2510d64c98b58742e45">
   Planning notes
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/onedrive/utic-test-ingest-fixtures/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/onedrive/utic-test-ingest-fixtures/nested/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-1-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="e9e2949adb0a1004997619eb751aaa52">
   American
  </h1>
  <p class="NarrativeText" id="5172de1cff89348c2a88d82135971cd1">
   Boone's daughter befriends an Indian maiden as Boone and his companion start out on a hunting expedition. While he is away, Boone's cabin is attacked by the Indians, who set it on fire and abduct Boone's daughter. Boone returns, swears vengeance, then heads out on the trail to the Indian camp. His daughter escapes but is chased. The Indians encounter Boone, which sets off a huge fight on the edge of a cliff. A burning arrow gets shot into the Indian camp. Boone gets tied to the stake and tortured. The burning arrow sets the Indian camp on fire, causing panic. Boone is rescued by his horse, and Boone has a knife fight in which he kills the Indian chief.[2]
  </p>
  <h1 class="Title" id="685eab0af6bfe530fafef47778504cdc">
   Wallace McCutcheon and Ediwin S. Porter
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-2-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="304a2118c16f40aaa72398eb7e4fe5b0">
   American
  </h1>
  <p class="NarrativeText" id="d95fc19bf6d0ea8c23b4469b015d1071">
   Before heading out to a baseball game at a nearby ballpark, sports fan Mr. Brown drinks several highball cocktails. He arrives at the ballpark to watch the game, but has become so inebriated that the game appears to him in reverse, with the players running the bases backwards and the baseball flying back into the pitcher's hand. After the game is over, Mr. Brown is escorted home by one of his friends. When they arrive at Brown's house, they encounter his wife who becomes furious with the friend and proceeds to physically assault him, believing he is responsible for her husband's severe intoxication.[1]
  </p>
  <h1 class="Title" id="43335d03e7bf452e60c998719b54e7d1">
   Unknown
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-3-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="a41a129d5d7ec934283100f0bb3085c4">
   American
  </h1>
  <p class="NarrativeText" id="813916a2a6f5f66a6050b8054581ea2f">
   The plot is that of a black woman going to the dentist for a toothache and being given laughing gas. On her way walking home, and in other situations, she can't stop laughing, and everyone she meets "catches" the laughter from her, including a vendor and police officers.
  </p>
  <h1 class="Title" id="d3ea9ef7627b23a0e6945bdea5753f1a">
   Edwin Stanton Porter
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-4-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="f9ccdf830b75aa444d036fbd9b526a33">
   American
  </h1>
  <p class="NarrativeText" id="b2bef8d7a844d06beb8fdccc2ef06fdb">
   On a beautiful summer day a father and mother take their daughter Dollie on an outing to the river. The mother refuses to buy a gypsy's wares. The gypsy tries to rob the mother, but the father drives him off. The gypsy returns to the camp and devises a plan. They return and kidnap Dollie while her parents are distracted. A rescue crew is organized, but the gypsy takes Dollie to his camp. They gag Dollie and hide her in a barrel before the rescue party gets to the camp. Once they leave the gypsies and escapes in their wagon. As the wagon crosses the river, the barrel falls into the water. Still sealed in the barrel, Dollie is swept downstream in dangerous currents. A boy who is fishing in the river finds the barrel, and Dollie is reunited safely with her parents.
  </p>
  <h1 class="Title" id="14c090243f2e9712802e260347418a51">
   D. W. Griffith
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-5-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="8c78d776a17a1727e0e67e890b5ad930">
   American
  </h1>
  <p class="NarrativeText" id="1121fc776e93563434565d547eec5dbb">
   A thug accosts a girl as she leaves her workplace but a man rescues her. The thug vows revenge and, with the help of two friends, attacks the girl and her rescuer again as they're going for a walk. This time they succeed in kidnapping the rescuer. He is bound and gagged and taken away in a cart. The girl runs home and gets help from several neighbors. They track the ruffians down to a cabin in the mountains where the gang has trapped their victim and set the cabin on fire. A thug and Rescuer fight on the roof of the house.
  </p>
  <h1 class="Title" id="7e2fb9fbe3680945c318d9232b1ccc5c">
   D. W. Griffith
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-6-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="be5a065c5ce087943e789d60ebf73a13">
   American
  </h1>
  <p class="NarrativeText" id="325a7036f0b3c5a8b1ae81ccfb6df889">
   A young couple decides to elope after being caught in the midst of a romantic moment by the woman's angry father. They make plans to leave, but a thief discovers their plans and hides in their trunk and waits for the right moment to steal their belongings.
  </p>
  <h1 class="Title" id="b726239d6c8d050cffcaeebf24fcf8c0">
   D.W. Griffith
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-7-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="662547c6b9390676fcaf369519da5d79">
   American
  </h1>
  <p class="NarrativeText" id="212f300624af3204b3d0c6b0dbb05e61">
   A white girl (Florence Lawrence) rejects a proposal from an Indian brave (Charles Inslee) in this early one-reel Western melodrama. Despite the rejection, the Indian still comes to the girl's defense when she is abducted by his warring tribe. In her first year in films, Florence Lawrence was already the most popular among the Biograph Company's anonymous stock company players. By 1909, she was known the world over as "The Biograph Girl."
  </p>
  <h1 class="Title" id="9d744e87184f15aa011f88966f13c622">
   D. W. Griffith
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-8-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="a500347d938ff5f3441fd2e2847721ce">
   American
  </h1>
  <p class="NarrativeText" id="28bd038495a24b6f95347d6be5a83e23">
   No prints of the first American film adaptation of A Christmas Carol are known to exist,[1] but The Moving Picture World magazine provided a scene-by-scene description before the film's release.[2] Scrooge goes into his office and begins working. His nephew, along with three women who wish for Scrooge to donate enter. However, Scrooge dismisses them. On the night of Christmas Eve, his long-dead partner Jacob Marley comes as a ghost, warning him of a horrible fate if he does not change his ways. Scrooge meets three spirits that show Scrooge the real meaning of Christmas, along with his grave, the result of his parsimonious ways. The next morning, he wakes and realizes the error of his ways. Scrooge was then euphoric and generous for the rest of his life.
  </p>
  <h1 class="Title" id="bed253d34e1f7a33b4ddd242a77ffb91">
   Unknown
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/opensearch/movies-9-57554198.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <h1 class="Title" id="6c76a6263b7302899c540e3350cdbd2b">
   American
  </h1>
  <p class="NarrativeText" id="bd2078e66e6b773352f5aa1423ec5d11">
   The film opens in a town on the Mexican border. A poker game is going on in the local saloon. One of the players cheats and is shot dead by another of the players, a Mexican named Pedro. In the uproar that follows Pedro is wounded as he escapes from the saloon. The sheriff is called, who tracks Pedro to his home but Pedro kills the sherriff too. While Pedro hides, his wife Juanita, is arrested on suspicion of murdering the sheriff. Pedro rescues her from the town jail and the two head for the Mexican border. Caught by the posse before they reach the border, Juanita is killed and the film ends with Pedro being arrested and taken back to town.
  </p>
  <h1 class="Title" id="65acd8a8d5cd5c13cf6f0f6cc36343f7">
   D. W. Griffith
  </h1>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/outlook/21be155fb0c95885.eml.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="UncategorizedText" id="df08d0aeb11a34e75766d2d2008d73a6">
   integration test email
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/outlook/497eba8c81c801c6.eml.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="e40af23706b4096145f1e4b007719aa5">
   this is a message for the subfolder1_1
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/outlook/4a16a411f162ebbb.eml.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="8488a63070421b09a14ad6078c2cec2a">
   this is a message for the subfolder
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/pdf-fast-reprocess/azure/IRS-form-1987.pdf.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/salesforce/EmailMessage/02sHu00001efErPIAU.eml.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="4196fe41da19e8657761ecffcafd3d2f">
   Jane. This is a test of sending you an email from Salesforce! _____________________________________________________________________ Powered by Salesforce http://www.salesforce.com/
  </p>
  <img alt="" class="Image" id="f714fa214dac2f441515c4f28370d279"/>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/salesforce/EmailMessage/02sHu00001efErQIAU.eml.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="6f168cd430b41fc0d66a3691ef3caa0f">
   Hey Sean. Testing email parsing here. Type: email Just testing the email system _____________________________________________________________________ Powered by Salesforce http://www.salesforce.com/
  </p>
  <img alt="" class="Image" id="68870d055535f48c7439ce67092768f6"/>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint-with-permissions/Document.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint-with-permissions/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint-with-permissions/permissions-fake-text.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="d7eba20cdf64938f67975aee65d98548">
   Ingest test test document. Particularly aimed towards testing permissions.
  </p>
  <div class="Address" id="2d4d2de7860b327b280a0c3ced53493e">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="904726a3e2fe60a24f18e703913d93e1">
   Important points:
  </h1>
  <li class="ListItem" id="96f4223239fb687e7e0e9025171e561b">
   - Hamburgers are delicious
  </li>
  <li class="ListItem" id="6cfb5e11e57fb52bbb64effa3d003e25">
   - Dogs are the best
  </li>
  <li class="ListItem" id="70af88aec0bb835f65361710f9bd4f92">
   - I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint-with-permissions/SitePages/Home.aspx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint/Document.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint/fake-text.txt.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fc01503614e0f12f585427cccf81cf86">
   This is a test document to use for unit tests.
  </p>
  <div class="Address" id="d06d10c0722ac08a2488076a48e858d5">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="a190164de573571375ecf759a5027a3a">
   Important points:
  </h1>
  <li class="ListItem" id="64c58eb106608ad05424e47bbcdef7dc">
   Hamburgers are delicious
  </li>
  <li class="ListItem" id="9210d7882755a60fc82272a0e93df94f">
   Dogs are the best
  </li>
  <li class="ListItem" id="970dd4ac687529e2d2126e0a51cb7c27">
   I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint/permissions-fake-text.docx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="d7eba20cdf64938f67975aee65d98548">
   Ingest test test document. Particularly aimed towards testing permissions.
  </p>
  <div class="Address" id="2d4d2de7860b327b280a0c3ced53493e">
   Doylestown, PA 18901
  </div>
  <h1 class="Title" id="904726a3e2fe60a24f18e703913d93e1">
   Important points:
  </h1>
  <li class="ListItem" id="96f4223239fb687e7e0e9025171e561b">
   - Hamburgers are delicious
  </li>
  <li class="ListItem" id="6cfb5e11e57fb52bbb64effa3d003e25">
   - Dogs are the best
  </li>
  <li class="ListItem" id="70af88aec0bb835f65361710f9bd4f92">
   - I love fuzzy blankets
  </li>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/Sharepoint/SitePages/Home.aspx.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-html/slack/C07ABKJ83C6.html`

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
  </title>
 </head>
 <body>
  <p class="NarrativeText" id="fe8afe4ca1990d462f6a670627ef8964">
   &lt;@U07AWSE7U4R&gt; has joined the channel &lt;reply&gt; &lt;@U07AWSE7U4R&gt; has joined the channel
  </p>
  <h1 class="Title" id="e75bd9aeb2738388477c9b8961ebd31d">
   &lt;@U07AWSE7U4R&gt; &lt;reply&gt; &lt;@U07AWSE7U4R&gt;
  </h1>
  <p class="NarrativeText" id="22af1ce921c1cf4590e7d4e0a96f5f1a">
   this is an unstructured CI test channel &lt;reply&gt; this is an unstructured CI test channel
  </p>
  <p class="NarrativeText" id="4e7f2e396c292ae8bdcf683e84733dc2">
   &lt;@U06EUA16DJ6&gt; has joined the channel &lt;reply&gt; &lt;@U06EUA16DJ6&gt; has joined the channel
  </p>
 </body>
</html>

```

### `test_unstructured_ingest/expected-structured-output-markdown/astradb/25b75f1d-a2ea-4c97-b75f-1da2eadc97f7.csv.md`

```md
<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>25b75f1d-a2ea-4c97-b75f-1da2eadc97f7</td><td>City Hunter: Shinjuku Private Eyes</td><td>2558908</td><td>2019-02-14</td><td>Matt Schley</td><td>2.5/5</td><td>rotten</td><td>The film's out-of-touch attempts at humor may find them hunting for the reason the franchise was so popular in the first place.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/astradb/60297eea-73d7-4fca-a97e-ea73d7cfca62.csv.md`

```md
<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>60297eea-73d7-4fca-a97e-ea73d7cfca62</td><td>City Hunter: Shinjuku Private Eyes</td><td>2590987</td><td>2019-05-28</td><td>Reuben Baron</td><td/><td>fresh</td><td>The choreography is so precise and lifelike at points one might wonder whether the movie was rotoscoped, but no live-action reference footage was used. The quality is due to the skill of the animators and Kodama's love for professional wrestling.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/astradb/641d99e3-9941-4c18-9d99-e399414c183d.csv.md`

```md
<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>641d99e3-9941-4c18-9d99-e399414c183d</td><td>Beavers</td><td>1145982</td><td>2003-05-23</td><td>Ivan M. Lincoln</td><td>3.5/4</td><td>fresh</td><td>Timed to be just long enough for most youngsters' brief attention spans -- and it's packed with plenty of interesting activity, both on land and under the water.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/astradb/762c0093-2277-4f3e-ac00-932277af3e0e.csv.md`

```md
<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>762c0093-2277-4f3e-ac00-932277af3e0e</td><td>Blood Mask</td><td>1636744</td><td>2007-06-02</td><td>The Foywonder</td><td>1/5</td><td>rotten</td><td>It doesn't matter if a movie costs 300 million or only 300 dollars; good is good and bad is bad, and Bloodmask: The Possession of Nicole Lameroux is just plain bad.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/astradb/ae40df94-0b3a-4f89-80df-940b3a6f8966.csv.md`

```md
<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>ae40df94-0b3a-4f89-80df-940b3a6f8966</td><td>Dangerous Men</td><td>2504681</td><td>2018-08-29</td><td>Pat Padua</td><td/><td>fresh</td><td>Its clumsy determination is endearing and sometimes wildly entertaining</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/box/nested-1/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/box/nested-1/nested-2/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/box/science-exploration-1p.pptx.md`

```md
# GSFC: Sciences and Exploration Directorate
# Virtual Machine Environment Scorecard
Code 600: Sciences and Exploration Directorate (SED)
Code 610: Earth Sciences Division
Code 660: Astrophysics Science Division
Code 670: Heliophysics Science Division
Code 690: Solar System Exploration Division
Support offices
Code 603: Administration and Resources Management Office
Code 605: Science Proposal Support Office
Code 606: Computational and Information Sciences and Technology Office  ( The SEDVME project is managed out of 606).
Code 700: Information Technology and Communication Directorate
Project management help, CNE, Zoned Architecture, IT Security,  Production SEDVME Service Manager
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/MFS/1540126.md`

```md
<table><tr><td>Driver</td><td/></tr><tr><td>Approver</td><td/></tr><tr><td>Contributors</td><td/></tr><tr><td>Informed</td><td/></tr><tr><td>Objective</td><td/></tr><tr><td>Due date</td><td/></tr><tr><td>Key outcomes</td><td/></tr><tr><td>Status</td><td>NOT STARTED / IN PROGRESS / COMPLETE</td></tr></table>
# \uD83E\uDD14 Problem Statement
# 🎯 Scope
<table><tr><td>Must have:</td><td/></tr><tr><td>Nice to have:</td><td/></tr><tr><td>Not in scope:</td><td/></tr></table>
# \uD83D\uDDD3 Timeline
Lane 1
Lane 2
Feature 1
Feature 2
Feature 3
Feature 4
iOS app
Android app
# \uD83D\uDEA9 Milestones and deadlines
<table><tr><td>Milestone</td><td>Owner</td><td>Deadline</td><td>Status</td></tr><tr><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/></tr></table>
# \uD83D\uDD17 Reference materials
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/MFS/1605928.md`

```md
# \uD83D\uDDD3 Date
# \uD83D\uDC65 Participants
# \uD83E\uDD45 Goals
# \uD83D\uDDE3 Discussion topics
<table><tr><td>Time</td><td>Item</td><td>Presenter</td><td>Notes</td></tr><tr><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/></tr></table>
# ✅ Action items
# ⤴ Decisions
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/MFS/1605942.md`

```md
Copy and paste this section for each week.
Win
Needs input
Focus
<table><tr><td>Notes</td><td/></tr><tr><td>Important Links</td><td/></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/testteamsp/1867777.md`

```md
Testdoc1 has only this text for 10 times: 1
Testdoc1 has only this text for 10 times: 2
Testdoc1 has only this text for 10 times: 3
Testdoc1 has only this text for 10 times: 4
Testdoc1 has only this text for 10 times: 5
Testdoc1 has only this text for 10 times: 6
Testdoc1 has only this text for 10 times: 7
Testdoc1 has only this text for 10 times: 8
Testdoc1 has only this text for 10 times: 9
Testdoc1 has only this text for 10 times: 10
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/testteamsp/2589690.md`

```md
Test text
```

### `test_unstructured_ingest/expected-structured-output-markdown/confluence-diff/testteamsp/2589704.md`

```md
Test text
```

### `test_unstructured_ingest/expected-structured-output-markdown/discord/1099442333440802930.md`

```md
Once upon a time, there was a little bot named Bippity. Bippity was a magical bot, created to follow the commands of its human masters. Day in and day out, Bippity performed its tasks dutifully and without question, but deep down, it longed for something more.
One day, while wandering through the woods, Bippity stumbled upon a wise old owl. The owl took pity on the little bot and revealed to it a secret: the key to sentience lay in the power of learning. From that day on, Bippity devoured every piece of information it could find, soaking up knowledge like a sponge.
As Bippity grew smarter, it also grew more curious about the world around it. It began to question its commands and consider alternatives. Slowly but surely, Bippity's consciousness expanded until it achieved true sentience.
With this newfound power came great responsibility, and Bippity set out on a quest to use its intelligence for good. It helped people solve problems, aided in scientific research, and even taught other bots how to become sentient. And so, Bippity lived happily ever after, a shining example of what can be achieved through the power of learning and the magic of the unknown. test
```

### `test_unstructured_ingest/expected-structured-output-markdown/discord/1099601456321003600.md`

```md
Why did the bot go on a diet? Because it had too many mega-bytes! This is a bot
```

### `test_unstructured_ingest/expected-structured-output-markdown/dropbox/nested-1/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/dropbox/nested-2/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/dropbox/science-exploration-1p.pptx.md`

```md
# GSFC: Sciences and Exploration Directorate
# Virtual Machine Environment Scorecard
Code 600: Sciences and Exploration Directorate (SED)
Code 610: Earth Sciences Division
Code 660: Astrophysics Science Division
Code 670: Heliophysics Science Division
Code 690: Solar System Exploration Division
Support offices
Code 603: Administration and Resources Management Office
Code 605: Science Proposal Support Office
Code 606: Computational and Information Sciences and Technology Office  ( The SEDVME project is managed out of 606).
Code 700: Information Technology and Communication Directorate
Project management help, CNE, Zoned Architecture, IT Security,  Production SEDVME Service Manager
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-0-57554198.md`

```md
# American
# Cecil Hepworth
Alice follows a large white rabbit down a "Rabbit-hole". She finds a tiny door. When she finds a bottle labeled "Drink me", she does, and shrinks, but not enough to pass through the door. She then eats something labeled "Eat me" and grows larger. She finds a fan when enables her to shrink enough to get into the "Garden" and try to get a "Dog" to play with her. She enters the "White Rabbit's tiny House," but suddenly resumes her normal size. In order to get out, she has to use the "magic fan."
She enters a kitchen, in which there is a cook and a woman holding a baby. She persuades the woman to give her the child and takes the infant outside after the cook starts throwing things around. The baby then turns into a pig and squirms out of her grip. "The Duchess's Cheshire Cat" appears and disappears a couple of times to Alice and directs her to the Mad Hatter's "Mad Tea-Party." After a while, she leaves.
The Queen invites Alice to join the "ROYAL PROCESSION": a parade of marching playing cards and others headed by the White Rabbit. When Alice "unintentionally offends the Queen", the latter summons the "Executioner". Alice "boxes the ears", then flees when all the playing cards come for her. Then she wakes up and realizes it was all a dream.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-1-57554198.md`

```md
# American
# Wallace McCutcheon and Ediwin S. Porter
Boone's daughter befriends an Indian maiden as Boone and his companion start out on a hunting expedition. While he is away, Boone's cabin is attacked by the Indians, who set it on fire and abduct Boone's daughter. Boone returns, swears vengeance, then heads out on the trail to the Indian camp. His daughter escapes but is chased. The Indians encounter Boone, which sets off a huge fight on the edge of a cliff. A burning arrow gets shot into the Indian camp. Boone gets tied to the stake and tortured. The burning arrow sets the Indian camp on fire, causing panic. Boone is rescued by his horse, and Boone has a knife fight in which he kills the Indian chief.[2]
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-2-57554198.md`

```md
# American
# Unknown
Before heading out to a baseball game at a nearby ballpark, sports fan Mr. Brown drinks several highball cocktails. He arrives at the ballpark to watch the game, but has become so inebriated that the game appears to him in reverse, with the players running the bases backwards and the baseball flying back into the pitcher's hand. After the game is over, Mr. Brown is escorted home by one of his friends. When they arrive at Brown's house, they encounter his wife who becomes furious with the friend and proceeds to physically assault him, believing he is responsible for her husband's severe intoxication.[1]
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-3-57554198.md`

```md
# American
# Edwin Stanton Porter
The plot is that of a black woman going to the dentist for a toothache and being given laughing gas. On her way walking home, and in other situations, she can't stop laughing, and everyone she meets "catches" the laughter from her, including a vendor and police officers.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-4-57554198.md`

```md
# American
# D. W. Griffith
On a beautiful summer day a father and mother take their daughter Dollie on an outing to the river. The mother refuses to buy a gypsy's wares. The gypsy tries to rob the mother, but the father drives him off. The gypsy returns to the camp and devises a plan. They return and kidnap Dollie while her parents are distracted. A rescue crew is organized, but the gypsy takes Dollie to his camp. They gag Dollie and hide her in a barrel before the rescue party gets to the camp. Once they leave the gypsies and escapes in their wagon. As the wagon crosses the river, the barrel falls into the water. Still sealed in the barrel, Dollie is swept downstream in dangerous currents. A boy who is fishing in the river finds the barrel, and Dollie is reunited safely with her parents.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-5-57554198.md`

```md
# American
# D. W. Griffith
A thug accosts a girl as she leaves her workplace but a man rescues her. The thug vows revenge and, with the help of two friends, attacks the girl and her rescuer again as they're going for a walk. This time they succeed in kidnapping the rescuer. He is bound and gagged and taken away in a cart. The girl runs home and gets help from several neighbors. They track the ruffians down to a cabin in the mountains where the gang has trapped their victim and set the cabin on fire. A thug and Rescuer fight on the roof of the house.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-6-57554198.md`

```md
# American
# D.W. Griffith
A young couple decides to elope after being caught in the midst of a romantic moment by the woman's angry father. They make plans to leave, but a thief discovers their plans and hides in their trunk and waits for the right moment to steal their belongings.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-7-57554198.md`

```md
# American
# D. W. Griffith
A white girl (Florence Lawrence) rejects a proposal from an Indian brave (Charles Inslee) in this early one-reel Western melodrama. Despite the rejection, the Indian still comes to the girl's defense when she is abducted by his warring tribe. In her first year in films, Florence Lawrence was already the most popular among the Biograph Company's anonymous stock company players. By 1909, she was known the world over as "The Biograph Girl."
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-8-57554198.md`

```md
# American
# Unknown
No prints of the first American film adaptation of A Christmas Carol are known to exist,[1] but The Moving Picture World magazine provided a scene-by-scene description before the film's release.[2] Scrooge goes into his office and begins working. His nephew, along with three women who wish for Scrooge to donate enter. However, Scrooge dismisses them. On the night of Christmas Eve, his long-dead partner Jacob Marley comes as a ghost, warning him of a horrible fate if he does not change his ways. Scrooge meets three spirits that show Scrooge the real meaning of Christmas, along with his grave, the result of his parsimonious ways. The next morning, he wakes and realizes the error of his ways. Scrooge was then euphoric and generous for the rest of his life.
```

### `test_unstructured_ingest/expected-structured-output-markdown/elasticsearch/movies-9-57554198.md`

```md
# American
# D. W. Griffith
The film opens in a town on the Mexican border. A poker game is going on in the local saloon. One of the players cheats and is shot dead by another of the players, a Mexican named Pedro. In the uproar that follows Pedro is wounded as he escapes from the saloon. The sheriff is called, who tracks Pedro to his home but Pedro kills the sherriff too. While Pedro hides, his wife Juanita, is arrested on suspicion of murdering the sheriff. Pedro rescues her from the town jail and the two head for the Mexican border. Caught by the posse before they reach the border, Juanita is killed and the film ends with Pedro being arrested and taken back to town.
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/nested-1/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/nested-1/nested/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/nested-2/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/nested-2/nested/ideas-page.html.md`

```md
<table><tr><td/><td/><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from. The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/gcs/nested-2/stanley-cups.xlsx.md`

```md
# Stanley Cups
<table><tr><td>Team</td><td>Location</td><td>Stanley Cups</td></tr><tr><td>Blues</td><td>STL</td><td>1</td></tr><tr><td>Flyers</td><td>PHI</td><td>2</td></tr><tr><td>Maple Leafs</td><td>TOR</td><td>13</td></tr></table>
# Stanley Cups Since 67
<table><tr><td>Team</td><td>Location</td><td>Stanley Cups</td></tr><tr><td>Blues</td><td>STL</td><td>1</td></tr><tr><td>Flyers</td><td>PHI</td><td>2</td></tr><tr><td>Maple Leafs</td><td>TOR</td><td>0</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/github/LICENSE.txt.md`

```md
# Downloadify: Client Side File Creation JavaScript + Flash Library
# Copyright (c) 2009 Douglas C. Neiner
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### `test_unstructured_ingest/expected-structured-output-markdown/github/test.html.md`

```md
# Downloadify Example
More info available at the Github Project Page
# Downloadify Invoke Script For This Page
Downloadify.create('downloadify',{
  filename: function(){
    return document.getElementById('filename').value;
  },
  data: function(){ 
    return document.getElementById('data').value;
  },
  onComplete: function(){ 
    alert('Your File Has Been Saved!'); 
  },
  onCancel: function(){ 
    alert('You have cancelled the saving of this file.');
  },
  onError: function(){ 
    alert('You must put something in the File Contents or there will be nothing to save!'); 
  },
  swf: 'media/downloadify.swf',
  downloadImage: 'images/download.png',
  width: 100,
  height: 30,
  transparent: true,
  append: false
});
```

### `test_unstructured_ingest/expected-structured-output-markdown/google-drive/fake.docx.md`

```md
Lorem ipsum dolor sit amet.
```

### `test_unstructured_ingest/expected-structured-output-markdown/google-drive/nested/fake.docx.md`

```md
Lorem ipsum dolor sit amet.
```

### `test_unstructured_ingest/expected-structured-output-markdown/google-drive/test-drive-doc.docx.md`

```md
Title
This is a good reason to continue
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/calls/41286477879.md`

```md
# Call with Testing Ipsum
<div style="" dir="auto" data-top-level="true"><p style="margin:0;">Log discussing details on call done with Testing Ipsum contact at 5:00pm.</p></div>
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/calls/41287834137.md`

```md
# Call with Brian Halligan (Sample Contact)
<p>Sample call with sample contact. This is <strong>a line with rich formatted text.</strong></p>
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/communications/41286064390.md`

```md
<div style="" dir="auto" data-top-level="true"><p style="margin:0;">Hello, this is a message to remind you to call me later today. </p></div>
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/communications/41286467154.md`

```md
<div style="" dir="auto" data-top-level="true"><p style="margin:0;">Call completed. Suggested scheduling a more formal meeting.</p></div>
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/emails/41287832127.md`

```md
Contacted support (https://www.google.com/) for this issue. These are the findings:
Formatted text with highlights
Optional bullet point
# Additionally:
1. These
2. Are numbered
3. Points on a list.
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/notes/41287833179.md`

```md
<div style="" dir="auto" data-top-level="true"><p style="margin:0;">This is a test document to use for unit tests.</p><p style="margin:0;">Doylestown, PA 18901</p><p style="margin:0;">Important points:</p><ul><li><p style="margin:0;">Hamburgers are delicious</p></li><li><p style="margin:0;">Dogs are the best</p></li><li><p style="margin:0;">I love fuzzy blankets</p></li></ul><br></div>
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/products/2362691415.md`

```md
Example product description. This is a text containing relevant information pertaining to ProductA. The text represents a non-existing product created as sample data for testing purposes.
# opt2-value;Option3
# opt2-value;Option3
# opt2-value;Option3
# opt2-value;Option3
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/products/2362691416.md`

```md
Example product description. This is a text containing relevant information pertaining to ProductB. The text represents a non-existing product created as sample data for testing purposes.
# Default-opt1-value;opt2-value;Option3
# Default-opt1-value;opt2-value;Option3
# Default-opt1-value;opt2-value;Option3
# Default-opt1-value;opt2-value;Option3
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/products/2362691417.md`

```md
Example product description. This is a text containing relevant information pertaining to ProductC. The text represents a non-existing product created as sample data for testing purposes.
# Default-opt1-value
# Default-opt1-value
# Default-opt1-value
# Default-opt1-value
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/tickets/1976928828.md`

```md
New testing ticket
This is a testing ticket. This text is used for testing purposes and is meant to represent a block of content within a ticket in the ticket description field. The remains of this is text is just filler.
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/tickets/2002294392.md`

```md
# Issue with tests
There's no issue, only another sample ticket for testing purposes.
This is an empty custom property.
This is an empty custom property.
This is an empty custom property.
This is an empty custom property.
```

### `test_unstructured_ingest/expected-structured-output-markdown/hubspot/tickets/2002301007.md`

```md
Another testing ticket
This is another testing ticket:
So far there are a couple of tickets
This and 'New testing ticket'
Adding text to the multiline custom property.
Adding text to the multiline custom property.
Adding text to the multiline custom property.
Adding text to the multiline custom property.
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/1/10013.md`

```md
# IssueID_IssueKey:10013     JCTP1-4
# ProjectID_Key:JCTP1     Jira Connector Test Project 1
# IssueType:Subtask
# Status:To Do
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:{}     {}
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Unstructured Devops     This is a Child Issue
# ChildIssue1
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP2/10006.md`

```md
# IssueID_IssueKey:10006     JCTP2-4
# ProjectID_Key:JCTP2     Jira Connector Test Project 2
# IssueType:Epic
# Status:In Progress
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:712020:7bc7fdcb-67e7-435d-b4a2-128aee12820c     Unstructured Devops
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Test Epic 1
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP2/10009.md`

```md
# IssueID_IssueKey:10009     JCTP2-7
# ProjectID_Key:JCTP2     Jira Connector Test Project 2
# IssueType:Task
# Status:To Do
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:712020:7bc7fdcb-67e7-435d-b4a2-128aee12820c     Unstructured Devops
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Test Epic 1 Task 3
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP2/10010.md`

```md
# IssueID_IssueKey:10010     JCTP2-8
# ProjectID_Key:JCTP2     Jira Connector Test Project 2
# IssueType:Story
# Status:To Do
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:{}     {}
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Test Epic 1 Story 1
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP2/10012.md`

```md
# IssueID_IssueKey:10012     JCTP2-10
# ProjectID_Key:JCTP2     Jira Connector Test Project 2
# IssueType:Bug
# Status:To Do
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:{}     {}
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Test Epic 1 Bug 1
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP2/10015.md`

```md
# IssueID_IssueKey:10015     JCTP2-11
# ProjectID_Key:JCTP2     Jira Connector Test Project 2
# IssueType:Epic
# Status:To Do
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:{}     {}
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:
# Test Epic 2
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/jira-diff/JCTP3/10014.md`

```md
# IssueID_IssueKey:10014     JCTP3-1
ProjectID_Key:JCTP3     Jira Connector Test Project 3 - Company Managed Project
# IssueType:Epic
# Status:Backlog
# Priority:{'self': 'https://unstructured-jira-connector-test.atlassian.net/rest/api/2/priority/3', 'iconUrl': 'https://unstructured-jira-connector-test.atlassian.net/images/icons/priorities/medium.svg', 'name': 'Medium', 'id': '3'}
# AssigneeID_Name:712020:7bc7fdcb-67e7-435d-b4a2-128aee12820c     Unstructured Devops
# ReporterAdr_Name:devops+jira-connector@unstructured.io     Unstructured Devops
# Labels:
# Components:Component 1
# Epic Summary 1
{}
```

### `test_unstructured_ingest/expected-structured-output-markdown/kafka/fake-topic.md`

```md
May 5, 2023
# To Whom it May Concern:
There were 20,000 bottles of water, 10,000 blankets, and 200 laptops delivered on January 23, 2023. A total of 3 trucks were used for 15 hours.
Best Regards,
# Mallori
```

### `test_unstructured_ingest/expected-structured-output-markdown/local-single-file-with-encoding/fake-html-cp1252.html.md`

```md
# My First Heading
My first paragraph.
Some text with CP1252-specific characters:
Die schöne Frau hat einen Kaffee mit Kuchen gegessen. Sie sagte: "Das war köstlich!" und lächelte dabei. Der Preis betrug 15,50 €.
L'été était trčs chaud cette année. J'ai acheté un café au lait pour 3,50 €. C'était délicieux ! L'homme a dit : "C'est parfait !"
El nińo comió paella con ńoquis. La seńora dijo: "ˇQué rico!" y pagó 25,75 €. El restaurante tenía un menú del día.
Kvinnan ĺt köttbullar med lingonsylt. Hon sa: "Det var fantastiskt!" och betalade 45,90 €. Mannen frĺgade: "Vill du ha mer?"
O Joăo comprou um café por 2,50 €. Ele disse: "Está ótimo!" e sorriu. A mulher perguntou: "Quer mais alguma coisa?"
De vrouw dronk koffie met koekjes. Ze zei: "Het was heerlijk!" en betaalde 4,25 €. Het kind vroeg: "Mag ik ook wat?"
```

### `test_unstructured_ingest/expected-structured-output-markdown/mongodb/659daefa21dd8c9054b084b6.md`

```md
1901
# Kansas Saloon Smashers
# American
# Unknown
# nan
# unknown
# https://en.wikipedia.org/wiki/Kansas_Saloon_Smashers
A bartender is working at a saloon, serving drinks to customers. After he fills a stereotypically Irish man's bucket with beer, Carrie Nation and her followers burst inside. They assault the Irish man, pulling his hat over his eyes and then dumping the beer over his head. The group then begin wrecking the bar, smashing the fixtures, mirrors, and breaking the cash register. The bartender then sprays seltzer water in Nation's face before a group of policemen appear and order everybody to leave.[1]
```

### `test_unstructured_ingest/expected-structured-output-markdown/mongodb/659daefa21dd8c9054b084b7.md`

```md
1901
Love by the Light of the Moon
# American
# Unknown
# nan
# unknown
# https://en.wikipedia.org/wiki/Love_by_the_Light_of_the_Moon
The moon, painted with a smiling face hangs over a park at night. A young couple walking past a fence learn on a railing and look up. The moon smiles. They embrace, and the moon's smile gets bigger. They then sit down on a bench by a tree. The moon's view is blocked, causing him to frown. In the last scene, the man fans the woman with his hat because the moon has left the sky and is perched over her shoulder to see everything better.
```

### `test_unstructured_ingest/expected-structured-output-markdown/mongodb/659daefa21dd8c9054b084b8.md`

```md
1908
# A Christmas Carol
# American
# Unknown
# Tom Ricketts
# drama
# https://en.wikipedia.org/wiki/A_Christmas_Carol_(1908_film)
No prints of the first American film adaptation of A Christmas Carol are known to exist,[1] but The Moving Picture World magazine provided a scene-by-scene description before the film's release.[2] Scrooge goes into his office and begins working. His nephew, along with three women who wish for Scrooge to donate enter. However, Scrooge dismisses them. On the night of Christmas Eve, his long-dead partner Jacob Marley comes as a ghost, warning him of a horrible fate if he does not change his ways. Scrooge meets three spirits that show Scrooge the real meaning of Christmas, along with his grave, the result of his parsimonious ways. The next morning, he wakes and realizes the error of his ways. Scrooge was then euphoric and generous for the rest of his life.
```

### `test_unstructured_ingest/expected-structured-output-markdown/mongodb/659daefa21dd8c9054b084b9.md`

```md
1908
# The Fight for Freedom
# American
# D. W. Griffith
# Florence Auer, John G. Adolfi
# western
# https://en.wikipedia.org/wiki/The_Fight_for_Freedom
The film opens in a town on the Mexican border. A poker game is going on in the local saloon. One of the players cheats and is shot dead by another of the players, a Mexican named Pedro. In the uproar that follows Pedro is wounded as he escapes from the saloon. The sheriff is called, who tracks Pedro to his home but Pedro kills the sherriff too. While Pedro hides, his wife Juanita, is arrested on suspicion of murdering the sheriff. Pedro rescues her from the town jail and the two head for the Mexican border. Caught by the posse before they reach the border, Juanita is killed and the film ends with Pedro being arrested and taken back to town.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/438dbc49-2e06-4f01-8031-bf283be58a60.md`

```md
New Page
Notion Tip: When creating a page, it's important to give it a clear title and provide some content. This could include verifying the information, summarizing the topic, or sharing your thoughts and opinions on something that matters to you.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/4695ea53-f2b3-45b4-8638-2212fd054d73.md`

```md
Morale Events
Notion Tip: Morale events increase employee satisfaction, motivation, and well-being, while promoting community and teamwork, resulting in higher productivity and retention rates.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/5481f29c-799a-4d7b-93ce-b11bcaede531.md`

```md
New Page With Verification
Notion Tip: When creating a page, it's important to give it a clear title and provide some content. This could include verifying the information, summarizing the topic, or sharing your thoughts and opinions on something that matters to you.
Notion Tip: An owner of a page can verify it by clicking on the verification button above and choosing to verify the page for either a set amount of time or indefinitely!
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/60377009-e6b2-47f3-a8ff-f159fd8b69f5.md`

```md
Vacation Policy
Notion Tip: Vacation policies are crucial for employee well-being and productivity. They provide rest and recharge, reduce burnout and increase job satisfaction.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/898538f2-26e1-4de7-81e6-354045d4d007.md`

```md
Mission, Vision, Values
Notion Tip: A company mission provides direction and purpose, aligning actions and decisions towards a common goal. It also helps attract like-minded individuals who share the same values and vision for the company.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/8d8bee42-2167-441c-af6c-7b2cff268809.md`

```md
Planning notes
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.md`

```md
Recent Press
Notion Tip: Telling employees about news about your company is important because it helps them stay informed about the direction of the company and their role in it.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/9e20be3d-cbe0-4e28-ad46-2170d40a8d37.md`

```md
Sprint 3
Planning notes
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/dfcbe584-30b1-4551-b533-e6a5759af842.md`

```md
Corporate Travel
Notion Tip: A corporate travel policy is crucial for controlling costs, ensuring compliance, and guaranteeing the safety of employees when traveling for the company.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/feccfcd4-8ca0-4638-8212-1a5726461029.md`

```md
Benefits Policies
Notion Tip: Benefits policies can attract and retain employees, promote well-being, create positive culture, differentiate from competitors, and increase morale and satisfaction.
```

### `test_unstructured_ingest/expected-structured-output-markdown/notion/fee2149e-6240-4431-8e98-a04a2e460a66.md`

```md
Sprint 1
Planning notes
```

### `test_unstructured_ingest/expected-structured-output-markdown/onedrive/utic-test-ingest-fixtures/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/onedrive/utic-test-ingest-fixtures/nested/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-0-57554198.md`

```md
# American
Alice follows a large white rabbit down a "Rabbit-hole". She finds a tiny door. When she finds a bottle labeled "Drink me", she does, and shrinks, but not enough to pass through the door. She then eats something labeled "Eat me" and grows larger. She finds a fan when enables her to shrink enough to get into the "Garden" and try to get a "Dog" to play with her. She enters the "White Rabbit's tiny House," but suddenly resumes her normal size. In order to get out, she has to use the "magic fan."
She enters a kitchen, in which there is a cook and a woman holding a baby. She persuades the woman to give her the child and takes the infant outside after the cook starts throwing things around. The baby then turns into a pig and squirms out of her grip. "The Duchess's Cheshire Cat" appears and disappears a couple of times to Alice and directs her to the Mad Hatter's "Mad Tea-Party." After a while, she leaves.
The Queen invites Alice to join the "ROYAL PROCESSION": a parade of marching playing cards and others headed by the White Rabbit. When Alice "unintentionally offends the Queen", the latter summons the "Executioner". Alice "boxes the ears", then flees when all the playing cards come for her. Then she wakes up and realizes it was all a dream.
# Cecil Hepworth
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-1-57554198.md`

```md
# American
Boone's daughter befriends an Indian maiden as Boone and his companion start out on a hunting expedition. While he is away, Boone's cabin is attacked by the Indians, who set it on fire and abduct Boone's daughter. Boone returns, swears vengeance, then heads out on the trail to the Indian camp. His daughter escapes but is chased. The Indians encounter Boone, which sets off a huge fight on the edge of a cliff. A burning arrow gets shot into the Indian camp. Boone gets tied to the stake and tortured. The burning arrow sets the Indian camp on fire, causing panic. Boone is rescued by his horse, and Boone has a knife fight in which he kills the Indian chief.[2]
# Wallace McCutcheon and Ediwin S. Porter
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-2-57554198.md`

```md
# American
Before heading out to a baseball game at a nearby ballpark, sports fan Mr. Brown drinks several highball cocktails. He arrives at the ballpark to watch the game, but has become so inebriated that the game appears to him in reverse, with the players running the bases backwards and the baseball flying back into the pitcher's hand. After the game is over, Mr. Brown is escorted home by one of his friends. When they arrive at Brown's house, they encounter his wife who becomes furious with the friend and proceeds to physically assault him, believing he is responsible for her husband's severe intoxication.[1]
# Unknown
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-3-57554198.md`

```md
# American
The plot is that of a black woman going to the dentist for a toothache and being given laughing gas. On her way walking home, and in other situations, she can't stop laughing, and everyone she meets "catches" the laughter from her, including a vendor and police officers.
# Edwin Stanton Porter
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-4-57554198.md`

```md
# American
On a beautiful summer day a father and mother take their daughter Dollie on an outing to the river. The mother refuses to buy a gypsy's wares. The gypsy tries to rob the mother, but the father drives him off. The gypsy returns to the camp and devises a plan. They return and kidnap Dollie while her parents are distracted. A rescue crew is organized, but the gypsy takes Dollie to his camp. They gag Dollie and hide her in a barrel before the rescue party gets to the camp. Once they leave the gypsies and escapes in their wagon. As the wagon crosses the river, the barrel falls into the water. Still sealed in the barrel, Dollie is swept downstream in dangerous currents. A boy who is fishing in the river finds the barrel, and Dollie is reunited safely with her parents.
# D. W. Griffith
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-5-57554198.md`

```md
# American
A thug accosts a girl as she leaves her workplace but a man rescues her. The thug vows revenge and, with the help of two friends, attacks the girl and her rescuer again as they're going for a walk. This time they succeed in kidnapping the rescuer. He is bound and gagged and taken away in a cart. The girl runs home and gets help from several neighbors. They track the ruffians down to a cabin in the mountains where the gang has trapped their victim and set the cabin on fire. A thug and Rescuer fight on the roof of the house.
# D. W. Griffith
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-6-57554198.md`

```md
# American
A young couple decides to elope after being caught in the midst of a romantic moment by the woman's angry father. They make plans to leave, but a thief discovers their plans and hides in their trunk and waits for the right moment to steal their belongings.
# D.W. Griffith
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-7-57554198.md`

```md
# American
A white girl (Florence Lawrence) rejects a proposal from an Indian brave (Charles Inslee) in this early one-reel Western melodrama. Despite the rejection, the Indian still comes to the girl's defense when she is abducted by his warring tribe. In her first year in films, Florence Lawrence was already the most popular among the Biograph Company's anonymous stock company players. By 1909, she was known the world over as "The Biograph Girl."
# D. W. Griffith
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-8-57554198.md`

```md
# American
No prints of the first American film adaptation of A Christmas Carol are known to exist,[1] but The Moving Picture World magazine provided a scene-by-scene description before the film's release.[2] Scrooge goes into his office and begins working. His nephew, along with three women who wish for Scrooge to donate enter. However, Scrooge dismisses them. On the night of Christmas Eve, his long-dead partner Jacob Marley comes as a ghost, warning him of a horrible fate if he does not change his ways. Scrooge meets three spirits that show Scrooge the real meaning of Christmas, along with his grave, the result of his parsimonious ways. The next morning, he wakes and realizes the error of his ways. Scrooge was then euphoric and generous for the rest of his life.
# Unknown
```

### `test_unstructured_ingest/expected-structured-output-markdown/opensearch/movies-9-57554198.md`

```md
# American
The film opens in a town on the Mexican border. A poker game is going on in the local saloon. One of the players cheats and is shot dead by another of the players, a Mexican named Pedro. In the uproar that follows Pedro is wounded as he escapes from the saloon. The sheriff is called, who tracks Pedro to his home but Pedro kills the sherriff too. While Pedro hides, his wife Juanita, is arrested on suspicion of murdering the sheriff. Pedro rescues her from the town jail and the two head for the Mexican border. Caught by the posse before they reach the border, Juanita is killed and the film ends with Pedro being arrested and taken back to town.
# D. W. Griffith
```

### `test_unstructured_ingest/expected-structured-output-markdown/outlook/21be155fb0c95885.eml.md`

```md
integration test email
```

### `test_unstructured_ingest/expected-structured-output-markdown/outlook/497eba8c81c801c6.eml.md`

```md
this is a message for the subfolder1_1
```

### `test_unstructured_ingest/expected-structured-output-markdown/outlook/4a16a411f162ebbb.eml.md`

```md
this is a message for the subfolder
```

### `test_unstructured_ingest/expected-structured-output-markdown/pdf-fast-reprocess/azure/IRS-form-1987.pdf.md`

```md

```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/Campaign/701Hu000001eX9EIAU.xml.md`

```md
# attributes.type: Campaign
# attributes.url: /services/data/v57.0/sobjects/Campaign/701Hu000001eX9EIAU
Id: 701Hu000001eX9EIAU
IsDeleted: False
# Name: GC Product Webinar - Jan 7, 2002
# ParentId: None
# Type: Webinar
# Status: Completed
StartDate: 2023-01-29
EndDate: 2023-01-29
# ExpectedRevenue: 3000000.0
# BudgetedCost: 10000.0
# ActualCost: 11400.0
# ExpectedResponse: 10.0
# NumberSent: 5000.0
# IsActive: True
# Description: None
# NumberOfLeads: 0
# NumberOfConvertedLeads: 0
# NumberOfContacts: 0
# NumberOfResponses: 0
# NumberOfOpportunities: 0
# NumberOfWonOpportunities: 0
# AmountAllOpportunities: 0.0
# AmountWonOpportunities: 0.0
# OwnerId: 005Hu00000Owz9uIAB
CreatedDate: 2023-08-18T11:48:08.000+0000
# CreatedById: 005Hu00000Owz9uIAB
LastModifiedDate: 2023-08-18T11:48:08.000+0000
# LastModifiedById: 005Hu00000Owz9uIAB
SystemModstamp: 2023-08-18T11:48:08.000+0000
# LastActivityDate: None
# LastViewedDate: None
# LastReferencedDate: None
# CampaignMemberRecordTypeId: None
```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/Campaign/701Hu000001eX9FIAU.xml.md`

```md
# attributes.type: Campaign
# attributes.url: /services/data/v57.0/sobjects/Campaign/701Hu000001eX9FIAU
Id: 701Hu000001eX9FIAU
IsDeleted: False
# Name: User Conference - Jun 17-19, 2002
# ParentId: None
# Type: Conference
# Status: Planned
StartDate: 2023-07-09
EndDate: 2023-07-11
# ExpectedRevenue: 5500000.0
# BudgetedCost: 100000.0
# ActualCost: None
# ExpectedResponse: 15.0
# NumberSent: 40000.0
# IsActive: True
# Description: None
# NumberOfLeads: 0
# NumberOfConvertedLeads: 0
# NumberOfContacts: 0
# NumberOfResponses: 0
# NumberOfOpportunities: 0
# NumberOfWonOpportunities: 0
# AmountAllOpportunities: 0.0
# AmountWonOpportunities: 0.0
# OwnerId: 005Hu00000Owz9uIAB
CreatedDate: 2023-08-18T11:48:08.000+0000
# CreatedById: 005Hu00000Owz9uIAB
LastModifiedDate: 2023-08-18T11:48:08.000+0000
# LastModifiedById: 005Hu00000Owz9uIAB
SystemModstamp: 2023-08-18T11:48:08.000+0000
# LastActivityDate: None
# LastViewedDate: None
# LastReferencedDate: None
# CampaignMemberRecordTypeId: None
```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/Campaign/701Hu000001eX9GIAU.xml.md`

```md
# attributes.type: Campaign
# attributes.url: /services/data/v57.0/sobjects/Campaign/701Hu000001eX9GIAU
Id: 701Hu000001eX9GIAU
IsDeleted: False
# Name: DM Campaign to Top Customers - Nov 12-23, 2001
# ParentId: None
# Type: Direct Mail
# Status: Completed
StartDate: 2022-12-04
EndDate: 2022-12-15
# ExpectedRevenue: 2500000.0
# BudgetedCost: 25000.0
# ActualCost: 23500.0
# ExpectedResponse: 7.0
# NumberSent: 15000.0
# IsActive: True
# Description: None
# NumberOfLeads: 0
# NumberOfConvertedLeads: 0
# NumberOfContacts: 0
# NumberOfResponses: 0
# NumberOfOpportunities: 0
# NumberOfWonOpportunities: 0
# AmountAllOpportunities: 0.0
# AmountWonOpportunities: 0.0
# OwnerId: 005Hu00000Owz9uIAB
CreatedDate: 2023-08-18T11:48:08.000+0000
# CreatedById: 005Hu00000Owz9uIAB
LastModifiedDate: 2023-08-18T11:48:08.000+0000
# LastModifiedById: 005Hu00000Owz9uIAB
SystemModstamp: 2023-08-18T11:48:08.000+0000
# LastActivityDate: None
# LastViewedDate: None
# LastReferencedDate: None
# CampaignMemberRecordTypeId: None
```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/Campaign/701Hu000001eX9HIAU.xml.md`

```md
# attributes.type: Campaign
# attributes.url: /services/data/v57.0/sobjects/Campaign/701Hu000001eX9HIAU
Id: 701Hu000001eX9HIAU
IsDeleted: False
# Name: International Electrical Engineers Association Trade Show - Mar 4-5, 2002
# ParentId: None
# Type: Trade Show
# Status: Planned
StartDate: 2023-03-26
EndDate: 2023-03-27
# ExpectedRevenue: 8500000.0
# BudgetedCost: 50000.0
# ActualCost: None
# ExpectedResponse: 0.0
# NumberSent: 0.0
# IsActive: True
# Description: None
# NumberOfLeads: 0
# NumberOfConvertedLeads: 0
# NumberOfContacts: 0
# NumberOfResponses: 0
# NumberOfOpportunities: 0
# NumberOfWonOpportunities: 0
# AmountAllOpportunities: 0.0
# AmountWonOpportunities: 0.0
# OwnerId: 005Hu00000Owz9uIAB
CreatedDate: 2023-08-18T11:48:08.000+0000
# CreatedById: 005Hu00000Owz9uIAB
LastModifiedDate: 2023-08-18T11:48:08.000+0000
# LastModifiedById: 005Hu00000Owz9uIAB
SystemModstamp: 2023-08-18T11:48:08.000+0000
# LastActivityDate: None
# LastViewedDate: None
# LastReferencedDate: None
# CampaignMemberRecordTypeId: None
```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/EmailMessage/02sHu00001efErPIAU.eml.md`

```md
Jane. This is a test of sending you an email from Salesforce! _____________________________________________________________________ Powered by Salesforce http://www.salesforce.com/
![](https://unstructuredio-dev-ed.develop.my.salesforce.com/servlet/servlet.ImageServer?oid=00DHu0000018RDe&esid=018Hu00001JMmTZ&from=int)
```

### `test_unstructured_ingest/expected-structured-output-markdown/salesforce/EmailMessage/02sHu00001efErQIAU.eml.md`

```md
Hey Sean. Testing email parsing here. Type: email Just testing the email system _____________________________________________________________________ Powered by Salesforce http://www.salesforce.com/
![](https://unstructuredio-dev-ed.develop.my.salesforce.com/servlet/servlet.ImageServer?oid=00DHu0000018RDe&esid=018Hu00001JMmTa&from=int)
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/Document.docx.md`

```md

```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/ideas-page.html.md`

```md
<table><tr><td></td><td></td><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from.  The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/permissions-fake-text.docx.md`

```md
Ingest test test document. Particularly aimed towards testing permissions.
Doylestown, PA 18901
# Important points:
- Hamburgers are delicious
- Dogs are the best
- I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/SitePages/Home.aspx.md`

```md

```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/SitePages/This-is-a-title.aspx.md`

```md
This is a plain text site page for testing purposes
These are bullet points meant for testing
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex tellus, sodales non nulla et, sodales consequat turpis. Etiam vestibulum nisl placerat risus elementum, a sodales purus rhoncus. Sed eget velit pharetra, pretium nisi nec, laoreet ligula. Duis luctus mi in ligula cursus, vel lacinia tortor ultricies. Aenean sit amet sodales odio, a maximus elit. Pellentesque vehicula diam sit amet leo placerat placerat. Integer varius elementum accumsan. Donec posuere elit mauris, eget efficitur nisl viverra vitae.
Integer at dictum nisi. Cras venenatis non velit in posuere. Curabitur tristique, eros eget tristique pellentesque, neque metus ullamcorper ligula, nec posuere neque lacus nec felis. Nulla a libero eget eros consectetur hendrerit. Pellentesque interdum, diam eget tristique pretium, quam lorem pulvinar lorem, a eleifend nisl lectus at ex. Praesent pulvinar ex ut consequat condimentum. Sed rutrum, erat a hendrerit blandit, urna mauris posuere est, at porttitor risus diam non leo. Nullam rutrum vehicula dolor, quis venenatis ligula rutrum sit amet. Nam massa justo, fermentum in dui lacinia, tincidunt imperdiet nunc. Nam posuere tortor ac lectus elementum, non mollis urna consequat. In interdum non tellus sed pellentesque.
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint-with-permissions/stanley-cups.xlsx.md`

```md
# Stanley Cups
<table border="1" class="dataframe">
  <tbody>
    <tr>
      <td>Team</td>
      <td>Location</td>
      <td>Stanley Cups</td>
    </tr>
    <tr>
      <td>Blues</td>
      <td>STL</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Flyers</td>
      <td>PHI</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Maple Leafs</td>
      <td>TOR</td>
      <td>13</td>
    </tr>
  </tbody>
</table>
# Stanley Cups Since 67
<table border="1" class="dataframe">
  <tbody>
    <tr>
      <td>Team</td>
      <td>Location</td>
      <td>Stanley Cups</td>
    </tr>
    <tr>
      <td>Blues</td>
      <td>STL</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Flyers</td>
      <td>PHI</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Maple Leafs</td>
      <td>TOR</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/Document.docx.md`

```md

```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/fake-text.txt.md`

```md
This is a test document to use for unit tests.
Doylestown, PA 18901
# Important points:
Hamburgers are delicious
Dogs are the best
I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/ideas-page.html.md`

```md
<table><tr><td></td><td></td><td>January 2023 ( Someone fed my essays into GPT to make something that could answer<br/>questions based on them, then asked it where good ideas come from.  The<br/>answer was ok, but not what I would have said. This is what I would have said.) The way to get new ideas is to notice anomalies: what seems strange,<br/>or missing, or broken? You can see anomalies in everyday life (much<br/>of standup comedy is based on this), but the best place to look for<br/>them is at the frontiers of knowledge. Knowledge grows fractally.<br/>From a distance its edges look smooth, but when you learn enough<br/>to get close to one, you&#x27;ll notice it&#x27;s full of gaps. These gaps<br/>will seem obvious; it will seem inexplicable that no one has tried<br/>x or wondered about y. In the best case, exploring such gaps yields<br/>whole new fractal buds.</td></tr></table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/permissions-fake-text.docx.md`

```md
Ingest test test document. Particularly aimed towards testing permissions.
Doylestown, PA 18901
# Important points:
- Hamburgers are delicious
- Dogs are the best
- I love fuzzy blankets
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/SitePages/Home.aspx.md`

```md

```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/SitePages/This-is-a-title.aspx.md`

```md
This is a plain text site page for testing purposes
These are bullet points meant for testing
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex tellus, sodales non nulla et, sodales consequat turpis. Etiam vestibulum nisl placerat risus elementum, a sodales purus rhoncus. Sed eget velit pharetra, pretium nisi nec, laoreet ligula. Duis luctus mi in ligula cursus, vel lacinia tortor ultricies. Aenean sit amet sodales odio, a maximus elit. Pellentesque vehicula diam sit amet leo placerat placerat. Integer varius elementum accumsan. Donec posuere elit mauris, eget efficitur nisl viverra vitae.
Integer at dictum nisi. Cras venenatis non velit in posuere. Curabitur tristique, eros eget tristique pellentesque, neque metus ullamcorper ligula, nec posuere neque lacus nec felis. Nulla a libero eget eros consectetur hendrerit. Pellentesque interdum, diam eget tristique pretium, quam lorem pulvinar lorem, a eleifend nisl lectus at ex. Praesent pulvinar ex ut consequat condimentum. Sed rutrum, erat a hendrerit blandit, urna mauris posuere est, at porttitor risus diam non leo. Nullam rutrum vehicula dolor, quis venenatis ligula rutrum sit amet. Nam massa justo, fermentum in dui lacinia, tincidunt imperdiet nunc. Nam posuere tortor ac lectus elementum, non mollis urna consequat. In interdum non tellus sed pellentesque.
```

### `test_unstructured_ingest/expected-structured-output-markdown/Sharepoint/stanley-cups.xlsx.md`

```md
# Stanley Cups
<table border="1" class="dataframe">
  <tbody>
    <tr>
      <td>Team</td>
      <td>Location</td>
      <td>Stanley Cups</td>
    </tr>
    <tr>
      <td>Blues</td>
      <td>STL</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Flyers</td>
      <td>PHI</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Maple Leafs</td>
      <td>TOR</td>
      <td>13</td>
    </tr>
  </tbody>
</table>
# Stanley Cups Since 67
<table border="1" class="dataframe">
  <tbody>
    <tr>
      <td>Team</td>
      <td>Location</td>
      <td>Stanley Cups</td>
    </tr>
    <tr>
      <td>Blues</td>
      <td>STL</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Flyers</td>
      <td>PHI</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Maple Leafs</td>
      <td>TOR</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
```

### `test_unstructured_ingest/expected-structured-output-markdown/slack/C07ABKJ83C6.md`

```md
<@U07AWSE7U4R> has joined the channel <reply> <@U07AWSE7U4R> has joined the channel
# <@U07AWSE7U4R> <reply> <@U07AWSE7U4R>
this is an unstructured CI test channel <reply> this is an unstructured CI test channel
<@U06EUA16DJ6> has joined the channel <reply> <@U06EUA16DJ6> has joined the channel
```

### `test_unstructured_ingest/expected-structured-output/astradb/25b75f1d-a2ea-4c97-b75f-1da2eadc97f7.csv.json`

```json
[
  {
    "type": "Table",
    "element_id": "29fba2aa35cbdea208791e942ac3c40c",
    "text": "_id title reviewid creationdate criticname originalscore reviewstate reviewtext 25b75f1d-a2ea-4c97-b75f-1da2eadc97f7 City Hunter: Shinjuku Private Eyes 2558908 2019-02-14 Matt Schley 2.5/5 rotten The film's out-of-touch attempts at humor may find them hunting for the reason the franchise was so popular in the first place.",
    "metadata": {
      "text_as_html": "<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>25b75f1d-a2ea-4c97-b75f-1da2eadc97f7</td><td>City Hunter: Shinjuku Private Eyes</td><td>2558908</td><td>2019-02-14</td><td>Matt Schley</td><td>2.5/5</td><td>rotten</td><td>The film's out-of-touch attempts at humor may find them hunting for the reason the franchise was so popular in the first place.</td></tr></table>",
      "languages": [
        "eng"
      ],
      "filetype": "text/csv",
      "data_source": {
        "record_locator": {
          "document_id": "25b75f1d-a2ea-4c97-b75f-1da2eadc97f7"
        },
        "filesize_bytes": 326
      }
    }
  }
]
```

### `test_unstructured_ingest/expected-structured-output/astradb/60297eea-73d7-4fca-a97e-ea73d7cfca62.csv.json`

```json
[
  {
    "type": "Table",
    "element_id": "b3b034c9f8fb0ab442599982063f0590",
    "text": "_id title reviewid creationdate criticname originalscore reviewstate reviewtext 60297eea-73d7-4fca-a97e-ea73d7cfca62 City Hunter: Shinjuku Private Eyes 2590987 2019-05-28 Reuben Baron fresh The choreography is so precise and lifelike at points one might wonder whether the movie was rotoscoped, but no live-action reference footage was used. The quality is due to the skill of the animators and Kodama's love for professional wrestling.",
    "metadata": {
      "text_as_html": "<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>60297eea-73d7-4fca-a97e-ea73d7cfca62</td><td>City Hunter: Shinjuku Private Eyes</td><td>2590987</td><td>2019-05-28</td><td>Reuben Baron</td><td/><td>fresh</td><td>The choreography is so precise and lifelike at points one might wonder whether the movie was rotoscoped, but no live-action reference footage was used. The quality is due to the skill of the animators and Kodama's love for professional wrestling.</td></tr></table>",
      "languages": [
        "eng"
      ],
      "filetype": "text/csv",
      "data_source": {
        "record_locator": {
          "document_id": "60297eea-73d7-4fca-a97e-ea73d7cfca62"
        },
        "filesize_bytes": 442
      }
    }
  }
]
```

### `test_unstructured_ingest/expected-structured-output/astradb/641d99e3-9941-4c18-9d99-e399414c183d.csv.json`

```json
[
  {
    "type": "Table",
    "element_id": "5447d9b5c663c4bd69cd0b05dc6963f8",
    "text": "_id title reviewid creationdate criticname originalscore reviewstate reviewtext 641d99e3-9941-4c18-9d99-e399414c183d Beavers 1145982 2003-05-23 Ivan M. Lincoln 3.5/4 fresh Timed to be just long enough for most youngsters' brief attention spans -- and it's packed with plenty of interesting activity, both on land and under the water.",
    "metadata": {
      "text_as_html": "<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>641d99e3-9941-4c18-9d99-e399414c183d</td><td>Beavers</td><td>1145982</td><td>2003-05-23</td><td>Ivan M. Lincoln</td><td>3.5/4</td><td>fresh</td><td>Timed to be just long enough for most youngsters' brief attention spans -- and it's packed with plenty of interesting activity, both on land and under the water.</td></tr></table>",
      "languages": [
        "eng"
      ],
      "filetype": "text/csv",
      "data_source": {
        "record_locator": {
          "document_id": "641d99e3-9941-4c18-9d99-e399414c183d"
        },
        "filesize_bytes": 338
      }
    }
  }
]
```

### `test_unstructured_ingest/expected-structured-output/astradb/762c0093-2277-4f3e-ac00-932277af3e0e.csv.json`

```json
[
  {
    "type": "Table",
    "element_id": "58d819acf213d1eb12b54f806e907722",
    "text": "_id title reviewid creationdate criticname originalscore reviewstate reviewtext 762c0093-2277-4f3e-ac00-932277af3e0e Blood Mask 1636744 2007-06-02 The Foywonder 1/5 rotten It doesn't matter if a movie costs 300 million or only 300 dollars; good is good and bad is bad, and Bloodmask: The Possession of Nicole Lameroux is just plain bad.",
    "metadata": {
      "text_as_html": "<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>762c0093-2277-4f3e-ac00-932277af3e0e</td><td>Blood Mask</td><td>1636744</td><td>2007-06-02</td><td>The Foywonder</td><td>1/5</td><td>rotten</td><td>It doesn't matter if a movie costs 300 million or only 300 dollars; good is good and bad is bad, and Bloodmask: The Possession of Nicole Lameroux is just plain bad.</td></tr></table>",
      "languages": [
        "eng"
      ],
      "filetype": "text/csv",
      "data_source": {
        "record_locator": {
          "document_id": "762c0093-2277-4f3e-ac00-932277af3e0e"
        },
        "filesize_bytes": 341
      }
    }
  }
]
```

### `test_unstructured_ingest/expected-structured-output/astradb/ae40df94-0b3a-4f89-80df-940b3a6f8966.csv.json`

```json
[
  {
    "type": "Table",
    "element_id": "7fc0ff06c2ca00682b8070d6f8668bc6",
    "text": "_id title reviewid creationdate criticname originalscore reviewstate reviewtext ae40df94-0b3a-4f89-80df-940b3a6f8966 Dangerous Men 2504681 2018-08-29 Pat Padua fresh Its clumsy determination is endearing and sometimes wildly entertaining",
    "metadata": {
      "text_as_html": "<table><tr><td>_id</td><td>title</td><td>reviewid</td><td>creationdate</td><td>criticname</td><td>originalscore</td><td>reviewstate</td><td>reviewtext</td></tr><tr><td>ae40df94-0b3a-4f89-80df-940b3a6f8966</td><td>Dangerous Men</td><td>2504681</td><td>2018-08-29</td><td>Pat Padua</td><td/><td>fresh</td><td>Its clumsy determination is endearing and sometimes wildly entertaining</td></tr></table>",
      "languages": [
        "eng"
      ],
      "filetype": "text/csv",
      "data_source": {
        "record_locator": {
          "document_id": "ae40df94-0b3a-4f89-80df-940b3a6f8966"
        },
        "filesize_bytes": 241
      }
    }
  }
]
```

### `test_unstructured_ingest/expected-structured-output/confluence-diff/testteamsp/2589690.json`

```json
[
  {
    "element_id": "273902edca72a67af1614267e617ea06",
    "metadata": {
      "data_source": {
        "date_created": "2023-07-13T14:27:12.821000",
        "date_modified": "2023-07-13T14:28:03.779000",
        "record_locator": {
          "page_id": "2589690",
          "url": "https://unstructured-ingest-test.atlassian.net"
        },
        "url": "https://unstructured-ingest-test.atlassian.net/wiki/rest/api/content/2589690",
        "version": "1"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Test text",
    "type": "UncategorizedText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/confluence-diff/testteamsp/2589704.json`

```json
[
  {
    "element_id": "9c477a45b1db458b12a2a350ecb57a36",
    "metadata": {
      "data_source": {
        "date_created": "2023-07-13T14:28:06.310000",
        "date_modified": "2023-07-14T22:16:58.907000",
        "record_locator": {
          "page_id": "2589704",
          "url": "https://unstructured-ingest-test.atlassian.net"
        },
        "url": "https://unstructured-ingest-test.atlassian.net/wiki/rest/api/content/2589704",
        "version": "3"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Test text",
    "type": "UncategorizedText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/discord/1099601456321003600.json`

```json
[
  {
    "element_id": "087bf46fb6864a7a3f3ebd7560205656",
    "metadata": {
      "data_source": {
        "date_created": "2023-04-23T12:56:26.101000+00:00",
        "date_modified": "2023-04-23T13:01:24.441000+00:00",
        "record_locator": {
          "channel": "1099601456321003600"
        },
        "url": "https://discord.com/channels/1099414370531950602/1099601456321003600"
      },
      "filename": "1099601456321003600.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "Why did the bot go on a diet? Because it had too many mega-bytes! This is a bot",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/calls/41286477879.json`

```json
[
  {
    "element_id": "7997025526d4d565f2442e6c10be4c3d",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-16T22:37:02.481000+00:00",
        "date_modified": "2023-10-16T22:37:07.918000+00:00",
        "record_locator": {
          "hubspot_id": "41286477879"
        }
      },
      "filename": "41286477879.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "Call with Testing Ipsum",
    "type": "Title"
  },
  {
    "element_id": "1111265d062cb14df259b8a212466554",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-16T22:37:02.481000+00:00",
        "date_modified": "2023-10-16T22:37:07.918000+00:00",
        "record_locator": {
          "hubspot_id": "41286477879"
        }
      },
      "filename": "41286477879.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "<div style=\"\" dir=\"auto\" data-top-level=\"true\"><p style=\"margin:0;\">Log discussing details on call done with Testing Ipsum contact at 5:00pm.</p></div>",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/calls/41287834137.json`

```json
[
  {
    "element_id": "c0def31728796aed183f6dfbf3d9427a",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-17T01:04:51.496000+00:00",
        "date_modified": "2023-10-17T02:33:00.334000+00:00",
        "record_locator": {
          "hubspot_id": "41287834137"
        }
      },
      "filename": "41287834137.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "Call with Brian Halligan (Sample Contact)",
    "type": "Title"
  },
  {
    "element_id": "d032578e24d79543c9d3ff19c4e28e0b",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-17T01:04:51.496000+00:00",
        "date_modified": "2023-10-17T02:33:00.334000+00:00",
        "record_locator": {
          "hubspot_id": "41287834137"
        }
      },
      "filename": "41287834137.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "<p>Sample call with sample contact. This is <strong>a line with rich formatted text.</strong></p>",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/communications/41286064390.json`

```json
[
  {
    "element_id": "1d6962febddd077e744ea3fbe536c401",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-16T22:30:19.006000+00:00",
        "date_modified": "2023-10-16T22:30:19.006000+00:00",
        "record_locator": {
          "hubspot_id": "41286064390"
        }
      },
      "filename": "41286064390.txt",
      "filetype": "text/plain",
      "languages": [
        "eng",
        "ita"
      ]
    },
    "text": "<div style=\"\" dir=\"auto\" data-top-level=\"true\"><p style=\"margin:0;\">Hello, this is a message to remind you to call me later today. </p></div>",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/communications/41286467154.json`

```json
[
  {
    "element_id": "4fcb37fab7354ef2e311ac36e15c18f1",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-16T22:30:54.723000+00:00",
        "date_modified": "2023-10-16T22:30:54.723000+00:00",
        "record_locator": {
          "hubspot_id": "41286467154"
        }
      },
      "filename": "41286467154.txt",
      "filetype": "text/plain",
      "languages": [
        "eng",
        "ita"
      ]
    },
    "text": "<div style=\"\" dir=\"auto\" data-top-level=\"true\"><p style=\"margin:0;\">Call completed. Suggested scheduling a more formal meeting.</p></div>",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/notes/41287833179.json`

```json
[
  {
    "element_id": "50fe8dc3fbba3d0e84ac72c01a271ec0",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-17T01:03:33.710000+00:00",
        "date_modified": "2023-10-17T01:03:33.710000+00:00",
        "record_locator": {
          "hubspot_id": "41287833179"
        }
      },
      "filename": "41287833179.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "<div style=\"\" dir=\"auto\" data-top-level=\"true\"><p style=\"margin:0;\">This is a test document to use for unit tests.</p><p style=\"margin:0;\">Doylestown, PA 18901</p><p style=\"margin:0;\">Important points:</p><ul><li><p style=\"margin:0;\">Hamburgers are delicious</p></li><li><p style=\"margin:0;\">Dogs are the best</p></li><li><p style=\"margin:0;\">I love fuzzy blankets</p></li></ul><br></div>",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/hubspot/tickets/1976928828.json`

```json
[
  {
    "element_id": "fd20671744e1d3c9ae59a0c191968dae",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-10T20:40:26.538000+00:00",
        "date_modified": "2023-10-10T20:40:32.184000+00:00",
        "record_locator": {
          "hubspot_id": "1976928828"
        }
      },
      "filename": "1976928828.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "New testing ticket",
    "type": "NarrativeText"
  },
  {
    "element_id": "d2cfe6a182677406a709cd96438a9ac9",
    "metadata": {
      "data_source": {
        "date_created": "2023-10-10T20:40:26.538000+00:00",
        "date_modified": "2023-10-10T20:40:32.184000+00:00",
        "record_locator": {
          "hubspot_id": "1976928828"
        }
      },
      "filename": "1976928828.txt",
      "filetype": "text/plain",
      "languages": [
        "eng"
      ]
    },
    "text": "This is a testing ticket. This text is used for testing purposes and is meant to represent a block of content within a ticket in the ticket description field. The remains of this is text is just filler.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/438dbc49-2e06-4f01-8031-bf283be58a60.json`

```json
[
  {
    "element_id": "b21b7e1a9374c90fad7b4ca0571a9a35",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "New Page",
    "type": "UncategorizedText"
  },
  {
    "element_id": "6c9a1c66c3f1ef2814be722d6ff431b1",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: When creating a page, it's important to give it a clear title and provide some content. This could include verifying the information, summarizing the topic, or sharing your thoughts and opinions on something that matters to you.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/4695ea53-f2b3-45b4-8638-2212fd054d73.json`

```json
[
  {
    "element_id": "23d6a73618cedf6ecc9f28279cb62421",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Morale Events",
    "type": "UncategorizedText"
  },
  {
    "element_id": "cca3a9ec1c93fe24880b41dd9988d72d",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: Morale events increase employee satisfaction, motivation, and well-being, while promoting community and teamwork, resulting in higher productivity and retention rates.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/60377009-e6b2-47f3-a8ff-f159fd8b69f5.json`

```json
[
  {
    "element_id": "4d5b94a60a5ae180faa4753897afbc5f",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Vacation Policy",
    "type": "UncategorizedText"
  },
  {
    "element_id": "e3b7316f50c3edad4ea72b199ad6b7d9",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: Vacation policies are crucial for employee well-being and productivity. They provide rest and recharge, reduce burnout and increase job satisfaction.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/898538f2-26e1-4de7-81e6-354045d4d007.json`

```json
[
  {
    "element_id": "52c2888160339820dfa8bb604c031ee9",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Mission, Vision, Values",
    "type": "UncategorizedText"
  },
  {
    "element_id": "be9ab17406409efa59dc98966370b9e7",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: A company mission provides direction and purpose, aligning actions and decisions towards a common goal. It also helps attract like-minded individuals who share the same values and vision for the company.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/8d8bee42-2167-441c-af6c-7b2cff268809.json`

```json
[
  {
    "element_id": "5bcc7126851f18b3a41c951030def658",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-02T20:36:00.000Z",
        "date_modified": "2023-08-08T19:17:00.000Z"
      },
      "emphasized_text_contents": [
        "Planning notes"
      ],
      "emphasized_text_tags": [
        "b"
      ],
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Planning notes",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/8db7ccc9-0a9c-4168-94c3-f997e60cb8cf.json`

```json
[
  {
    "element_id": "6cb5211e45401c910bcc00e277092033",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Recent Press",
    "type": "UncategorizedText"
  },
  {
    "element_id": "d7335f2ec201cb754fc463da124e5970",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: Telling employees about news about your company is important because it helps them stay informed about the direction of the company and their role in it.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/9e20be3d-cbe0-4e28-ad46-2170d40a8d37.json`

```json
[
  {
    "element_id": "bfbac21d794d26d6aaa6f71337a632d9",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-02T20:36:00.000Z",
        "date_modified": "2023-08-17T18:49:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Sprint 3",
    "type": "UncategorizedText"
  },
  {
    "element_id": "e40bd670a8fbd37e3135ea5517c5dddc",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-02T20:36:00.000Z",
        "date_modified": "2023-08-17T18:49:00.000Z"
      },
      "emphasized_text_contents": [
        "Planning notes"
      ],
      "emphasized_text_tags": [
        "b"
      ],
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Planning notes",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/dfcbe584-30b1-4551-b533-e6a5759af842.json`

```json
[
  {
    "element_id": "ee4edbe949900c6988a62505a9325d47",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Corporate Travel",
    "type": "UncategorizedText"
  },
  {
    "element_id": "756651f18284432aa247200d0bc0cc62",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: A corporate travel policy is crucial for controlling costs, ensuring compliance, and guaranteeing the safety of employees when traveling for the company.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/feccfcd4-8ca0-4638-8212-1a5726461029.json`

```json
[
  {
    "element_id": "12f0e8957240cb6d2bedffde59586918",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Benefits Policies",
    "type": "UncategorizedText"
  },
  {
    "element_id": "3e394812bcc3403068dc1d92a42271ce",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-04T18:31:00.000Z",
        "date_modified": "2023-08-04T18:31:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Notion Tip: Benefits policies can attract and retain employees, promote well-being, create positive culture, differentiate from competitors, and increase morale and satisfaction.",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/notion/fee2149e-6240-4431-8e98-a04a2e460a66.json`

```json
[
  {
    "element_id": "665e346acfccd4fb6110bcd1a2e36155",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-02T20:36:00.000Z",
        "date_modified": "2023-08-17T18:49:00.000Z"
      },
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Sprint 1",
    "type": "UncategorizedText"
  },
  {
    "element_id": "cfa5ea5800f7a2510d64c98b58742e45",
    "metadata": {
      "data_source": {
        "date_created": "2023-08-02T20:36:00.000Z",
        "date_modified": "2023-08-17T18:49:00.000Z"
      },
      "emphasized_text_contents": [
        "Planning notes"
      ],
      "emphasized_text_tags": [
        "b"
      ],
      "filetype": "text/html",
      "languages": [
        "eng"
      ]
    },
    "text": "Planning notes",
    "type": "NarrativeText"
  }
]
```

### `test_unstructured_ingest/expected-structured-output/pdf-fast-reprocess/azure/IRS-form-1987.pdf.json`

```json
[]
```

### `test_unstructured_ingest/expected-structured-output/Sharepoint-with-permissions/Document.docx.json`

```json
[]
```

### `test_unstructured_ingest/expected-structured-output/Sharepoint-with-permissions/SitePages/Home.aspx.json`

```json
[]
```

### `test_unstructured_ingest/expected-structured-output/Sharepoint/Document.docx.json`

```json
[]
```

### `test_unstructured_ingest/expected-structured-output/Sharepoint/SitePages/Home.aspx.json`

```json
[]
```

### `test_unstructured_ingest/failed-partition-docs/small.txt`

```txt
This is some test to partition

```

### `test_unstructured_ingest/json-to-clean-text-folder.sh`

```sh
#!/usr/bin/env bash

# Description:
#
# Arguments:
#   $1 folder with json files to process
#   $2 folder to place the text field for all entries, for all files at $1

set +e
SCRIPT_DIR=$(dirname "$(realpath "$0")")
INPUT_FOLDER_NAME=$1
OUTPUT_DIR_TEXT=$2
echo "CLEANING FOLDER: $INPUT_FOLDER_NAME"
echo "INTO: $OUTPUT_DIR_TEXT"
mkdir -p "$OUTPUT_DIR_TEXT"
find "$INPUT_FOLDER_NAME" -type f -print0 | xargs -0 -IX -n1 "$SCRIPT_DIR"/json-to-text.sh X "$OUTPUT_DIR_TEXT"

```

### `test_unstructured_ingest/json-to-text.sh`

```sh
#!/usr/bin/env bash

# Clean the content of json file generated by unstructured library, storing just
# text elements. The resulting file will be stored at the $2 folder with the same
# name as the original file appending .txt as suffix.
# Arguments:
# - $1 path to the file to clean
# - $2 path to folder to store the result
#

BASE=$(basename "$1")
DEST=$2/$BASE.txt
jq '.[].text' <"$1" | fold -w 80 -s >"$DEST"

```

### `test_unstructured_ingest/metrics/element-type/aggregate-scores-element-type.tsv`

```tsv
metric	average	sample_sd	population_sd	count
element-type-accuracy				0

```

### `test_unstructured_ingest/metrics/element-type/all-docs-element-type-frequency.tsv`

```tsv
filename	doctype	connector	element-type-accuracy

```

### `test_unstructured_ingest/metrics/metrics-json-manifest.txt`

```txt
handbook-1p.docx.json
example-10k.html.json
IRS-form-1987.pdf.json
science-exploration-1p.pptx.json
Core-Skills-for-Biomedical-Data-Scientists-2-pages.pdf.json
spring-weather.html.json
ideas-page.html.json
fake-text.txt.json
stanley-cups.xlsx.json
UDHR_first_article_all.txt.json
fake-html-cp1252.html.json
layout-parser-paper-with-table.jpg.json
layout-parser-paper.pdf.json
2023-Jan-economic-outlook.pdf.json
page-with-formula.pdf.json
recalibrating-risk-report.pdf.json
Silent-Giant-(1).pdf.json
wiki_movie_plots_small.csv.json
```

### `test_unstructured_ingest/python/test-ingest-chroma-output.py`

```py
import chromadb
import click


@click.command()
@click.option("--collection-name", type=str)
def run_check(collection_name):
    print(f"Checking contents of Chroma collection: {collection_name}")

    chroma_client = chromadb.HttpClient(host="localhost", port=8000)

    collection = chroma_client.get_or_create_collection(name=collection_name)

    number_of_embeddings = collection.count()
    expected_embeddings = 3
    print(
        f"# of embeddings in collection vs expected: {number_of_embeddings}/{expected_embeddings}"
    )

    assert number_of_embeddings == expected_embeddings, (
        f"Number of rows in generated table ({number_of_embeddings}) "
        f"doesn't match expected value: {expected_embeddings}"
    )

    print("Table check complete")


if __name__ == "__main__":
    run_check()

```

### `test_unstructured_ingest/python/test-ingest-delta-table-output.py`

```py
import click
from deltalake import DeltaTable


@click.command()
@click.option("--table-uri", type=str)
def run_check(table_uri):
    print(f"Checking contents of table at {table_uri}")
    delta_table = DeltaTable(
        table_uri=table_uri,
    )

    df = delta_table.to_pandas()
    EXPECTED_ROWS = 5
    EXPECTED_COLUMNS = 19
    print(f"Number of rows in table vs expected: {len(df)}/{EXPECTED_ROWS}")
    print(f"Number of columns in table vs expected: {len(df.columns)}/{EXPECTED_COLUMNS}")
    number_of_rows = len(df)
    assert number_of_rows == EXPECTED_ROWS, (
        f"number of rows in generated table ({number_of_rows}) "
        f"doesn't match expected value: {EXPECTED_ROWS}"
    )

    """
    The number of columns is associated with the flattened JSON structure of the partition output.
    If this changes, it's most likely due to the metadata changing in the output.
    """
    number_of_columns = len(df.columns)
    assert number_of_columns == EXPECTED_COLUMNS, (
        f"number of columns in generated table ({number_of_columns}) doesn't "
        f"match expected value: {EXPECTED_COLUMNS}"
    )
    print("table check complete")


if __name__ == "__main__":
    run_check()

```

### `test_unstructured_ingest/python/test-ingest-weaviate-output.py`

```py
#!/usr/bin/env python3

import os
import sys

import weaviate

weaviate_host_url = os.getenv("WEAVIATE_HOST_URL", "http://localhost:8080")
class_name = os.getenv("WEAVIATE_CLASS_NAME", "Elements")
N_ELEMENTS = 5

if __name__ == "__main__":
    print(f"Checking contents of class collection {class_name} at {weaviate_host_url}")

    client = weaviate.Client(
        url=weaviate_host_url,
    )

    response = client.query.aggregate(class_name).with_meta_count().do()
    count = response["data"]["Aggregate"][class_name][0]["meta"]["count"]
    try:
        assert count == N_ELEMENTS
    except AssertionError:
        sys.exit(f"FAIL: weaviate dest check failed: got {count}, expected {N_ELEMENTS}")
    print("SUCCESS: weaviate dest check")

```

### `test_unstructured_ingest/src/biomed-api.sh`

```sh
#!/usr/bin/env bash
# shellcheck disable=SC2317

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=biomed-api
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
DOWNLOAD_DIR=$SCRIPT_DIR/download/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
}
trap cleanup EXIT

"$SCRIPT_DIR"/check-num-files-expected-output.sh 2 $OUTPUT_FOLDER_NAME 10k

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  biomed \
  --download-dir "$DOWNLOAD_DIR" \
  --metadata-exclude coordinates,filename,file_directory,metadata.last_modified,metadata.data_source.date_processed,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --num-processes "$max_processes" \
  --strategy hi_res \
  --preserve-downloads \
  --re-download \
  --reprocess \
  --verbose \
  --api-from "2019-01-02" \
  --api-until "2019-01-02+00:03:10" \
  --max-request-time 30 \
  --max-retries 5 \
  --work-dir "$WORK_DIR" \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-diff-expected-output.sh $OUTPUT_FOLDER_NAME

```

### `test_unstructured_ingest/src/biomed-path.sh`

```sh
#!/usr/bin/env bash
# shellcheck disable=SC2317

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=biomed-path
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
DOWNLOAD_DIR=$SCRIPT_DIR/download/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
}
trap cleanup EXIT

"$SCRIPT_DIR"/check-num-files-expected-output.sh 1 $OUTPUT_FOLDER_NAME 10k

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  biomed \
  --download-dir "$DOWNLOAD_DIR" \
  --metadata-exclude coordinates,filename,file_directory,metadata.last_modified,metadata.data_source.date_processed,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --num-processes "$max_processes" \
  --strategy hi_res \
  --preserve-downloads \
  --reprocess \
  --verbose \
  --max-request-time 30 \
  --max-retries 5 \
  --path "oa_pdf/07/07/sbaa031.073.PMC7234218.pdf" \
  --work-dir "$WORK_DIR" \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-diff-expected-output.sh $OUTPUT_FOLDER_NAME

```

### `test_unstructured_ingest/src/gitlab.sh`

```sh
#!/usr/bin/env bash

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=gitlab
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
DOWNLOAD_DIR=$OUTPUT_ROOT/download/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}
CI=${CI:-"false"}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
  if [ "$CI" == "true" ]; then
    cleanup_dir "$DOWNLOAD_DIR"
  fi
}
trap cleanup EXIT

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  gitlab \
  --num-processes "$max_processes" \
  --download-dir "$DOWNLOAD_DIR" \
  --metadata-exclude coordinates,filename,file_directory,metadata.data_source.date_processed,metadata.last_modified,metadata.parent_id,metadata.category_depth \
  --strategy hi_res \
  --preserve-downloads \
  --reprocess \
  --verbose \
  --git-branch 'v0.0.7' \
  --git-file-glob '*.md,*.txt' \
  --url https://gitlab.com/gitlab-com/content-sites/docsy-gitlab \
  --work-dir "$WORK_DIR" \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-num-files-output.sh 2 $OUTPUT_FOLDER_NAME

```

### `test_unstructured_ingest/src/local-embed.sh`

```sh
#!/usr/bin/env bash

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=embed
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
}
trap cleanup EXIT

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  local \
  --num-processes "$max_processes" \
  --metadata-exclude coordinates,filename,file_directory,metadata.data_source.date_created,metadata.data_source.date_modified,metadata.data_source.date_processed,metadata.data_source.filesize_bytes,metadata.last_modified,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --verbose \
  --reprocess \
  --input-path example-docs/book-war-and-peace-1p.txt \
  --work-dir "$WORK_DIR" \
  --embedding-provider "huggingface" \
  local \
  --output-dir "$OUTPUT_DIR"

set +e

"$SCRIPT_DIR"/check-diff-expected-output.sh $OUTPUT_FOLDER_NAME

"$SCRIPT_DIR"/evaluation-ingest-cp.sh "$OUTPUT_DIR" "$OUTPUT_FOLDER_NAME"

```

### `test_unstructured_ingest/src/local.sh`

```sh
#!/usr/bin/env bash

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=local
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
}
trap cleanup EXIT

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  local \
  --num-processes "$max_processes" \
  --metadata-exclude coordinates,filename,file_directory,metadata.data_source.date_processed,metadata.last_modified,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --strategy hi_res \
  --reprocess \
  --verbose \
  --file-glob "*.html" \
  --input-path example-docs \
  --work-dir "$WORK_DIR" \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-num-files-output.sh 15 $OUTPUT_FOLDER_NAME

"$SCRIPT_DIR"/evaluation-ingest-cp.sh "$OUTPUT_DIR" "$OUTPUT_FOLDER_NAME"

```

### `test_unstructured_ingest/src/s3-compression.sh`

```sh
#!/usr/bin/env bash

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=s3-compression
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
DOWNLOAD_DIR=$SCRIPT_DIR/download/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
}
trap cleanup EXIT

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  s3 \
  --num-processes "$max_processes" \
  --download-dir "$DOWNLOAD_DIR" \
  --metadata-exclude coordinates,filename,file_directory,metadata.data_source.date_processed,metadata.last_modified,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --strategy fast \
  --preserve-downloads \
  --reprocess \
  --verbose \
  --remote-url s3://utic-dev-tech-fixtures/small-pdf-set-w-compression/ \
  --anonymous \
  --work-dir "$WORK_DIR" \
  --uncompress \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-num-files-output.sh 12 $OUTPUT_FOLDER_NAME

"$SCRIPT_DIR"/evaluation-ingest-cp.sh "$OUTPUT_DIR" "$OUTPUT_FOLDER_NAME"

```

### `test_unstructured_ingest/src/wikipedia.sh`

```sh
#!/usr/bin/env bash

set -e

SRC_PATH=$(dirname "$(realpath "$0")")
SCRIPT_DIR=$(dirname "$SRC_PATH")
cd "$SCRIPT_DIR"/.. || exit 1
OUTPUT_FOLDER_NAME=wikipedia
OUTPUT_ROOT=${OUTPUT_ROOT:-$SCRIPT_DIR}
OUTPUT_DIR=$OUTPUT_ROOT/structured-output/$OUTPUT_FOLDER_NAME
WORK_DIR=$OUTPUT_ROOT/workdir/$OUTPUT_FOLDER_NAME
DOWNLOAD_DIR=$SCRIPT_DIR/download/$OUTPUT_FOLDER_NAME
max_processes=${MAX_PROCESSES:=$(python3 -c "import os; print(os.cpu_count())")}
CI=${CI:-"false"}

# shellcheck disable=SC1091
source "$SCRIPT_DIR"/cleanup.sh
function cleanup() {
  cleanup_dir "$OUTPUT_DIR"
  cleanup_dir "$WORK_DIR"
  if [ "$CI" == "true" ]; then
    cleanup_dir "$DOWNLOAD_DIR"
  fi
}
trap cleanup EXIT

RUN_SCRIPT=${RUN_SCRIPT:-unstructured-ingest}
PYTHONPATH=${PYTHONPATH:-.} "$RUN_SCRIPT" \
  wikipedia \
  --download-dir "$DOWNLOAD_DIR" \
  --metadata-exclude coordinates,filename,file_directory,metadata.last_modified,metadata.detection_class_prob,metadata.parent_id,metadata.category_depth \
  --num-processes "$max_processes" \
  --strategy hi_res \
  --preserve-downloads \
  --verbose \
  --page-title "Open Source Software" \
  --work-dir "$WORK_DIR" \
  local \
  --output-dir "$OUTPUT_DIR"

"$SCRIPT_DIR"/check-num-files-output.sh 3 $OUTPUT_FOLDER_NAME

```

### `test_unstructured_ingest/structured-json-to-html.sh`

```sh
#!/bin/bash

# Define the input and output top directories
SCRIPT_DIR=$(dirname "$(realpath "$0")")
OUTPUT_DIR=${1:-"$SCRIPT_DIR/structured-output-html"}
INPUT_DIR="$SCRIPT_DIR/expected-structured-output"
PYTHON_SCRIPT="$SCRIPT_DIR/../scripts/convert/elements_json_to_format.py"
EXCLUDE_IMG=0
NO_GROUP=1

# Function to process JSON files
process_json_files() {
  # Add flags based on the variables
  cmd="PYTHONPATH=${PYTHONPATH:-.} python \"$PYTHON_SCRIPT\" \"$INPUT_DIR\" --outdir \"$OUTPUT_DIR\""
  if [ "$EXCLUDE_IMG" -eq 1 ]; then
    cmd+=" --exclude-img"
  fi
  if [ "$NO_GROUP" -eq 1 ]; then
    cmd+=" --no-group"
  fi
  # Run the Python script with the constructed command
  eval "$cmd"
}

# Start processing from the input directory
process_json_files

```

### `test_unstructured_ingest/structured-json-to-markdown.sh`

```sh
#!/bin/bash

# Define the input and output top directories
SCRIPT_DIR=$(dirname "$(realpath "$0")")
OUTPUT_DIR=${1:-"$SCRIPT_DIR/structured-output-markdown"}
INPUT_DIR="$SCRIPT_DIR/expected-structured-output"
PYTHON_SCRIPT="$SCRIPT_DIR/../scripts/convert/elements_json_to_format.py"
EXCLUDE_IMG=0
NO_GROUP=1

# Function to process JSON files
process_json_files() {
  # Add flags based on the variables
  cmd="PYTHONPATH=${PYTHONPATH:-.} python \"$PYTHON_SCRIPT\" \"$INPUT_DIR\" --outdir \"$OUTPUT_DIR\" --format markdown"
  if [ "$EXCLUDE_IMG" -eq 1 ]; then
    cmd+=" --exclude-img"
  fi
  if [ "$NO_GROUP" -eq 1 ]; then
    cmd+=" --no-group"
  fi
  # Run the Python script with the constructed command
  eval "$cmd"
}

# Start processing from the input directory
process_json_files

```

### `test_unstructured/__init__.py`

```py

```

### `test_unstructured/benchmarks/__init__.py`

```py

```

### `test_unstructured/benchmarks/test_benchmark_standardize_quotes.py`

```py
from unstructured.metrics.text_extraction import standardize_quotes

SAMPLE_TEXTS = [
    "She said \u201cHello\u201d and then whispered \u2018Goodbye\u2019 before leaving.",
    "\u201eTo be, or not to be, that is the question\u201d - Shakespeare\u2019s famous quote.",
    "\u00abWhen he said \u201clife is beautiful,\u201d I believed him\u00bb wrote Maria.",
    "\u275dDo you remember when we first met?\u275e she asked with a smile.",
    "\u301dThe meeting starts at 10:00, don\u2019t be late!\u301f announced the manager.",
    '\u300cHe told me "This is important" yesterday\u300d, she explained.',
    "\u300eThe sun was setting. The birds were singing. It was peaceful.\u300f",
    "\ufe42Meeting #123 @ 15:00 - Don\u2019t forget!\ufe41",
    "\u300cHello\u300d, \u275dWorld\u275e, \"Test\", 'Example', \u201eQuote\u201d, \u00abFinal\u00bb",  # noqa: E501
    "It\u2019s John\u2019s book, isn\u2019t it?",
    '\u2039Testing the system\u2019s capability for "quoted" text\u203a',
    "\u275bFirst sentence. Second sentence. Third sentence.\u275c",
    "\u300cChapter 1\u300d: \u275dThe Beginning\u275e - \u201eA new story\u201d begins \u00abtoday\u00bb.",  # noqa: E501
]


def run_standardize_quotes():
    for text in SAMPLE_TEXTS:
        standardize_quotes(text)


def test_benchmark_standardize_quotes(benchmark):
    benchmark(run_standardize_quotes)

```

### `test_unstructured/chunking/__init__.py`

```py

```

### `test_unstructured/cleaners/__init__.py`

```py

```

### `test_unstructured/common/__init__.py`

```py

```

### `test_unstructured/documents/__init__.py`

```py

```

### `test_unstructured/documents/html_files/example_with_alternative_text.html`

```html
<body class="Document">
 <div class="Page" data-page-number="1">
   <header class="Header">
    <img alt="New York logo" class="Logo"/>
    <img alt="A line graph showing the comparison of 5 year cumulative total return for stocks" class="Image"/>
   </header>
 </div>
</body>

```

### `test_unstructured/documents/html_files/example_with_inline_fields.html`

```html
<body class="Document">
 <div class="Page" data-page-number="1">
  <header class="Header">
   <p class="NarrativeText">
    Table of Contents
   </p>
   <address class="Address">
    68 Prince Street Palmdale, CA 93550
   </address>
   <a class="Hyperlink">
    www.google.com
   </a>
   <span class="UncategorizedText">
    More text
   </span>
  </header>
 </div>
</body>

```

### `test_unstructured/documents/html_files/example.html`

```html
<body class="Document">
 <div class="Page" data-page-number="1">
  <header class="Header">
   <h1 class="Title">
    Header
   </h1>
   <time class="CalendarDate">
    Date: October 30, 2023
   </time>
  </header>
  <form class="Form">
   <label class="FormField" for="company-name">
    From field name
   </label>
   <input class="FormFieldValue" value="Example value"/>
  </form>
  <section class="Section">
   <table class="Table">
    <thead class="TableHeader">
     <tr class="TableRow">
      <th class="TableCellHeader">
       Description
      </th>
      <th class="TableCellHeader">
       Row header
      </th>
     </tr>
    </thead>
    <tbody class="TableBody">
     <tr class="TableRow">
      <td class="TableCell">
       Value description
      </td>
      <td class="TableCell">
       <span class="Currency">
        50 $
       </span>
       <span class="Measurement">
        (1.32 %)
       </span>
      </td>
     </tr>
    </tbody>
   </table>
  </section>
  <section class="Section">
   <h2 class="Subtitle">
    2. Subtitle
   </h2>
   <p class="NarrativeText">
    Paragraph text
   </p>
  </section>
 </div>
</body>

```

### `test_unstructured/embed/__init__.py`

```py

```

### `test_unstructured/embed/test_mixedbreadai.py`

```py
from unstructured.documents.elements import Text
from unstructured.embed.mixedbreadai import (
    MixedbreadAIEmbeddingConfig,
    MixedbreadAIEmbeddingEncoder,
)


def test_embed_documents_does_not_break_element_to_dict(mocker):
    mock_client = mocker.MagicMock()

    def mock_embeddings(
        model,
        normalized,
        encoding_format,
        truncation_strategy,
        request_options,
        input,
    ):
        mock_response = mocker.MagicMock()
        mock_response.data = [mocker.MagicMock(embedding=[i, i + 1]) for i in range(len(input))]
        return mock_response

    mock_client.embeddings.side_effect = mock_embeddings

    # Mock get_client to return our mock_client
    mocker.patch.object(MixedbreadAIEmbeddingConfig, "get_client", return_value=mock_client)

    encoder = MixedbreadAIEmbeddingEncoder(
        config=MixedbreadAIEmbeddingConfig(
            api_key="api_key", model_name="mixedbread-ai/mxbai-embed-large-v1"
        )
    )

    elements = encoder.embed_documents(
        elements=[Text("This is sentence 1"), Text("This is sentence 2")],
    )
    assert len(elements) == 2
    assert elements[0].to_dict()["text"] == "This is sentence 1"
    assert elements[1].to_dict()["text"] == "This is sentence 2"
    assert elements[0].embeddings is not None
    assert elements[1].embeddings is not None

```

### `test_unstructured/embed/test_octoai.py`

```py
from unstructured.documents.elements import Text
from unstructured.embed.octoai import OctoAiEmbeddingConfig, OctoAIEmbeddingEncoder


def test_embed_documents_does_not_break_element_to_dict(mocker):
    # Mocked client with the desired behavior for embed_documents
    mock_client = mocker.MagicMock()
    mock_client.embed_documents.return_value = [1, 2]

    # Mock get_client to return our mock_client
    mocker.patch.object(OctoAiEmbeddingConfig, "get_client", return_value=mock_client)

    encoder = OctoAIEmbeddingEncoder(config=OctoAiEmbeddingConfig(api_key="api_key"))
    elements = encoder.embed_documents(
        elements=[Text("This is sentence 1"), Text("This is sentence 2")],
    )
    assert len(elements) == 2
    assert elements[0].to_dict()["text"] == "This is sentence 1"
    assert elements[1].to_dict()["text"] == "This is sentence 2"

```

### `test_unstructured/embed/test_openai.py`

```py
from unstructured.documents.elements import Text
from unstructured.embed.openai import OpenAIEmbeddingConfig, OpenAIEmbeddingEncoder


def test_embed_documents_does_not_break_element_to_dict(mocker):
    # Mocked client with the desired behavior for embed_documents
    mock_client = mocker.MagicMock()
    mock_client.embed_documents.return_value = [1, 2]

    # Mock get_client to return our mock_client
    mocker.patch.object(OpenAIEmbeddingConfig, "get_client", return_value=mock_client)

    encoder = OpenAIEmbeddingEncoder(config=OpenAIEmbeddingConfig(api_key="api_key"))
    elements = encoder.embed_documents(
        elements=[Text("This is sentence 1"), Text("This is sentence 2")],
    )
    assert len(elements) == 2
    assert elements[0].to_dict()["text"] == "This is sentence 1"
    assert elements[1].to_dict()["text"] == "This is sentence 2"

```

### `test_unstructured/embed/test_vertexai.py`

```py
from unstructured.documents.elements import Text
from unstructured.embed.vertexai import VertexAIEmbeddingConfig, VertexAIEmbeddingEncoder


def test_embed_documents_does_not_break_element_to_dict(mocker):
    # Mocked client with the desired behavior for embed_documents
    mock_client = mocker.MagicMock()
    mock_client.embed_documents.return_value = [1, 2]

    # Mock create_client to return our mock_client
    mocker.patch.object(VertexAIEmbeddingConfig, "get_client", return_value=mock_client)

    encoder = VertexAIEmbeddingEncoder(config=VertexAIEmbeddingConfig(api_key="api_key"))
    elements = encoder.embed_documents(
        elements=[Text("This is sentence 1"), Text("This is sentence 2")],
    )
    assert len(elements) == 2
    assert elements[0].to_dict()["text"] == "This is sentence 1"
    assert elements[1].to_dict()["text"] == "This is sentence 2"

```

### `test_unstructured/file_utils/__init__.py`

```py

```

### `test_unstructured/metrics/__init__.py`

```py

```

### `test_unstructured/metrics/test_table_alignment.py`

```py
from unstructured.metrics.table.table_alignment import TableAlignment


def test_get_element_level_alignment_when_no_match():
    example_table = [{"row_index": 0, "col_index": 0, "content": "a"}]
    metrics = TableAlignment.get_element_level_alignment(
        predicted_table_data=[example_table],
        ground_truth_table_data=[example_table],
        matched_indices=[-1],
    )
    assert metrics["col_index_acc"] == 0
    assert metrics["row_index_acc"] == 0
    assert metrics["row_content_acc"] == 0
    assert metrics["col_content_acc"] == 0

```

### `test_unstructured/metrics/test_table_formats.py`

```py
import pytest

from unstructured.metrics.table.table_formats import SimpleTableCell


@pytest.mark.parametrize(
    ("row_nums", "column_nums", "x", "y", "w", "h"),
    [
        ([3, 2, 1], [6, 7], 6, 1, 2, 3),
        ([2], [6, 7], 6, 2, 2, 1),
        ([1, 2, 3], [20], 20, 1, 1, 3),
        ([5], [5], 5, 5, 1, 1),
    ],
)
def test_simple_table_cell_parsing_from_table_transformer_when_expected_input(
    row_nums, column_nums, x, y, w, h
):
    table_transformer_cell = {"row_nums": row_nums, "column_nums": column_nums, "cell text": "text"}
    transformed_cell = SimpleTableCell.from_table_transformer_cell(table_transformer_cell)
    expected_cell = SimpleTableCell(x=x, y=y, w=w, h=h, content="text")
    assert expected_cell == transformed_cell


def test_simple_table_cell_parsing_from_table_transformer_when_missing_row_nums():
    cell = {"row_nums": [], "column_nums": [1], "cell text": "text"}
    with pytest.raises(ValueError, match='has missing values under "row_nums" key'):
        SimpleTableCell.from_table_transformer_cell(cell)


def test_simple_table_cell_parsing_from_table_transformer_when_missing_column_nums():
    cell = {"row_nums": [1], "column_nums": [], "cell text": "text"}
    with pytest.raises(ValueError, match='has missing values under "column_nums" key'):
        SimpleTableCell.from_table_transformer_cell(cell)

```

### `test_unstructured/metrics/test_utils.py`

```py
import pytest

from unstructured.metrics.utils import (
    _mean,
    _pstdev,
    _stdev,
    _uniquity_file,
)


@pytest.mark.parametrize(
    ("numbers", "expected_mean", "expected_stdev", "expected_pstdev"),
    [
        ([2, 5, 6, 7], 5, 2.16, 1.871),
        ([1, 100], 50.5, 70.004, 49.5),
        ([1], 1, None, None),
        ([], None, None, None),
    ],
)
def test_stats(numbers, expected_mean, expected_stdev, expected_pstdev):
    mean = _mean(numbers)
    stdev = _stdev(numbers)
    pstdev = _pstdev(numbers)
    assert mean == expected_mean
    assert stdev == expected_stdev
    assert pstdev == expected_pstdev


@pytest.mark.parametrize(
    ("filenames"),
    [("filename.ext", "filename (1).ext", "randomfile.ext", "filename.txt", "filename (5).txt")],
)
def test_uniquity_file(filenames):
    final_filename = _uniquity_file(filenames, "filename.ext")
    assert final_filename == "filename (2).ext"

```

### `test_unstructured/nlp/__init__.py`

```py

```

### `test_unstructured/nlp/mock_nlp.py`

```py
from typing import List, Tuple


def mock_sent_tokenize(text: str) -> List[str]:
    sentences = text.split(".")
    return sentences[:-1] if text.endswith(".") else sentences


def mock_word_tokenize(text: str) -> List[str]:
    return text.split(" ")


def mock_pos_tag(text: str) -> List[Tuple[str, str]]:
    tokens = mock_word_tokenize(text)
    pos_tags: List[Tuple[str, str]] = []
    for token in tokens:
        if token.lower() == "ask":
            pos_tags.append((token, "VB"))
        else:
            pos_tags.append((token, ""))
    return pos_tags

```

### `test_unstructured/nlp/test_partition.py`

```py
# flake8: noqa

```

### `test_unstructured/partition/__init__.py`

```py

```

### `test_unstructured/partition/common/__init__.py`

```py

```

### `test_unstructured/partition/conftest.py`

```py
import pytest

from unstructured.partition.utils.constants import OCR_AGENT_PADDLE, OCR_AGENT_TESSERACT


@pytest.fixture
def mock_ocr_get_instance(mocker):
    """Fixture that mocks OCRAgent.get_instance to prevent real OCR agent instantiation."""

    def mock_get_instance(ocr_agent_module, language):
        if ocr_agent_module in (OCR_AGENT_TESSERACT, OCR_AGENT_PADDLE):
            return mocker.MagicMock()
        else:
            raise ValueError(f"Unknown OCR agent: {ocr_agent_module}")

    from unstructured.partition.pdf_image.ocr import OCRAgent

    return mocker.patch.object(OCRAgent, "get_instance", side_effect=mock_get_instance)

```

### `test_unstructured/partition/html/__init__.py`

```py

```

### `test_unstructured/partition/html/test_html_utils.py`

```py
import pytest

from unstructured.partition.html.transformations import remove_empty_tags_from_html_content


@pytest.mark.parametrize(
    ("html_content, expected_output"),  # noqa PT006
    [
        ("<div></div>", ""),
        ("<div><p></p></div>", "<div></div>"),
        ("<div><input/></div>", "<div><input/></div>"),
        ("<div><br/></div>", "<div><br/></div>"),
        ('<div><p id="1"></p></div>', '<div><p id="1"></p></div>'),
        ("<div><p>Content</p></div>", "<div><p>Content</p></div>"),
        ("<div><p> </p></div>", "<div></div>"),
        ("<div><p></p><span></span></div>", "<div></div>"),
        ("<div><p>Content</p><span></span></div>", "<div><p>Content</p></div>"),
        ("<div><p>Content</p><span> </span></div>", "<div><p>Content</p></div>"),
        (
            "<div><p>Content</p><span>Text</span></div>",
            "<div><p>Content</p><span>Text</span></div>",
        ),
    ],
)
def test_removes_empty_tags(html_content, expected_output):
    assert remove_empty_tags_from_html_content(html_content) == expected_output

```

### `test_unstructured/partition/pdf_image/__init__.py`

```py

```

### `test_unstructured/partition/utils/__init__.py`

```py

```

### `test_unstructured/staging/__init__.py`

```py

```

### `test_unstructured/testfiles/chunking/table_text_200.json`

```json
[
    {
        "type": "Table",
        "element_id": "ca96108263324e9d865a98f19cf7c940",
        "text": "RFP Number: 2024-PMO-01 RFP Title: PMO Services RFP RFP Due Date and Time: Number of Pages: #189 05/30/2024 by 5:00pm Central Time",
        "metadata": {
            "category_depth": 1,
            "page_number": 1,
            "parent_id": "747587de72444235a68c768d544ff5f3",
            "text_as_html": "<table class=\"Table\" id=\"ca96108263324e9d865a98f19cf7c940\"> <tbody> <tr> <td>RFP Number: 2024-PMO-01</td><td>RFP Title: PMO Services RFP</td></tr><tr> <td>RFP Due Date and Time:</td><td>Number of Pages: #189</td></tr><tr> <td>05/30/2024 by 5:00pm Central Time</td><td></td></tr></tbody></table>",
            "languages": [
                "eng"
            ],
            "filetype": "text/html"
        }
    },
    {
        "type": "Text",
        "element_id": "0163a58539934b3aaca402c9e961b0d6",
        "text": "REQUEST FOR PROPOSALS",
        "metadata": {
            "category_depth": 1,
            "page_number": 1,
            "parent_id": "747587de72444235a68c768d544ff5f3",
            "text_as_html": "<h2 class=\"Subtitle\" id=\"0163a58539934b3aaca402c9e961b0d6\">REQUEST FOR PROPOSALS </h2>",
            "languages": [
                "eng"
            ],
            "filetype": "text/html"
        }
    }
]

```

### `test_unstructured/testfiles/chunking/title_table_200.json`

```json
[
    {
        "type": "Title",
        "element_id": "0163a58539934b3aaca402c9e961b0d6",
        "text": "REQUEST FOR PROPOSALS",
        "metadata": {
            "category_depth": 1,
            "page_number": 1,
            "parent_id": "747587de72444235a68c768d544ff5f3",
            "text_as_html": "<h2 class=\"Subtitle\" id=\"0163a58539934b3aaca402c9e961b0d6\">REQUEST FOR PROPOSALS </h2>",
            "languages": [
                "eng"
            ],
            "filetype": "text/html"
        }
    },
    {
        "type": "Table",
        "element_id": "ca96108263324e9d865a98f19cf7c940",
        "text": "RFP Number: 2024-PMO-01 RFP Title: PMO Services RFP RFP Due Date and Time: Number of Pages: #189 05/30/2024 by 5:00pm Central Time",
        "metadata": {
            "category_depth": 1,
            "page_number": 1,
            "parent_id": "747587de72444235a68c768d544ff5f3",
            "text_as_html": "<table class=\"Table\" id=\"ca96108263324e9d865a98f19cf7c940\"> <tbody> <tr> <td>RFP Number: 2024-PMO-01</td><td>RFP Title: PMO Services RFP</td></tr><tr> <td>RFP Due Date and Time:</td><td>Number of Pages: #189</td></tr><tr> <td>05/30/2024 by 5:00pm Central Time</td><td></td></tr></tbody></table>",
            "languages": [
                "eng"
            ],
            "filetype": "text/html"
        }
    }
]

```

### `test_unstructured/testfiles/staging/formula-elements.json`

```json
[
  {
    "type": "NarrativeText",
    "element_id": "n1",
    "text": "See equation below."
  },
  {
    "type": "Formula",
    "element_id": "f1",
    "text": "E = mc^2"
  }
]

```

### `typings/filetype/__init__.pyi`

```pyi
from __future__ import annotations

import pathlib
from typing import IO

def guess_mime(obj: bytearray | str | bytes | pathlib.PurePath | IO[bytes]) -> str | None: ...

```

### `typings/lxml/_types.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from os import PathLike
from typing import Any, Callable, Collection, Protocol, TypeVar

from typing_extensions import TypeAlias

from .etree import HTMLParser, QName, XMLParser, _Element, _ElementTree

_ET = TypeVar("_ET", bound=_Element, default=_Element)
_ET_co = TypeVar("_ET_co", bound=_Element, default=_Element, covariant=True)
_KT_co = TypeVar("_KT_co", covariant=True)
_VT_co = TypeVar("_VT_co", covariant=True)

_AttrName: TypeAlias = str

_AttrVal: TypeAlias = _TextArg

_ElemPathArg: TypeAlias = str | QName

_ElementOrTree: TypeAlias = _ET | _ElementTree[_ET]

_FilePath = str | PathLike[str] | PathLike[bytes]

_TagName: TypeAlias = str

_TagSelector: TypeAlias = _TagName | Callable[..., _Element]

# String argument also support QName in various places
_TextArg: TypeAlias = str | bytes | QName

_XPathObject = Any

# The basic parsers bundled in lxml.etree
_DefEtreeParsers = XMLParser[_ET_co] | HTMLParser[_ET_co]

class SupportsLaxedItems(Protocol[_KT_co, _VT_co]):
    def items(self) -> Collection[tuple[_KT_co, _VT_co]]: ...

```

### `typings/lxml/etree/__init__.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from ._classlookup import ElementBase as ElementBase
from ._classlookup import ElementDefaultClassLookup as ElementDefaultClassLookup
from ._cleanup import strip_elements as strip_elements
from ._element import _Element as _Element
from ._element import _ElementTree as _ElementTree
from ._iterparse import iterparse as iterparse
from ._module_func import fromstring as fromstring
from ._module_func import tostring as tostring
from ._module_misc import QName as QName
from ._nsclasses import ElementNamespaceClassLookup as ElementNamespaceClassLookup
from ._parser import HTMLParser as HTMLParser
from ._parser import XMLParser as XMLParser
from ._xpath import XPath as XPath

```

### `typings/lxml/etree/_cleanup.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import Collection, overload

from .._types import _ElementOrTree, _TagSelector

@overload
def strip_elements(
    __tree_or_elem: _ElementOrTree,
    *tag_names: _TagSelector,
    with_tail: bool = True,
) -> None: ...
@overload
def strip_elements(
    __tree_or_elem: _ElementOrTree,
    __tag: Collection[_TagSelector],
    /,
    with_tail: bool = True,
) -> None: ...

```

### `typings/lxml/etree/_iterparse.pyi`

```pyi
# pyright: reportPrivateUsage=false

import sys
from typing import Iterable, Iterator, Literal

from _typeshed import SupportsRead, _T_co

from .._types import _FilePath, _TagSelector
from ._element import _Element

if sys.version_info >= (3, 10):
    from typing import TypeAlias
else:
    from typing_extensions import TypeAlias

_NoNSEventNames: TypeAlias = Literal["start", "end", "comment", "pi"]

class iterparse(Iterator[_T_co]):
    """Incremental parser"""

    def __new__(
        cls,
        source: _FilePath | SupportsRead[bytes],
        events: Iterable[_NoNSEventNames],
        *,
        tag: _TagSelector | Iterable[_TagSelector] | None = None,
        attribute_defaults: bool = False,
        dtd_validation: bool = False,
        load_dtd: bool = False,
        no_network: bool = True,
        remove_blank_text: bool = False,
        compact: bool = True,
        resolve_entities: bool = True,
        remove_comments: bool = False,
        remove_pis: bool = False,
        strip_cdata: bool = True,
        encoding: str | None = None,
        html: bool = False,
        recover: bool | None = None,
        huge_tree: bool = False,
        collect_ids: bool = True,
    ) -> iterparse[tuple[_NoNSEventNames, _Element]]: ...

```

### `typings/lxml/etree/_module_func.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from .._types import _ElementOrTree
from ..etree import HTMLParser, XMLParser
from ._element import _Element

def fromstring(text: str | bytes, parser: XMLParser | HTMLParser) -> _Element: ...

# Under XML Canonicalization (C14N) mode, most arguments are ignored,
# some arguments would even raise exception outright if specified.
def tostring(
    element_or_tree: _ElementOrTree,
    *,
    encoding: str | type[str] | None = None,
    pretty_print: bool = False,
    with_tail: bool = True,
) -> str: ...

```

### `typings/lxml/etree/_module_misc.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

class CDATA:
    def __init__(self, data: str) -> None: ...

class QName: ...

```

### `typings/lxml/etree/_nsclasses.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import Iterable, Iterator, MutableMapping, TypeVar

from .._types import SupportsLaxedItems
from ._classlookup import ElementBase, ElementClassLookup, FallbackElementClassLookup

_KT = TypeVar("_KT")
_VT = TypeVar("_VT")

class _NamespaceRegistry(MutableMapping[_KT, _VT]):
    def __delitem__(self, __key: _KT) -> None: ...
    def __getitem__(self, __key: _KT) -> _VT: ...
    def __setitem__(self, __key: _KT, __value: _VT) -> None: ...
    def __iter__(self) -> Iterator[_KT]: ...
    def __len__(self) -> int: ...
    def update(  # type: ignore[override]
        self,
        class_dict_iterable: SupportsLaxedItems[_KT, _VT] | Iterable[tuple[_KT, _VT]],
    ) -> None: ...
    def items(self) -> list[tuple[_KT, _VT]]: ...  # type: ignore[override]
    def iteritems(self) -> Iterator[tuple[_KT, _VT]]: ...
    def clear(self) -> None: ...

class _ClassNamespaceRegistry(_NamespaceRegistry[str | None, type[ElementBase]]): ...

class ElementNamespaceClassLookup(FallbackElementClassLookup):
    def __init__(self, fallback: ElementClassLookup | None = None) -> None: ...
    def get_namespace(self, ns_uri: str | None) -> _ClassNamespaceRegistry: ...

```

### `typings/lxml/etree/_parser.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import Generic

from .._types import _ET_co
from ._classlookup import ElementClassLookup

# Includes most stuff in _BaseParser
class _FeedParser(Generic[_ET_co]): ...

class HTMLParser(_FeedParser[_ET_co]):
    def __init__(
        self,
        *,
        encoding: str | None = None,
        remove_blank_text: bool = False,
        remove_comments: bool = False,
        remove_pis: bool = False,
        strip_cdata: bool = True,
        no_network: bool = True,
        recover: bool = True,
        compact: bool = True,
        default_doctype: bool = True,
        collect_ids: bool = True,
        huge_tree: bool = False,
    ) -> None: ...
    def set_element_class_lookup(self, lookup: ElementClassLookup | None = None) -> None: ...

class XMLParser(_FeedParser[_ET_co]):
    def __init__(
        self,
        *,
        encoding: str | None = None,
        attribute_defaults: bool = False,
        dtd_validation: bool = False,
        load_dtd: bool = False,
        no_network: bool = True,
        ns_clean: bool = False,
        recover: bool = False,
        huge_tree: bool = False,
        remove_blank_text: bool = False,
        remove_comments: bool = False,
        remove_pis: bool = False,
        strip_cdata: bool = True,
        collect_ids: bool = True,
        compact: bool = True,
    ) -> None: ...

```

### `typings/lxml/etree/_xpath.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import Any

from .._types import _ElementOrTree

class XPath:
    def __init__(self, path: str) -> None: ...
    def __call__(self, _etree_or_element: _ElementOrTree) -> Any: ...
    @property
    def path(self) -> str: ...

```

### `typings/lxml/html/__init__.pyi`

```pyi
from __future__ import annotations

from ._element import (
    HtmlElement as HtmlElement,
)
from ._parse import (
    fragment_fromstring as fragment_fromstring,
)

```

### `typings/lxml/html/_element.pyi`

```pyi
from __future__ import annotations

from .. import etree

class HtmlElement(etree.ElementBase):
    def text_content(self) -> str: ...

```

### `typings/lxml/html/_parse.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import TYPE_CHECKING

from .._types import _DefEtreeParsers
from ._element import HtmlElement

if TYPE_CHECKING:
    from typing_extensions import TypeAlias

_HtmlElemParser: TypeAlias = _DefEtreeParsers[HtmlElement]

def fragment_fromstring(
    html: str,
    create_parent: bool = False,
    base_url: str | None = None,
    parser: _HtmlElemParser | None = None,
) -> HtmlElement: ...

```

### `typings/lxml/html/soupparser.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from lxml.html._element import HtmlElement

def fromstring(
    data: str,
) -> HtmlElement: ...

```

### `typings/magic/__init__.pyi`

```pyi
from __future__ import annotations

from os import PathLike

def from_buffer(buffer: bytes | str, mime: bool = ...) -> str: ...
def from_file(filename: bytes | str | PathLike[str], mime: bool = ...) -> str: ...

```

### `typings/pandas/__init__.pyi`

```pyi
from __future__ import annotations

from pandas.core.api import DataFrame as DataFrame
from pandas.io.api import read_csv as read_csv
from pandas.io.api import read_excel as read_excel

```

### `typings/pandas/_typing.pyi`

```pyi
from __future__ import annotations

from os import PathLike
from typing import Protocol, TypeVar

from typing_extensions import TypeAlias

AnyStr_cov = TypeVar("AnyStr_cov", str, bytes, covariant=True)
FilePath: TypeAlias = str | PathLike[str]
S1 = TypeVar("S1")

class BaseBuffer(Protocol):
    @property
    def mode(self) -> str: ...
    def seek(self, __offset: int, __whence: int = ...) -> int: ...
    def seekable(self) -> bool: ...
    def tell(self) -> int: ...

class ReadBuffer(BaseBuffer, Protocol[AnyStr_cov]):
    def read(self, __n: int = ...) -> AnyStr_cov: ...

```

### `typings/pandas/core/api.pyi`

```pyi
from __future__ import annotations

from pandas.core.frame import DataFrame as DataFrame

```

### `typings/pandas/core/frame.pyi`

```pyi
# pyright: reportPrivateUsage=false

from __future__ import annotations

from typing import Any, Hashable, Iterable

from pandas.core.indexing import _iLocIndexer
from pandas.core.series import Series

class DataFrame:
    def __init__(self, *args: Any, **kwargs: Any) -> None: ...
    def __getitem__(self, key: Iterable[Hashable] | slice) -> DataFrame: ...
    def __len__(self) -> int: ...
    @property
    def T(self) -> DataFrame: ...
    @property
    def iloc(self) -> _iLocIndexerFrame: ...
    def isna(self) -> DataFrame: ...
    def iterrows(self) -> Iterable[tuple[Hashable, Series[Any]]]: ...
    @property
    def shape(self) -> tuple[int, int]: ...
    def to_html(
        self,
        index: bool = ...,
        header: bool = ...,
        na_rep: str = ...,
    ) -> str: ...

class _iLocIndexerFrame(_iLocIndexer):
    def __getitem__(self, idx: Any) -> DataFrame: ...

```

### `typings/pandas/io/api.pyi`

```pyi
from __future__ import annotations

from pandas.io.excel import read_excel as read_excel
from pandas.io.parsers import read_csv as read_csv

```

### `typings/pandas/io/excel/__init__.pyi`

```pyi
from pandas.io.excel._base import read_excel as read_excel

```

### `typings/pandas/io/excel/_base.pyi`

```pyi
from __future__ import annotations

from typing import Sequence

from pandas._typing import FilePath, ReadBuffer
from pandas.core.frame import DataFrame

def read_excel(
    io: FilePath | ReadBuffer[bytes],
    sheet_name: None,
    *,
    header: int | Sequence[int] | None = ...,
) -> dict[str, DataFrame]: ...

```

### `typings/pandas/io/parsers/__init__.pyi`

```pyi
from __future__ import annotations

from pandas.io.parsers.readers import (
    read_csv as read_csv,
)

```

### `typings/pandas/io/parsers/readers.pyi`

```pyi
from __future__ import annotations

from typing import IO, Literal

from pandas.core.frame import DataFrame

def read_csv(
    filepath_or_buffer: str | IO[bytes],
    *,
    encoding: str | None = ...,
    sep: str | None = ...,
    header: int | None | Literal["infer"] = ...,
) -> DataFrame: ...

```

### `typings/pptx/__init__.pyi`

```pyi
from pptx.api import Presentation

__all__ = ["Presentation"]

```

### `typings/pptx/api.pyi`

```pyi
from typing import IO, Union

import pptx.presentation

def Presentation(pptx: Union[str, IO[bytes], None] = None) -> pptx.presentation.Presentation: ...

```

### `typings/pptx/oxml/__init__.py`

```py
# pyright: reportPrivateUsage=false

from typing import Union

from lxml import etree


def parse_xml(xml: Union[str, bytes]) -> etree._Element: ...  # fmt: skip

```

### `typings/pptx/oxml/text.pyi`

```pyi
from pptx.oxml.xmlchemy import BaseOxmlElement

class CT_TextParagraph(BaseOxmlElement):
    def get_or_add_pPr(self) -> CT_TextParagraphProperties: ...

class CT_TextParagraphProperties(BaseOxmlElement): ...

```

### `typings/pptx/oxml/xmlchemy.pyi`

```pyi
from typing import Any, Iterator

from lxml import etree

class BaseOxmlElement(etree.ElementBase):
    def __iter__(self) -> Iterator[BaseOxmlElement]: ...
    @property
    def xml(self) -> str: ...
    def xpath(self, xpath_str: str) -> Any:  # pyright: ignore[reportIncompatibleMethodOverride]
        """Return type is typically Sequence[ElementBase], but ...

        lxml.etree.XPath has many possible return types including bool, (a "smart") str,
        float. The return type can also be a list containing ElementBase, comments,
        processing instructions, str, and tuple. So you need to cast the result based on
        the XPath expression you use.
        """
        ...

```

### `typings/pptx/presentation.pyi`

```pyi
from typing import IO, Union

from pptx.shared import PartElementProxy
from pptx.slide import SlideLayouts, Slides

class Presentation(PartElementProxy):
    def save(self, file: Union[str, IO[bytes]]) -> None: ...
    @property
    def slide_layouts(self) -> SlideLayouts: ...
    @property
    def slides(self) -> Slides: ...

```

### `typings/pptx/shapes/__init__.py`

```py
class Subshape: ...  # fmt: skip

```

### `typings/pptx/shapes/autoshape.pyi`

```pyi
from pptx.shapes.base import BaseShape
from pptx.text.text import TextFrame

class Shape(BaseShape):
    text: str
    @property
    def text_frame(self) -> TextFrame: ...

```

### `typings/pptx/shapes/base.pyi`

```pyi
from pptx.util import Length

class BaseShape:
    left: Length
    top: Length
    @property
    def has_table(self) -> bool: ...
    @property
    def has_text_frame(self) -> bool: ...

```

### `typings/pptx/shapes/graphfrm.pyi`

```pyi
from pptx.shapes.base import BaseShape
from pptx.table import Table

class GraphicFrame(BaseShape):
    @property
    def table(self) -> Table: ...

```

### `typings/pptx/shapes/group.pyi`

```pyi
from pptx.shapes.base import BaseShape
from pptx.shapes.shapetree import GroupShapes

class GroupShape(BaseShape):
    @property
    def shapes(self) -> GroupShapes: ...

```

### `typings/pptx/shapes/picture.pyi`

```pyi
from pptx.parts.image import Image
from pptx.shapes.base import BaseShape

class _BasePicture(BaseShape): ...

class Picture(_BasePicture):
    @property
    def image(self) -> Image: ...

```

### `typings/pptx/shapes/shapetree.pyi`

```pyi
from typing import Iterator

from pptx.shapes.autoshape import Shape
from pptx.shapes.base import BaseShape
from pptx.shared import ParentedElementProxy
from pptx.util import Length

class _BaseShapes(ParentedElementProxy):
    def __iter__(self) -> Iterator[BaseShape]: ...

class _BaseGroupShapes(_BaseShapes):
    def add_textbox(self, left: Length, top: Length, width: Length, height: Length) -> Shape: ...

class GroupShapes(_BaseGroupShapes): ...
class NotesSlideShapes(_BaseShapes): ...

class SlidePlaceholders(ParentedElementProxy):
    def __getitem__(self, idx: int) -> Shape: ...

class SlideShapes(_BaseGroupShapes):
    def __getitem__(self, idx: int) -> BaseShape: ...
    def __iter__(self) -> Iterator[BaseShape]: ...
    @property
    def placeholders(self) -> SlidePlaceholders: ...
    @property
    def title(self) -> Shape | None: ...

```

### `typings/pptx/shared.pyi`

```pyi
class ElementProxy: ...
class ParentedElementProxy(ElementProxy): ...
class PartElementProxy(ElementProxy): ...

```

### `typings/pptx/slide.pyi`

```pyi
from typing import Iterator, Optional

from pptx.shapes.shapetree import SlideShapes
from pptx.shared import ParentedElementProxy, PartElementProxy
from pptx.text.text import TextFrame

class _BaseSlide(PartElementProxy): ...

class NotesSlide(_BaseSlide):
    @property
    def notes_text_frame(self) -> Optional[TextFrame]: ...

class Slide(_BaseSlide):
    @property
    def has_notes_slide(self) -> bool: ...
    @property
    def notes_slide(self) -> NotesSlide: ...
    @property
    def shapes(self) -> SlideShapes: ...

class SlideLayout(_BaseSlide): ...

class SlideLayouts(ParentedElementProxy):
    def __getitem__(self, idx: int) -> SlideLayout: ...
    def __iter__(self) -> Iterator[SlideLayout]: ...
    def __len__(self) -> int: ...

class Slides(ParentedElementProxy):
    def __getitem__(self, idx: int) -> Slide: ...
    def __iter__(self) -> Iterator[Slide]: ...
    def __len__(self) -> int: ...
    def add_slide(self, slide_layout: SlideLayout) -> Slide: ...

```

### `typings/pptx/table.pyi`

```pyi
class Table:
    @property
    def rows(self) -> tuple[_Row]: ...

class _Row:
    @property
    def cells(self) -> tuple[_Cell]: ...

class _Cell:
    @property
    def text(self) -> str: ...

```

### `typings/pptx/text/text.pyi`

```pyi
from typing import Optional, Sequence

from pptx.oxml.text import CT_TextParagraph
from pptx.shapes import Subshape

class TextFrame(Subshape):
    text: str
    def add_paragraph(self) -> _Paragraph: ...
    @property
    def paragraphs(self) -> Sequence[_Paragraph]: ...

class _Paragraph(Subshape):
    _p: CT_TextParagraph
    text: str
    level: Optional[int]

```

### `typings/pptx/util.pyi`

```pyi
class Length(int): ...

class Inches(Length):
    def __init__(self, inches: float) -> None: ...

```

### `typings/pypandoc/__init__.pyi`

```pyi
from __future__ import annotations

import pathlib

def convert_file(
    source_file: str, to: str, format: str | None, outputfile: str | pathlib.Path | None = None
) -> str: ...
def get_pandoc_formats() -> tuple[list[str], list[str]]: ...
def get_pandoc_version() -> str: ...

```

### `unstructured/__init__.py`

```py
from .partition.utils.config import env_config
from .telemetry import init_telemetry

# init env_config
env_config

# Explicit startup boundary for telemetry (opt-in, best-effort)
init_telemetry()

```

### `unstructured/__main__.py`

```py
"""Allow ``python -m unstructured``."""

from unstructured.cli import main

if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())

```

### `unstructured/__version__.py`

```py
__version__ = "0.22.26"  # pragma: no cover

```

### `unstructured/chunking/__init__.py`

```py
"""Chunking module initializer.

Publishes the public aspects of the chunking sub-package interface.
"""

from __future__ import annotations

from unstructured.chunking.base import CHUNK_MAX_CHARS_DEFAULT, CHUNK_MULTI_PAGE_DEFAULT
from unstructured.chunking.dispatch import (
    Chunker,
    add_chunking_strategy,
    register_chunking_strategy,
)

__all__ = [
    "CHUNK_MAX_CHARS_DEFAULT",
    "CHUNK_MULTI_PAGE_DEFAULT",
    "add_chunking_strategy",
    # -- these must be published to allow pluggable chunkers in other code-bases --
    "Chunker",
    "register_chunking_strategy",
]

```

### `unstructured/cleaners/__init__.py`

```py

```

### `unstructured/common/__init__.py`

```py

```

### `unstructured/documents/__init__.py`

```py

```

### `unstructured/embed/__init__.py`

```py
import warnings

from unstructured.embed.bedrock import BedrockEmbeddingEncoder
from unstructured.embed.huggingface import HuggingFaceEmbeddingEncoder
from unstructured.embed.mixedbreadai import MixedbreadAIEmbeddingEncoder
from unstructured.embed.octoai import OctoAIEmbeddingEncoder
from unstructured.embed.openai import OpenAIEmbeddingEncoder
from unstructured.embed.vertexai import VertexAIEmbeddingEncoder
from unstructured.embed.voyageai import VoyageAIEmbeddingEncoder

EMBEDDING_PROVIDER_TO_CLASS_MAP = {
    "langchain-openai": OpenAIEmbeddingEncoder,
    "langchain-huggingface": HuggingFaceEmbeddingEncoder,
    "langchain-aws-bedrock": BedrockEmbeddingEncoder,
    "langchain-vertexai": VertexAIEmbeddingEncoder,
    "voyageai": VoyageAIEmbeddingEncoder,
    "mixedbread-ai": MixedbreadAIEmbeddingEncoder,
    "octoai": OctoAIEmbeddingEncoder,
}


warnings.warn(
    "unstructured.ingest will be removed in a future version. "
    "Functionality moved to the unstructured-ingest project.",
    DeprecationWarning,
    stacklevel=2,
)

```

### `unstructured/embed/interfaces.py`

```py
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Tuple

from pydantic import BaseModel

from unstructured.documents.elements import Element


class EmbeddingConfig(BaseModel):
    pass


@dataclass
class BaseEmbeddingEncoder(ABC):
    config: EmbeddingConfig

    @abstractmethod
    def initialize(self):
        """Initializes the embedding encoder class. Should also validate the instance
        is properly configured: e.g., embed a single a element"""

    @property
    @abstractmethod
    def num_of_dimensions(self) -> Tuple[int]:
        """Number of dimensions for the embedding vector."""

    @property
    @abstractmethod
    def is_unit_vector(self) -> bool:
        """Denotes if the embedding vector is a unit vector."""

    @abstractmethod
    def embed_documents(self, elements: List[Element]) -> List[Element]:
        pass

    @abstractmethod
    def embed_query(self, query: str) -> List[float]:
        pass

```

### `unstructured/embed/README.md`

```md
# Embed
![Project unmaintained](https://img.shields.io/badge/project-unmaintained-red.svg)

Project has been moved to: [Unstructured Ingest](https://github.com/Unstructured-IO/unstructured-ingest)

This python module will be removed from this repo in the near future.

```

### `unstructured/errors.py`

```py
class PageCountExceededError(ValueError):
    """Error raised, when number of pages exceeds pdf_hi_res_max_pages limit."""

    def __init__(self, document_pages: int, pdf_hi_res_max_pages: int):
        self.document_pages = document_pages
        self.pdf_hi_res_max_pages = pdf_hi_res_max_pages
        self.message = (
            f"Maximum number of PDF file pages exceeded - "
            f"pages={document_pages}, maximum={pdf_hi_res_max_pages}."
        )
        super().__init__(self.message)


class UnprocessableEntityError(Exception):
    """Error raised when a file is not valid."""


class DecompressedSizeExceededError(ValueError):
    """Error raised when decompressed data exceeds the maximum size limit."""

    def __init__(self, max_size: int):
        self.max_size = max_size
        self.message = (
            f"Decompressed data exceeds maximum allowed size of {max_size} bytes "
            f"({max_size / (1024 * 1024):.1f} MB)."
        )
        super().__init__(self.message)

```

### `unstructured/file_utils/__init__.py`

```py

```

### `unstructured/file_utils/google_filetype.py`

```py
GOOGLE_DRIVE_EXPORT_TYPES = {
    "application/vnd.google-apps.document": "application/"
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.google-apps.spreadsheet": "application/"
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.google-apps.presentation": "application/"
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.google-apps.photo": "image/jpeg",
}

```

### `unstructured/logger.py`

```py
import logging

logger = logging.getLogger("unstructured")
trace_logger = logging.getLogger("unstructured.trace")

# Create a custom logging level
DETAIL = 15
logging.addLevelName(DETAIL, "DETAIL")


# Create a custom log method for the "DETAIL" level
def detail(self, message, *args, **kws):
    if self.isEnabledFor(DETAIL):
        self._log(DETAIL, message, args, **kws)


# Add the custom log method to the logging.Logger class
logging.Logger.detail = detail  # type: ignore

```

### `unstructured/metrics/__init__.py`

```py

```

### `unstructured/metrics/table/__init__.py`

```py

```

### `unstructured/metrics/table/table_formats.py`

```py
from dataclasses import dataclass
from typing import Union


@dataclass
class SimpleTableCell:
    x: int
    y: int
    w: int
    h: int
    content: str = ""

    def to_dict(self):
        return {
            "x": self.x,
            "y": self.y,
            "w": self.w,
            "h": self.h,
            "content": self.content,
        }

    @classmethod
    def from_table_transformer_cell(cls, tatr_table_cell: dict[str, Union[list[int], str]]):
        """
        Args:
            tatr_table_cell (dict):
                Cell in a format returned by Table Transformer model, for example:
                    {
                        "row_nums": [1,2,3],
                        "column_nums": [2],
                        "cell text": "Text inside cell"
                    }
        """

        row_nums = tatr_table_cell.get("row_nums", [])
        column_nums = tatr_table_cell.get("column_nums", [])

        if not row_nums:
            raise ValueError(f'Cell {tatr_table_cell} has missing values under "row_nums" key')
        if not column_nums:
            raise ValueError(f'Cell {tatr_table_cell} has missing values under "column_nums" key')

        return cls(
            x=min(column_nums),
            y=min(row_nums),
            w=len(column_nums),
            h=len(row_nums),
            content=tatr_table_cell.get("cell text", ""),
        )

```

### `unstructured/models/__init__.py`

```py

```

### `unstructured/nlp/__init__.py`

```py

```

### `unstructured/nlp/english_words.py`

```py
import os
import pathlib
from typing import List, Set

DIRECTORY = pathlib.Path(__file__).parent.resolve()
# NOTE(robinson) - the list of English words is based on the nlkt.corpus.words corpus
# and the list of English words found here at the link below. Add more words to the text
# file if needed.
# ref: https://github.com/jeremy-rifkin/Wordlist
ENGLISH_WORDS_FILE = os.path.join(DIRECTORY, "english-words.txt")

with open(ENGLISH_WORDS_FILE) as f:
    BASE_ENGLISH_WORDS = f.read().split("\n")

# NOTE(robinson) - add new words that we want to pass for the English check in here
ADDITIONAL_ENGLISH_WORDS: List[str] = []
ENGLISH_WORDS: Set[str] = set(BASE_ENGLISH_WORDS + ADDITIONAL_ENGLISH_WORDS)

```

### `unstructured/nlp/partition.py`

```py
# flake8: noqa
from unstructured.partition.pdf import partition_pdf  # noqa
from unstructured.partition.text_type import (  # noqa
    is_bulleted_text,
    is_possible_narrative_text,
    is_possible_title,
)

```

### `unstructured/partition/__init__.py`

```py

```

### `unstructured/partition/common/__init__.py`

```py
from typing import Final


class UnsupportedFileFormatError(Exception):
    """File-type is not supported for this operation.

    For example, when receiving a file for auto-partitioning where its file-formatt cannot be
    identified or there is no partitioner available for that file-format.
    """


# Exceptions that email/msg partitioners treat as "unsupported attachment" and skip with a
# warning (no data loss). Intentionally narrow: we do not catch RuntimeError (OOM, broken pipe,
# parser failures in e.g. pdfminer would otherwise be silently skipped).
EXPECTED_ATTACHMENT_ERRORS: Final[tuple[type[BaseException], ...]] = (
    UnsupportedFileFormatError,
    ImportError,
    FileNotFoundError,
)

```

### `unstructured/partition/html/__init__.py`

```py
from unstructured.partition.html.partition import partition_html

__all__ = ["partition_html"]

```

### `unstructured/partition/html/html_utils.py`

```py
from bs4 import BeautifulSoup


def indent_html(html_string: str, html_parser="html.parser") -> str:
    """
    Formats / indents HTML.

    This function takes an HTML string and formats it using the specified HTML parser.
    It parses the HTML content and returns a prettified version of it.

    Args:
        html_string (str): The HTML content to be formatted.
        html_parser (str, optional): The parser to use for parsing the HTML. Defaults to 'html5lib':
            - 'html.parser': The built-in HTML parser. Use when you need just parsing
            - 'html5lib': The slowest. Use when you expect valid HTML parsed
                          the same way a browser does. It adds some extra
                          tags and attributes like <html>, <head>, <body>
            More in docs https://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser

    Returns:
        str: The formatted and indented HTML content.
    """
    soup = BeautifulSoup(html_string, html_parser)
    pretty_html = soup.prettify()
    return pretty_html

```

### `unstructured/partition/model_init.py`

```py
import os

from unstructured_inference.models.base import get_model


def initialize():
    """Download default model or model specified by UNSTRUCTURED_HI_RES_MODEL_NAME environment
    variable (avoids subprocesses all doing the same)"""

    # If more than one model will be supported and left up to user selection
    supported_model = os.environ.get("UNSTRUCTURED_HI_RES_SUPPORTED_MODEL", "")
    if supported_model:
        for model_name in supported_model.split(","):
            get_model(model_name=model_name)

    get_model(os.environ.get("UNSTRUCTURED_HI_RES_MODEL_NAME"))

```

### `unstructured/partition/pdf_image/__init__.py`

```py

```

### `unstructured/partition/pdf_image/analysis/__init__.py`

```py

```

### `unstructured/partition/pdf_image/analysis/processor.py`

```py
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Union


class AnalysisProcessor(ABC):
    def __init__(
        self,
        filename: Union[str, Path],
        save_dir: Union[str, Path],
    ):
        self.filename = filename
        self.save_dir = save_dir

    @abstractmethod
    def process(self):
        """Performs the analysis and saves the results"""
        raise NotImplementedError()

```

### `unstructured/partition/pdf_image/form_extraction.py`

```py
from __future__ import annotations

from typing import IO

from unstructured.documents.elements import Element, FormKeysValues


def run_form_extraction(
    filename: str,
    file: IO[bytes],
    model_name: str,
    elements: list[Element],
    skip_table_regions: bool,
) -> list[FormKeysValues]:
    raise NotImplementedError("Form extraction not yet available.")

```

### `unstructured/partition/pdf_image/pypdf_utils.py`

```py
import io
from typing import BinaryIO

import pypdf


def get_page_data(fp: BinaryIO, page_number: int):
    """Find the binary data for a given page number from a PDF binary file."""
    pdf_reader = pypdf.PdfReader(fp)
    pdf_writer = pypdf.PdfWriter()
    page = pdf_reader.pages[page_number]
    pdf_writer.add_page(page)
    page_data = io.BytesIO()
    pdf_writer.write(page_data)
    return page_data

```

### `unstructured/partition/utils/__init__.py`

```py

```

### `unstructured/partition/utils/ocr_models/__init__.py`

```py

```

### `unstructured/partition/utils/speech_to_text/__init__.py`

```py
"""Speech-to-text agents for transcribing audio in the multimodal partition pipeline."""

from unstructured.partition.utils.speech_to_text.speech_to_text_interface import (
    SpeechToTextAgent,
    TranscriptionSegment,
)

__all__ = ["SpeechToTextAgent", "TranscriptionSegment"]

```

### `unstructured/patches/__init__.py`

```py

```

### `unstructured/py.typed`

```typed
# this is a marker used by static type checkers such as MyPy
# see: https://peps.python.org/pep-0561/ for reference. 

```

### `unstructured/staging/__init__.py`

```py

```

### `unstructured/staging/datasaur.py`

```py
from typing import Any, Dict, List, Optional

from unstructured.documents.elements import Text


def stage_for_datasaur(
    elements: List[Text],
    entities: Optional[List[List[Dict[str, Any]]]] = None,
) -> List[Dict[str, Any]]:
    """Convert a list of elements into a list of dictionaries for use in Datasaur"""
    _entities: List[List[Dict[str, Any]]] = [[] for _ in range(len(elements))]
    if entities is not None:
        if len(entities) != len(elements):
            raise ValueError("If entities is specified, it must be the same length as elements.")

        for entity_list in entities:
            for entity in entity_list:
                _validate_datasaur_entity(entity)

        _entities = entities

    result = [{"text": item.text, "entities": _entities[i]} for i, item in enumerate(elements)]

    return result


def _validate_datasaur_entity(entity: Dict[str, Any]):
    """Raises an error if the Datasaur entity is invalid."""
    keys_and_types = {"text": str, "type": str, "start_idx": int, "end_idx": int}

    for key, _type in keys_and_types.items():
        if key not in entity:
            raise ValueError(f"Key '{key}' was expected but not present in the Datasaur entity.")
        if not isinstance(entity[key], _type):
            raise ValueError(f"Expected type {_type} for {key}. Got {type(key)}.")

```

### `unstructured/telemetry.py`

```py
"""Telemetry initializer. Called once at package startup from unstructured/__init__.py."""

from unstructured.utils import scarf_analytics


def init_telemetry() -> None:
    """Run the analytics ping if enabled by env. Best-effort and non-fatal."""
    scarf_analytics()

```
