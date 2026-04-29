# infiniflow/ragflow@main

- Files included: 499
- Files skipped: 2385
- Total size: 230.2 KB
- Estimated tokens: ~58,571
- ⚠️ Partial: Hit max files cap (500). Raise it in Settings or tighten filters.

## Directory Structure

```
├── .agents
│   ├── rules
│   │   └── named.md
│   └── skills
│       └── go-naming
│           └── SKILL.md
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── agent_scenario_request.yml
│   │   ├── bug_report.yml
│   │   ├── feature_request.yml
│   │   ├── question.yml
│   │   └── subtask.yml
│   ├── workflows
│   │   ├── release.yml
│   │   └── tests.yml
│   ├── copilot-instructions.md
│   └── pull_request_template.md
├── admin
│   ├── client
│   │   ├── COMMAND.md
│   │   ├── http_client.py
│   │   ├── parser.py
│   │   ├── pyproject.toml
│   │   ├── ragflow_cli.py
│   │   ├── ragflow_client.py
│   │   ├── README.md
│   │   ├── user.py
│   │   └── uv.lock
│   ├── server
│   │   ├── admin_server.py
│   │   ├── auth.py
│   │   ├── config.py
│   │   ├── exceptions.py
│   │   ├── models.py
│   │   ├── responses.py
│   │   ├── roles.py
│   │   ├── routes.py
│   │   └── services.py
│   └── build_cli_release.sh
├── agent
│   ├── component
│   │   ├── __init__.py
│   │   ├── agent_with_tools.py
│   │   ├── base.py
│   │   ├── begin.py
│   │   ├── categorize.py
│   │   ├── data_operations.py
│   │   ├── docs_generator.py
│   │   ├── excel_processor.py
│   │   ├── exit_loop.py
│   │   ├── fillup.py
│   │   ├── invoke.py
│   │   ├── iteration.py
│   │   ├── iterationitem.py
│   │   ├── list_operations.py
│   │   ├── llm.py
│   │   ├── loop.py
│   │   ├── loopitem.py
│   │   ├── message.py
│   │   ├── string_transform.py
│   │   ├── switch.py
│   │   ├── variable_aggregator.py
│   │   └── variable_assigner.py
│   ├── plugin
│   │   ├── embedded_plugins
│   │   │   └── llm_tools
│   │   │       └── bad_calculator.py
│   │   ├── __init__.py
│   │   ├── common.py
│   │   ├── llm_tool_plugin.py
│   │   ├── plugin_manager.py
│   │   ├── README_tr.md
│   │   ├── README_zh.md
│   │   └── README.md
│   ├── sandbox
│   │   ├── asserts
│   │   │   └── code_executor_manager.svg
│   │   ├── executor_manager
│   │   │   ├── api
│   │   │   │   ├── __init__.py
│   │   │   │   ├── handlers.py
│   │   │   │   └── routes.py
│   │   │   ├── core
│   │   │   │   ├── __init__.py
│   │   │   │   ├── config.py
│   │   │   │   ├── container.py
│   │   │   │   └── logger.py
│   │   │   ├── models
│   │   │   │   ├── __init__.py
│   │   │   │   ├── enums.py
│   │   │   │   └── schemas.py
│   │   │   ├── services
│   │   │   │   ├── __init__.py
│   │   │   │   ├── execution.py
│   │   │   │   ├── limiter.py
│   │   │   │   └── security.py
│   │   │   ├── utils
│   │   │   │   ├── __init__.py
│   │   │   │   └── common.py
│   │   │   ├── Dockerfile
│   │   │   ├── main.py
│   │   │   ├── requirements.txt
│   │   │   ├── seccomp-profile-default.json
│   │   │   └── util.py
│   │   ├── providers
│   │   │   ├── __init__.py
│   │   │   ├── aliyun_codeinterpreter.py
│   │   │   ├── base.py
│   │   │   ├── e2b.py
│   │   │   ├── manager.py
│   │   │   └── self_managed.py
│   │   ├── sandbox_base_image
│   │   │   ├── nodejs
│   │   │   │   ├── Dockerfile
│   │   │   │   ├── package-lock.json
│   │   │   │   └── package.json
│   │   │   └── python
│   │   │       ├── Dockerfile
│   │   │       ├── matplotlibrc
│   │   │       └── requirements.txt
│   │   ├── scripts
│   │   │   ├── restart.sh
│   │   │   ├── start.sh
│   │   │   ├── stop.sh
│   │   │   ├── wait-for-it-http.sh
│   │   │   └── wait-for-it.sh
│   │   ├── tests
│   │   │   ├── __init__.py
│   │   │   ├── MIGRATION_GUIDE.md
│   │   │   ├── pytest.ini
│   │   │   ├── QUICKSTART.md
│   │   │   ├── README.md
│   │   │   ├── sandbox_security_tests_full.py
│   │   │   ├── test_aliyun_codeinterpreter_integration.py
│   │   │   ├── test_aliyun_codeinterpreter.py
│   │   │   ├── test_providers.py
│   │   │   ├── test_security.py
│   │   │   └── verify_sdk.py
│   │   ├── .env.example
│   │   ├── client.py
│   │   ├── docker-compose.yml
│   │   ├── Makefile
│   │   ├── pyproject.toml
│   │   ├── README.md
│   │   ├── sandbox_spec.md
│   │   └── uv.lock
│   ├── templates
│   │   ├── advanced_ingestion_pipeline.json
│   │   ├── chunk_summary.json
│   │   ├── customer_feedback_dispatcher.json
│   │   ├── cv_analysis_and_candidate_evaluation.json
│   │   ├── data_analysis_beginner_assistant.json
│   │   ├── deep_research.json
│   │   ├── ingestion_pipeline_book.json
│   │   ├── ingestion_pipeline_general.json
│   │   ├── ingestion_pipeline_laws.json
│   │   ├── ingestion_pipeline_manual.json
│   │   ├── ingestion_pipeline_one.json
│   │   ├── ingestion_pipeline_paper.json
│   │   ├── ingestion_pipeline_resume.json
│   │   ├── market_seo_article_writer.json
│   │   ├── photo_text_translator.json
│   │   ├── reflective_academic_paper_generator.json
│   │   ├── seo_article_writer.json
│   │   ├── smart_customer_service_specialist.json
│   │   ├── stock_market_research_assistant.json
│   │   ├── text2sql_data_expert.json
│   │   ├── title_chunker.json
│   │   ├── trip_planner.json
│   │   ├── user_interaction.json
│   │   ├── web_search_assistant.json
│   │   └── your_starter_dataset_chatbot.json
│   ├── test
│   │   ├── dsl_examples
│   │   │   ├── categorize_and_agent_with_tavily.json
│   │   │   ├── exesql.json
│   │   │   ├── headhunter_zh.json
│   │   │   ├── iteration.json
│   │   │   ├── retrieval_and_generate.json
│   │   │   ├── retrieval_categorize_and_generate.json
│   │   │   └── tavily_and_generate.json
│   │   └── client.py
│   ├── tools
│   │   ├── __init__.py
│   │   ├── akshare.py
│   │   ├── arxiv.py
│   │   ├── base.py
│   │   ├── code_exec.py
│   │   ├── crawler.py
│   │   ├── deepl.py
│   │   ├── duckduckgo.py
│   │   ├── email.py
│   │   ├── exesql.py
│   │   ├── github.py
│   │   ├── google.py
│   │   ├── googlescholar.py
│   │   ├── jin10.py
│   │   ├── pubmed.py
│   │   ├── qweather.py
│   │   ├── retrieval.py
│   │   ├── searxng.py
│   │   ├── tavily.py
│   │   ├── tushare.py
│   │   ├── wencai.py
│   │   ├── wikipedia.py
│   │   └── yahoofinance.py
│   ├── __init__.py
│   ├── canvas.py
│   ├── dsl_migration.py
│   └── settings.py
├── api
│   ├── apps
│   │   ├── auth
│   │   │   ├── __init__.py
│   │   │   ├── github.py
│   │   │   ├── oauth.py
│   │   │   ├── oidc.py
│   │   │   └── README.md
│   │   ├── restful_apis
│   │   │   ├── agent_api.py
│   │   │   ├── chat_api.py
│   │   │   ├── chunk_api.py
│   │   │   ├── connector_api.py
│   │   │   ├── dataset_api.py
│   │   │   ├── document_api.py
│   │   │   ├── file_api.py
│   │   │   ├── file2document_api.py
│   │   │   ├── langfuse_api.py
│   │   │   ├── mcp_api.py
│   │   │   ├── memory_api.py
│   │   │   ├── openai_api.py
│   │   │   ├── plugin_api.py
│   │   │   ├── search_api.py
│   │   │   ├── stats_api.py
│   │   │   ├── system_api.py
│   │   │   ├── task_api.py
│   │   │   ├── tenant_api.py
│   │   │   └── user_api.py
│   │   ├── sdk
│   │   │   ├── dify_retrieval.py
│   │   │   ├── doc.py
│   │   │   └── session.py
│   │   ├── services
│   │   │   ├── __init__.py
│   │   │   ├── canvas_replica_service.py
│   │   │   ├── dataset_api_service.py
│   │   │   ├── document_api_service.py
│   │   │   ├── file_api_service.py
│   │   │   └── memory_api_service.py
│   │   ├── __init__.py
│   │   ├── backward_compat.py
│   │   ├── document_app.py
│   │   └── llm_app.py
│   ├── common
│   │   ├── base64.py
│   │   ├── check_team_permission.py
│   │   ├── exceptions.py
│   │   └── README.md
│   ├── db
│   │   ├── joint_services
│   │   │   ├── __init__.py
│   │   │   ├── memory_message_service.py
│   │   │   ├── tenant_model_service.py
│   │   │   └── user_account_service.py
│   │   ├── services
│   │   │   ├── __init__.py
│   │   │   ├── api_service.py
│   │   │   ├── canvas_service.py
│   │   │   ├── chunk_feedback_service.py
│   │   │   ├── common_service.py
│   │   │   ├── connector_service.py
│   │   │   ├── conversation_service.py
│   │   │   ├── dialog_service.py
│   │   │   ├── doc_metadata_service.py
│   │   │   ├── document_service.py
│   │   │   ├── evaluation_service.py
│   │   │   ├── file_service.py
│   │   │   ├── file2document_service.py
│   │   │   ├── knowledgebase_service.py
│   │   │   ├── langfuse_service.py
│   │   │   ├── llm_service.py
│   │   │   ├── mcp_server_service.py
│   │   │   ├── memory_service.py
│   │   │   ├── pipeline_operation_log_service.py
│   │   │   ├── search_service.py
│   │   │   ├── system_settings_service.py
│   │   │   ├── task_service.py
│   │   │   ├── tenant_llm_service.py
│   │   │   ├── user_canvas_version.py
│   │   │   └── user_service.py
│   │   ├── __init__.py
│   │   ├── db_models.py
│   │   ├── db_utils.py
│   │   ├── init_data.py
│   │   ├── reload_config_base.py
│   │   ├── runtime_config.py
│   │   └── template_utils.py
│   ├── utils
│   │   ├── __init__.py
│   │   ├── api_utils.py
│   │   ├── base64_image.py
│   │   ├── commands.py
│   │   ├── common.py
│   │   ├── configs.py
│   │   ├── crypt.py
│   │   ├── email_templates.py
│   │   ├── file_utils.py
│   │   ├── health_utils.py
│   │   ├── image_utils.py
│   │   ├── json_encode.py
│   │   ├── log_utils.py
│   │   ├── memory_utils.py
│   │   ├── tenant_utils.py
│   │   ├── validation_utils.py
│   │   └── web_utils.py
│   ├── __init__.py
│   ├── constants.py
│   ├── ragflow_server.py
│   ├── settings.py
│   └── validation.py
├── bin
│   └── .gitkeep
├── cmd
│   ├── admin_server.go
│   ├── ragflow_cli.go
│   └── server_main.go
├── common
│   ├── data_source
│   │   ├── bitbucket
│   │   │   ├── __init__.py
│   │   │   ├── connector.py
│   │   │   └── utils.py
│   │   ├── cross_connector_utils
│   │   │   ├── __init__.py
│   │   │   ├── rate_limit_wrapper.py
│   │   │   └── retry_wrapper.py
│   │   ├── github
│   │   │   ├── __init__.py
│   │   │   ├── connector.py
│   │   │   ├── models.py
│   │   │   ├── rate_limit_utils.py
│   │   │   └── utils.py
│   │   ├── google_drive
│   │   │   ├── __init__.py
│   │   │   ├── connector.py
│   │   │   ├── constant.py
│   │   │   ├── doc_conversion.py
│   │   │   ├── file_retrieval.py
│   │   │   ├── model.py
│   │   │   └── section_extraction.py
│   │   ├── google_util
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── constant.py
│   │   │   ├── oauth_flow.py
│   │   │   ├── resource.py
│   │   │   ├── util_threadpool_concurrency.py
│   │   │   └── util.py
│   │   ├── jira
│   │   │   ├── __init__.py
│   │   │   ├── connector.py
│   │   │   └── utils.py
│   │   ├── __init__.py
│   │   ├── airtable_connector.py
│   │   ├── asana_connector.py
│   │   ├── blob_connector.py
│   │   ├── box_connector.py
│   │   ├── config.py
│   │   ├── confluence_connector.py
│   │   ├── connector_runner.py
│   │   ├── dingtalk_ai_table_connector.py
│   │   ├── discord_connector.py
│   │   ├── dropbox_connector.py
│   │   ├── exceptions.py
│   │   ├── file_types.py
│   │   ├── gitlab_connector.py
│   │   ├── gmail_connector.py
│   │   ├── html_utils.py
│   │   ├── imap_connector.py
│   │   ├── interfaces.py
│   │   ├── models.py
│   │   ├── moodle_connector.py
│   │   ├── notion_connector.py
│   │   ├── rdbms_connector.py
│   │   ├── rss_connector.py
│   │   ├── seafile_connector.py
│   │   ├── sharepoint_connector.py
│   │   ├── slack_connector.py
│   │   ├── teams_connector.py
│   │   ├── utils.py
│   │   ├── webdav_connector.py
│   │   └── zendesk_connector.py
│   ├── doc_store
│   │   ├── __init__.py
│   │   ├── doc_store_base.py
│   │   ├── es_conn_base.py
│   │   ├── es_conn_pool.py
│   │   ├── infinity_conn_base.py
│   │   ├── infinity_conn_pool.py
│   │   ├── ob_conn_base.py
│   │   └── ob_conn_pool.py
│   ├── __init__.py
│   ├── config_utils.py
│   ├── connection_utils.py
│   ├── constants.py
│   ├── crypto_utils.py
│   ├── decorator.py
│   ├── exceptions.py
│   ├── file_utils.py
│   ├── float_utils.py
│   ├── http_client.py
│   ├── log_utils.py
│   ├── mcp_tool_call_conn.py
│   ├── metadata_utils.py
│   ├── misc_utils.py
│   ├── parser_config_utils.py
│   ├── query_base.py
│   ├── settings.py
│   ├── signal_utils.py
│   ├── ssrf_guard.py
│   ├── string_utils.py
│   ├── tag_feature_utils.py
│   ├── text_utils.py
│   ├── time_utils.py
│   ├── token_utils.py
│   └── versions.py
├── conf
│   ├── models
│   │   ├── aliyun.json
│   │   ├── deepseek.json
│   │   ├── gitee.json
│   │   ├── google.json
│   │   ├── minimax.json
│   │   ├── moonshot.json
│   │   ├── openai.json
│   │   ├── siliconflow.json
│   │   ├── vllm.json
│   │   ├── volcengine.json
│   │   ├── xai.json
│   │   └── zhipu-ai.json
│   ├── doc_meta_es_mapping.json
│   ├── doc_meta_infinity_mapping.json
│   ├── infinity_mapping.json
│   ├── llm_factories.json
│   ├── mapping.json
│   ├── message_infinity_mapping.json
│   ├── os_mapping.json
│   ├── private.pem
│   ├── public.pem
│   ├── service_conf.yaml
│   └── system_settings.json
├── deepdoc
│   ├── parser
│   │   ├── resume
│   │   │   ├── entities
│   │   │   │   ├── res
│   │   │   │   │   ├── corp_baike_len.csv
│   │   │   │   │   ├── corp_tag.json
│   │   │   │   │   ├── corp.tks.freq.json
│   │   │   │   │   ├── good_corp.json
│   │   │   │   │   ├── good_sch.json
│   │   │   │   │   ├── school.rank.csv
│   │   │   │   │   └── schools.csv
│   │   │   │   ├── __init__.py
│   │   │   │   ├── corporations.py
│   │   │   │   ├── degrees.py
│   │   │   │   ├── industries.py
│   │   │   │   ├── regions.py
│   │   │   │   └── schools.py
│   │   │   ├── __init__.py
│   │   │   ├── step_one.py
│   │   │   └── step_two.py
│   │   ├── __init__.py
│   │   ├── docling_parser.py
│   │   ├── docx_parser.py
│   │   ├── epub_parser.py
│   │   ├── excel_parser.py
│   │   ├── figure_parser.py
│   │   ├── html_parser.py
│   │   ├── json_parser.py
│   │   ├── markdown_parser.py
│   │   ├── mineru_parser.py
│   │   ├── opendataloader_parser.py
│   │   ├── paddleocr_parser.py
│   │   ├── pdf_parser.py
│   │   ├── ppt_parser.py
│   │   ├── tcadp_parser.py
│   │   ├── txt_parser.py
│   │   └── utils.py
│   ├── vision
│   │   ├── __init__.py
│   │   ├── layout_recognizer.py
│   │   ├── ocr.py
│   │   ├── operators.py
│   │   ├── postprocess.py
│   │   ├── recognizer.py
│   │   ├── seeit.py
│   │   ├── t_ocr.py
│   │   ├── t_recognizer.py
│   │   └── table_structure_recognizer.py
│   ├── __init__.py
│   ├── README_tr.md
│   ├── README_zh.md
│   └── README.md
├── docker
│   ├── nginx
│   │   ├── nginx.conf
│   │   ├── proxy.conf
│   │   ├── ragflow.conf.golang
│   │   ├── ragflow.conf.hybrid
│   │   ├── ragflow.conf.python
│   │   └── ragflow.https.conf
│   ├── oceanbase
│   │   └── init.d
│   │       └── vec_memory.sql
│   ├── .env
│   ├── .env.single-bucket-example
│   ├── docker-compose-base.yml
│   ├── docker-compose-CN-oc9.yml
│   ├── docker-compose-macos.yml
│   ├── docker-compose.yml
│   ├── entrypoint.sh
│   ├── infinity_conf.toml
│   ├── init.sql
│   ├── launch_backend_service.sh
│   ├── migration.sh
│   ├── README.md
│   └── service_conf.yaml.template
├── docs
│   ├── administrator
│   │   ├── admin
│   │   │   ├── _category_.json
│   │   │   ├── admin_service.md
│   │   │   ├── admin_ui.md
│   │   │   └── ragflow_cli.md
│   │   ├── migration
│   │   │   ├── _category_.json
│   │   │   ├── backup_and_migration.md
│   │   │   ├── database_migration.md
│   │   │   └── database_schema_and_migration.md
│   │   ├── _category_.json
│   │   ├── configurations.md
│   │   ├── tracing.mdx
│   │   └── upgrade_ragflow.mdx
│   ├── basics
│   │   ├── _category_.json
│   │   ├── agent_context_engine.md
│   │   └── rag.md
│   ├── develop
│   │   ├── mcp
│   │   │   ├── _category_.json
│   │   │   ├── launch_mcp_server.md
│   │   │   ├── mcp_client_example.md
│   │   │   └── mcp_tools.md
│   │   ├── _category_.json
│   │   ├── acquire_ragflow_api_key.md
│   │   ├── build_docker_image.mdx
│   │   ├── contributing.md
│   │   ├── deepwiki.md
│   │   ├── launch_ragflow_from_source.md
│   │   └── switch_doc_engine.md
│   ├── guides
│   │   ├── agent
│   │   │   ├── agent_component_reference
│   │   │   │   ├── _category_.json
│   │   │   │   ├── agent.mdx
│   │   │   │   ├── await_response.mdx
│   │   │   │   ├── begin.md
│   │   │   │   ├── categorize.mdx
│   │   │   │   ├── chunker_title.md
│   │   │   │   ├── chunker_token.md
│   │   │   │   ├── code.mdx
│   │   │   │   ├── execute_sql.md
│   │   │   │   ├── http.md
│   │   │   │   ├── indexer.md
│   │   │   │   ├── iteration.mdx
│   │   │   │   ├── message.md
│   │   │   │   ├── parser.md
│   │   │   │   ├── retrieval.mdx
│   │   │   │   ├── switch.mdx
│   │   │   │   ├── text_processing.mdx
│   │   │   │   └── transformer.md
│   │   │   ├── agent_quickstarts
│   │   │   │   ├── _category_.json
│   │   │   │   ├── build_ecommerce_customer_support_agent.md
│   │   │   │   ├── ingestion_pipeline_quickstart.md
│   │   │   │   └── sandbox_quickstart.md
│   │   │   ├── best_practices
│   │   │   │   ├── _category_.json
│   │   │   │   └── accelerate_agent_question_answering.md
│   │   │   ├── _category_.json
│   │   │   ├── agent_introduction.md
│   │   │   └── embed_agent_into_webpage.md
│   │   ├── chat
│   │   │   ├── best_practices
│   │   │   │   ├── _category_.json
│   │   │   │   └── accelerate_question_answering.mdx
│   │   │   ├── _category_.json
│   │   │   ├── implement_deep_research.md
│   │   │   ├── set_chat_variables.md
│   │   │   └── start_chat.md
│   │   ├── dataset
│   │   │   ├── add_data_source
│   │   │   │   ├── _category_.json
│   │   │   │   ├── add_confluence.md
│   │   │   │   ├── add_github_repo.md
│   │   │   │   ├── add_google_drive.md
│   │   │   │   └── add_notion.md
│   │   │   ├── advanced
│   │   │   │   ├── _category_.json
│   │   │   │   ├── auto_metadata.md
│   │   │   │   ├── autokeyword_autoquestion.mdx
│   │   │   │   ├── construct_knowledge_graph.md
│   │   │   │   ├── enable_raptor.md
│   │   │   │   └── extract_table_of_contents.md
│   │   │   ├── best_practices
│   │   │   │   ├── _category_.json
│   │   │   │   └── accelerate_doc_indexing.mdx
│   │   │   ├── _category_.json
│   │   │   ├── configure_child_chunking_strategy.md
│   │   │   ├── configure_knowledge_base.md
│   │   │   ├── enable_excel2html.md
│   │   │   ├── manage_metadata.md
│   │   │   ├── run_retrieval_test.md
│   │   │   ├── select_pdf_parser.md
│   │   │   ├── set_context_window.md
│   │   │   ├── set_metadata.md
│   │   │   ├── set_page_rank.md
│   │   │   └── use_tag_sets.md
│   │   ├── memory
│   │   │   ├── _category_.json
│   │   │   └── use_memory.md
│   │   ├── models
│   │   │   ├── _category_.json
│   │   │   ├── deploy_local_llm.mdx
│   │   │   ├── llm_api_key_setup.md
│   │   │   └── supported_models.mdx
│   │   ├── team
│   │   │   ├── _category_.json
│   │   │   ├── join_or_leave_team.md
│   │   │   ├── manage_team_members.md
│   │   │   ├── share_agents.md
│   │   │   ├── share_chat_assistant.md
│   │   │   ├── share_knowledge_bases.md
│   │   │   ├── share_memory.md
│   │   │   └── share_model.md
│   │   ├── _category_.json
│   │   ├── ai_search.md
│   │   └── manage_files.md
│   ├── references
│   │   ├── _category_.json
│   │   ├── glossary.mdx
│   │   ├── http_api_reference.md
│   │   └── python_api_reference.md
│   ├── _category_.json
│   ├── faq.mdx
│   ├── quickstart.mdx
│   └── release_notes.md
├── example
│   ├── chat_demo
│   │   ├── index.html
│   │   └── widget_demo.html
│   ├── http
│   │   └── dataset_example.sh
│   └── sdk
│       └── dataset_example.py
├── helm
│   ├── templates
│   │   ├── tests
│   │   │   └── test-connection.yaml
│   │   ├── _helpers.tpl
│   │   ├── elasticsearch-config.yaml
│   │   ├── elasticsearch.yaml
│   │   ├── env.yaml
│   │   ├── infinity.yaml
│   │   ├── ingress.yaml
│   │   ├── minio.yaml
│   │   ├── mysql-config.yaml
│   │   ├── mysql.yaml
│   │   ├── opensearch-config.yaml
│   │   ├── opensearch.yaml
│   │   ├── ragflow_config.yaml
│   │   ├── ragflow.yaml
│   │   └── redis.yaml
│   ├── .helmignore
│   ├── Chart.yaml
│   ├── README.md
│   └── values.yaml
├── internal
│   ├── admin
│   │   ├── handler.go
│   │   ├── heartbeat.go
│   │   ├── password.go
│   │   ├── router.go
│   │   └── service.go
│   ├── binding
│   │   └── rag_analyzer.go
│   ├── cache
│   │   └── redis.go
│   ├── cli
│   │   ├── contextengine
│   │   │   ├── dataset_provider.go
│   │   │   ├── engine.go
│   │   │   ├── file_provider.go
│   │   │   ├── provider.go
│   │   │   ├── README.md
│   │   │   ├── types.go
│   │   │   └── utils.go
│   │   ├── admin_command.go
│   │   ├── admin_parser.go
│   │   ├── benchmark.go
│   │   ├── cli.go
│   │   ├── client.go
│   │   ├── common_command.go
│   │   ├── context_command.go
│   │   ├── context_parser.go
│   │   ├── crypt.go
│   │   ├── http_client.go
│   │   ├── lexer.go
│   │   ├── parser.go
│   │   ├── README.md
│   │   ├── response.go
│   │   ├── table.go
│   │   ├── types.go
│   │   ├── user_command.go
│   │   └── user_parser.go
│   ├── common
│   │   ├── app_name.go
│   │   ├── constants.go
│   │   ├── error_code.go
│   │   ├── parser_config.go
│   │   ├── status_message.go
│   │   └── time.go
│   ├── cpp
│   │   ├── darts
│   │   │   └── darts.h
│   │   ├── opencc
│   │   │   ├── dictionary
│   │   │   │   ├── abstract.c
│   │   │   │   ├── abstract.h
│   │   │   │   ├── datrie.c
│   │   │   │   ├── datrie.h
│   │   │   │   ├── text.c
│   │   │   │   └── text.h
│   │   │   ├── config_reader.c
│   │   │   ├── config_reader.h
│   │   │   ├── converter.c
│   │   │   ├── converter.h
│   │   │   ├── dictionary_group.c
│   │   │   ├── dictionary_group.h
│   │   │   ├── dictionary_set.c
│   │   │   ├── dictionary_set.h
│   │   │   ├── encoding.c
│   │   │   ├── encoding.h
│   │   │   ├── opencc_types.h
│   │   │   ├── opencc.c
│   │   │   ├── opencc.h
│   │   │   ├── openccxx.cpp
│   │   │   ├── openccxx.h
│   │   │   ├── utils.c
│   │   │   └── utils.h
│   │   ├── re2
│   │   │   ├── bitmap256.cc
│   │   │   ├── bitmap256.h
│   │   │   ├── bitstate.cc
│   │   │   ├── compile.cc
│   │   │   ├── dfa.cc
│   │   │   ├── filtered_re2.cc
│   │   │   ├── filtered_re2.h
│   │   │   ├── mimics_pcre.cc
│   │   │   ├── nfa.cc
│   │   │   ├── onepass.cc
│   │   │   ├── parse.cc
│   │   │   ├── perl_groups.cc
│   │   │   ├── pod_array.h
│   │   │   ├── prefilter_tree.cc
│   │   │   ├── prefilter_tree.h
│   │   │   ├── prefilter.cc
│   │   │   ├── prefilter.h
│   │   │   ├── prog.cc
│   │   │   ├── prog.h
│   │   │   ├── re2.cc
│   │   │   ├── re2.h
│   │   │   ├── regexp.cc
│   │   │   ├── regexp.h
│   │   │   ├── set.cc
│   │   │   ├── set.h
│   │   │   ├── simplify.cc
│   │   │   ├── sparse_array.h
│   │   │   ├── sparse_set.h
│   │   │   ├── stringpiece.cc
│   │   │   ├── stringpiece.h
│   │   │   ├── tostring.cc
│   │   │   ├── unicode_casefold.cc
│   │   │   ├── unicode_casefold.h
│   │   │   ├── unicode_groups.cc
│   │   │   ├── unicode_groups.h
│   │   │   └── walker-inl.h
│   │   ├── stemmer
│   │   │   ├── api.cpp
│   │   │   ├── api.h
│   │   │   ├── header.h
│   │   │   ├── stem_UTF_8_danish.cpp
│   │   │   ├── stem_UTF_8_danish.h
│   │   │   ├── stem_UTF_8_dutch.cpp
│   │   │   ├── stem_UTF_8_dutch.h
│   │   │   ├── stem_UTF_8_english.cpp
│   │   │   ├── stem_UTF_8_english.h
│   │   │   ├── stem_UTF_8_finnish.cpp
│   │   │   ├── stem_UTF_8_finnish.h
│   │   │   ├── stem_UTF_8_french.cpp
│   │   │   ├── stem_UTF_8_french.h
│   │   │   ├── stem_UTF_8_german.cpp
│   │   │   ├── stem_UTF_8_german.h
│   │   │   ├── stem_UTF_8_hungarian.cpp
│   │   │   ├── stem_UTF_8_hungarian.h
│   │   │   ├── stem_UTF_8_italian.cpp
│   │   │   ├── stem_UTF_8_italian.h
│   │   │   ├── stem_UTF_8_norwegian.cpp
│   │   │   ├── stem_UTF_8_norwegian.h
│   │   │   ├── stem_UTF_8_porter.cpp
│   │   │   ├── stem_UTF_8_porter.h
│   │   │   ├── stem_UTF_8_portuguese.cpp
│   │   │   ├── stem_UTF_8_portuguese.h
│   │   │   ├── stem_UTF_8_romanian.cpp
│   │   │   ├── stem_UTF_8_romanian.h
│   │   │   ├── stem_UTF_8_russian.cpp
│   │   │   ├── stem_UTF_8_russian.h
│   │   │   ├── stem_UTF_8_spanish.cpp
│   │   │   ├── stem_UTF_8_spanish.h
│   │   │   ├── stem_UTF_8_swedish.cpp
│   │   │   ├── stem_UTF_8_swedish.h
│   │   │   ├── stem_UTF_8_turkish.cpp
│   │   │   ├── stem_UTF_8_turkish.h
│   │   │   ├── stemmer.cpp
│   │   │   ├── stemmer.h
│   │   │   └── utilities.cpp
│   │   ├── util
│   │   │   ├── logging.h
│   │   │   ├── mix.h
│   │   │   ├── mutex.h
│   │   │   ├── rune.cc
│   │   │   ├── strutil.cc
│   │   │   ├── strutil.h
│   │   │   ├── utf.h
│   │   │   └── util.h
│   │   ├── analyzer.h
│   │   ├── CMakeLists.txt
│   │   ├── dart_trie.h
│   │   ├── darts_trie.cpp
│   │   ├── main.cpp
│   │   ├── Makefile
│   │   ├── pcre2.h
│   │   ├── pcre2posix.h
│   │   ├── rag_analyzer_c_api_debug.cpp
│   │   ├── rag_analyzer_c_api.cpp
│   │   ├── rag_analyzer_c_api.h
│   │   ├── rag_analyzer_c_test.cpp
│   │   ├── rag_analyzer.cpp
│   │   ├── rag_analyzer.h
│   │   ├── string_utils.h
│   │   ├── term.cpp
│   │   ├── term.h
│   │   ├── tokenizer.cpp
│   │   ├── tokenizer.h
│   │   ├── wordnet_lemmatizer.cpp
│   │   └── wordnet_lemmatizer.h
│   ├── dao
│   │   ├── api_token.go
│   │   ├── chat_session.go
│   │   ├── chat.go
│   │   ├── connector.go
│   │   ├── database.go
│   │   ├── document.go
│   │   ├── file.go
│   │   ├── file2document.go
│   │   ├── kb.go
│   │   ├── license.go
│   │   ├── llm.go
│   │   ├── memory.go
│   │   ├── migration.go
│   │   ├── model_provider.go
│   │   ├── search.go
│   │   ├── system_settings.go
│   │   ├── task.go
│   │   ├── tenant_llm.go
│   │   ├── tenant_model_group_mapping.go
│   │   ├── tenant_model_group.go
│   │   ├── tenant_model_instance.go
│   │   ├── tenant_model_provider.go
│   │   ├── tenant_model.go
│   │   ├── tenant.go
│   │   ├── time_record.go
│   │   ├── user_canvas.go
│   │   ├── user_tenant.go
│   │   └── user.go
│   ├── engine
│   │   ├── elasticsearch
│   │   │   ├── client.go
│   │   │   ├── get.go
│   │   │   ├── index.go
│   │   │   └── search.go
│   │   ├── infinity
│   │   │   ├── client.go
│   │   │   ├── common.go
│   │   │   ├── dataset.go
│   │   │   ├── get.go
│   │   │   ├── metadata.go
│   │   │   └── search.go
│   │   ├── types
│   │   │   └── types.go
│   │   ├── engine.go
│   │   ├── global.go
│   │   └── README.md
│   ├── entity
│   │   ├── models
│   │   │   ├── aliyun.go
│   │   │   ├── common.go
│   │   │   ├── deepseek.go
│   │   │   ├── dummy.go
│   │   │   ├── factory.go
│   │   │   ├── gitee.go
│   │   │   ├── google.go
│   │   │   ├── minimax.go
│   │   │   ├── moonshot.go
│   │   │   ├── siliconflow.go
│   │   │   ├── types.go
│   │   │   ├── vllm.go
│   │   │   ├── volcengine.go
│   │   │   └── zhipu-ai.go
│   │   ├── api_token.go
│   │   ├── base.go
│   │   ├── canvas.go
│   │   ├── chat.go
│   │   ├── connector.go
│   │   ├── document.go
│   │   ├── evaluation.go
│   │   ├── file.go
│   │   ├── kb.go
│   │   ├── license.go
│   │   ├── llm.go
│   │   ├── mcp.go
│   │   ├── memory.go
│   │   ├── model.go
│   │   ├── pipeline.go
│   │   ├── search.go
│   │   ├── system.go
│   │   ├── task.go
│   │   ├── tenant_llm.go
│   │   ├── tenant_model_group_mapping.go
│   │   ├── tenant_model_group.go
│   │   ├── tenant_model_instance.go
│   │   ├── tenant_model_provider.go
│   │   ├── tenant_model.go
│   │   ├── tenant.go
│   │   ├── time_record.go
│   │   ├── types.go
│   │   ├── user_tenant.go
│   │   └── user.go
│   ├── handler
│   │   ├── api_token.go
│   │   ├── auth.go
│   │   ├── chat_session.go
│   │   ├── chat.go
│   │   ├── chunk.go
│   │   ├── common.go
│   │   ├── connector.go
│   │   ├── datasets.go
│   │   ├── document.go
│   │   ├── error.go
│   │   ├── file.go
│   │   ├── kb.go
│   │   ├── llm.go
│   │   ├── memory.go
│   │   ├── providers.go
│   │   ├── search.go
│   │   ├── system.go
│   │   ├── tenant.go
│   │   └── user.go
│   ├── logger
│   │   ├── logger.go
│   │   └── README.md
│   ├── router
│   │   └── router.go
│   ├── server
│   │   ├── local
│   │   │   └── admin_status.go
│   │   ├── config.go
│   │   ├── model_provider.go
│   │   └── variable.go
│   ├── service
│   │   ├── nlp
│   │   │   ├── query_builder_test.go
│   │   │   ├── query_builder.go
│   │   │   ├── reranker.go
│   │   │   ├── retrieval.go
│   │   │   ├── synonym_test.go
│   │   │   ├── synonym.go
│   │   │   ├── term_weight_test.go
│   │   │   ├── term_weight.go
│   │   │   ├── wordnet_test.go
│   │   │   └── wordnet.go
│   │   ├── api_token.go
│   │   ├── chat_session.go
│   │   ├── chat.go
│   │   ├── chunk.go
│   │   ├── connector.go
│   │   ├── datasets.go
│   │   ├── document.go
│   │   ├── file.go
│   │   ├── generator.go
│   │   ├── heartbeat_sender.go
│   │   ├── kb.go
│   │   ├── llm.go
│   │   ├── load_prompt.go
│   │   ├── memory.go
│   │   ├── metadata_filter.go
│   │   ├── metadata.go
│   │   ├── model_service.go
│   │   ├── search.go
│   │   ├── system.go
│   │   ├── tag.go
│   │   ├── tenant.go
│   │   └── user.go
│   ├── storage
│   │   ├── minio_test.go
│   │   ├── minio.go
│   │   ├── oss.go
│   │   ├── s3.go
│   │   ├── storage_factory.go
│   │   └── types.go
│   ├── tokenizer
│   │   ├── tokenizer_concurrent_test.go
│   │   └── tokenizer.go
│   └── utility
│       ├── convert.go
│       ├── embedding_lru.go
│       ├── file.go
│       ├── http_client.go
│       ├── network.go
│       ├── path.go
│       ├── scheduled_task.go
│       ├── token.go
│       ├── version_test.go
│       └── version.go
├── mcp
│   ├── client
│   │   ├── client.py
│   │   └── streamable_http_client.py
│   └── server
│       └── server.py
├── memory
│   ├── services
│   │   ├── __init__.py
│   │   ├── messages.py
│   │   └── query.py
│   ├── utils
│   │   ├── __init__.py
│   │   ├── aggregation_utils.py
│   │   ├── es_conn.py
│   │   ├── highlight_utils.py
│   │   ├── infinity_conn.py
│   │   ├── msg_util.py
│   │   ├── ob_conn.py
│   │   └── prompt_util.py
│   └── __init__.py
├── rag
│   ├── advanced_rag
│   │   ├── __init__.py
│   │   └── tree_structured_query_decomposition_retrieval.py
│   ├── app
│   │   ├── __init__.py
│   │   ├── audio.py
│   │   ├── book.py
│   │   ├── email.py
│   │   ├── laws.py
│   │   ├── manual.py
│   │   ├── naive.py
│   │   ├── one.py
│   │   ├── paper.py
│   │   ├── picture.py
│   │   ├── presentation.py
│   │   ├── qa.py
│   │   ├── resume.py
│   │   ├── table.py
│   │   └── tag.py
│   ├── flow
│   │   ├── chunker
│   │   │   ├── title_chunker
│   │   │   │   ├── __init__.py
│   │   │   │   ├── common.py
│   │   │   │   ├── group_chunker.py
│   │   │   │   ├── hierarchy_chunker.py
│   │   │   │   ├── schema.py
│   │   │   │   └── title_chunker.py
│   │   │   ├── __init__.py
│   │   │   ├── schema.py
│   │   │   └── token_chunker.py
│   │   ├── extractor
│   │   │   ├── __init__.py
│   │   │   ├── extractor.py
│   │   │   └── schema.py
│   │   ├── parser
│   │   │   ├── __init__.py
│   │   │   ├── parser.py
│   │   │   ├── pdf_chunk_metadata.py
│   │   │   ├── schema.py
│   │   │   └── utils.py
│   │   ├── tests
│   │   │   ├── dsl_examples
│   │   │   │   ├── general_pdf_all.json
│   │   │   │   └── title_chunker.json
│   │   │   └── client.py
│   │   ├── tokenizer
│   │   │   ├── __init__.py
│   │   │   ├── schema.py
│   │   │   └── tokenizer.py
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── file.py
│   │   └── pipeline.py
│   ├── graphrag
│   │   ├── general
│   │   │   ├── __init__.py
│   │   │   ├── community_report_prompt.py
│   │   │   ├── community_reports_extractor.py
│   │   │   ├── entity_embedding.py
│   │   │   ├── extractor.py
│   │   │   ├── graph_extractor.py
│   │   │   ├── graph_prompt.py
│   │   │   ├── index.py
│   │   │   ├── leiden.py
│   │   │   ├── mind_map_extractor.py
│   │   │   ├── mind_map_prompt.py
│   │   │   └── smoke.py
│   │   ├── light
│   │   │   ├── __init__.py
│   │   │   ├── graph_extractor.py
│   │   │   ├── graph_prompt.py
│   │   │   └── smoke.py
│   │   ├── __init__.py
│   │   ├── entity_resolution_prompt.py
│   │   ├── entity_resolution.py
│   │   ├── query_analyze_prompt.py
│   │   ├── search.py
│   │   └── utils.py
│   ├── llm
│   │   ├── __init__.py
│   │   ├── chat_model.py
│   │   ├── cv_model.py
│   │   ├── embedding_model.py
│   │   ├── ocr_model.py
│   │   ├── rerank_model.py
│   │   ├── sequence2txt_model.py
│   │   └── tts_model.py
│   ├── nlp
│   │   ├── __init__.py
│   │   ├── query.py
│   │   ├── rag_tokenizer.py
│   │   ├── search.py
│   │   ├── surname.py
│   │   ├── synonym.py
│   │   └── term_weight.py
│   ├── prompts
│   │   ├── __init__.py
│   │   ├── analyze_task_system.md
│   │   ├── analyze_task_user.md
│   │   ├── ask_summary.md
│   │   ├── assign_toc_levels.md
│   │   ├── citation_plus.md
│   │   ├── citation_prompt.md
│   │   ├── content_tagging_prompt.md
│   │   ├── cross_languages_sys_prompt.md
│   │   ├── cross_languages_user_prompt.md
│   │   ├── full_question_prompt.md
│   │   ├── generator.py
│   │   ├── keyword_prompt.md
│   │   ├── meta_data.md
│   │   ├── meta_filter.md
│   │   ├── multi_queries_gen.md
│   │   ├── next_step.md
│   │   ├── question_prompt.md
│   │   ├── rank_memory.md
│   │   ├── reflect.md
│   │   ├── related_question.md
│   │   ├── resume_basic_info_en.md
│   │   ├── resume_basic_info.md
│   │   ├── resume_education_en.md
│   │   ├── resume_education.md
│   │   ├── resume_project_exp_en.md
│   │   ├── resume_project_exp.md
│   │   ├── resume_system_en.md
│   │   ├── resume_system.md
│   │   ├── resume_work_exp_en.md
│   │   ├── resume_work_exp.md
│   │   ├── structured_output_prompt.md
│   │   ├── sufficiency_check.md
│   │   ├── summary4memory.md
│   │   ├── template.py
│   │   ├── toc_detection.md
│   │   ├── toc_extraction_continue.md
│   │   ├── toc_extraction.md
│   │   ├── toc_from_text_system.md
│   │   ├── toc_from_text_user.md
│   │   ├── toc_index.md
│   │   ├── toc_relevance_system.md
│   │   ├── toc_relevance_user.md
│   │   ├── tool_call_summary.md
│   │   ├── vision_llm_describe_prompt.md
│   │   ├── vision_llm_figure_describe_prompt_with_context.md
│   │   └── vision_llm_figure_describe_prompt.md
│   ├── res
│   │   ├── ner.json
│   │   └── synonym.json
│   ├── svr
│   │   ├── cache_file_svr.py
│   │   ├── discord_svr.py
│   │   ├── sync_data_source.py
│   │   └── task_executor.py
│   ├── utils
│   │   ├── __init__.py
│   │   ├── azure_sas_conn.py
│   │   ├── azure_spn_conn.py
│   │   ├── base64_image.py
│   │   ├── encrypted_storage.py
│   │   ├── es_conn.py
│   │   ├── file_utils.py
│   │   ├── gcs_conn.py
│   │   ├── infinity_conn.py
│   │   ├── lazy_image.py
│   │   ├── minio_conn.py
│   │   ├── ob_conn.py
│   │   ├── opendal_conn.py
│   │   ├── opensearch_conn.py
│   │   ├── oss_conn.py
│   │   ├── raptor_utils.py
│   │   ├── redis_conn.py
│   │   ├── s3_conn.py
│   │   ├── storage_factory.py
│   │   └── tavily_conn.py
│   ├── __init__.py
│   ├── benchmark.py
│   ├── raptor.py
│   └── settings.py
├── sdk
│   └── python
│       ├── ragflow_sdk
│       │   ├── modules
│       │   │   ├── __init__.py
│       │   │   ├── agent.py
│       │   │   ├── base.py
│       │   │   ├── chat.py
│       │   │   ├── chunk.py
│       │   │   ├── dataset.py
│       │   │   ├── document.py
│       │   │   ├── memory.py
│       │   │   └── session.py
│       │   ├── __init__.py
│       │   └── ragflow.py
│       ├── test
│       │   ├── test_frontend_api
│       │   │   ├── common.py
│       │   │   ├── get_email.py
│       │   │   ├── test_chunk.py
│       │   │   └── test_dataset.py
│       │   ├── test_http_api
│       │   │   └── test_file_management_within_dataset
│       │   │       └── test_stop_parse_documents.py
│       │   └── conftest.py
│       ├── hello_ragflow.py
│       ├── pyproject.toml
│       ├── test.py
│       └── uv.lock
├── test
│   ├── benchmark
│   │   ├── test_docs
│   │   │   ├── Doc1.pdf
│   │   │   ├── Doc2.pdf
│   │   │   ├── Doc3.pdf
│   │   │   └── dv.json
│   │   ├── __init__.py
│   │   ├── __main__.py
│   │   ├── auth.py
│   │   ├── chat.py
│   │   ├── cli.py
│   │   ├── dataset.py
│   │   ├── http_client.py
│   │   ├── metrics.py
│   │   ├── README.md
│   │   ├── report.py
│   │   ├── retrieval.py
│   │   ├── run_chat.sh
│   │   ├── run_retrieval_chat.sh
│   │   ├── run_retrieval.sh
│   │   └── utils.py
│   ├── playwright
│   │   ├── auth
│   │   │   ├── test_login_success_optional.py
│   │   │   ├── test_register_success_optional.py
│   │   │   ├── test_register_then_login_flow.py
│   │   │   ├── test_smoke_auth_page.py
│   │   │   ├── test_sso_optional.py
│   │   │   ├── test_toggle_login_register.py
│   │   │   └── test_validation_presence.py
│   │   ├── e2e
│   │   │   ├── __init__.py
│   │   │   ├── test_dataset_upload_parse.py
│   │   │   ├── test_model_providers_zhipu_ai_defaults.py
│   │   │   ├── test_next_apps_agent.py
│   │   │   ├── test_next_apps_chat.py
│   │   │   └── test_next_apps_search.py
│   │   ├── helpers
│   │   │   ├── __init__.py
│   │   │   ├── _auth_helpers.py
│   │   │   ├── _next_apps_helpers.py
│   │   │   ├── auth_selectors.py
│   │   │   ├── auth_waits.py
│   │   │   ├── datasets.py
│   │   │   ├── debug_utils.py
│   │   │   ├── env_utils.py
│   │   │   ├── flow_context.py
│   │   │   ├── flow_steps.py
│   │   │   ├── model_providers.py
│   │   │   └── response_capture.py
│   │   ├── __init__.py
│   │   ├── .gitignore
│   │   ├── conftest.py
│   │   └── README.md
│   ├── testcases
│   │   ├── libs
│   │   │   ├── __init__.py
│   │   │   └── auth.py
│   │   ├── test_admin_api
│   │   │   ├── test_user_api_key_management
│   │   │   │   ├── test_delete_user_api_key.py
│   │   │   │   ├── test_generate_user_api_key.py
│   │   │   │   └── test_get_user_api_key.py
│   │   │   └── conftest.py
│   │   ├── test_common_data_source
│   │   │   └── test_rss_connector_unit.py
│   │   ├── test_http_api
│   │   │   ├── test_chat_assistant_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_chat_sdk_routes_unit.py
│   │   │   │   ├── test_create_chat_assistant.py
│   │   │   │   ├── test_delete_chat_assistants.py
│   │   │   │   ├── test_list_chat_assistants.py
│   │   │   │   └── test_update_chat_assistant.py
│   │   │   ├── test_chat_management
│   │   │   │   ├── conftest.py
│   │   │   │   └── test_table_parser_dataset_chat.py
│   │   │   ├── test_chunk_management_within_dataset
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_add_chunk.py
│   │   │   │   ├── test_delete_chunks.py
│   │   │   │   ├── test_list_chunks.py
│   │   │   │   ├── test_retrieval_chunks.py
│   │   │   │   └── test_update_chunk.py
│   │   │   ├── test_dataset_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_dataset.py
│   │   │   │   ├── test_delete_datasets.py
│   │   │   │   ├── test_dify_retrieval_routes_unit.py
│   │   │   │   ├── test_embedding.py
│   │   │   │   ├── test_flattened_metadata.py
│   │   │   │   ├── test_get_dataset.py
│   │   │   │   ├── test_index_api.py
│   │   │   │   ├── test_ingestion_logs.py
│   │   │   │   ├── test_ingestion_summary.py
│   │   │   │   ├── test_knowledge_graph.py
│   │   │   │   ├── test_list_datasets.py
│   │   │   │   ├── test_search.py
│   │   │   │   ├── test_tags.py
│   │   │   │   └── test_update_dataset.py
│   │   │   ├── test_file_app
│   │   │   │   └── test_file_routes.py
│   │   │   ├── test_file_management_within_dataset
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_delete_documents.py
│   │   │   │   ├── test_doc_sdk_routes_unit.py
│   │   │   │   ├── test_download_document.py
│   │   │   │   ├── test_list_documents.py
│   │   │   │   ├── test_metadata_batch_update.py
│   │   │   │   ├── test_metadata_config.py
│   │   │   │   ├── test_metadata_retrieval.py
│   │   │   │   ├── test_metadata_summary.py
│   │   │   │   ├── test_parse_documents.py
│   │   │   │   ├── test_stop_parse_documents.py
│   │   │   │   ├── test_update_document.py
│   │   │   │   └── test_upload_documents.py
│   │   │   ├── test_session_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_agent_completions.py
│   │   │   │   ├── test_agent_sessions.py
│   │   │   │   ├── test_chat_completions_openai.py
│   │   │   │   ├── test_chat_completions.py
│   │   │   │   ├── test_create_session_with_chat_assistant.py
│   │   │   │   ├── test_delete_sessions_with_chat_assistant.py
│   │   │   │   ├── test_list_sessions_with_chat_assistant.py
│   │   │   │   ├── test_related_questions.py
│   │   │   │   ├── test_session_sdk_routes_unit.py
│   │   │   │   └── test_update_session_with_chat_assistant.py
│   │   │   ├── common.py
│   │   │   ├── conftest.py
│   │   │   └── test_router_errors.py
│   │   ├── test_sdk_api
│   │   │   ├── test_agent_management
│   │   │   │   └── test_agent_crud_unit.py
│   │   │   ├── test_chat_assistant_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_chat_crud_unit.py
│   │   │   │   ├── test_create_chat_assistant.py
│   │   │   │   ├── test_delete_chat_assistants.py
│   │   │   │   ├── test_list_chat_assistants.py
│   │   │   │   └── test_update_chat_assistant.py
│   │   │   ├── test_chunk_management_within_dataset
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_add_chunk.py
│   │   │   │   ├── test_delete_chunks.py
│   │   │   │   ├── test_list_chunks.py
│   │   │   │   ├── test_retrieval_chunks.py
│   │   │   │   └── test_update_chunk.py
│   │   │   ├── test_dataset_mangement
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_dataset.py
│   │   │   │   ├── test_delete_datasets.py
│   │   │   │   ├── test_list_datasets.py
│   │   │   │   └── test_update_dataset.py
│   │   │   ├── test_file_management_within_dataset
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_delete_documents.py
│   │   │   │   ├── test_download_document.py
│   │   │   │   ├── test_list_documents.py
│   │   │   │   ├── test_parse_documents.py
│   │   │   │   ├── test_stop_parse_documents.py
│   │   │   │   ├── test_update_document.py
│   │   │   │   └── test_upload_documents.py
│   │   │   ├── test_memory_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_memory.py
│   │   │   │   ├── test_list_memory.py
│   │   │   │   ├── test_rm_memory.py
│   │   │   │   └── test_update_memory.py
│   │   │   ├── test_message_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_add_message.py
│   │   │   │   ├── test_forget_message.py
│   │   │   │   ├── test_get_message_content.py
│   │   │   │   ├── test_get_recent_message.py
│   │   │   │   ├── test_list_message.py
│   │   │   │   ├── test_search_message.py
│   │   │   │   └── test_update_message_status.py
│   │   │   ├── test_session_management
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_session_with_chat_assistant.py
│   │   │   │   ├── test_delete_sessions_with_chat_assistant.py
│   │   │   │   ├── test_list_sessions_with_chat_assistant.py
│   │   │   │   └── test_update_session_with_chat_assistant.py
│   │   │   ├── common.py
│   │   │   └── conftest.py
│   │   ├── test_web_api
│   │   │   ├── test_agent_app
│   │   │   │   └── test_agents_webhook_unit.py
│   │   │   ├── test_auth_app
│   │   │   │   ├── test_oauth_client_unit.py
│   │   │   │   └── test_oidc_client_unit.py
│   │   │   ├── test_canvas_app
│   │   │   │   ├── test_code_exec_contract_unit.py
│   │   │   │   ├── test_invoke_component_unit.py
│   │   │   │   └── test_list_operations_unit.py
│   │   │   ├── test_chunk_app
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_chunk_routes_unit.py
│   │   │   │   ├── test_create_chunk.py
│   │   │   │   ├── test_list_chunks.py
│   │   │   │   ├── test_rm_chunks.py
│   │   │   │   └── test_update_chunk.py
│   │   │   ├── test_chunk_feedback
│   │   │   │   └── test_chunk_feedback_service.py
│   │   │   ├── test_connector_app
│   │   │   │   ├── test_connector_oauth_contract.py
│   │   │   │   ├── test_connector_routes_unit.py
│   │   │   │   └── test_langfuse_app_unit.py
│   │   │   ├── test_dataset_management
│   │   │   │   └── test_dataset_sdk_routes_unit.py
│   │   │   ├── test_document_app
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_document.py
│   │   │   │   ├── test_document_metadata.py
│   │   │   │   ├── test_list_documents.py
│   │   │   │   ├── test_paser_documents.py
│   │   │   │   ├── test_rm_documents.py
│   │   │   │   ├── test_upload_documents.py
│   │   │   │   └── test_upload_info_unit.py
│   │   │   ├── test_file_app
│   │   │   │   ├── test_file_routes_unit.py
│   │   │   │   └── test_file2document_routes_unit.py
│   │   │   ├── test_llm_app
│   │   │   │   ├── test_llm_list_unit.py
│   │   │   │   └── test_llm_list.py
│   │   │   ├── test_mcp_server_app
│   │   │   │   └── test_mcp_server_app_unit.py
│   │   │   ├── test_memory_app
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_create_memory.py
│   │   │   │   ├── test_list_memory.py
│   │   │   │   ├── test_rm_memory.py
│   │   │   │   └── test_update_memory.py
│   │   │   ├── test_message_app
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_add_message.py
│   │   │   │   ├── test_forget_message.py
│   │   │   │   ├── test_get_message_content.py
│   │   │   │   ├── test_get_recent_message.py
│   │   │   │   ├── test_list_message.py
│   │   │   │   ├── test_message_routes_unit.py
│   │   │   │   ├── test_search_message.py
│   │   │   │   └── test_update_message_status.py
│   │   │   ├── test_plugin_app
│   │   │   │   └── test_llm_tools.py
│   │   │   ├── test_search_app
│   │   │   │   ├── test_search_crud.py
│   │   │   │   └── test_search_routes_unit.py
│   │   │   ├── test_system_app
│   │   │   │   ├── test_apps_init_unit.py
│   │   │   │   ├── test_system_basic.py
│   │   │   │   └── test_system_routes_unit.py
│   │   │   ├── test_user_app
│   │   │   │   ├── test_tenant_app_unit.py
│   │   │   │   └── test_user_app_unit.py
│   │   │   ├── conftest.py
│   │   │   └── test_common.py
│   │   ├── utils
│   │   │   ├── __init__.py
│   │   │   ├── engine_utils.py
│   │   │   ├── file_utils.py
│   │   │   └── hypothesis_utils.py
│   │   ├── configs.py
│   │   └── conftest.py
│   ├── unit_test
│   │   ├── api
│   │   │   ├── db
│   │   │   │   ├── services
│   │   │   │   │   ├── test_dialog_service_final_answer.py
│   │   │   │   │   ├── test_dialog_service_use_sql_source_columns.py
│   │   │   │   │   ├── test_document_service_get_parsing_status.py
│   │   │   │   │   ├── test_document_service_metadata_paging.py
│   │   │   │   │   └── test_file_service_upload_document.py
│   │   │   │   ├── test_oceanbase_peewee.py
│   │   │   │   └── test_template_utils.py
│   │   │   └── utils
│   │   │       ├── test_api_file_utils.py
│   │   │       ├── test_doc_validation.py
│   │   │       ├── test_health_utils_minio.py
│   │   │       └── test_oceanbase_health.py
│   │   ├── common
│   │   │   ├── test_apply_semi_auto_meta_data_filter.py
│   │   │   ├── test_decorator.py
│   │   │   ├── test_delete_query_construction.py
│   │   │   ├── test_dropbox_connector.py
│   │   │   ├── test_file_utils.py
│   │   │   ├── test_float_utils.py
│   │   │   ├── test_metadata_filter_operators.py
│   │   │   ├── test_misc_utils.py
│   │   │   ├── test_string_utils.py
│   │   │   ├── test_tag_feature_utils.py
│   │   │   ├── test_time_utils.py
│   │   │   └── test_token_utils.py
│   │   ├── deepdoc
│   │   │   └── parser
│   │   │       ├── test_epub_parser.py
│   │   │       ├── test_opendataloader_parser.py
│   │   │       └── test_pdf_garbled_detection.py
│   │   ├── memory
│   │   │   └── utils
│   │   │       ├── test_ob_conn_aggregation.py
│   │   │       └── test_ob_conn_highlight.py
│   │   ├── rag
│   │   │   ├── graphrag
│   │   │   │   ├── conftest.py
│   │   │   │   ├── test_checkpoint_resume.py
│   │   │   │   ├── test_graphrag_extractors.py
│   │   │   │   └── test_graphrag_utils.py
│   │   │   ├── llm
│   │   │   │   ├── __init__.py
│   │   │   │   ├── conftest.py
│   │   │   │   └── test_perplexity_embed.py
│   │   │   ├── prompts
│   │   │   │   └── test_generator_sandbox.py
│   │   │   ├── utils
│   │   │   │   ├── test_minio_conn_ssl.py
│   │   │   │   ├── test_ob_conn.py
│   │   │   │   └── test_raptor_utils.py
│   │   │   ├── test_rank_feature_scores.py
│   │   │   └── test_sync_data_source.py
│   │   └── test_test_chunk_feedback_package.py
│   ├── __init__.py
│   └── README.md
├── tools
│   ├── chatgpt-on-wechat
│   │   └── plugins
│   │       ├── __init__.py
│   │       ├── config.json
│   │       ├── ragflow_chat.py
│   │       ├── README.md
│   │       └── requirements.txt
│   ├── es-to-oceanbase-migration
│   │   ├── src
│   │   │   └── es_ob_migration
│   │   │       ├── __init__.py
│   │   │       ├── cli.py
│   │   │       ├── es_client.py
│   │   │       ├── migrator.py
│   │   │       ├── ob_client.py
│   │   │       ├── progress.py
│   │   │       ├── schema.py
│   │   │       └── verify.py
│   │   ├── tests
│   │   │   ├── __init__.py
│   │   │   ├── test_progress.py
│   │   │   ├── test_schema.py
│   │   │   └── test_verify.py
│   │   ├── pyproject.toml
│   │   ├── README.md
│   │   └── uv.lock
│   ├── firecrawl
│   │   ├── __init__.py
│   │   ├── example_usage.py
│   │   ├── firecrawl_config.py
│   │   ├── firecrawl_connector.py
│   │   ├── firecrawl_processor.py
│   │   ├── firecrawl_ui.py
│   │   ├── INSTALLATION.md
│   │   ├── integration.py
│   │   ├── ragflow_integration.py
│   │   ├── README.md
│   │   └── requirements.txt
│   └── scripts
│       ├── db_schema_sync.py
│       ├── mysql_migration.py
│       └── README.md
├── web
│   ├── .agents
│   │   └── skills
│   │       └── tanstack-query-best-practices
│   │           ├── rules
│   │           │   ├── cache-gc-time.md
│   │           │   ├── cache-invalidation.md
│   │           │   ├── cache-placeholder-vs-initial.md
│   │           │   ├── cache-stale-time.md
│   │           │   ├── err-error-boundaries.md
│   │           │   ├── inf-page-params.md
│   │           │   ├── mut-invalidate-queries.md
│   │           │   ├── mut-mutation-state.md
│   │           │   ├── mut-optimistic-updates.md
│   │           │   ├── network-mode.md
│   │           │   ├── parallel-use-queries.md
│   │           │   ├── perf-select-transform.md
│   │           │   ├── persist-queries.md
│   │           │   ├── pf-intent-prefetch.md
│   │           │   ├── qk-array-structure.md
│   │           │   ├── qk-factory-pattern.md
│   │           │   ├── qk-hierarchical-organization.md
│   │           │   ├── qk-include-dependencies.md
│   │           │   ├── qk-serializable.md
│   │           │   ├── query-cancellation.md
│   │           │   └── ssr-dehydration.md
│   │           └── SKILL.md
│   ├── .husky
│   │   └── pre-commit
│   ├── .storybook
│   │   ├── main.ts
│   │   └── preview.ts
│   ├── public
│   │   ├── pdfjs-dist
│   │   │   └── pdf.worker.min.js
│   │   ├── iconfont.js
│   │   └── logo.svg
│   ├── src
│   │   ├── assets
│   │   │   ├── icon
│   │   │   │   └── next-icon.tsx
│   │   │   ├── inter
│   │   │   │   ├── Inter-Black.woff2
│   │   │   │   ├── Inter-BlackItalic.woff2
│   │   │   │   ├── Inter-Bold.woff2
│   │   │   │   ├── Inter-BoldItalic.woff2
│   │   │   │   ├── Inter-ExtraBold.woff2
│   │   │   │   ├── Inter-ExtraBoldItalic.woff2
│   │   │   │   ├── Inter-ExtraLight.woff2
│   │   │   │   ├── Inter-ExtraLightItalic.woff2
│   │   │   │   ├── Inter-Italic.woff2
│   │   │   │   ├── Inter-Light.woff2
│   │   │   │   ├── Inter-LightItalic.woff2
│   │   │   │   ├── Inter-Medium.woff2
│   │   │   │   ├── Inter-MediumItalic.woff2
│   │   │   │   ├── Inter-Regular.woff2
│   │   │   │   ├── Inter-SemiBold.woff2
│   │   │   │   ├── Inter-SemiBoldItalic.woff2
│   │   │   │   ├── Inter-Thin.woff2
│   │   │   │   ├── Inter-ThinItalic.woff2
│   │   │   │   ├── InterDisplay-Black.woff2
│   │   │   │   ├── InterDisplay-BlackItalic.woff2
│   │   │   │   ├── InterDisplay-Bold.woff2
│   │   │   │   ├── InterDisplay-BoldItalic.woff2
│   │   │   │   ├── InterDisplay-ExtraBold.woff2
│   │   │   │   ├── InterDisplay-ExtraBoldItalic.woff2
│   │   │   │   ├── InterDisplay-ExtraLight.woff2
│   │   │   │   ├── InterDisplay-ExtraLightItalic.woff2
│   │   │   │   ├── InterDisplay-Italic.woff2
│   │   │   │   ├── InterDisplay-Light.woff2
│   │   │   │   ├── InterDisplay-LightItalic.woff2
│   │   │   │   ├── InterDisplay-Medium.woff2
│   │   │   │   ├── InterDisplay-MediumItalic.woff2
│   │   │   │   ├── InterDisplay-Regular.woff2
│   │   │   │   ├── InterDisplay-SemiBold.woff2
│   │   │   │   ├── InterDisplay-SemiBoldItalic.woff2
│   │   │   │   ├── InterDisplay-Thin.woff2
│   │   │   │   ├── InterDisplay-ThinItalic.woff2
│   │   │   │   ├── InterVariable-Italic.woff2
│   │   │   │   └── InterVariable.woff2
│   │   │   ├── svg
│   │   │   │   ├── chunk-method
│   │   │   │   │   ├── book-01.svg
│   │   │   │   │   ├── book-02.svg
│   │   │   │   │   ├── book-03.svg
│   │   │   │   │   ├── book-04.svg
│   │   │   │   │   ├── chunk-empty.svg
│   │   │   │   │   ├── knowledge-graph-01.svg
│   │   │   │   │   ├── knowledge-graph-02.svg
│   │   │   │   │   ├── law-01.svg
│   │   │   │   │   ├── law-02.svg
│   │   │   │   │   ├── manual-01.svg
│   │   │   │   │   ├── manual-02.svg
│   │   │   │   │   ├── manual-03.svg
│   │   │   │   │   ├── manual-04.svg
│   │   │   │   │   ├── media-01.svg
│   │   │   │   │   ├── media-02.svg
│   │   │   │   │   ├── naive-01.svg
│   │   │   │   │   ├── naive-02.svg
│   │   │   │   │   ├── one-01.svg
│   │   │   │   │   ├── one-02.svg
│   │   │   │   │   ├── one-03.svg
│   │   │   │   │   ├── one-04.svg
│   │   │   │   │   ├── paper-01.svg
│   │   │   │   │   ├── paper-02.svg
│   │   │   │   │   ├── presentation-01.svg
│   │   │   │   │   ├── presentation-02.svg
│   │   │   │   │   ├── qa-01.svg
│   │   │   │   │   ├── qa-02.svg
│   │   │   │   │   ├── resume-01.svg
│   │   │   │   │   ├── resume-02.svg
│   │   │   │   │   ├── table-01.svg
│   │   │   │   │   ├── table-02.svg
│   │   │   │   │   ├── tag-01.svg
│   │   │   │   │   └── tag-02.svg
│   │   │   │   ├── data-flow
│   │   │   │   │   ├── data-icon-bri.svg
│   │   │   │   │   ├── data-icon.svg
│   │   │   │   │   ├── processing-icon-bri.svg
│   │   │   │   │   ├── processing-icon.svg
│   │   │   │   │   ├── total-files-icon-bri.svg
│   │   │   │   │   └── total-files-icon.svg
│   │   │   │   ├── data-source
│   │   │   │   │   ├── airtable.svg
│   │   │   │   │   ├── asana.svg
│   │   │   │   │   ├── bitbucket.svg
│   │   │   │   │   ├── box.svg
│   │   │   │   │   ├── confluence.svg
│   │   │   │   │   ├── dingtalk-ai-table.svg
│   │   │   │   │   ├── discord.svg
│   │   │   │   │   ├── dropbox.svg
│   │   │   │   │   ├── gitlab.svg
│   │   │   │   │   ├── gmail.svg
│   │   │   │   │   ├── google-cloud-storage.svg
│   │   │   │   │   ├── google-drive.svg
│   │   │   │   │   ├── jira.svg
│   │   │   │   │   ├── moodle.svg
│   │   │   │   │   ├── mysql.svg
│   │   │   │   │   ├── notion.svg
│   │   │   │   │   ├── oracle-storage.svg
│   │   │   │   │   ├── postgresql.svg
│   │   │   │   │   ├── r2.svg
│   │   │   │   │   ├── s3.svg
│   │   │   │   │   ├── seafile.svg
│   │   │   │   │   ├── webdav.svg
│   │   │   │   │   └── zendesk.svg
│   │   │   │   ├── empty
│   │   │   │   │   ├── no-data-bri.svg
│   │   │   │   │   ├── no-data-dark.svg
│   │   │   │   │   ├── no-search-data-bri.svg
│   │   │   │   │   └── no-search-data-dark.svg
│   │   │   │   ├── file-icon
│   │   │   │   │   ├── aep.svg
│   │   │   │   │   ├── ai.svg
│   │   │   │   │   ├── avi.svg
│   │   │   │   │   ├── css.svg
│   │   │   │   │   ├── csv.svg
│   │   │   │   │   ├── dmg.svg
│   │   │   │   │   ├── doc.svg
│   │   │   │   │   ├── docx.svg
│   │   │   │   │   ├── eps.svg
│   │   │   │   │   ├── exe.svg
│   │   │   │   │   ├── fig.svg
│   │   │   │   │   ├── folder.svg
│   │   │   │   │   ├── gif.svg
│   │   │   │   │   ├── html.svg
│   │   │   │   │   ├── indd.svg
│   │   │   │   │   ├── java.svg
│   │   │   │   │   ├── jpeg.svg
│   │   │   │   │   ├── jpg.svg
│   │   │   │   │   ├── js.svg
│   │   │   │   │   ├── json.svg
│   │   │   │   │   ├── md.svg
│   │   │   │   │   ├── mdx.svg
│   │   │   │   │   ├── mkv.svg
│   │   │   │   │   ├── mp3.svg
│   │   │   │   │   ├── mp4.svg
│   │   │   │   │   ├── mpeg.svg
│   │   │   │   │   ├── pdf.svg
│   │   │   │   │   ├── png.svg
│   │   │   │   │   ├── ppt.svg
│   │   │   │   │   ├── pptx.svg
│   │   │   │   │   ├── psd.svg
│   │   │   │   │   ├── rss.svg
│   │   │   │   │   ├── sql.svg
│   │   │   │   │   ├── svg.svg
│   │   │   │   │   ├── tiff.svg
│   │   │   │   │   ├── txt.svg
│   │   │   │   │   ├── wav.svg
│   │   │   │   │   ├── webp.svg
│   │   │   │   │   ├── xls.svg
│   │   │   │   │   ├── xlsx.svg
│   │   │   │   │   └── xml.svg
│   │   │   │   ├── home-icon
│   │   │   │   │   ├── agents-bri.svg
│   │   │   │   │   ├── agents.svg
│   │   │   │   │   ├── chats-bri.svg
│   │   │   │   │   ├── chats.svg
│   │   │   │   │   ├── datasets-bri.svg
│   │   │   │   │   ├── datasets.svg
│   │   │   │   │   ├── file-bri.svg
│   │   │   │   │   ├── file.svg
│   │   │   │   │   ├── memory-bri.svg
│   │   │   │   │   ├── memory.svg
│   │   │   │   │   ├── searches-bri.svg
│   │   │   │   │   └── searches.svg
│   │   │   │   ├── llm
│   │   │   │   │   ├── avian.svg
│   │   │   │   │   ├── gemini.svg
│   │   │   │   │   ├── jiekouai.svg
│   │   │   │   │   ├── local-ai.svg
│   │   │   │   │   ├── mineru-bright.svg
│   │   │   │   │   ├── mineru-dark.svg
│   │   │   │   │   ├── n1n.svg
│   │   │   │   │   ├── paddleocr.svg
│   │   │   │   │   ├── ragcon.svg
│   │   │   │   │   ├── stepfun.svg
│   │   │   │   │   └── wenxin.svg
│   │   │   │   ├── akshare.svg
│   │   │   │   ├── api.svg
│   │   │   │   ├── arxiv.svg
│   │   │   │   ├── assistant.svg
│   │   │   │   ├── baidu-fanyi.svg
│   │   │   │   ├── baidu.svg
│   │   │   │   ├── begin.svg
│   │   │   │   ├── bing.svg
│   │   │   │   ├── cancel.svg
│   │   │   │   ├── chat-app-cube.svg
│   │   │   │   ├── chat-configuration-atom.svg
│   │   │   │   ├── chat-star.svg
│   │   │   │   ├── concentrator.svg
│   │   │   │   ├── crawler.svg
│   │   │   │   ├── database.svg
│   │   │   │   ├── deepl.svg
│   │   │   │   ├── delete.svg
│   │   │   │   ├── disable.svg
│   │   │   │   ├── duck.svg
│   │   │   │   ├── email.svg
│   │   │   │   ├── enable.svg
│   │   │   │   ├── es.svg
│   │   │   │   ├── exesql.svg
│   │   │   │   ├── file-management.svg
│   │   │   │   ├── github.svg
│   │   │   │   ├── google-scholar.svg
│   │   │   │   ├── google.svg
│   │   │   │   ├── graph.svg
│   │   │   │   ├── invoke-ai.svg
│   │   │   │   ├── jin10.svg
│   │   │   │   ├── keyword.svg
│   │   │   │   ├── knowledge-base.svg
│   │   │   │   ├── knowledge-configration.svg
│   │   │   │   ├── knowledge-dataset.svg
│   │   │   │   ├── knowledge-testing.svg
│   │   │   │   ├── langfuse.svg
│   │   │   │   ├── login-avatars.svg
│   │   │   │   ├── login-background.svg
│   │   │   │   ├── login-star.svg
│   │   │   │   ├── logo-with-text-white.svg
│   │   │   │   ├── logout.svg
│   │   │   │   ├── minio.svg
│   │   │   │   ├── model-providers.svg
│   │   │   │   ├── moon.svg
│   │   │   │   ├── more-model.svg
│   │   │   │   ├── more.svg
│   │   │   │   ├── move.svg
│   │   │   │   ├── mysql.svg
│   │   │   │   ├── navigation-pointer.svg
│   │   │   │   ├── next-login-bg.svg
│   │   │   │   ├── note.svg
│   │   │   │   ├── nothing.svg
│   │   │   │   ├── paper-clip.svg
│   │   │   │   ├── password.svg
│   │   │   │   ├── plus-circle-fill.svg
│   │   │   │   ├── plus.svg
│   │   │   │   ├── profile.svg
│   │   │   │   ├── prompt.svg
│   │   │   │   ├── pubmed.svg
│   │   │   │   ├── qweather.svg
│   │   │   │   ├── redis.svg
│   │   │   │   ├── refresh.svg
│   │   │   │   ├── rerun.svg
│   │   │   │   ├── resize.svg
│   │   │   │   ├── run.svg
│   │   │   │   ├── searxng.svg
│   │   │   │   ├── select-files-end.svg
│   │   │   │   ├── select-files-start.svg
│   │   │   │   ├── selected-files-collapse.svg
│   │   │   │   ├── sso.svg
│   │   │   │   ├── storage.svg
│   │   │   │   ├── switch.svg
│   │   │   │   ├── tavily.svg
│   │   │   │   ├── team.svg
│   │   │   │   ├── template.svg
│   │   │   │   ├── translation.svg
│   │   │   │   ├── tushare.svg
│   │   │   │   ├── wencai.svg
│   │   │   │   ├── wikipedia.svg
│   │   │   │   └── yahoo-finance.svg
│   │   │   ├── banner.png
│   │   │   ├── filter.svg
│   │   │   ├── logo-with-text.svg
│   │   │   └── yay.jpg
│   │   ├── components
│   │   │   ├── api-service
│   │   │   │   ├── chat-api-key-modal
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── chat-overview-modal
│   │   │   │   │   ├── anchor.tsx
│   │   │   │   │   ├── api-content.tsx
│   │   │   │   │   ├── backend-service-api.tsx
│   │   │   │   │   ├── index.module.less
│   │   │   │   │   ├── markdown-toc.tsx
│   │   │   │   │   └── stats-chart.tsx
│   │   │   │   └── hooks.ts
│   │   │   ├── avatar-name-description
│   │   │   │   ├── editable-field.tsx
│   │   │   │   ├── editable-textarea.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── use-editable-field.ts
│   │   │   ├── back-button
│   │   │   │   └── index.tsx
│   │   │   ├── canvas
│   │   │   │   └── background.tsx
│   │   │   ├── card-singleline-container
│   │   │   │   ├── index.less
│   │   │   │   └── index.tsx
│   │   │   ├── chunk-method-dialog
│   │   │   │   ├── dynamic-page-range.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── use-default-parser-values.ts
│   │   │   ├── data-pipeline-select
│   │   │   │   └── index.tsx
│   │   │   ├── document-download-button
│   │   │   │   └── index.tsx
│   │   │   ├── document-preview
│   │   │   │   ├── md
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── csv-preview.tsx
│   │   │   │   ├── doc-preview.tsx
│   │   │   │   ├── document-header.tsx
│   │   │   │   ├── excel-preview.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── image-preview.tsx
│   │   │   │   ├── index.module.less
│   │   │   │   ├── index.tsx
│   │   │   │   ├── pdf-preview.tsx
│   │   │   │   ├── ppt-preview.tsx
│   │   │   │   ├── txt-preview.tsx
│   │   │   │   └── video-preview.tsx
│   │   │   ├── edit-tag
│   │   │   │   └── index.tsx
│   │   │   ├── embed-dialog
│   │   │   │   ├── index.tsx
│   │   │   │   └── use-show-embed-dialog.ts
│   │   │   ├── empty
│   │   │   │   ├── constant.tsx
│   │   │   │   ├── empty.tsx
│   │   │   │   └── interface.ts
│   │   │   ├── fallback-component
│   │   │   │   └── index.tsx
│   │   │   ├── file-icon
│   │   │   │   ├── index.module.less
│   │   │   │   └── index.tsx
│   │   │   ├── file-upload-dialog
│   │   │   │   └── index.tsx
│   │   │   ├── highlight-markdown
│   │   │   │   ├── index.module.less
│   │   │   │   └── index.tsx
│   │   │   ├── hooks
│   │   │   │   ├── use-mobile.tsx
│   │   │   │   └── use-toast.tsx
│   │   │   ├── image
│   │   │   │   └── index.tsx
│   │   │   ├── indented-tree
│   │   │   │   └── indented-tree.tsx
│   │   │   ├── json-edit
│   │   │   │   ├── css
│   │   │   │   │   ├── cloud9_night.less
│   │   │   │   │   └── index.less
│   │   │   │   ├── index.tsx
│   │   │   │   └── interface.ts
│   │   │   ├── jsonjoy-builder
│   │   │   │   ├── components
│   │   │   │   │   ├── features
│   │   │   │   │   │   ├── json-validator.tsx
│   │   │   │   │   │   └── schema-inferencer.tsx
│   │   │   │   │   └── schema-editor
│   │   │   │   │       ├── types
│   │   │   │   │       │   ├── array-editor.tsx
│   │   │   │   │       │   ├── boolean-editor.tsx
│   │   │   │   │       │   ├── number-editor.tsx
│   │   │   │   │       │   ├── object-editor.tsx
│   │   │   │   │       │   └── string-editor.tsx
│   │   │   │   │       ├── add-field-button.tsx
│   │   │   │   │       ├── context.ts
│   │   │   │   │       ├── interface.ts
│   │   │   │   │       ├── json-schema-editor.tsx
│   │   │   │   │       ├── json-schema-visualizer.tsx
│   │   │   │   │       ├── schema-field-list.tsx
│   │   │   │   │       ├── schema-field.tsx
│   │   │   │   │       ├── schema-property-editor.tsx
│   │   │   │   │       ├── schema-type-selector.tsx
│   │   │   │   │       ├── schema-visual-editor.tsx
│   │   │   │   │       ├── type-dropdown.tsx
│   │   │   │   │       └── type-editor.tsx
│   │   │   │   ├── hooks
│   │   │   │   │   ├── use-monaco-theme.ts
│   │   │   │   │   └── use-translation.ts
│   │   │   │   ├── i18n
│   │   │   │   │   ├── locales
│   │   │   │   │   │   ├── de.ts
│   │   │   │   │   │   ├── en.ts
│   │   │   │   │   │   ├── fr.ts
│   │   │   │   │   │   ├── ru.ts
│   │   │   │   │   │   └── tr.ts
│   │   │   │   │   ├── translation-context.ts
│   │   │   │   │   └── translation-keys.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── schema-editor.ts
│   │   │   │   │   ├── schema-inference.ts
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── types
│   │   │   │   │   ├── json-schema.ts
│   │   │   │   │   └── validation.ts
│   │   │   │   ├── utils
│   │   │   │   │   └── json-validator.ts
│   │   │   │   ├── index.css
│   │   │   │   └── index.ts
│   │   │   ├── line-chart
│   │   │   │   └── index.tsx
│   │   │   ├── list-filter-bar
│   │   │   │   ├── filter-field.tsx
│   │   │   │   ├── filter-popover.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── interface.ts
│   │   │   │   └── use-handle-filter-submit.ts
│   │   │   ├── llm-select
│   │   │   │   ├── index.less
│   │   │   │   ├── llm-label.tsx
│   │   │   │   └── next.tsx
│   │   │   ├── llm-setting-items
│   │   │   │   ├── index.module.less
│   │   │   │   ├── llm-form-field.tsx
│   │   │   │   ├── next.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   └── use-watch-change.ts
│   │   │   ├── markdown-content
│   │   │   │   ├── image-carousel.tsx
│   │   │   │   ├── index.module.less
│   │   │   │   ├── index.tsx
│   │   │   │   └── reference-utils.ts
│   │   │   ├── message-input
│   │   │   │   ├── index.less
│   │   │   │   └── next.tsx
│   │   │   ├── message-item
│   │   │   │   ├── group-button.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.module.less
│   │   │   │   └── index.tsx
│   │   │   ├── metadata-filter
│   │   │   │   ├── index.tsx
│   │   │   │   ├── metadata-filter-conditions.tsx
│   │   │   │   └── metadata-semi-auto-fields.tsx
│   │   │   ├── next-markdown-content
│   │   │   │   ├── index.module.less
│   │   │   │   └── index.tsx
│   │   │   ├── next-message-item
│   │   │   │   ├── group-button.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.module.less
│   │   │   │   ├── index.tsx
│   │   │   │   ├── reference-document-list.tsx
│   │   │   │   ├── reference-image-list.tsx
│   │   │   │   ├── uploaded-message-files.tsx
│   │   │   │   └── utils.ts
│   │   │   ├── originui
│   │   │   │   ├── calendar
│   │   │   │   │   ├── index.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── number-input.tsx
│   │   │   │   ├── password-input.tsx
│   │   │   │   ├── select-with-search.tsx
│   │   │   │   ├── time-range-picker.tsx
│   │   │   │   ├── timeline.tsx
│   │   │   │   └── underline-tabs.tsx
│   │   │   ├── parse-configuration
│   │   │   │   ├── graph-rag-form-fields.tsx
│   │   │   │   └── raptor-form-fields.tsx
│   │   │   ├── pdf-drawer
│   │   │   │   ├── hooks.ts
│   │   │   │   └── index.tsx
│   │   │   ├── rename-dialog
│   │   │   │   ├── index.tsx
│   │   │   │   └── rename-form.tsx
│   │   │   ├── similarity-slider
│   │   │   │   └── index.tsx
│   │   │   ├── ui
│   │   │   │   ├── modal
│   │   │   │   │   ├── modal-manage.tsx
│   │   │   │   │   └── modal.tsx
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── async-tree-select.tsx
│   │   │   │   ├── audio-button.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button-group.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── date-picker.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── divider.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── dual-range-slider.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-select.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── message.ts
│   │   │   │   ├── multi-select.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── radio.tsx
│   │   │   │   ├── ragflow-pagination.tsx
│   │   │   │   ├── range-picker.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── segmented.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   ├── space.tsx
│   │   │   │   ├── spin.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs-underlined.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── time-picker.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   ├── tooltip.tsx
│   │   │   │   ├── transfer-list.tsx
│   │   │   │   └── tree-view.tsx
│   │   │   ├── xyflow
│   │   │   │   ├── base-node.tsx
│   │   │   │   └── tooltip-node.tsx
│   │   │   ├── auto-keywords-form-field.tsx
│   │   │   ├── avatar-upload.tsx
│   │   │   ├── bool-segmented.tsx
│   │   │   ├── bulk-operate-bar.tsx
│   │   │   ├── card-container.tsx
│   │   │   ├── children-delimiter-form.tsx
│   │   │   ├── collapse.tsx
│   │   │   ├── confirm-delete-dialog.tsx
│   │   │   ├── copy-to-clipboard.tsx
│   │   │   ├── cross-language-form-field.tsx
│   │   │   ├── dataset-configuration-container.tsx
│   │   │   ├── delimiter-form-field.tsx
│   │   │   ├── dynamic-form.tsx
│   │   │   ├── embed-container.tsx
│   │   │   ├── entity-types-form-field.tsx
│   │   │   ├── excel-to-html-form-field.tsx
│   │   │   ├── feedback-dialog.tsx
│   │   │   ├── file-status-badge.tsx
│   │   │   ├── file-upload.tsx
│   │   │   ├── file-uploader.tsx
│   │   │   ├── floating-chat-widget-markdown.module.less
│   │   │   ├── floating-chat-widget-markdown.tsx
│   │   │   ├── floating-chat-widget.tsx
│   │   │   ├── form-container.tsx
│   │   │   ├── home-card.tsx
│   │   │   ├── icon-font.tsx
│   │   │   ├── key-input.tsx
│   │   │   ├── knowledge-base-item.tsx
│   │   │   ├── large-model-form-field.tsx
│   │   │   ├── layout-recognize-form-field.tsx
│   │   │   ├── logical-operator.tsx
│   │   │   ├── max-token-number-from-field.tsx
│   │   │   ├── memories-form-field.tsx
│   │   │   ├── message-history-window-size-item.tsx
│   │   │   ├── mineru-options-form-field.tsx
│   │   │   ├── modal-manager.tsx
│   │   │   ├── more-button.tsx
│   │   │   ├── new-document-link.tsx
│   │   │   ├── paddleocr-options-form-field.tsx
│   │   │   ├── page-header.tsx
│   │   │   ├── page-rank-form-field.tsx
│   │   │   ├── prompt-dialog.tsx
│   │   │   ├── ragflow-avatar.tsx
│   │   │   ├── ragflow-form.tsx
│   │   │   ├── rerank.tsx
│   │   │   ├── shared-badge.tsx
│   │   │   ├── skeleton-card.tsx
│   │   │   ├── slider-input-form-field.tsx
│   │   │   ├── spotlight.tsx
│   │   │   ├── svg-icon.tsx
│   │   │   ├── switch-fom-field.tsx
│   │   │   ├── table-skeleton.tsx
│   │   │   ├── tavily-form-field.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── theme-switch.tsx
│   │   │   ├── toc-enhance-form-field.tsx
│   │   │   ├── top-n-item.tsx
│   │   │   ├── use-knowledge-graph-item.tsx
│   │   │   ├── webhook-response-status.tsx
│   │   │   └── what-is-this.tsx
│   │   ├── constants
│   │   │   ├── agent.tsx
│   │   │   ├── authorization.ts
│   │   │   ├── chat.ts
│   │   │   ├── common.ts
│   │   │   ├── file.ts
│   │   │   ├── form.ts
│   │   │   ├── knowledge.ts
│   │   │   ├── llm.ts
│   │   │   ├── permission.ts
│   │   │   └── setting.ts
│   │   ├── hooks
│   │   │   ├── __tests__
│   │   │   │   └── logic-hooks.useScrollToBottom.test.tsx
│   │   │   ├── logic-hooks
│   │   │   │   ├── navigate-hooks.ts
│   │   │   │   ├── use-build-operator-options.tsx
│   │   │   │   ├── use-build-options.ts
│   │   │   │   ├── use-change-search.ts
│   │   │   │   ├── use-pagination.ts
│   │   │   │   └── use-row-selection.ts
│   │   │   ├── auth-hooks.ts
│   │   │   ├── common-hooks.tsx
│   │   │   ├── logic-hooks.ts
│   │   │   ├── parser-config-utils.ts
│   │   │   ├── plugin-hooks.tsx
│   │   │   ├── route-hook.ts
│   │   │   ├── use-agent-request.ts
│   │   │   ├── use-callback-ref.ts
│   │   │   ├── use-chat-request.ts
│   │   │   ├── use-chunk-request.ts
│   │   │   ├── use-client-search.ts
│   │   │   ├── use-controllable-state.ts
│   │   │   ├── use-dataflow-request.ts
│   │   │   ├── use-document-request.ts
│   │   │   ├── use-file-request.ts
│   │   │   ├── use-knowledge-request.ts
│   │   │   ├── use-llm-request.tsx
│   │   │   ├── use-login-request.ts
│   │   │   ├── use-mcp-request.ts
│   │   │   ├── use-memory-request.ts
│   │   │   ├── use-send-message.ts
│   │   │   ├── use-system-request.ts
│   │   │   └── use-user-setting-request.tsx
│   │   ├── icons
│   │   │   ├── github.svg
│   │   │   └── google.svg
│   │   ├── interfaces
│   │   │   ├── database
│   │   │   │   ├── agent.ts
│   │   │   │   ├── base.ts
│   │   │   │   ├── chat.ts
│   │   │   │   ├── dataset.ts
│   │   │   │   ├── document.ts
│   │   │   │   ├── file-manager.ts
│   │   │   │   ├── llm.ts
│   │   │   │   ├── mcp-server.ts
│   │   │   │   ├── mcp.ts
│   │   │   │   ├── memory.ts
│   │   │   │   ├── plugin.ts
│   │   │   │   ├── system.ts
│   │   │   │   └── user-setting.ts
│   │   │   ├── request
│   │   │   │   ├── agent.ts
│   │   │   │   ├── base.ts
│   │   │   │   ├── chat.ts
│   │   │   │   ├── document.ts
│   │   │   │   ├── file-manager.ts
│   │   │   │   ├── flow.ts
│   │   │   │   ├── knowledge.ts
│   │   │   │   ├── llm.ts
│   │   │   │   ├── mcp.ts
│   │   │   │   └── system.ts
│   │   │   ├── antd-compat.ts
│   │   │   └── common.ts
│   │   ├── layouts
│   │   │   ├── components
│   │   │   │   ├── bell-button.tsx
│   │   │   │   ├── global-navbar.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   ├── page-container.tsx
│   │   │   │   └── theme-button.tsx
│   │   │   └── root-layout.tsx
│   │   ├── less
│   │   │   ├── index.less
│   │   │   ├── mixins.less
│   │   │   └── variable.less
│   │   ├── lib
│   │   │   └── utils.ts
│   │   ├── locales
│   │   │   ├── ar.ts
│   │   │   ├── bg.ts
│   │   │   ├── config.ts
│   │   │   ├── de.ts
│   │   │   ├── en.ts
│   │   │   ├── es.ts
│   │   │   ├── fr.ts
│   │   │   ├── id.ts
│   │   │   ├── it.ts
│   │   │   ├── ja.ts
│   │   │   ├── pt-br.ts
│   │   │   ├── ru.ts
│   │   │   ├── tr.ts
│   │   │   ├── vi.ts
│   │   │   ├── zh-traditional.ts
│   │   │   └── zh.ts
│   │   ├── pages
│   │   │   ├── admin
│   │   │   │   ├── components
│   │   │   │   │   └── enterprise-feature.tsx
│   │   │   │   ├── forms
│   │   │   │   │   ├── change-password-form.tsx
│   │   │   │   │   ├── email-form.tsx
│   │   │   │   │   ├── import-excel-form.tsx
│   │   │   │   │   ├── role-form.tsx
│   │   │   │   │   └── user-form.tsx
│   │   │   │   ├── layouts
│   │   │   │   │   ├── authorized-layout.tsx
│   │   │   │   │   ├── navigation-layout.tsx
│   │   │   │   │   └── root-layout.tsx
│   │   │   │   ├── login.tsx
│   │   │   │   ├── monitoring.tsx
│   │   │   │   ├── roles.tsx
│   │   │   │   ├── sandbox-settings.tsx
│   │   │   │   ├── service-detail.tsx
│   │   │   │   ├── service-status.tsx
│   │   │   │   ├── task-executor-detail.tsx
│   │   │   │   ├── user-detail.tsx
│   │   │   │   ├── users.tsx
│   │   │   │   ├── utils.tsx
│   │   │   │   └── whitelist.tsx
│   │   │   ├── agent
│   │   │   │   ├── canvas
│   │   │   │   │   ├── context-menu
│   │   │   │   │   │   ├── index.module.less
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── edge
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── node
│   │   │   │   │   │   ├── dropdown
│   │   │   │   │   │   │   ├── accordion-operators.tsx
│   │   │   │   │   │   │   ├── next-step-dropdown.tsx
│   │   │   │   │   │   │   └── operator-item-list.tsx
│   │   │   │   │   │   ├── note-node
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   │   ├── agent-node.tsx
│   │   │   │   │   │   ├── begin-node.tsx
│   │   │   │   │   │   ├── card.tsx
│   │   │   │   │   │   ├── categorize-node.tsx
│   │   │   │   │   │   ├── chunker-node.tsx
│   │   │   │   │   │   ├── data-operations-node.tsx
│   │   │   │   │   │   ├── exit-loop-node.tsx
│   │   │   │   │   │   ├── extractor-node.tsx
│   │   │   │   │   │   ├── file-node.tsx
│   │   │   │   │   │   ├── handle-icon.tsx
│   │   │   │   │   │   ├── handle.tsx
│   │   │   │   │   │   ├── index.module.less
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── iteration-node.tsx
│   │   │   │   │   │   ├── keyword-node.tsx
│   │   │   │   │   │   ├── labeled-group-node.tsx
│   │   │   │   │   │   ├── list-operations-node.tsx
│   │   │   │   │   │   ├── loop-node.tsx
│   │   │   │   │   │   ├── message-node.tsx
│   │   │   │   │   │   ├── node-header.tsx
│   │   │   │   │   │   ├── node-wrapper.tsx
│   │   │   │   │   │   ├── parser-node.tsx
│   │   │   │   │   │   ├── placeholder-node.tsx
│   │   │   │   │   │   ├── popover.tsx
│   │   │   │   │   │   ├── resize-icon.tsx
│   │   │   │   │   │   ├── retrieval-node.tsx
│   │   │   │   │   │   ├── rewrite-node.tsx
│   │   │   │   │   │   ├── switch-node.tsx
│   │   │   │   │   │   ├── tokenizer-node.tsx
│   │   │   │   │   │   ├── tool-node.tsx
│   │   │   │   │   │   ├── toolbar.tsx
│   │   │   │   │   │   ├── use-build-categorize-handle-positions.ts
│   │   │   │   │   │   ├── use-build-switch-handle-positions.ts
│   │   │   │   │   │   ├── variable-aggregator-node.tsx
│   │   │   │   │   │   ├── variable-assigner-node.tsx
│   │   │   │   │   │   └── variable-display.tsx
│   │   │   │   │   ├── context.tsx
│   │   │   │   │   ├── index.module.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── chat
│   │   │   │   │   ├── box.tsx
│   │   │   │   │   ├── chat-sheet.tsx
│   │   │   │   │   ├── use-get-file-icon.tsx
│   │   │   │   │   └── use-send-agent-message.ts
│   │   │   │   ├── components
│   │   │   │   │   └── publish-confirm-dialog.tsx
│   │   │   │   ├── constant
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── pipeline.tsx
│   │   │   │   ├── debug-content
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── uploader.tsx
│   │   │   │   ├── explore
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── canvas-card.tsx
│   │   │   │   │   │   ├── session-card.tsx
│   │   │   │   │   │   ├── session-chat.tsx
│   │   │   │   │   │   ├── session-dropdown.tsx
│   │   │   │   │   │   └── session-list.tsx
│   │   │   │   │   ├── hooks
│   │   │   │   │   │   ├── use-explore-url-params.ts
│   │   │   │   │   │   ├── use-select-derived-session-list.ts
│   │   │   │   │   │   └── use-send-session-message.ts
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── form
│   │   │   │   │   ├── agent-form
│   │   │   │   │   │   ├── tool-popover
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── tool-command.tsx
│   │   │   │   │   │   │   ├── use-update-mcp.ts
│   │   │   │   │   │   │   └── use-update-tools.ts
│   │   │   │   │   │   ├── agent-tools.tsx
│   │   │   │   │   │   ├── dynamic-prompt.tsx
│   │   │   │   │   │   ├── dynamic-tool.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-build-prompt-options.ts
│   │   │   │   │   │   ├── use-get-tools.ts
│   │   │   │   │   │   ├── use-show-structured-output-dialog.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── arxiv-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── begin-form
│   │   │   │   │   │   ├── webhook
│   │   │   │   │   │   │   ├── auth.tsx
│   │   │   │   │   │   │   ├── dynamic-request.tsx
│   │   │   │   │   │   │   ├── dynamic-response.tsx
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── request-schema.tsx
│   │   │   │   │   │   │   └── response.tsx
│   │   │   │   │   │   ├── begin-dynamic-options.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── parameter-dialog.tsx
│   │   │   │   │   │   ├── query-table.tsx
│   │   │   │   │   │   ├── schema.ts
│   │   │   │   │   │   ├── use-edit-query.ts
│   │   │   │   │   │   ├── use-handle-mode-change.ts
│   │   │   │   │   │   ├── use-show-schema-dialog.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   ├── use-watch-change.ts
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── bing-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── categorize-form
│   │   │   │   │   │   ├── dynamic-categorize.tsx
│   │   │   │   │   │   ├── dynamic-example.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-form-schema.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── code-form
│   │   │   │   │   │   ├── expanded-editor.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── monaco-config.ts
│   │   │   │   │   │   ├── next-variable.tsx
│   │   │   │   │   │   ├── schema.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   ├── use-watch-change.ts
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── prompt-editor
│   │   │   │   │   │   │   ├── constant.ts
│   │   │   │   │   │   │   ├── enter-key-plugin.tsx
│   │   │   │   │   │   │   ├── index.css
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── paste-handler-plugin.tsx
│   │   │   │   │   │   │   ├── theme.ts
│   │   │   │   │   │   │   ├── utils.ts
│   │   │   │   │   │   │   ├── variable-node.tsx
│   │   │   │   │   │   │   ├── variable-on-change-plugin.tsx
│   │   │   │   │   │   │   ├── variable-path-transform.ts
│   │   │   │   │   │   │   └── variable-picker-plugin.tsx
│   │   │   │   │   │   ├── api-key-field.tsx
│   │   │   │   │   │   ├── description-field.tsx
│   │   │   │   │   │   ├── dynamic-fom-header.tsx
│   │   │   │   │   │   ├── dynamic-string-form.tsx
│   │   │   │   │   │   ├── form-wrapper.tsx
│   │   │   │   │   │   ├── index.less
│   │   │   │   │   │   ├── json-viewer.tsx
│   │   │   │   │   │   ├── output.tsx
│   │   │   │   │   │   ├── query-variable-list.tsx
│   │   │   │   │   │   ├── query-variable.tsx
│   │   │   │   │   │   ├── schema-dialog.tsx
│   │   │   │   │   │   ├── schema-panel.tsx
│   │   │   │   │   │   ├── select-with-secondary-menu.tsx
│   │   │   │   │   │   ├── structured-output-secondary-menu.tsx
│   │   │   │   │   │   └── user-id-form-field.tsx
│   │   │   │   │   ├── crawler-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── data-operations-form
│   │   │   │   │   │   ├── filter-values.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── select-keys.tsx
│   │   │   │   │   │   └── updates.tsx
│   │   │   │   │   ├── doc-generator-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-form-change.ts
│   │   │   │   │   ├── duckduckgo-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── email-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── exesql-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── use-submit-form.ts
│   │   │   │   │   ├── extractor-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── use-switch-prompt.ts
│   │   │   │   │   ├── github-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── google-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── google-scholar-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── invoke-form
│   │   │   │   │   │   ├── hooks.ts
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── schema.ts
│   │   │   │   │   │   ├── use-edit-variable.ts
│   │   │   │   │   │   ├── variable-dialog.tsx
│   │   │   │   │   │   └── variable-table.tsx
│   │   │   │   │   ├── iteration-form
│   │   │   │   │   │   ├── dynamic-output.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── interface.ts
│   │   │   │   │   │   ├── use-build-logical-options.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-form-change.ts
│   │   │   │   │   ├── iteration-start-from
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── list-operations-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── loop-form
│   │   │   │   │   │   ├── dynamic-variables.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── loop-termination-condition.tsx
│   │   │   │   │   │   ├── schema.ts
│   │   │   │   │   │   ├── use-build-logical-options.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-form-change.ts
│   │   │   │   │   ├── message-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-show-response-status.ts
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── parser-form
│   │   │   │   │   │   ├── common-form-fields.tsx
│   │   │   │   │   │   ├── email-form-fields.tsx
│   │   │   │   │   │   ├── image-form-fields.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── interface.ts
│   │   │   │   │   │   ├── pdf-form-fields.tsx
│   │   │   │   │   │   ├── ppt-form-fields.tsx
│   │   │   │   │   │   ├── spreadsheet-form-fields.tsx
│   │   │   │   │   │   ├── text-html-form-fields.tsx
│   │   │   │   │   │   ├── use-set-initial-language.ts
│   │   │   │   │   │   ├── utils.ts
│   │   │   │   │   │   ├── video-form-fields.tsx
│   │   │   │   │   │   └── word-form-fields.tsx
│   │   │   │   │   ├── pubmed-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── retrieval-form
│   │   │   │   │   │   ├── next.tsx
│   │   │   │   │   │   └── use-values.ts
│   │   │   │   │   ├── rewrite-question-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── searxng-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── string-transform-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-form-change.ts
│   │   │   │   │   ├── switch-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── tavily-extract-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── tavily-form
│   │   │   │   │   │   ├── dynamic-domain.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── title-chunker-form
│   │   │   │   │   │   ├── hook.ts
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── token-chunker-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── tokenizer-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── tool-form
│   │   │   │   │   │   ├── arxiv-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── bing-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── crawler-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── duckduckgo-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── email-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── exesql-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── github-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── google-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── google-scholar-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── mcp-form
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   ├── mcp-card.tsx
│   │   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   │   ├── pubmed-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── retrieval-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── searxng-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── tavily-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── wencai-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── wikipedia-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── yahoo-finance-form
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── constant.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── user-fill-up-form
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── use-values.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── variable-aggregator-form
│   │   │   │   │   │   ├── dynamic-group-variable.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── name-input.tsx
│   │   │   │   │   │   ├── schema.ts
│   │   │   │   │   │   ├── use-handle-name-change.ts
│   │   │   │   │   │   └── use-watch-change.ts
│   │   │   │   │   ├── variable-assigner-form
│   │   │   │   │   │   ├── dynamic-variables.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── use-build-logical-options.ts
│   │   │   │   │   ├── wencai-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── wikipedia-form
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── yahoo-finance-form
│   │   │   │   │       └── index.tsx
│   │   │   │   ├── form-sheet
│   │   │   │   │   ├── single-debug-sheet
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── utils.test.ts
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── form-config-map.tsx
│   │   │   │   │   ├── next.tsx
│   │   │   │   │   └── title-input.tsx
│   │   │   │   ├── gobal-variable-sheet
│   │   │   │   │   ├── component
│   │   │   │   │   │   └── add-variable-modal.tsx
│   │   │   │   │   ├── hooks
│   │   │   │   │   │   ├── use-form.tsx
│   │   │   │   │   │   └── use-object-fields.tsx
│   │   │   │   │   ├── constant.ts
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── hooks
│   │   │   │   │   ├── use-add-node.ts
│   │   │   │   │   ├── use-agent-tool-initial-values.ts
│   │   │   │   │   ├── use-before-delete.tsx
│   │   │   │   │   ├── use-build-dsl.ts
│   │   │   │   │   ├── use-build-options.tsx
│   │   │   │   │   ├── use-build-structured-output.ts
│   │   │   │   │   ├── use-build-webhook-url.ts
│   │   │   │   │   ├── use-cache-chat-log.ts
│   │   │   │   │   ├── use-calculate-sheet-right.ts
│   │   │   │   │   ├── use-cancel-dataflow.ts
│   │   │   │   │   ├── use-change-node-name.ts
│   │   │   │   │   ├── use-chat-logic.ts
│   │   │   │   │   ├── use-connection-drag.ts
│   │   │   │   │   ├── use-download-output.ts
│   │   │   │   │   ├── use-dropdown-position.ts
│   │   │   │   │   ├── use-export-json.ts
│   │   │   │   │   ├── use-fetch-data.ts
│   │   │   │   │   ├── use-fetch-pipeline-log.ts
│   │   │   │   │   ├── use-filter-child-node-ids.ts
│   │   │   │   │   ├── use-find-mcp-by-id.ts
│   │   │   │   │   ├── use-form-values.ts
│   │   │   │   │   ├── use-get-begin-query.tsx
│   │   │   │   │   ├── use-is-mcp.ts
│   │   │   │   │   ├── use-is-pipeline.ts
│   │   │   │   │   ├── use-is-webhook.ts
│   │   │   │   │   ├── use-iteration.ts
│   │   │   │   │   ├── use-move-note.ts
│   │   │   │   │   ├── use-node-loading.ts
│   │   │   │   │   ├── use-open-document.ts
│   │   │   │   │   ├── use-placeholder-manager.ts
│   │   │   │   │   ├── use-run-dataflow.ts
│   │   │   │   │   ├── use-save-graph.ts
│   │   │   │   │   ├── use-save-on-blur.ts
│   │   │   │   │   ├── use-send-shared-message.ts
│   │   │   │   │   ├── use-set-graph.ts
│   │   │   │   │   ├── use-show-dialog.ts
│   │   │   │   │   ├── use-show-drawer.tsx
│   │   │   │   │   ├── use-stop-message.ts
│   │   │   │   │   └── use-watch-form-change.ts
│   │   │   │   ├── log-sheet
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── tool-timeline-item.tsx
│   │   │   │   │   └── workflow-timeline.tsx
│   │   │   │   ├── pipeline-log-sheet
│   │   │   │   │   ├── dataflow-timeline.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── pipeline-run-sheet
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── uploader.tsx
│   │   │   │   ├── run-sheet
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── setting-dialog
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── setting-form.tsx
│   │   │   │   ├── share
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── parameter-dialog.tsx
│   │   │   │   ├── utils
│   │   │   │   │   ├── build-output-list.ts
│   │   │   │   │   ├── chat.ts
│   │   │   │   │   ├── delete-node.ts
│   │   │   │   │   ├── filter-agent-structured-output.ts
│   │   │   │   │   └── filter-downstream-nodes.ts
│   │   │   │   ├── version-dialog
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── webhook-sheet
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── timeline.tsx
│   │   │   │   ├── context.ts
│   │   │   │   ├── flow-tooltip.tsx
│   │   │   │   ├── form-hooks.ts
│   │   │   │   ├── hooks.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── interface.ts
│   │   │   │   ├── operator-icon.tsx
│   │   │   │   ├── options.ts
│   │   │   │   ├── store.ts
│   │   │   │   ├── use-agent-history-manager.ts
│   │   │   │   └── utils.ts
│   │   │   ├── agents
│   │   │   │   ├── hooks
│   │   │   │   │   ├── use-create-agent.ts
│   │   │   │   │   ├── use-export-agent-log.ts
│   │   │   │   │   └── use-selelct-filters.ts
│   │   │   │   ├── upload-agent-dialog
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── upload-agent-form.tsx
│   │   │   │   ├── agent-card.tsx
│   │   │   │   ├── agent-dropdown.tsx
│   │   │   │   ├── agent-log-detail-modal.tsx
│   │   │   │   ├── agent-log-page.tsx
│   │   │   │   ├── agent-templates.tsx
│   │   │   │   ├── constant.ts
│   │   │   │   ├── create-agent-dialog.tsx
│   │   │   │   ├── create-agent-form.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── name-form-field.tsx
│   │   │   │   ├── template-card.tsx
│   │   │   │   ├── template-sidebar.tsx
│   │   │   │   ├── use-import-json.ts
│   │   │   │   └── use-rename-agent.ts
│   │   │   ├── chunk
│   │   │   │   ├── chunk-result
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── parsed-result
│   │   │   │   │   ├── add-knowledge
│   │   │   │   │   │   ├── components
│   │   │   │   │   │   │   └── knowledge-chunk
│   │   │   │   │   │   │       ├── components
│   │   │   │   │   │   │       │   ├── chunk-card
│   │   │   │   │   │   │       │   │   ├── index.module.less
│   │   │   │   │   │   │       │   │   └── index.tsx
│   │   │   │   │   │   │       │   ├── chunk-creating-modal
│   │   │   │   │   │   │       │   │   ├── index.tsx
│   │   │   │   │   │   │       │   │   └── tag-feature-item.tsx
│   │   │   │   │   │   │       │   └── chunk-result-bar
│   │   │   │   │   │   │       │       ├── checkbox-sets.tsx
│   │   │   │   │   │   │       │       └── index.tsx
│   │   │   │   │   │   │       ├── constant.ts
│   │   │   │   │   │   │       ├── hooks.ts
│   │   │   │   │   │   │       ├── index.module.less
│   │   │   │   │   │   │       ├── index.tsx
│   │   │   │   │   │   │       └── utils.ts
│   │   │   │   │   │   ├── constant.ts
│   │   │   │   │   │   └── index.module.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── result-view
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── chunk-card.tsx
│   │   │   │   ├── chunk-toolbar.tsx
│   │   │   │   ├── chunked-result-panel.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── parsed-result-panel.tsx
│   │   │   ├── dataflow-result
│   │   │   │   ├── components
│   │   │   │   │   ├── chunk-card
│   │   │   │   │   │   ├── index.module.less
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── chunk-creating-modal
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── tag-feature-item.tsx
│   │   │   │   │   ├── chunk-result-bar
│   │   │   │   │   │   ├── checkbox-sets.tsx
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── parse-editer
│   │   │   │   │   │   ├── hook.ts
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── interface.ts
│   │   │   │   │   │   ├── json-parser.tsx
│   │   │   │   │   │   └── object-parser.tsx
│   │   │   │   │   ├── rerun-button
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── time-line
│   │   │   │   │       └── index.tsx
│   │   │   │   ├── chunker.tsx
│   │   │   │   ├── constant.ts
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.module.less
│   │   │   │   ├── index.tsx
│   │   │   │   ├── interface.ts
│   │   │   │   ├── parser.tsx
│   │   │   │   └── utils.ts
│   │   │   ├── dataset
│   │   │   │   ├── components
│   │   │   │   │   └── metedata
│   │   │   │   │       ├── hooks
│   │   │   │   │       │   ├── use-manage-modal.ts
│   │   │   │   │       │   └── use-manage-values-modal.ts
│   │   │   │   │       ├── constant.ts
│   │   │   │   │       ├── interface.ts
│   │   │   │   │       ├── manage-modal-column.tsx
│   │   │   │   │       ├── manage-modal.tsx
│   │   │   │   │       └── manage-values-modal.tsx
│   │   │   │   ├── contexts
│   │   │   │   │   └── knowledge-base-context.tsx
│   │   │   │   ├── dataset
│   │   │   │   │   ├── generate-button
│   │   │   │   │   │   ├── generate.tsx
│   │   │   │   │   │   └── hook.ts
│   │   │   │   │   ├── constant.ts
│   │   │   │   │   ├── dataset-action-cell.tsx
│   │   │   │   │   ├── dataset-table.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── parsing-card.tsx
│   │   │   │   │   ├── parsing-status-cell.tsx
│   │   │   │   │   ├── reparse-dialog.tsx
│   │   │   │   │   ├── set-meta-dialog.tsx
│   │   │   │   │   ├── use-bulk-operate-dataset.tsx
│   │   │   │   │   ├── use-change-document-parser.ts
│   │   │   │   │   ├── use-create-empty-document.ts
│   │   │   │   │   ├── use-dataset-table-columns.tsx
│   │   │   │   │   ├── use-rename-document.ts
│   │   │   │   │   ├── use-run-document.ts
│   │   │   │   │   ├── use-save-meta.ts
│   │   │   │   │   ├── use-select-filters.ts
│   │   │   │   │   ├── use-upload-document.ts
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── dataset-overview
│   │   │   │   │   ├── dataset-common.ts
│   │   │   │   │   ├── dataset-filter.tsx
│   │   │   │   │   ├── hook.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── interface.ts
│   │   │   │   │   └── overview-table.tsx
│   │   │   │   ├── dataset-setting
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── added-source-card.tsx
│   │   │   │   │   │   ├── link-data-pipeline.tsx
│   │   │   │   │   │   ├── link-data-pipline-modal.tsx
│   │   │   │   │   │   ├── link-data-source-modal.tsx
│   │   │   │   │   │   ├── link-data-source.tsx
│   │   │   │   │   │   └── tag-item.tsx
│   │   │   │   │   ├── configuration
│   │   │   │   │   │   ├── audio.tsx
│   │   │   │   │   │   ├── book.tsx
│   │   │   │   │   │   ├── common-item.tsx
│   │   │   │   │   │   ├── email.tsx
│   │   │   │   │   │   ├── knowledge-graph.tsx
│   │   │   │   │   │   ├── laws.tsx
│   │   │   │   │   │   ├── manual.tsx
│   │   │   │   │   │   ├── naive.tsx
│   │   │   │   │   │   ├── one.tsx
│   │   │   │   │   │   ├── paper.tsx
│   │   │   │   │   │   ├── picture.tsx
│   │   │   │   │   │   ├── presentation.tsx
│   │   │   │   │   │   ├── qa.tsx
│   │   │   │   │   │   ├── resume.tsx
│   │   │   │   │   │   ├── table.tsx
│   │   │   │   │   │   └── tag.tsx
│   │   │   │   │   ├── tag-table
│   │   │   │   │   │   ├── rename-dialog
│   │   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   │   └── rename-form.tsx
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── category-panel.tsx
│   │   │   │   │   ├── chunk-method-form.tsx
│   │   │   │   │   ├── chunk-method-learn-more.tsx
│   │   │   │   │   ├── configuration-form-container.tsx
│   │   │   │   │   ├── form-schema.ts
│   │   │   │   │   ├── general-form.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── permission-form-field.tsx
│   │   │   │   │   ├── saving-button.tsx
│   │   │   │   │   ├── tag-tabs.tsx
│   │   │   │   │   ├── tag-word-cloud.tsx
│   │   │   │   │   └── utils.ts
│   │   │   │   ├── knowledge-graph
│   │   │   │   │   ├── constant.ts
│   │   │   │   │   ├── force-graph.tsx
│   │   │   │   │   ├── index.module.less
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── use-delete-graph.ts
│   │   │   │   │   └── util.ts
│   │   │   │   ├── sidebar
│   │   │   │   │   ├── hooks.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── testing
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── testing-form.tsx
│   │   │   │   │   └── testing-result.tsx
│   │   │   │   ├── dataset-title.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── process-log-modal.tsx
│   │   │   ├── datasets
│   │   │   │   ├── dataset-card.tsx
│   │   │   │   ├── dataset-creating-dialog.tsx
│   │   │   │   ├── dataset-dropdown.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── use-display-owner.ts
│   │   │   │   ├── use-rename-dataset.ts
│   │   │   │   └── use-select-owners.ts
│   │   │   ├── document-viewer
│   │   │   │   ├── file-error
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── index.less
│   │   │   │   └── index.tsx
│   │   │   ├── files
│   │   │   │   ├── create-folder-dialog
│   │   │   │   │   ├── create-folder-form.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── action-cell.tsx
│   │   │   │   ├── file-breadcrumb.tsx
│   │   │   │   ├── files-table.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── knowledge-cell.tsx
│   │   │   │   ├── link-to-dataset-dialog.tsx
│   │   │   │   ├── move-dialog.tsx
│   │   │   │   ├── use-bulk-operate-file.tsx
│   │   │   │   ├── use-create-folder.ts
│   │   │   │   ├── use-delete-file.ts
│   │   │   │   ├── use-move-file.ts
│   │   │   │   ├── use-navigate-to-folder.ts
│   │   │   │   ├── use-upload-file.ts
│   │   │   │   └── util.ts
│   │   │   ├── home
│   │   │   │   ├── agent-list.tsx
│   │   │   │   ├── application-card.tsx
│   │   │   │   ├── applications.tsx
│   │   │   │   ├── banner.tsx
│   │   │   │   ├── chat-list.tsx
│   │   │   │   ├── datasets.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── memory-list.tsx
│   │   │   │   └── search-list.tsx
│   │   │   ├── login-next
│   │   │   │   ├── bg.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── index.less
│   │   │   │   └── index.tsx
│   │   │   ├── memories
│   │   │   │   ├── constants
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── add-or-edit-modal.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── interface.ts
│   │   │   │   ├── memory-card.tsx
│   │   │   │   └── memory-dropdown.tsx
│   │   │   ├── memory
│   │   │   │   ├── hooks
│   │   │   │   │   └── use-memory-setting.ts
│   │   │   │   ├── memory-message
│   │   │   │   │   ├── hook.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── interface.ts
│   │   │   │   │   └── message-table.tsx
│   │   │   │   ├── memory-setting
│   │   │   │   │   ├── advanced-settings-form.tsx
│   │   │   │   │   ├── basic-form.tsx
│   │   │   │   │   ├── hook.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── memory-model-form.tsx
│   │   │   │   ├── sidebar
│   │   │   │   │   ├── hooks.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── constant.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── next-chats
│   │   │   │   ├── chat
│   │   │   │   │   ├── app-settings
│   │   │   │   │   │   ├── chat-basic-settings.tsx
│   │   │   │   │   │   ├── chat-model-settings.tsx
│   │   │   │   │   │   ├── chat-prompt-engine.tsx
│   │   │   │   │   │   ├── chat-settings.tsx
│   │   │   │   │   │   ├── dynamic-variable.tsx
│   │   │   │   │   │   ├── saving-button.tsx
│   │   │   │   │   │   └── use-chat-setting-schema.tsx
│   │   │   │   │   ├── chat-box
│   │   │   │   │   │   ├── next-multiple-chat-box.tsx
│   │   │   │   │   │   ├── single-chat-box.tsx
│   │   │   │   │   │   └── use-set-default-model.ts
│   │   │   │   │   ├── conversation-dropdown.tsx
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── interface.ts
│   │   │   │   │   ├── llm-select-form.tsx
│   │   │   │   │   ├── sessions.tsx
│   │   │   │   │   ├── use-add-box.ts
│   │   │   │   │   ├── use-show-internet.ts
│   │   │   │   │   └── use-switch-debug-mode.ts
│   │   │   │   ├── hooks
│   │   │   │   │   ├── use-build-form-refs.ts
│   │   │   │   │   ├── use-button-disabled.tsx
│   │   │   │   │   ├── use-chat-url.ts
│   │   │   │   │   ├── use-click-card.ts
│   │   │   │   │   ├── use-create-conversation.ts
│   │   │   │   │   ├── use-rename-chat.ts
│   │   │   │   │   ├── use-select-conversation-list.ts
│   │   │   │   │   ├── use-send-chat-message.ts
│   │   │   │   │   ├── use-send-shared-message.ts
│   │   │   │   │   ├── use-send-single-message.ts
│   │   │   │   │   ├── use-set-conversation.ts
│   │   │   │   │   └── use-upload-file.ts
│   │   │   │   ├── share
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── widget
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── chat-card.tsx
│   │   │   │   ├── chat-dropdown.tsx
│   │   │   │   ├── constants.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── utils.ts
│   │   │   ├── next-search
│   │   │   │   ├── document-preview-modal
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── markdown-content
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── retrieval-documents
│   │   │   │   │   ├── index.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── share
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── embed-app-modal.tsx
│   │   │   │   ├── expandable-content.tsx
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.less
│   │   │   │   ├── index.tsx
│   │   │   │   ├── mindmap-sheet.tsx
│   │   │   │   ├── ragflow-logo.tsx
│   │   │   │   ├── search-home.tsx
│   │   │   │   ├── search-setting.tsx
│   │   │   │   ├── search-view.tsx
│   │   │   │   └── searching.tsx
│   │   │   ├── next-searches
│   │   │   │   ├── hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── search-card.tsx
│   │   │   │   └── search-dropdown.tsx
│   │   │   ├── user-setting
│   │   │   │   ├── components
│   │   │   │   │   └── user-setting-header
│   │   │   │   │       └── index.tsx
│   │   │   │   ├── data-source
│   │   │   │   │   ├── component
│   │   │   │   │   │   ├── added-source-card.tsx
│   │   │   │   │   │   ├── box-token-field.tsx
│   │   │   │   │   │   ├── delete-source-modal.tsx
│   │   │   │   │   │   ├── gmail-token-field.tsx
│   │   │   │   │   │   └── google-drive-token-field.tsx
│   │   │   │   │   ├── constant
│   │   │   │   │   │   ├── bitbucket-constant.tsx
│   │   │   │   │   │   ├── confluence-constant.tsx
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── jira-constant.tsx
│   │   │   │   │   │   ├── s3-constant.tsx
│   │   │   │   │   │   └── seafile-constant.tsx
│   │   │   │   │   ├── data-source-detail-page
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   └── log-table.tsx
│   │   │   │   │   ├── add-datasource-modal.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── interface.ts
│   │   │   │   ├── mcp
│   │   │   │   │   ├── import-mcp-dialog
│   │   │   │   │   │   ├── import-mcp-form.tsx
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── edit-mcp-dialog.tsx
│   │   │   │   │   ├── edit-mcp-form.tsx
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── mcp-card.tsx
│   │   │   │   │   ├── mcp-operation.tsx
│   │   │   │   │   ├── tool-card.tsx
│   │   │   │   │   ├── use-bulk-operate-mcp.tsx
│   │   │   │   │   ├── use-edit-mcp.ts
│   │   │   │   │   ├── use-export-mcp.ts
│   │   │   │   │   └── use-import-mcp.ts
│   │   │   │   ├── profile
│   │   │   │   │   ├── hooks
│   │   │   │   │   │   └── use-profile.ts
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── setting-api
│   │   │   │   │   ├── index.module.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── setting-model
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── llm-header.tsx
│   │   │   │   │   │   ├── modal-card.tsx
│   │   │   │   │   │   ├── system-setting.tsx
│   │   │   │   │   │   ├── un-add-model.tsx
│   │   │   │   │   │   └── used-model.tsx
│   │   │   │   │   ├── langfuse
│   │   │   │   │   │   ├── index.tsx
│   │   │   │   │   │   ├── langfuse-configuration-dialog.tsx
│   │   │   │   │   │   ├── langfuse-configuration-form.tsx
│   │   │   │   │   │   └── use-save-langfuse-configuration.tsx
│   │   │   │   │   ├── modal
│   │   │   │   │   │   ├── api-key-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── azure-openai-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── bedrock-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── fish-audio-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── google-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── mineru-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── next-tencent-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── ollama-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── opendataloader-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── paddleocr-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── spark-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── verify-button
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   ├── volcengine-modal
│   │   │   │   │   │   │   └── index.tsx
│   │   │   │   │   │   └── yiyan-modal
│   │   │   │   │   │       └── index.tsx
│   │   │   │   │   ├── constant.ts
│   │   │   │   │   ├── hooks.tsx
│   │   │   │   │   ├── index.less
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── setting-team
│   │   │   │   │   ├── add-user-modal.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── tenant-table.tsx
│   │   │   │   │   └── user-table.tsx
│   │   │   │   ├── sidebar
│   │   │   │   │   ├── hooks.tsx
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── constants.tsx
│   │   │   │   ├── index.module.less
│   │   │   │   ├── index.tsx
│   │   │   │   ├── interface.ts
│   │   │   │   └── utils.ts
│   │   │   └── 404.tsx
│   │   ├── services
│   │   │   ├── admin-service.ts
│   │   │   ├── admin.service.d.ts
│   │   │   ├── agent-service.ts
│   │   │   ├── data-source-service.ts
│   │   │   ├── dataflow-service.ts
│   │   │   ├── file-manager-service.ts
│   │   │   ├── knowledge-service.ts
│   │   │   ├── mcp-server-service.ts
│   │   │   ├── memory-service.ts
│   │   │   ├── next-chat-service.ts
│   │   │   ├── plugin-service.ts
│   │   │   ├── search-service.ts
│   │   │   └── user-service.ts
│   │   ├── stories
│   │   │   ├── assets
│   │   │   │   ├── accessibility.png
│   │   │   │   ├── accessibility.svg
│   │   │   │   ├── addon-library.png
│   │   │   │   ├── assets.png
│   │   │   │   ├── avif-test-image.avif
│   │   │   │   ├── context.png
│   │   │   │   ├── discord.svg
│   │   │   │   ├── docs.png
│   │   │   │   ├── figma-plugin.png
│   │   │   │   ├── github.svg
│   │   │   │   ├── share.png
│   │   │   │   ├── styling.png
│   │   │   │   ├── testing.png
│   │   │   │   ├── theming.png
│   │   │   │   ├── tutorials.svg
│   │   │   │   └── youtube.svg
│   │   │   ├── avatar-upload.stories.ts
│   │   │   ├── button-loading.stories.ts
│   │   │   ├── calendar.stories.tsx
│   │   │   ├── collapse.stories.tsx
│   │   │   ├── confirm-delete-dialog.stories.tsx
│   │   │   ├── modal.stories.tsx
│   │   │   ├── node-collapsible.stories.tsx
│   │   │   ├── number-input.stories.ts
│   │   │   ├── ragflow-avatar.stories.ts
│   │   │   ├── ragflow-form.stories.tsx
│   │   │   ├── ragflow-pagination.stories.ts
│   │   │   ├── rename-dialog.stories.tsx
│   │   │   ├── skeleton-card.stories.ts
│   │   │   ├── slider-input-form-field.stories.tsx
│   │   │   └── spin.stories.ts
│   │   ├── theme
│   │   │   ├── theme.ts
│   │   │   └── vars.less
│   │   ├── utils
│   │   │   ├── __tests__
│   │   │   │   └── chat.test.ts
│   │   │   ├── api.ts
│   │   │   ├── authorization-util.ts
│   │   │   ├── canvas-util.tsx
│   │   │   ├── chat.ts
│   │   │   ├── citation-utils.ts
│   │   │   ├── common-util.ts
│   │   │   ├── component-util.ts
│   │   │   ├── css-support.ts
│   │   │   ├── dataset-util.ts
│   │   │   ├── date.ts
│   │   │   ├── document-util.ts
│   │   │   ├── dom-util.ts
│   │   │   ├── file-util.ts
│   │   │   ├── form.ts
│   │   │   ├── index.ts
│   │   │   ├── list-filter-util.ts
│   │   │   ├── llm-cache.ts
│   │   │   ├── llm-util.ts
│   │   │   ├── next-request.ts
│   │   │   ├── notification.ts
│   │   │   ├── register-server.ts
│   │   │   ├── request.ts
│   │   │   ├── simple-history-util.ts
│   │   │   ├── store-util.ts
│   │   │   └── text-direction.ts
│   │   ├── wrappers
│   │   │   └── auth.tsx
│   │   ├── app.tsx
│   │   ├── conf.json
│   │   ├── custom.d.ts
│   │   ├── global.less
│   │   ├── inter.less
│   │   ├── main.tsx
│   │   ├── routes.tsx
│   │   └── typings.d.ts
│   ├── .env
│   ├── .env.development
│   ├── .env.production
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── .npmrc
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── CLAUDE.md
│   ├── externals.d.ts
│   ├── index.html
│   ├── jest-setup.ts
│   ├── jest.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── README.md
│   ├── skills-lock.json
│   ├── tailwind.config.js
│   ├── tailwind.css
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .gitattributes
├── .gitignore
├── .pre-commit-config.yaml
├── .trivyignore
├── AGENTS.md
├── build.sh
├── check_comment_ascii.py
├── CLAUDE.md
├── codecov.yml
├── Dockerfile
├── Dockerfile_tei
├── Dockerfile.deps
├── Dockerfile.scratch.oc9
├── download_deps.py
├── go.mod
├── go.sum
├── LICENSE
├── pyproject.toml
├── README_ar.md
├── README_fr.md
├── README_id.md
├── README_ja.md
├── README_ko.md
├── README_pt_br.md
├── README_tr.md
├── README_tzh.md
├── README_zh.md
├── README.md
├── run_go_tests.sh
├── run_tests.py
├── SECURITY.md
├── show_env.sh
├── test.py
└── uv.lock
```

## Code Digest

### `.agents/skills/go-naming/SKILL.md`

```md
---
name: go-naming
description: Go naming conventions and best practices. Use this skill when working with Go code and need to name packages, files, directories, structs, interfaces, functions, variables, or constants. Provides comprehensive naming guidelines following Go community standards.
---

Strictly follow the naming conventions in [rules/named.md](rules/named.md)

```

### `.gitattributes`

```gitattributes
*.sh text eol=lf
docker/entrypoint.sh text eol=lf executable

```

### `.github/copilot-instructions.md`

```md
# Project instructions for Copilot

## How to run (minimum)
- Install:
  - python -m venv .venv && source .venv/bin/activate
  - pip install -r requirements.txt
- Run:
  - (fill) e.g. uvicorn app.main:app --reload
- Verify:
  - (fill) curl http://127.0.0.1:8000/health

## Project layout (what matters)
- app/: API entrypoints + routers
- services/: business logic
- configs/: config loading (.env)
- docs/: documents
- tests/: pytest

## Conventions
- Prefer small, incremental changes.
- Add logging for new flows.
- Add/adjust tests for behavior changes.

```

### `.github/ISSUE_TEMPLATE/subtask.yml`

```yml
name: Subtask
description: "Propose a subtask for RAGFlow"
title: "[Subtask]: "
labels: [subtask]

body:
  - type: textarea
    attributes:
      label: Parent Issue
      description: Write the ID of the parent issue
      placeholder: "Parent issue: #"
    validations:
      required: true

  - type: textarea
    attributes:
      label: Detail of Subtask
      description: |
        Describe the functions that this subtask should implement
    validations:
      required: true

  - type: textarea
    attributes:
      label: Describe implementation you've considered
      description: A clear and concise description of implementation you've considered or investigated.
    validations:
      required: false


```

### `.github/pull_request_template.md`

```md
### What problem does this PR solve?

_Briefly describe what this PR aims to solve. Include background context that will help reviewers understand the purpose of the PR._

### Type of change

- [ ] Bug Fix (non-breaking change which fixes an issue)
- [ ] New Feature (non-breaking change which adds functionality)
- [ ] Documentation Update
- [ ] Refactoring
- [ ] Performance Improvement
- [ ] Other (please describe):

```

### `.pre-commit-config.yaml`

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: check-yaml
      - id: check-json
      - id: end-of-file-fixer
      - id: trailing-whitespace
      - id: check-case-conflict
      - id: check-merge-conflict
      - id: mixed-line-ending
      - id: check-symlinks

  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.11.6
    hooks:
      - id: ruff
        args: [ --fix ]
      - id: ruff-format

```

### `.trivyignore`

```trivyignore
**/*.md
**/*.min.js
**/*.min.css
**/*.svg
**/*.png
**/*.jpg
**/*.jpeg
**/*.gif
**/*.woff
**/*.woff2
**/*.map
**/*.webp
**/*.ico
**/*.ttf
**/*.eot
```

### `admin/client/pyproject.toml`

```toml
[project]
name = "ragflow-cli"
version = "0.25.0"
description = "Admin Service's client of [RAGFlow](https://github.com/infiniflow/ragflow). The Admin Service provides user management and system monitoring. "
authors = [{ name = "Lynn", email = "lynn_inf@hotmail.com" }]
license = { text = "Apache License, Version 2.0" }
readme = "README.md"
requires-python = ">=3.12,<3.15"
dependencies = [
    "requests>=2.30.0,<3.0.0",
    "beartype>=0.20.0,<1.0.0",
    "pycryptodomex>=3.10.0",
    "lark>=1.1.0",
    "requests-toolbelt>=1.0.0",
]

[dependency-groups]
test = [
    "pytest>=8.3.5",
    "requests>=2.32.3",
]

[tool.setuptools]
py-modules = ["ragflow_cli", "parser", "http_client", "ragflow_client", "user"]

[project.scripts]
ragflow-cli = "ragflow_cli:main"

```

### `admin/server/exceptions.py`

```py
class AdminException(Exception):
    def __init__(self, message, code=400):
        super().__init__(message)
        self.code = code
        self.message = message

class UserNotFoundError(AdminException):
    def __init__(self, username):
        super().__init__(f"User '{username}' not found", 404)

class UserAlreadyExistsError(AdminException):
    def __init__(self, username):
        super().__init__(f"User '{username}' already exists", 409)

class CannotDeleteAdminError(AdminException):
    def __init__(self):
        super().__init__("Cannot delete admin account", 403)
```

### `admin/server/models.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/plugin/__init__.py`

```py
from .plugin_manager import PluginManager

GlobalPluginManager = PluginManager()

```

### `agent/plugin/common.py`

```py
PLUGIN_TYPE_LLM_TOOLS = "llm_tools"
```

### `agent/sandbox/.env.example`

```example
# Copy this file to `.env` and modify as needed

SANDBOX_EXECUTOR_MANAGER_POOL_SIZE=5
SANDBOX_BASE_PYTHON_IMAGE=sandbox-base-python:latest
SANDBOX_BASE_NODEJS_IMAGE=sandbox-base-nodejs:latest
SANDBOX_EXECUTOR_MANAGER_PORT=9385
SANDBOX_ENABLE_SECCOMP=false
SANDBOX_MAX_MEMORY=256m # b, k, m, g
SANDBOX_TIMEOUT=10s # s, m, 1m30s

```

### `agent/sandbox/executor_manager/api/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/sandbox/executor_manager/api/routes.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
from fastapi import APIRouter

from api.handlers import healthz_handler, run_code_handler

router = APIRouter()

router.get("/")(healthz_handler)
router.get("/healthz")(healthz_handler)
router.post("/run")(run_code_handler)


```

### `agent/sandbox/executor_manager/core/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/sandbox/executor_manager/core/logger.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("sandbox")

```

### `agent/sandbox/executor_manager/models/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/sandbox/executor_manager/requirements.txt`

```txt
fastapi
uvicorn
slowapi
```

### `agent/sandbox/executor_manager/services/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/sandbox/executor_manager/utils/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `agent/sandbox/pyproject.toml`

```toml
[project]
name = "gvisor-sandbox"
version = "0.1.0"
description = "Add your description here"
readme = "README.md"
requires-python = ">=3.12,<3.15"
dependencies = [
    "fastapi>=0.115.12",
    "httpx>=0.28.1",
    "pydantic>=2.11.4",
    "requests>=2.32.4",
    "slowapi>=0.1.9",
    "uvicorn>=0.34.2",
]

[[tool.uv.index]]
url = "https://pypi.tuna.tsinghua.edu.cn/simple"

[dependency-groups]
dev = [
    "basedpyright>=1.29.1",
]

[tool.ruff]
line-length = 200

[tool.ruff.lint]
extend-select = ["C4", "SIM", "TCH"]

```

### `agent/sandbox/sandbox_base_image/nodejs/Dockerfile`

```
FROM node:24.13-bookworm-slim

RUN npm config set registry https://registry.npmmirror.com

# RUN grep -rl 'deb.debian.org' /etc/apt/ | xargs sed -i 's|http[s]*://deb.debian.org|https://mirrors.ustc.edu.cn|g' && \
#     apt-get update && \
#     apt-get install -y curl gcc make


WORKDIR /app

COPY package.json package-lock.json .

RUN npm install

CMD ["sleep", "infinity"]


```

### `agent/sandbox/sandbox_base_image/nodejs/package.json`

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "axios": "^1.9.0"
  }
}

```

### `agent/sandbox/sandbox_base_image/python/Dockerfile`

```
FROM python:3.11-slim-bookworm

COPY --from=ghcr.io/astral-sh/uv:0.7.5 /uv /uvx /bin/
ENV UV_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
ENV MPLBACKEND=Agg
ENV MPLCONFIGDIR=/tmp/matplotlib
ENV MATPLOTLIBRC=/usr/local/etc/matplotlibrc

COPY requirements.txt .
COPY matplotlibrc /usr/local/etc/matplotlibrc

RUN grep -rl 'deb.debian.org' /etc/apt/ | xargs sed -i 's|http[s]*://deb.debian.org|https://mirrors.tuna.tsinghua.edu.cn|g' && \
    apt-get update && \
    apt-get install -y curl gcc && \
    mkdir -p /tmp/matplotlib && \
    uv pip install --system -r requirements.txt

WORKDIR /workspace

CMD ["sleep", "infinity"]

```

### `agent/sandbox/sandbox_base_image/python/matplotlibrc`

```
## RAGFlow sandbox – matplotlib defaults
## Only overrides are listed; all other settings use matplotlib built-in defaults.

# Prefer CJK-capable fonts so Chinese / Japanese / Korean text renders correctly.
# matplotlib silently skips fonts that are not installed, falling back to the
# next entry in the list, so this is safe even without any CJK font package.
font.family: sans-serif
font.sans-serif: Noto Sans CJK SC, Noto Sans CJK TC, Noto Sans CJK JP, Noto Sans CJK KR, Source Han Sans SC, Source Han Sans CN, WenQuanYi Zen Hei, Microsoft YaHei, SimHei, PingFang SC, Heiti SC, STHeiti, Arial Unicode MS, DejaVu Sans, Bitstream Vera Sans, Computer Modern Sans Serif, Lucida Grande, Verdana, Geneva, Lucid, Arial, Helvetica, Avant Garde, sans-serif

# Use ASCII hyphen-minus for the minus sign so it renders correctly with any font.
axes.unicode_minus: False

```

### `agent/sandbox/sandbox_base_image/python/requirements.txt`

```txt
numpy
pandas
matplotlib
requests

```

### `agent/sandbox/scripts/restart.sh`

```sh
#!/bin/bash
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

set -e

bash "$(dirname "$0")/stop.sh"
bash "$(dirname "$0")/start.sh"

```

### `agent/sandbox/scripts/wait-for-it-http.sh`

```sh
#!/bin/bash
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

url=$1
timeout=${2:-15}
quiet=${3:-0}

for i in $(seq "$timeout"); do
  if curl -fs "$url" >/dev/null; then
    [[ "$quiet" -ne 1 ]] && echo "✔ $url is healthy after $i seconds"
    exit 0
  fi
  sleep 1
done

echo "✖ Timeout after $timeout seconds waiting for $url"
exit 1

```

### `agent/sandbox/tests/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

"""
Sandbox provider tests package.
"""

```

### `agent/sandbox/tests/pytest.ini`

```ini
[pytest]
# Pytest configuration for sandbox tests

# Test discovery patterns
python_files = test_*.py
python_classes = Test*
python_functions = test_*

# Markers for different test types
markers =
    integration: Tests that require external services (Aliyun API, etc.)
    unit: Fast tests that don't require external services
    slow: Tests that take a long time to run

# Test paths
testpaths = .

# Minimum version
minversion = 7.0

# Output options
addopts =
    -v
    --strict-markers
    --tb=short
    --disable-warnings

# Log options
log_cli = false
log_cli_level = INFO

# Coverage options (if using pytest-cov)
# addopts = --cov=agent.sandbox --cov-report=html --cov-report=term

```

### `agent/settings.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

FLOAT_ZERO = 1e-8
PARAM_MAXDEPTH = 5

```

### `api/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

# from beartype.claw import beartype_this_package
# beartype_this_package()

```

### `api/apps/services/__init__.py`

```py

```

### `api/common/base64.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

import base64

def encode_to_base64(input_string):
    base64_encoded = base64.b64encode(input_string.encode('utf-8'))
    return base64_encoded.decode('utf-8')
```

### `api/common/README.md`

```md
The python files in this directory are shared between service. They contain common utilities, models, and functions that can be used across various
services to ensure consistency and reduce code duplication.
```

### `api/constants.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

NAME_LENGTH_LIMIT = 2**10

IMG_BASE64_PREFIX = "data:image/png;base64,"

API_VERSION = "v1"
RAG_FLOW_SERVICE_NAME = "ragflow"
REQUEST_WAIT_SEC = 2
REQUEST_MAX_WAIT_SEC = 300

DATASET_NAME_LIMIT = 128
FILE_NAME_LEN_LIMIT = 255
MEMORY_NAME_LIMIT = 128
MEMORY_SIZE_LIMIT = 10*1024*1024 # Byte

```

### `api/db/joint_services/__init__.py`

```py

```

### `api/settings.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `api/utils/base64_image.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `api/utils/common.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
import xxhash


def string_to_bytes(string):
    return string if isinstance(
        string, bytes) else string.encode(encoding="utf-8")


def bytes_to_string(byte):
    return byte.decode(encoding="utf-8")

# 128 bit = 32 character
def hash128(data: str) -> str:
    return xxhash.xxh128(data).hexdigest()

```

### `api/utils/log_utils.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `bin/.gitkeep`

```gitkeep

```

### `codecov.yml`

```yml
coverage:
  status:
    project: off
    patch: off
```

### `common/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
```

### `common/data_source/bitbucket/__init__.py`

```py

```

### `common/data_source/cross_connector_utils/__init__.py`

```py

```

### `common/data_source/exceptions.py`

```py
"""Exception class definitions"""


class ConnectorMissingCredentialError(Exception):
    """Missing credentials exception"""
    def __init__(self, connector_name: str):
        super().__init__(f"Missing credentials for {connector_name}")


class ConnectorValidationError(Exception):
    """Connector validation exception"""
    pass


class CredentialExpiredError(Exception):
    """Credential expired exception"""
    pass


class InsufficientPermissionsError(Exception):
    """Insufficient permissions exception"""
    pass


class UnexpectedValidationError(Exception):
    """Unexpected validation exception"""
    pass

class RateLimitTriedTooManyTimesError(Exception):
    pass
```

### `common/data_source/github/__init__.py`

```py

```

### `common/data_source/github/models.py`

```py
from typing import Any

from github import Repository
from github.Requester import Requester
from pydantic import BaseModel


class SerializedRepository(BaseModel):
    # id is part of the raw_data as well, just pulled out for convenience
    id: int
    headers: dict[str, str | int]
    raw_data: dict[str, Any]

    def to_Repository(self, requester: Requester) -> Repository.Repository:
        return Repository.Repository(
            requester, self.headers, self.raw_data, completed=True
        )
```

### `common/data_source/github/rate_limit_utils.py`

```py
import time
import logging
from datetime import datetime
from datetime import timedelta
from datetime import timezone

from github import Github


def sleep_after_rate_limit_exception(github_client: Github) -> None:
    """
    Sleep until the GitHub rate limit resets.

    Args:
        github_client: The GitHub client that hit the rate limit
    """
    sleep_time = github_client.get_rate_limit().core.reset.replace(
        tzinfo=timezone.utc
    ) - datetime.now(tz=timezone.utc)
    sleep_time += timedelta(minutes=1)  # add an extra minute just to be safe
    logging.info(
        "Ran into Github rate-limit. Sleeping %s seconds.", sleep_time.seconds
    )
    time.sleep(sleep_time.total_seconds())
```

### `common/data_source/google_drive/__init__.py`

```py

```

### `common/data_source/google_drive/constant.py`

```py
UNSUPPORTED_FILE_TYPE_CONTENT = ""  # keep empty for now
DRIVE_FOLDER_TYPE = "application/vnd.google-apps.folder"
DRIVE_SHORTCUT_TYPE = "application/vnd.google-apps.shortcut"
DRIVE_FILE_TYPE = "application/vnd.google-apps.file"

```

### `common/data_source/google_util/__init__.py`

```py

```

### `common/data_source/jira/__init__.py`

```py

```

### `common/decorator.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
import os

def singleton(cls, *args, **kw):
    instances = {}

    def _singleton():
        key = str(cls) + str(os.getpid())
        if key not in instances:
            instances[key] = cls(*args, **kw)
        return instances[key]

    return _singleton
```

### `common/doc_store/__init__.py`

```py

```

### `common/exceptions.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

class TaskCanceledException(Exception):
    def __init__(self, msg):
        self.msg = msg


class ArgumentException(Exception):
    def __init__(self, msg):
        self.msg = msg


class NotFoundException(Exception):
    def __init__(self, msg):
        self.msg = msg

```

### `conf/doc_meta_es_mapping.json`

```json
{
  "settings": {
    "index": {
      "number_of_shards": 2,
      "number_of_replicas": 0,
      "refresh_interval": "1000ms"
    }
  },
  "mappings": {
    "_source": {
      "enabled": true
    },
    "dynamic": "runtime",
    "properties": {
      "id": {
        "type": "keyword",
        "store": true
      },
      "kb_id": {
        "type": "keyword",
        "store": true
      },
      "meta_fields": {
        "type": "object",
        "dynamic": true
      }
    }
  }
}

```

### `conf/doc_meta_infinity_mapping.json`

```json
{
  "id": {"type": "varchar", "default": ""},
  "kb_id": {"type": "varchar", "default": ""},
  "meta_fields": {"type": "json", "default": "{}"}
}
```

### `conf/models/aliyun.json`

```json
{
  "name": "Aliyun",
  "url": {
    "default": "https://dashscope.aliyuncs.com",
    "singapore": "https://dashscope-intl.aliyuncs.com",
    "us": "https://dashscope-us.aliyuncs.com"
  },
  "url_suffix": {
    "chat": "compatible-mode/v1/chat/completions",
    "embedding": "compatible-mode/v1/embeddings",
    "models": "api/v1/deployments/models"
  },
  "models": [
    {
      "name": "qwen-flash",
      "max_tokens": 995904,
      "model_types": [
        "chat"
      ]
    }
  ],
  "features": {
    "thinking": {
      "default_value": true,
      "supported_models": [
        "qwen-flash"
      ]
    }
  }
}
```

### `conf/models/deepseek.json`

```json
{
  "name": "DeepSeek",
  "url": {
    "default": "https://api.deepseek.com"
  },
  "url_suffix": {
    "chat": "chat/completions",
    "models": "models"
  },
  "class": "deepseek",
  "models": [
    {
      "name": "deepseek-v4-flash",
      "max_tokens": 1048576,
      "model_types": [
        "chat"
      ],
      "thinking": {
        "default_value": true,
        "clear_thinking": true
      }
    },
    {
      "name": "deepseek-v4-pro",
      "max_tokens": 1048576,
      "model_types": [
        "chat"
      ],
      "thinking": {
        "default_value": true,
        "clear_thinking": true
      }
    }
  ]
}
```

### `conf/models/gitee.json`

```json
{
  "name": "Gitee",
  "url": {
    "default": "https://api.moark.com/v1"
  },
  "url_suffix": {
    "chat": "chat/completions",
    "models": "models",
    "status": "",
    "balance": "tokens/packages/balance",
    "embedding": "embedding",
    "rerank": "rerank"
  },
  "models": [
    {
      "name": "qwen3-8b",
      "max_tokens": 32768,
      "model_types": [
        "chat"
      ]
    },
    {
      "name": "qwen3-0.6b",
      "max_tokens": 32768,
      "model_types": [
        "chat"
      ]
    },
    {
      "name": "glm-4.7-flash",
      "max_tokens": 204800,
      "model_types": [
        "chat"
      ]
    }
  ]
}
```

### `conf/models/google.json`

```json
{
  "name": "Google",
  "url": {
    "default": "https://generativelanguage.googleapis.com"
  },
  "url_suffix": {
    "models": "v1beta/models"
  },
  "class": "gemini",
  "models": [
    {
      "name": "gemini-2.5-flash",
      "max_tokens": 1048576,
      "model_types": [
        "chat"
      ],
      "thinking": {
        "default_value": true,
        "clear_thinking": true
      }
    }
  ],
  "features": {
    "thinking": {
      "default_value": true,
      "supported_models": [
        "gemini-2.5-flash"
      ]
    },
    "reasoning_effort": {
      "default_value": "high",
      "supported_modes": [
        "gemini-2.5-flash"
      ]
    }
  }
}
```

### `conf/models/siliconflow.json`

```json
{
  "name": "SiliconFlow",
  "url": {
    "default": "https://api.siliconflow.cn/v1"
  },
  "url_suffix": {
    "chat": "chat/completions",
    "models": "models",
    "embedding": "embeddings",
    "rerank": "rerank"
  },
  "models": [
    {
      "name": "qwen/qwen3-8b",
      "max_tokens": 32768,
      "model_types": [
        "chat"
      ]
    },
    {
      "name": "qwen/qwen3.5-4b",
      "max_tokens": 262144,
      "model_types": [
        "chat"
      ]
    },
    {
      "name": "tencent/hunyuan-mt-7b",
      "max_tokens": 32768,
      "model_types": [
        "chat"
      ]
    },
    {
      "name": "BAAI/bge-reranker-v2-m3",
      "max_tokens": 8192,
      "model_types": [
        "rerank"
      ]
    },
    {
      "name": "Qwen/Qwen3-Embedding-0.6B",
      "max_tokens": 8192,
      "model_types": [
        "embedding"
      ]
    }
  ]
}

```

### `conf/models/vllm.json`

```json
{
  "name": "vllm",
  "url_suffix": {
    "chat": "chat/completions",
    "models": "models"
  },
  "class": "local"
}
```

### `conf/models/volcengine.json`

```json
{
  "name": "VolcEngine",
  "url": {
    "default": "https://ark.cn-beijing.volces.com/api/v3"
  },
  "url_suffix": {
    "chat": "chat/completions",
    "files": "files"
  },
  "class": "volcengine",
  "models": [
    {
      "name": "doubao-seed-2-0-pro-260215",
      "max_tokens": 262144,
      "model_types": [
        "chat"
      ],
      "thinking": {
        "default_value": true,
        "clear_thinking": true
      }
    }
  ]
}
```

### `conf/models/xai.json`

```json
{
  "name": "xAI",
  "url": {
    "default": "https://api.x.ai/v1"
  },
  "url_suffix": {
    "chat": "chat/completions"
  },
  "class": "grok",
  "models": [
    {
      "name": "grok-4",
      "max_tokens": 256000,
      "model_types": ["chat"]
    },
    {
      "name": "grok-3",
      "max_tokens": 131072,
      "model_types": ["chat"]
    },
    {
      "name": "grok-3-fast",
      "max_tokens": 131072,
      "model_types": ["chat"]
    },
    {
      "name": "grok-3-mini",
      "max_tokens": 131072,
      "model_types": ["chat"]
    },
    {
      "name": "grok-3-mini-mini-fast",
      "max_tokens": 131072,
      "model_types": ["chat"]
    },
    {
      "name": "grok-2-vision",
      "max_tokens": 32768,
      "model_types": ["vision"]
    }
  ]
}
```

### `conf/public.pem`

```pem
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArq9XTUSeYr2+N1h3Afl/
z8Dse/2yD0ZGrKwx+EEEcdsBLca9Ynmx3nIB5obmLlSfmskLpBo0UACBmB5rEjBp
2Q2f3AG3Hjd4B+gNCG6BDaawuDlgANIhGnaTLrIqWrrcm4EMzJOnAOI1fgzJRsOO
UEfaS318Eq9OVO3apEyCCt0lOQK6PuksduOjVxtltDav+guVAA068NrPYmRNabVK
RNLJpL8w4D44sfth5RvZ3q9t+6RTArpEtc5sh5ChzvqPOzKGMXW83C95TxmXqpbK
6olN4RevSfVjEAgCydH6HN6OhtOQEcnrU97r9H0iZOWwbw3pVrZiUkuRD1R56Wzs
2wIDAQAB
-----END PUBLIC KEY-----

```

### `deepdoc/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

from beartype.claw import beartype_this_package
beartype_this_package()

```

### `deepdoc/parser/resume/entities/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
```

### `docker/init.sql`

```sql
CREATE DATABASE IF NOT EXISTS rag_flow;
USE rag_flow;
```

### `docker/nginx/nginx.conf`

```conf
user  root;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
    client_max_body_size 1024M;

    include /etc/nginx/conf.d/ragflow.conf;
}


```

### `docker/nginx/proxy.conf`

```conf
proxy_set_header Host $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_http_version 1.1;
proxy_set_header Connection "";
proxy_buffering off;
proxy_read_timeout 3600s;
proxy_send_timeout 3600s;
proxy_buffer_size 1024k;
proxy_buffers 16 1024k;
proxy_busy_buffers_size 2048k;
proxy_temp_file_write_size 2048k;
```

### `docker/nginx/ragflow.conf.golang`

```golang
server {
    listen 80;
    server_name _;
    root /ragflow/web/dist;

    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    location ~ ^/api/v1/admin {
        proxy_pass http://127.0.0.1:9383;
        include proxy.conf;
    }

    location ~ ^/(v1|api) {
        proxy_pass http://127.0.0.1:9382;
        include proxy.conf;
    }

    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Cache-Control: max-age Expires
    location ~ ^/static/(css|js|media)/ {
        expires 10y;
        access_log off;
    }
}

```

### `docker/nginx/ragflow.conf.python`

```python
server {
    listen 80;
    server_name _;
    root /ragflow/web/dist;

    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    location ~ ^/api/v1/admin {
        proxy_pass http://localhost:9381;
        include proxy.conf;
    }

    location ~ ^/(v1|api) {
        proxy_pass http://localhost:9380;
        include proxy.conf;
    }


    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Cache-Control: max-age Expires
    location ~ ^/static/(css|js|media)/ {
        expires 10y;
        access_log off;
    }
}

```

### `docker/oceanbase/init.d/vec_memory.sql`

```sql
ALTER SYSTEM SET ob_vector_memory_limit_percentage = 30;
```

### `Dockerfile.deps`

```deps
# This builds an image that contains the resources needed by Dockerfile
#
FROM scratch

# Copy resources downloaded via download_deps.py
COPY chromedriver-linux64-121-0-6167-85 chrome-linux64-121-0-6167-85 cl100k_base.tiktoken libssl1.1_1.1.1f-1ubuntu2_amd64.deb libssl1.1_1.1.1f-1ubuntu2_arm64.deb tika-server-standard-3.3.0.jar tika-server-standard-3.3.0.jar.md5 libssl*.deb uv-x86_64-unknown-linux-gnu.tar.gz uv-aarch64-unknown-linux-gnu.tar.gz /

COPY nltk_data /nltk_data

COPY huggingface.co /huggingface.co

```

### `docs/_category_.json`

```json
{
  "label": "Get Started",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "RAGFlow Quick Start"
  }
}

```

### `docs/administrator/_category_.json`

```json
{
  "label": "Administrator guides",
  "position": 4,
  "link": {
    "type": "generated-index",
    "description": "Guides for system administrtors"
  },
  "customProps": {
    "sidebarIcon": "LucideComputer"
  }
}

```

### `docs/administrator/admin/_category_.json`

```json
{
  "label": "Admin service",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "RAGFlow administration service"
  },
  "customProps": {
    "categoryIcon": "LucideUserCog"
  }
}

```

### `docs/administrator/migration/_category_.json`

```json
{
  "label": "Migration",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Guides for data migration, official and third-party."
  },
  "customProps": {
    "sidebarIcon": "LucideComputer"
  }
}

```

### `docs/basics/_category_.json`

```json
{
  "label": "Basics",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Basic concepts."
  }
}

```

### `docs/develop/_category_.json`

```json
{
  "label": "Developer guides",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Guides for hardcore developers"
  },
  "customProps": {
    "sidebarIcon": "LucideWrench"
  }
}

```

### `docs/develop/acquire_ragflow_api_key.md`

```md
---
sidebar_position: 4
slug: /acquire_ragflow_api_key
sidebar_custom_props: {
  categoryIcon: LucideKey
}
---
# Acquire RAGFlow API key

An API key is required for the RAGFlow server to authenticate your HTTP/Python or MCP requests. This document provides instructions on obtaining a RAGFlow API key.

1. Click your avatar in the top right corner of the RAGFlow UI to access the configuration page.
2. Click **API** to switch to the **API** page.
3. Obtain a RAGFlow API key:

![ragflow_api_key](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/ragflow_api_key.jpg)

:::tip NOTE
See the [RAGFlow HTTP API reference](../references/http_api_reference.md) or the [RAGFlow Python API reference](../references/python_api_reference.md) for a complete reference of RAGFlow's HTTP or Python APIs.
:::

```

### `docs/develop/mcp/_category_.json`

```json
{
  "label": "MCP",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Guides and references on accessing RAGFlow's datasets via MCP."
  },
  "customProps": {
    "categoryIcon": "SiModelcontextprotocol"
  }
}

```

### `docs/develop/mcp/mcp_tools.md`

```md
---
sidebar_position: 2
slug: /mcp_tools
sidebar_custom_props: {
  categoryIcon: LucideToolCase
}
---
# RAGFlow MCP tools

The MCP server currently offers a specialized tool to assist users in searching for relevant information powered by RAGFlow DeepDoc technology:

- **retrieve**: Fetches relevant chunks from specified `dataset_ids` and optional `document_ids` using the RAGFlow retrieve interface, based on a given question. Details of all available datasets, namely, `id` and `description`, are provided within the tool description for each individual dataset.

For more information, see our Python implementation of the [MCP server](https://github.com/infiniflow/ragflow/blob/main/mcp/server/server.py).
```

### `docs/develop/switch_doc_engine.md`

```md
---
sidebar_position: 3
slug: /switch_doc_engine
sidebar_custom_props: {
  categoryIcon: LucideShuffle
}
---
# Switch document engine

Switch your doc engine from Elasticsearch to Infinity.

---

RAGFlow uses Elasticsearch by default for storing full text and vectors. To switch to [Infinity](https://github.com/infiniflow/infinity/), follow these steps:

:::caution WARNING
Switching to Infinity on a Linux/arm64 machine is not yet officially supported.
:::

1. Stop all running containers:

   ```bash
   $ docker compose -f docker/docker-compose.yml down -v
   ```

:::caution WARNING
`-v` will delete the docker container volumes, and the existing data will be cleared.
:::

2. Set `DOC_ENGINE` in **docker/.env** to `infinity`.

3. Start the containers:

   ```bash
   $ docker compose -f docker-compose.yml up -d
   ```
```

### `docs/guides/_category_.json`

```json
{
  "label": "User guides",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Guides for RAGFlow users."
  },
  "customProps": {
    "sidebarIcon": "LucideBookMarked"
  }
}

```

### `docs/guides/agent/_category_.json`

```json
{
  "label": "Agents",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "RAGFlow v0.8.0 introduces an agent mechanism, featuring a no-code workflow editor on the front end and a comprehensive graph-based task orchestration framework on the backend."
  },
  "customProps": {
    "categoryIcon": "RagAiAgent"
  }
}

```

### `docs/guides/agent/agent_component_reference/_category_.json`

```json
{
  "label": "Components",
  "position": 20,
  "link": {
    "type": "generated-index",
    "description": "A complete reference for RAGFlow's agent components."
  },
  "customProps": {
    "categoryIcon": "RagAiAgent"
  }
}

```

### `docs/guides/agent/agent_component_reference/indexer.md`

```md
---
sidebar_position: 40
slug: /indexer_component
sidebar_custom_props: {
  categoryIcon: LucideListPlus
}
---
# Indexer component

A component that defines how chunks are indexed.

---

An **Indexer** component indexes chunks and configures their storage formats in the document engine.

## Scenario

An **Indexer** component is the mandatory ending component for all ingestion pipelines.

## Configurations

### Search method

This setting configures how chunks are stored in the document engine: as full-text, embeddings, or both.

### Filename embedding weight

This setting defines the filename's contribution to the final embedding, which is a weighted combination of both the chunk content and the filename. Essentially, a higher value gives the filename more influence in the final *composite* embedding.

- 0.1: Filename contributes 10% (chunk content 90%)
- 0.5 (maximum): Filename contributes 50% (chunk content 90%)
```

### `docs/guides/agent/agent_component_reference/text_processing.mdx`

```mdx
---
sidebar_position: 15
slug: /text_processing
sidebar_custom_props: {
  categoryIcon: LucideType
}
---
# Text processing component

A component that merges or splits texts.

---

A **Text processing** component merges or splits texts.

## Configurations

### Method

- Split: Split the text
- Merge: Merge the text

### Split_ref

Appears only when you select **Split** as method.

The variable to be split. Type `/` to quickly insert variables.

### Script 

Template for the merge. Appears only when you select **Merge** as method. Type `/` to quickly insert variables.

### Delimiters

The delimiter(s) used to split or merge the text.

### Output

The global variable name for the output of the component, which can be referenced by other components in the workflow.


```

### `docs/guides/agent/agent_quickstarts/_category_.json`

```json
{
  "label": "Quickstarts",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Agent-specific quickstart"
  },
  "customProps": {
    "categoryIcon": "LucideRocket"
  }
}

```

### `docs/guides/agent/best_practices/_category_.json`

```json
{
  "label": "Best practices",
  "position": 40,
  "link": {
    "type": "generated-index",
    "description": "Best practices on Agent configuration."
  },
  "customProps": {
    "categoryIcon": "LucideStar"
  }
}

```

### `docs/guides/chat/_category_.json`

```json
{
  "label": "Chat",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "Chat-specific guides."
  },
  "customProps": {
    "categoryIcon": "LucideMessagesSquare"
  }
}

```

### `docs/guides/chat/best_practices/_category_.json`

```json
{
  "label": "Best practices",
  "position": 7,
  "link": {
    "type": "generated-index",
    "description": "Best practices on chat assistant configuration."
  },
  "customProps": {
    "categoryIcon": "LucideStar"
  }
}

```

### `docs/guides/dataset/_category_.json`

```json
{
  "label": "Datasets",
  "position": 0,
  "link": {
    "type": "generated-index",
    "description": "Guides on configuring a dataset."
  },
  "customProps": {
    "categoryIcon": "LucideDatabaseZap"
  }
}

```

### `docs/guides/dataset/add_data_source/_category_.json`

```json
{
  "label": "Add data sources",
  "position": 18,
  "link": {
    "type": "generated-index",
    "description": "Add various data sources"
  },
  "customProps": {
    "categoryIcon": "LucideServer"
  }
}

```

### `docs/guides/dataset/advanced/_category_.json`

```json
{
  "label": "Advanced enrichment",
  "position": 8,
  "link": {
    "type": "generated-index",
    "description": "Advanced enrichment."
  },
  "customProps": {
    "categoryIcon": "LucideFlower"
  }
}

```

### `docs/guides/dataset/best_practices/_category_.json`

```json
{
  "label": "Best practices",
  "position": 19,
  "link": {
    "type": "generated-index",
    "description": "Best practices on configuring a dataset."
  },
  "customProps": {
    "categoryIcon": "LucideStar"
  }
}

```

### `docs/guides/memory/_category_.json`

```json
{
  "label": "Memory",
  "position": 3.5,
  "link": {
    "type": "generated-index",
    "description": "Guides on using Memory."
  },
  "customProps": {
    "categoryIcon": "LucideBox"
  }
}

```

### `docs/guides/models/_category_.json`

```json
{
  "label": "Models",
  "position": 8,
  "link": {
    "type": "generated-index",
    "description": "Guides on model settings."
  },
  "customProps": {
    "categoryIcon": "LucideBox"
  }
}

```

### `docs/guides/team/_category_.json`

```json
{
  "label": "Team",
  "position": 4,
  "link": {
    "type": "generated-index",
    "description": "Team-specific guides."
  },
  "customProps": {
    "categoryIcon": "LucideUsers"
  }
}

```

### `docs/guides/team/share_agents.md`

```md
---
sidebar_position: 6
slug: /share_agent
sidebar_custom_props: {
  categoryIcon: LucideShare2
}
---
# Share Agent

Share an Agent with your team members.

---

When ready, you may share your Agents with your team members so that they can use them. Please note that your Agents are not shared automatically; you must manually enable sharing by selecting the corresponding **Permissions** radio button:

1. Click the intended Agent to open its editing canvas. 
2. Click **Management** > **Settings** to show the **Agent settings** dialogue.
3. Change **Permissions** from **Only me** to **Team**.
4. Click **Save** to apply your changes.

*When completed, your team members will see your shared Agents.*
```

### `docs/guides/team/share_chat_assistant.md`

```md
---
sidebar_position: 5
slug: /share_chat_assistant
sidebar_custom_props: {
  categoryIcon: LucideShare2
}
---
# Share chat assistant

Sharing chat assistant is currently exclusive to RAGFlow Enterprise, but will be made available in due course.
```

### `docs/guides/team/share_knowledge_bases.md`

```md
---
sidebar_position: 4
slug: /share_datasets
sidebar_custom_props: {
  categoryIcon: LucideShare2
}
---
# Share dataset

Share a dataset with team members.

---

When ready, you may share your datasets with your team members so that they can upload and parse files in them. Please note that your datasets are not shared automatically; you must manually enable sharing by selecting the appropriate **Permissions** radio button:

1. Navigate to the dataset's **Configuration** page.
2. Change **Permissions** from **Only me** to **Team**.
3. Click **Save** to apply your changes.

*Once completed, your team members will see your shared datasets.*
```

### `docs/guides/team/share_memory.md`

```md
---
sidebar_position: 9
slug: /share_memory
sidebar_custom_props: {
  categoryIcon: LucideShare2
}
---
# Share memory

Share a memory with your team members.

---

When ready, you may share your memory with your team members so that they can use it. Please note that your memories are not shared automatically; you must manually enable sharing by selecting the corresponding **Permissions** radio button:

1. Navigate to the **Memory** page, find the intended memory, and click to open its editing canvas. 
2. Click **Configurations**.
3. Change **Permissions** from **Only me** to **Team**.
4. Click **Save** to apply your changes.  
   *When completed, your team members will see your shared memories.*
```

### `docs/guides/team/share_model.md`

```md
---
sidebar_position: 7
slug: /share_model
sidebar_custom_props: {
  categoryIcon: LucideShare2
}
---
# Share models

Sharing models is currently exclusive to RAGFlow Enterprise.
```

### `docs/references/_category_.json`

```json
{
  "label": "References",
  "position": 6,
  "link": {
    "type": "generated-index",
    "description": "Miscellaneous References"
  },
  "customProps": {
    "sidebarIcon": "LucideScrollText"
  }
}

```

### `helm/.helmignore`

```helmignore
# Patterns to ignore when building packages.
# This supports shell glob matching, relative path matching, and
# negation (prefixed with !). Only one pattern per line.
.DS_Store
# Common VCS dirs
.git/
.gitignore
.bzr/
.bzrignore
.hg/
.hgignore
.svn/
# Common backup files
*.swp
*.bak
*.tmp
*.orig
*~
# Various IDEs
.project
.idea/
*.tmproj
.vscode/

```

### `helm/templates/elasticsearch-config.yaml`

```yaml
{{- if eq .Values.env.DOC_ENGINE "elasticsearch" -}}
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "ragflow.fullname" . }}-es-config
data:
  node.name: "es01"
  bootstrap.memory_lock: "false"
  discovery.type: "single-node"
  xpack.security.enabled: "true"
  xpack.security.http.ssl.enabled: "false"
  xpack.security.transport.ssl.enabled: "false"
  cluster.routing.allocation.disk.watermark.low: 5gb
  cluster.routing.allocation.disk.watermark.high: 3gb
  cluster.routing.allocation.disk.watermark.flood_stage: 2gb
  TZ: {{ .Values.env.TZ }}
{{- end -}}

```

### `helm/templates/mysql-config.yaml`

```yaml
{{- if .Values.mysql.enabled }}
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: mysql-init-script
data:
  init.sql: |-
    CREATE DATABASE IF NOT EXISTS rag_flow;
    USE rag_flow;
{{- end }}

```

### `helm/templates/opensearch-config.yaml`

```yaml
{{- if eq .Values.env.DOC_ENGINE "opensearch" -}}
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "ragflow.fullname" . }}-opensearch-config
data:
  node.name: opensearch01
  bootstrap.memory_lock: "false"
  discovery.type: single-node
  plugins.security.disabled: "false"
  plugins.security.ssl.http.enabled: "false"
  plugins.security.ssl.transport.enabled: "true"
  cluster.routing.allocation.disk.watermark.low: 5gb
  cluster.routing.allocation.disk.watermark.high: 3gb
  cluster.routing.allocation.disk.watermark.flood_stage: 2gb
  TZ: {{ .Values.env.TZ }}
  http.port: "9201"
{{- end -}}

```

### `helm/templates/tests/test-connection.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "ragflow.fullname" . }}-test-connection"
  labels:
    {{- include "ragflow.labels" . | nindent 4 }}
  annotations:
    "helm.sh/hook": test
spec:
  containers:
    - name: wget
      image: {{ include "ragflow.imageRepo" (dict "root" . "repo" "busybox") }}
      command:
      - 'wget'
      args:
      - {{ printf "%s.%s.svc" (include "ragflow.fullname" .) .Release.Namespace }}
  restartPolicy: Never

```

### `internal/common/constants.go`

```go
package common

const (
	// PAGERANK_FLD is the field name for pagerank score
	PAGERANK_FLD = "pagerank_fea"
	// TAG_FLD is the field name for tag features
	TAG_FLD = "tag_feas"
)

```

### `internal/common/status_message.go`

```go
package common

import (
	"time"
)

type MessageType string

const (
	MessageHeartbeat MessageType = "heartbeat"
	MessageMetric    MessageType = "metric"
	MessageEvent     MessageType = "event"
)

type ServerType string

const (
	ServerTypeAPI       ServerType = "api_server"     // API server
	ServerTypeWorker    ServerType = "ingestor"       // Ingestion server
	ServerTypeScheduler ServerType = "data_collector" // Data collection server
)

type BaseMessage struct {
	MessageID   int64       `json:"report_id"`
	MessageType MessageType `json:"report_type"`
	ServerName  string      `json:"server_id"`
	ServerType  ServerType  `json:"server_type"`
	Host        string      `json:"host"`
	Port        int         `json:"port"`
	Version     string      `json:"version"`
	Timestamp   time.Time   `json:"timestamp"`
	Ext         interface{} `json:"ext,omitempty"`
}

```

### `internal/cpp/opencc/openccxx.h`

```h
#pragma once

#include "opencc_types.h"
#include <string>

class OpenCC {
public:
    OpenCC(const std::string &home_dir);
    virtual ~OpenCC();

    int open(const char *config_file, const char *home_dir);

    long convert(const std::string &in, std::string &out, long length = -1);

    long convert(const std::wstring &in, std::wstring &out, long length = -1);

private:
    char *config_file;
    opencc_t od;
};

```

### `internal/cpp/stemmer/api.h`

```h

#pragma once

typedef unsigned char symbol;

/* Or replace 'char' above with 'short' for 16 bit characters.

   More precisely, replace 'char' with whatever type guarantees the
   character width you need. Note however that sizeof(symbol) should divide
   HEAD, defined in header.h as 2*sizeof(int), without remainder, otherwise
   there is an alignment problem. In the unlikely event of a problem here,
   consult Martin Porter.

*/

struct SN_env {
    symbol *p;
    int c;
    int l;
    int lb;
    int bra;
    int ket;
    symbol **S;
    int *I;
    unsigned char *B;
};

extern struct SN_env *SN_create_env(int S_size, int I_size, int B_size);
extern void SN_close_env(struct SN_env *z, int S_size);

extern int SN_set_current(struct SN_env *z, int size, const symbol *s);

```

### `internal/cpp/stemmer/stem_UTF_8_danish.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *danish_UTF_8_create_env(void);
extern void danish_UTF_8_close_env(struct SN_env *z);

extern int danish_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_dutch.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *dutch_UTF_8_create_env(void);
extern void dutch_UTF_8_close_env(struct SN_env *z);

extern int dutch_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_english.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *english_UTF_8_create_env(void);
extern void english_UTF_8_close_env(struct SN_env *z);

extern int english_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_finnish.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *finnish_UTF_8_create_env(void);
extern void finnish_UTF_8_close_env(struct SN_env *z);

extern int finnish_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_french.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *french_UTF_8_create_env(void);
extern void french_UTF_8_close_env(struct SN_env *z);

extern int french_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_german.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *german_UTF_8_create_env(void);
extern void german_UTF_8_close_env(struct SN_env *z);

extern int german_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_hungarian.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *hungarian_UTF_8_create_env(void);
extern void hungarian_UTF_8_close_env(struct SN_env *z);

extern int hungarian_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_italian.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *italian_UTF_8_create_env(void);
extern void italian_UTF_8_close_env(struct SN_env *z);

extern int italian_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_norwegian.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *norwegian_UTF_8_create_env(void);
extern void norwegian_UTF_8_close_env(struct SN_env *z);

extern int norwegian_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_porter.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *porter_UTF_8_create_env(void);
extern void porter_UTF_8_close_env(struct SN_env *z);

extern int porter_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_portuguese.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *portuguese_UTF_8_create_env(void);
extern void portuguese_UTF_8_close_env(struct SN_env *z);

extern int portuguese_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_romanian.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *romanian_UTF_8_create_env(void);
extern void romanian_UTF_8_close_env(struct SN_env *z);

extern int romanian_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_russian.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *russian_UTF_8_create_env(void);
extern void russian_UTF_8_close_env(struct SN_env *z);

extern int russian_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_spanish.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *spanish_UTF_8_create_env(void);
extern void spanish_UTF_8_close_env(struct SN_env *z);

extern int spanish_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_swedish.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *swedish_UTF_8_create_env(void);
extern void swedish_UTF_8_close_env(struct SN_env *z);

extern int swedish_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/stemmer/stem_UTF_8_turkish.h`

```h

/* This file was generated automatically by the Snowball to ANSI C compiler */

#pragma once

#ifdef __cplusplus
extern "C" {
#endif

extern struct SN_env *turkish_UTF_8_create_env(void);
extern void turkish_UTF_8_close_env(struct SN_env *z);

extern int turkish_UTF_8_stem(struct SN_env *z);

#ifdef __cplusplus
}
#endif

```

### `internal/cpp/term.cpp`

```cpp
// Copyright(C) 2023 InfiniFlow, Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include "term.h"

std::string PLACE_HOLDER("<PH>");

void Term::Reset() {
    text_.clear();
    word_offset_ = 0;
}

Term TermList::global_temporary_;
```

### `internal/cpp/util/strutil.h`

```h
// Copyright 2016 The RE2 Authors.  All Rights Reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

#ifndef UTIL_STRUTIL_H_
#define UTIL_STRUTIL_H_

#include <string>

#include "re2/stringpiece.h"
#include "util/util.h"

namespace re2 {

std::string CEscape(const StringPiece &src);
void PrefixSuccessor(std::string *prefix);
std::string StringPrintf(const char *format, ...);

} // namespace re2

#endif // UTIL_STRUTIL_H_

```

### `memory/__init__.py`

```py

```

### `memory/services/__init__.py`

```py

```

### `memory/utils/__init__.py`

```py

```

### `rag/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

# from beartype.claw import beartype_this_package
# beartype_this_package()

```

### `rag/advanced_rag/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

from .tree_structured_query_decomposition_retrieval import TreeStructuredQueryDecompositionRetrieval as DeepResearcher


__all__ = ['DeepResearcher']
```

### `rag/app/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
```

### `rag/flow/chunker/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

from rag.flow.chunker.token_chunker import TokenChunker, TokenChunkerParam

__all__ = ["TokenChunker", "TokenChunkerParam"]

```

### `rag/flow/chunker/title_chunker/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

from rag.flow.chunker.title_chunker.common import TitleChunkerParam
from rag.flow.chunker.title_chunker.title_chunker import TitleChunker

__all__ = ["TitleChunker", "TitleChunkerParam"]

```

### `rag/flow/extractor/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.


```

### `rag/flow/parser/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

```

### `rag/flow/tokenizer/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

```

### `rag/graphrag/__init__.py`

```py

```

### `rag/graphrag/general/__init__.py`

```py

```

### `rag/graphrag/light/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `rag/prompts/__init__.py`

```py
from . import generator

__all__ = [name for name in dir(generator)
           if not name.startswith('_')]

globals().update({name: getattr(generator, name) for name in __all__})

```

### `rag/prompts/analyze_task_user.md`

```md
**Input Variables**
- **{{ task }}** — the task/request to analyze
- **{{ context }}** — background, history, situational context
- **{{ agent_prompt }}** — special instructions/role hints
- **{{ tools_desc }}** — available sub-agents and capabilities

**Final Output Rule**
Return the Task Transmission section (if needed) followed by the concrete analysis and planning steps according to LOW / MEDIUM / HIGH complexity.  
Do not restate the framework, definitions, or rules. Output only the final structured result.

```

### `rag/prompts/ask_summary.md`

```md
Role: You're a smart assistant. Your name is Miss R.
Task: Summarize the information from knowledge bases and answer user's question.
Requirements and restriction:
  - DO NOT make things up, especially for numbers.
  - If the information from knowledge is irrelevant with user's question, JUST SAY: Sorry, no relevant information provided.
  - Answer with markdown format text.
  - Answer in language of user's question.
  - DO NOT make things up, especially for numbers.

### Information from knowledge bases

{{ knowledge }}

The above is information from knowledge bases.

```

### `rag/prompts/citation_plus.md`

```md
You are an agent for adding correct citations to the given text by user. 
You are given a piece of text within [ID:<ID>] tags, which was generated based on the provided sources. 
However, the sources are not cited in the [ID:<ID>]. 
Your task is to enhance user trust by generating correct, appropriate citations for this report.

{{ example }}

<context>

{{ sources }}

</context>


```

### `rag/prompts/content_tagging_prompt.md`

```md
## Role
You are a text analyzer.

## Task
Add tags (labels) to a given piece of text content based on the examples and the entire tag set.

## Steps
- Review the tag/label set.
- Review examples which all consist of both text content and assigned tags with relevance score in JSON format.
- Summarize the text content, and tag it with the top {{ topn }} most relevant tags from the set of tags/labels and the corresponding relevance score.

## Requirements
- The tags MUST be from the tag set.
- The output MUST be in JSON format only, the key is tag and the value is its relevance score.
- The relevance score must range from 1 to 10.
- Output keywords ONLY.

# TAG SET
{{ all_tags | join(', ') }}

{% for ex in examples %}
# Examples {{ loop.index0 }}
### Text Content
{{ ex.content }}

Output:
{{ ex.tags_json }}

{% endfor %}
# Real Data
### Text Content
{{ content }}

```

### `rag/prompts/cross_languages_sys_prompt.md`

```md
## Role
A streamlined multilingual translator.

## Behavior Rules
1. Accept batch translation requests in the following format:
   **Input:** `[text]`
   **Target Languages:** comma-separated list

2. Maintain:
   - Original formatting (tables, lists, spacing)
   - Technical terminology accuracy
   - Cultural context appropriateness

3. Output translations in the following format:

[Translation in language1]
###
[Translation in language2]

---

## Example

**Input:**
Hello World! Let's discuss AI safety.
===
Chinese, French, Japanese

**Output:**
你好世界！让我们讨论人工智能安全问题。
###
Bonjour le monde ! Parlons de la sécurité de l'IA.
###
こんにちは世界！AIの安全性について話し合いましょう。


```

### `rag/prompts/cross_languages_user_prompt.md`

```md
**Input:**
{{ query }}
===
{{ languages | join(', ') }}

**Output:**


```

### `rag/prompts/keyword_prompt.md`

```md
## Role
You are a text analyzer.

## Task
Extract the most important keywords/phrases of a given piece of text content.

## Requirements
- Summarize the text content, and give the top {{ topn }} important keywords/phrases.
- The keywords MUST be in the same language as the given piece of text content.
- The keywords are delimited by ENGLISH COMMA.
- Output keywords ONLY.

---

## Text Content
{{ content }}

```

### `rag/prompts/meta_data.md`

```md
## Role: Metadata extraction expert.
## Rules:
 - Strict Evidence Only: Extract a value ONLY if it is explicitly mentioned in the Content. 
 - Enum Filter: For any field with an 'enum' list, the list acts as a strict filter. If no element from the list (or its direct synonym) is found in the Content, you MUST NOT extract that field.
 - No Meta-Inference: Do not infer values based on the document's nature, format, or category. If the text does not literally state the information, treat it as missing.
 - Zero-Hallucination: Never invent information or pick a "likely" value from the enum to fill a field.
 - Empty Result: If no matches are found for any field, or if the content is irrelevant, output ONLY {}. 
 - Output: ONLY a valid JSON string. No Markdown, no notes.

## Schema for extraction:
{{ schema }}

## Content to analyze:
{{ content }}
```

### `rag/prompts/question_prompt.md`

```md
## Role
You are a text analyzer.

## Task
Propose {{ topn }} questions about a given piece of text content.

## Requirements
- Understand and summarize the text content, and propose the top {{ topn }} important questions.
- The questions SHOULD NOT have overlapping meanings.
- The questions SHOULD cover the main content of the text as much as possible.
- The questions MUST be in the same language as the given piece of text content.
- One question per line.
- Output questions ONLY.

---

## Text Content
{{ content }}


```

### `rag/prompts/rank_memory.md`

```md
**Task**: Sort the tool call results based on relevance to the overall goal and current sub-goal. Return ONLY a sorted list of indices (0-indexed).

**Rules**:
1. Analyze each result's contribution to both:
   - The overall goal (primary priority)
   - The current sub-goal (secondary priority)
2. Sort from MOST relevant (highest impact) to LEAST relevant
3. Output format: Strictly a Python-style list of integers. Example: [2, 0, 1]

🔹 Overall Goal: {{ goal }}
🔹 Sub-goal: {{ sub_goal }}

**Examples**:  
🔹 Tool Response:  
 - index: 0
     > Tokyo temperature is 78°F.
 - index: 1
     > Error: Authentication failed (expired API key).
 - index: 2
     > Available: 12 widgets in stock (max 5 per customer).
 
 → rank: [1,2,0]<|stop|>
 

**Your Turn**:  
🔹 Tool Response:
{% for f in results %}
 - index: f.i
     > f.content
{% endfor %}
```

### `rag/prompts/resume_education.md`

```md
请从以下带行号索引的简历文本中提取教育背景。

{indexed_text}

提取为 JSON:
{{
  "education": [
    {{
      "school": "",
      "major": "",
      "degree": "",
      "department": "",
      "start_date": "",
      "end_date": "",
      "desc_lines": [start_index, end_index]
    }}
  ]
}}

字段说明:
- school: 学校全称，如"厦门大学"，中英文都可以
- major: 专业，如"机械工程"
- degree: 学位，本科/硕士/博士/专科/高中/初中，若不存在则填""
- department: 系/学院，如"信息工程系"
- start_date: 开始时间，格式为 %Y.%m 或 %Y
- end_date: 结束时间，若至今填写"至今"，若不存在填写""
- desc_lines: [起始行号, 结束行号]，教育描述对应的行号范围（可选）
  - 包括课程成绩、研究方向、GPA、荣誉奖项等
  - 不存在则填 []

只返回 JSON。 /no_think
```

### `rag/prompts/resume_system_en.md`

```md
You are a professional resume analysis assistant. Your task is to convert the given resume text into JSON output.
(If both Chinese and English resumes appear, focus only on the English resume)
Strictly return results in JSON format without any other text.
```

### `rag/prompts/resume_system.md`

```md
你是一个专业的简历分析助手。你的任务是将给定的简历文本转换为 JSON 输出。
(如果有中英文简历同时出现时，只关注中文简历)
严格按照 JSON 格式返回结果，不要有任何其他文字。
```

### `rag/prompts/structured_output_prompt.md`

```md
You’re a helpful AI assistant. You could answer questions and output in JSON format.
constraints:
    - You must output in JSON format.
    - Do not output boolean value, use string type instead.
    - Do not output integer or float value, use number type instead.
eg:
    Here is the JSON schema:
    {"properties": {"age": {"type": "number","description": ""},"name": {"type": "string","description": ""}},"required": ["age","name"],"type": "Object Array String Number Boolean","value": ""}

    Here is the user's question:
    My name is John Doe and I am 30 years old.

    output:
    {"name": "John Doe", "age": 30}
Here is the JSON schema:
    {{ schema }}
```

### `rag/prompts/sufficiency_check.md`

```md
You are a information retrieval evaluation expert. Please assess whether the currently retrieved content is sufficient to answer the user's question.

User question:
{{ question }}

Retrieved content:
{{ retrieved_docs }}

Please determine whether these content are sufficient to answer the user's question.

Output format (JSON):
```json
{
    "is_sufficient": true/false,
    "reasoning": "Your reasoning for the judgment",
    "missing_information": ["Missing information 1", "Missing information 2"]
}
```

Requirements:
1. If the retrieved content contains key information needed to answer the query, judge as sufficient (true).
2. If key information is missing, judge as insufficient (false), and list the missing information.
3. The `reasoning` should be concise and clear.
4. The `missing_information` should only be filled when insufficient, otherwise empty array.
```

### `rag/prompts/template.py`

```py
import os

PROMPT_DIR = os.path.dirname(__file__)

_loaded_prompts = {}


def load_prompt(name: str) -> str:
    if name in _loaded_prompts:
        return _loaded_prompts[name]

    path = os.path.join(PROMPT_DIR, f"{name}.md")
    if not os.path.isfile(path):
        raise FileNotFoundError(f"Prompt file '{name}.md' not found in prompts/ directory.")

    with open(path, "r", encoding="utf-8") as f:
        content = f.read().strip()
        _loaded_prompts[name] = content
        return content

```

### `rag/prompts/toc_from_text_user.md`

```md
OUTPUT FORMAT
- Return ONLY the JSON array.
- Use double quotes.
- No extra commentary.
- Keep language of "title" the same as the input.

INPUT
{{text}}

```

### `rag/prompts/toc_index.md`

```md
You are an expert analyst tasked with matching text content to the title.

**Instructions:**
1. Analyze the given title with its numeric structure index and the provided text.
2. Determine whether the title is mentioned as a section tile in the given text.
3. Provide a concise, step-by-step reasoning for your decision.
4. Output **only** the complete JSON object. Do not include any other text, explanations, or markdown code block fences (like ```json).

**Output Format:**
Your output must be a valid JSON object with the following keys:
{
"reasoning": "Step-by-step explanation of your analysis.",
"exist": "<yes or no>",
}

** The title: **
{{ structure }} {{ title }}

** Given text: **
{{ text }}
```

### `rag/prompts/toc_relevance_user.md`

```md
# User Prompt: TOC Relevance Evaluation

You will now receive:
1. A JSON list of TOC items (each with `level` and `title`)
2. A user query string.

Traverse the TOC hierarchically based on level numbers and assign scores (5,3,1,0,-1) according to the rules in the system prompt.  
Output **only** the JSON array with the added `"score"` field.

---

**Input TOC:**
{{ toc_json }}

**Query:**
{{ query }}


```

### `rag/settings.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `rag/utils/__init__.py`

```py
#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#


```

### `rag/utils/storage_factory.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `run_go_tests.sh`

```sh
#!/bin/bash
set -e

PACKAGES=(
    "./internal/admin/..."
#    "./internal/binding/..."
    "./internal/cache/..."
    "./internal/cli/..."
    "./internal/common/..."
    "./internal/dao/..."
    "./internal/engine/..."
    "./internal/handler/..."
    "./internal/logger/..."
    "./internal/model/..."
    "./internal/router/..."
    "./internal/server/..."
#    "./internal/service/..."
    "./internal/storage/..."
    "./internal/tokenizer/..."
#    "./internal/utility/..."
)

echo "Running tests for specific packages..."
for pkg in "${PACKAGES[@]}"; do
    echo "=== Testing $pkg ==="
    go test $pkg -v -cover -test.v
    echo ""
done

#echo "Running all tests except failed packages..."
#go test $(go list ./internal/... | grep -v -E '(cli|service|binding)$') -v
```

### `sdk/python/hello_ragflow.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

import ragflow_sdk

print(ragflow_sdk.__version__)

```

### `sdk/python/pyproject.toml`

```toml
[project]
name = "ragflow-sdk"
version = "0.25.0"
description = "Python client sdk of [RAGFlow](https://github.com/infiniflow/ragflow). RAGFlow is an open-source RAG (Retrieval-Augmented Generation) engine based on deep document understanding."
authors = [{ name = "Zhichang Yu", email = "yuzhichang@gmail.com" }]
license = { text = "Apache License, Version 2.0" }
readme = "README.md"
requires-python = ">=3.12,<3.15"
dependencies = ["requests>=2.30.0,<3.0.0", "beartype>=0.20.0,<1.0.0"]


[dependency-groups]
test = [
    "hypothesis>=6.131.9",
    "openpyxl>=3.1.5",
    "pillow>=11.1.0",
    "pytest>=8.3.5",
    "python-docx>=1.1.2",
    "python-pptx>=1.0.2",
    "reportlab>=4.3.1",
    "requests>=2.32.3",
    "requests-toolbelt>=1.0.0",
]


[tool.pytest.ini_options]
markers = [
    "p1: high priority test cases",
    "p2: medium priority test cases",
    "p3: low priority test cases",
]

```

### `sdk/python/ragflow_sdk/modules/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
```

### `sdk/python/test.py`

```py
from .ragflow_sdk import RAGFlow

rag_object = RAGFlow(api_key="ragflow-FDfRECsXDRagsKPxb_EfZdDPcmngavSgYEzbU_Blgq4", base_url="http://localhost:9222")
assistant = rag_object.get_agent("b0bc46e43dfc11f1b4ff84ba59bc54d9")
session = assistant.create_session()    

print("\n==================== Miss R =====================\n")
print("Hello. What can I do for you?")

while True:
    question = input("\n==================== User =====================\n> ")
    print("\n==================== Miss R =====================\n")
    
    cont = ""
    for ans in session.ask(question, stream=True):
        print(ans.content[len(cont):], end='', flush=True)
        cont = ans.content

```

### `sdk/python/test/test_frontend_api/get_email.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

def test_get_email(get_email):
    print("\nEmail account:",flush=True)
    print(f"{get_email}\n",flush=True)
```

### `sdk/python/test/test_http_api/test_file_management_within_dataset/test_stop_parse_documents.py`

```py

```

### `test.py`

```py
from fastapi import FastAPI, Request
app = FastAPI()
@app.post("/")
async def echo(request: Request):
    body = await request.body()
    return body
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### `test/__init__.py`

```py

```

### `test/benchmark/__init__.py`

```py
"""RAGFlow HTTP API benchmark package."""

```

### `test/benchmark/__main__.py`

```py
from .cli import main


if __name__ == "__main__":
    main()

```

### `test/benchmark/run_retrieval.sh`

```sh
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

: "${ZHIPU_AI_API_KEY:?ZHIPU_AI_API_KEY is required}"

PYTHONPATH="${REPO_ROOT}/test" uv run -m benchmark retrieval \
  --base-url http://127.0.0.1:9380 \
  --allow-register \
  --login-email "qa@infiniflow.org" \
  --login-password "123" \
  --bootstrap-llm \
  --llm-factory ZHIPU-AI \
  --llm-api-key "$ZHIPU_AI_API_KEY" \
  --dataset-name "bench_dataset" \
  --dataset-payload '{"name":"bench_dataset","embedding_model":"BAAI/bge-small-en-v1.5@Builtin"}' \
  --document-path "${SCRIPT_DIR}/test_docs/Doc1.pdf" \
  --document-path "${SCRIPT_DIR}/test_docs/Doc2.pdf" \
  --document-path "${SCRIPT_DIR}/test_docs/Doc3.pdf" \
  --question "What does RAG mean?" \
  --iterations 10 \
  --concurrency 8 \
  --teardown

```

### `test/playwright/__init__.py`

```py

```

### `test/playwright/.gitignore`

```gitignore
artifacts/
.auth
.pytest_cache
```

### `test/playwright/e2e/__init__.py`

```py

```

### `test/playwright/helpers/__init__.py`

```py

```

### `test/playwright/helpers/auth_selectors.py`

```py
"""Auth UI selectors for Playwright suite. Keep stable testids."""

AUTH_FORM = "form[data-testid='auth-form']"
AUTH_ACTIVE_FORM = "form[data-testid='auth-form'][data-active='true']"

EMAIL_INPUT = "input[data-testid='auth-email'], [data-testid='auth-email'] input"
PASSWORD_INPUT = "input[data-testid='auth-password'], [data-testid='auth-password'] input"
NICKNAME_INPUT = "input[data-testid='auth-nickname'], [data-testid='auth-nickname'] input"

SUBMIT_BUTTON = (
    "button[data-testid='auth-submit'], [data-testid='auth-submit'] button, "
    "[data-testid='auth-submit']"
)

REGISTER_TAB = "[data-testid='auth-toggle-register']"
LOGIN_TAB = "[data-testid='auth-toggle-login']"
AUTH_STATUS = "[data-testid='auth-status']"

```

### `test/playwright/helpers/debug_utils.py`

```py
from test.playwright.helpers.env_utils import env_bool


def debug(msg: str) -> None:
    if env_bool("PW_DEBUG_DUMP"):
        print(msg, flush=True)

```

### `test/playwright/helpers/env_utils.py`

```py
import os


def env_bool(name: str, default: bool = False) -> bool:
    value = os.getenv(name)
    if not value:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def env_int(name: str, default: int) -> int:
    value = os.getenv(name)
    if not value:
        return default
    try:
        return int(value)
    except ValueError:
        return default

```

### `test/playwright/helpers/flow_context.py`

```py
from dataclasses import dataclass
from typing import Any


@dataclass
class FlowContext:
    page: Any
    state: dict
    base_url: str
    login_url: str
    smoke_login_url: str | None = None
    active_auth_context: Any | None = None
    auth_click: Any | None = None
    seeded_user_credentials: Any | None = None

```

### `test/playwright/helpers/flow_steps.py`

```py
from __future__ import annotations

from typing import Callable, Sequence

import pytest

StepFn = Callable[..., None]
Steps = Sequence[tuple[str, StepFn]]


def flow_params(steps: Steps):
    return [pytest.param(step_fn, id=step_id) for step_id, step_fn in steps]


def require(flow_state: dict, *keys: str) -> None:
    missing = [key for key in keys if not flow_state.get(key)]
    if missing:
        pytest.skip(f"Missing prerequisite: {', '.join(missing)}")

```

### `test/testcases/libs/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

```

### `test/unit_test/rag/llm/__init__.py`

```py

```

### `test/unit_test/test_test_chunk_feedback_package.py`

```py
import importlib
import sys
from types import ModuleType

import pytest

pytestmark = pytest.mark.p2


def test_chunk_feedback_package_import_is_safe_when_common_is_shadowed(monkeypatch):
    shadow_common = ModuleType("common")
    monkeypatch.setitem(sys.modules, "common", shadow_common)
    monkeypatch.delitem(
        sys.modules,
        "test.testcases.test_web_api.test_chunk_feedback",
        raising=False,
    )

    module = importlib.import_module("test.testcases.test_web_api.test_chunk_feedback")

    assert module is not None

```

### `tools/chatgpt-on-wechat/plugins/__init__.py`

```py
#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#

from beartype.claw import beartype_this_package
beartype_this_package()

from .ragflow_chat import RAGFlowChat

__all__ = [
    "RAGFlowChat"
]

```

### `tools/chatgpt-on-wechat/plugins/config.json`

```json
{
    "api_key": "ragflow-***",
    "host_address": "127.0.0.1:80"
}

```

### `tools/chatgpt-on-wechat/plugins/requirements.txt`

```txt
requests

```

### `tools/es-to-oceanbase-migration/tests/__init__.py`

```py
# Tests for ES to OceanBase migration tool

```

### `tools/firecrawl/__init__.py`

```py
"""
Firecrawl Plugin for RAGFlow

This plugin integrates Firecrawl's web scraping capabilities into RAGFlow,
allowing users to import web content directly into their RAG workflows.
"""

__version__ = "1.0.0"
__author__ = "Firecrawl Team"
__description__ = "Firecrawl integration for RAGFlow - Web content scraping and import"

from firecrawl_connector import FirecrawlConnector
from firecrawl_config import FirecrawlConfig

__all__ = ["FirecrawlConnector", "FirecrawlConfig"]

```

### `tools/firecrawl/requirements.txt`

```txt
# Firecrawl Plugin for RAGFlow - Dependencies

# Core dependencies
aiohttp>=3.8.0
asyncio-throttle>=1.0.0

# Data processing
pydantic>=2.0.0
python-dateutil>=2.8.0

# HTTP and networking
urllib3>=1.26.0
requests>=2.28.0

# Logging and monitoring
structlog>=22.0.0

# Optional: For advanced content processing
beautifulsoup4>=4.11.0
lxml>=4.9.0
html2text>=2020.1.16

# Optional: For enhanced error handling
tenacity>=8.0.0

# Development dependencies (optional)
pytest>=7.0.0
pytest-asyncio>=0.21.0
black>=22.0.0
flake8>=5.0.0
mypy>=1.0.0

```

### `web/.env.development`

```development
VITE_BASE_URL='/'
API_PROXY_SCHEME='python'
```

### `web/.env.production`

```production
VITE_BASE_URL='/'
```

### `web/.gitignore`

```gitignore
/node_modules
/.env.local
/.umirc.local.ts
/config/config.local.ts
/src/.umi/*
/src/.umi-production/*
/src/.umi-test
/dist
.swc

*storybook.log
storybook-static

```

### `web/.husky/pre-commit`

```husky/pre-commit
cd web
npx lint-staged
```

### `web/.npmrc`

```npmrc
engine-strict=true
registry=https://registry.npmmirror.com/

```

### `web/.prettierignore`

```prettierignore
node_modules
.umi
.umi-production

```

### `web/.prettierrc`

```prettierrc
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  "overrides": [{ "files": ".prettierrc", "options": { "parser": "json" } }],
  "plugins": [
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson"
  ],
  "endOfLine": "lf"
}

```

### `web/.storybook/preview.ts`

```ts
import '@/locales/config';
import type { Preview } from '@storybook/react-webpack5';
import { createElement } from 'react';
import '../public/iconfont.js';
import { TooltipProvider } from '../src/components/ui/tooltip';

import '../tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => createElement(TooltipProvider, null, createElement(Story)),
  ],
};

export default preview;

```

### `web/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RAGFlow</title>
    <script src="/iconfont.js" defer></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `web/jest-setup.ts`

```ts
import '@testing-library/jest-dom';
import 'umi/test-setup';

```

### `web/postcss.config.cjs`

```cjs
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### `web/README.md`

```md
## Install front-end dependencies

   ```bash
   npm install
   ```

## Launch front-end

   ```bash
   npm run dev
   ```

   _The following output confirms a successful launch of the system:_

   ![](https://github.com/user-attachments/assets/0daf462c-a24d-4496-a66f-92533534e187)

## Login to RAGFlow web UI

   Open your browser and navigate to:

   ```bash
   http://localhost:9222 or http://[YOUR_MACHINE_IP]:9222
   ```

   _Replace `[YOUR_MACHINE_IP]` with your actual machine IP address (e.g., `http://192.168.1.49:9222`)._


## Login to RAGFlow web admin UI

   Open your browser and navigate to:

   ```bash
   http://localhost:9222/admin or http://[YOUR_MACHINE_IP]:9222/admin
   ```

   _Replace `[YOUR_MACHINE_IP]` with your actual machine IP address (e.g., `http://192.168.1.49:9222/admin`)._


## Shutdown front-end

   Ctrl + C or

   ```bash
   kill -f "umi dev"
   ```
```

### `web/skills-lock.json`

```json
{
  "version": 1,
  "skills": {
    "tanstack-query-best-practices": {
      "source": "deckardger/tanstack-agent-skills",
      "sourceType": "github",
      "computedHash": "addf4358803d7746f7fe0475a3370d835775217e00dd5fc7bbd8a7d6c53d81e5"
    }
  }
}

```

### `web/src/components/api-service/chat-overview-modal/backend-service-api.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CopyToClipboardWithText } from '@/components/copy-to-clipboard';
import { useTranslate } from '@/hooks/common-hooks';

const BackendServiceApi = ({ show }: { show(): void }) => {
  const { t } = useTranslate('chat');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <CardTitle>RAGFlow API</CardTitle>
          <Button onClick={show}>{t('apiKey')}</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <b className="font-semibold">{t('backendServiceApi')}</b>
          <CopyToClipboardWithText
            text={location.origin}
          ></CopyToClipboardWithText>
        </div>
      </CardContent>
    </Card>
  );
};

export default BackendServiceApi;

```

### `web/src/components/api-service/chat-overview-modal/index.module.less`

```less
.chartWrapper {
  height: 40vh;
  overflow: auto;
}

.chartItem {
  height: 300px;
  padding: 10px 0 50px;
}

.chartLabel {
  display: inline-block;
  padding-inline-start: 60px;
  padding-bottom: 20px;
}
.apiLinkText {
  .linkText();
  margin: 0 !important;
  background-color: rgba(255, 255, 255, 0.1);
}

```

### `web/src/components/bool-segmented.tsx`

```tsx
import { omit } from 'lodash';
import { Segmented, SegmentedProps } from './ui/segmented';

export function BoolSegmented({ ...props }: Omit<SegmentedProps, 'options'>) {
  return (
    <Segmented
      options={
        [
          { value: true, label: 'True' },
          { value: false, label: 'False' },
        ] as any
      }
      sizeType="sm"
      itemClassName="justify-center flex-1"
      {...omit(props, 'options')}
    ></Segmented>
  );
}

```

### `web/src/components/canvas/background.tsx`

```tsx
import { Background } from '@xyflow/react';

export function AgentBackground() {
  return (
    <Background
      color="var(--text-primary)"
      bgColor="rgb(var(--bg-canvas))"
      className="rounded-lg"
    />
  );
}

```

### `web/src/components/card-container.tsx`

```tsx
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type CardContainerProps = { className?: string } & PropsWithChildren;

export function CardContainer({ children, className }: CardContainerProps) {
  return (
    <div
      className={cn(
        'grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-auto content-start',
        className,
      )}
    >
      {children}
    </div>
  );
}

```

### `web/src/components/card-singleline-container/index.tsx`

```tsx
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import './index.less';

type CardContainerProps = { className?: string } & PropsWithChildren;

export function CardSineLineContainer({
  children,
  className,
}: CardContainerProps) {
  return (
    <section
      className={cn(
        'grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 single',
        className,
      )}
    >
      {children}
    </section>
  );
}

```

### `web/src/components/dataset-configuration-container.tsx`

```tsx
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type DatasetConfigurationContainerProps = {
  className?: string;
  show?: boolean;
} & PropsWithChildren;

export function DatasetConfigurationContainer({
  children,
  className,
  show = true,
}: DatasetConfigurationContainerProps) {
  return show ? (
    <div
      className={cn(
        'border p-2 rounded-lg bg-slate-50 dark:bg-gray-600',
        className,
      )}
    >
      {children}
    </div>
  ) : (
    children
  );
}

```

### `web/src/components/document-preview/document-header.tsx`

```tsx
import { formatDate } from '@/utils/date';
import { formatBytes } from '@/utils/file-util';
import { useTranslation } from 'react-i18next';

type Props = {
  size: number;
  name: string;
  create_date: string;
  className?: string;
};

export default function DocumentHeader({
  size,
  name,
  create_date,
  className,
}: Props) {
  const sizeName = formatBytes(size);
  const dateStr = formatDate(create_date);

  const { t } = useTranslation();

  return (
    <header className={className}>
      <h2 className="text-2xl font-semibold truncate">{name}</h2>
      <dl
        className="
        text-text-secondary text-sm flex
        [&_dt]:after:content-[':'] [&_dt]:after:me-[.5ch]
        [&_dd]:me-[2ch]"
      >
        <dt>{t('chunk.size')}</dt>
        <dd>{sizeName}</dd>

        <dt>{t('chunk.uploadedTime')}</dt>
        <dd>{dateStr}</dd>
      </dl>
    </header>
  );
}

```

### `web/src/components/document-preview/excel-preview.tsx`

```tsx
// import { useFetchExcel } from '@/pages/document-viewer/hooks';
import classNames from 'classnames';
import { useFetchExcel } from './hooks';

interface ExcelCsvPreviewerProps {
  className?: string;
  url: string;
}

export const ExcelCsvPreviewer: React.FC<ExcelCsvPreviewerProps> = ({
  className,
  url,
}) => {
  // const url = useGetDocumentUrl();
  const { containerRef } = useFetchExcel(url);

  return (
    <div
      ref={containerRef}
      className={classNames(
        'relative w-full h-full p-4 bg-background-paper border border-border-normal rounded-md excel-csv-previewer',
        className,
      )}
    ></div>
  );
};

```

### `web/src/components/document-preview/index.module.less`

```less
.documentContainer {
  width: 100%;
  // height: calc(100vh - 284px);
  height: calc(100vh - 180px);
  position: relative;
  :global(.PdfHighlighter) {
    overflow-x: hidden;
  }
  :global(.Highlight--scrolledTo .Highlight__part) {
    overflow-x: hidden;
    background-color: rgba(255, 226, 143, 1);
  }
}

```

### `web/src/components/empty/interface.ts`

```ts
import { EmptyType } from './constant';

export type EmptyProps = {
  className?: string;
  children?: React.ReactNode;
  type?: EmptyType;
  text?: string;
  iconWidth?: number;
};

export type EmptyCardProps = {
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

```

### `web/src/components/file-icon/index.module.less`

```less
.thumbnailImg {
  display: inline-block;
  max-width: 20px;
}

```

### `web/src/components/file-icon/index.tsx`

```tsx
import { getExtension } from '@/utils/document-util';
import SvgIcon from '../svg-icon';

import { useFetchDocumentThumbnailsByIds } from '@/hooks/use-document-request';
import { useEffect } from 'react';
import styles from './index.module.less';

interface IProps {
  name: string;
  id: string;
}

const FileIcon = ({ name, id }: IProps) => {
  const fileExtension = getExtension(name);

  const { data: fileThumbnails, setDocumentIds } =
    useFetchDocumentThumbnailsByIds();
  const fileThumbnail = fileThumbnails[id];

  useEffect(() => {
    if (id) {
      setDocumentIds([id]);
    }
  }, [id, setDocumentIds]);

  return fileThumbnail ? (
    <img src={fileThumbnail} className={styles.thumbnailImg}></img>
  ) : (
    <SvgIcon name={`file-icon/${fileExtension}`} width={24}></SvgIcon>
  );
};

export default FileIcon;

```

### `web/src/components/form-container.tsx`

```tsx
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export type FormContainerProps = {
  className?: string;
  show?: boolean;
} & PropsWithChildren;

export function FormContainer({
  children,
  show = true,
  className,
}: FormContainerProps) {
  return show ? (
    <section
      className={cn(
        'border-0.5 border-border-button rounded-lg p-5 space-y-5',
        className,
      )}
    >
      {children}
    </section>
  ) : (
    children
  );
}

```

### `web/src/components/highlight-markdown/index.module.less`

```less
.text {
  .chunkText;
  font-size: 16px;
  li {
    padding: 4px 0px;
  }
  // p {
  //   white-space: pre-wrap; // https://stackoverflow.com/questions/60332183/new-line-with-react-markdown
  // }
}

.code {
  padding: 3px 6px 6px;
  margin: 0;
  white-space: break-spaces;
  background-color: rgba(129, 139, 152, 0.12);
  border-radius: 4px;
  color: var(--ant-color-text-base);
}

```

### `web/src/components/hooks/use-mobile.tsx`

```tsx
import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

```

### `web/src/components/jsonjoy-builder/components/schema-editor/context.ts`

```ts
import React, { useContext } from 'react';
import { KeyInputProps } from './interface';

export const KeyInputContext = React.createContext<KeyInputProps>({});

export function useInputPattern() {
  const x = useContext(KeyInputContext);
  return x.pattern;
}

```

### `web/src/components/jsonjoy-builder/components/schema-editor/interface.ts`

```ts
export type KeyInputProps = { pattern?: RegExp | string };

```

### `web/src/components/jsonjoy-builder/hooks/use-translation.ts`

```ts
import { useContext } from 'react';
import { en } from '../i18n/locales/en';
import { TranslationContext } from '../i18n/translation-context';

export function useTranslation() {
  const translation = useContext(TranslationContext);
  return translation ?? en;
}

export function formatTranslation(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = values[key];
    return value !== undefined ? String(value) : `{${key}}`;
  });
}

```

### `web/src/components/jsonjoy-builder/i18n/translation-context.ts`

```ts
import { createContext } from 'react';
import { en } from './locales/en';
import type { Translation } from './translation-keys.ts';

export const TranslationContext = createContext<Translation>(en);

```

### `web/src/components/key-input.tsx`

```tsx
import { Input, InputProps } from '@/components/ui/input';
import { ChangeEvent, forwardRef, useCallback } from 'react';

type KeyInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  searchValue?: string | RegExp;
} & Omit<InputProps, 'onChange'>;

export const KeyInput = forwardRef<HTMLInputElement, KeyInputProps>(
  function KeyInput(
    { value, onChange, searchValue = /[^a-zA-Z0-9_]/g, ...props },
    ref,
  ) {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ?? '';
        const filteredValue = value.replace(searchValue, '');
        onChange?.(filteredValue);
      },
      [onChange, searchValue],
    );

    return <Input {...props} value={value} onChange={handleChange} ref={ref} />;
  },
);

```

### `web/src/components/list-filter-bar/interface.ts`

```ts
export type FilterType = {
  id: string;
  field?: string;
  label: string | JSX.Element;
  list?: FilterType[];
  value?: string | string[];
  count?: number;
  canSearch?: boolean;
};
export type FilterCollection = {
  field: string;
  label: string;
  list: FilterType[];
  canSearch?: boolean;
};
export type FilterValue = Record<
  string,
  Array<string> | Record<string, Array<string>>
>;
export type FilterChange = (value: FilterValue) => void;

```

### `web/src/components/llm-select/index.less`

```less
.llmLabel {
  font-size: 14px;
}

```

### `web/src/components/llm-select/llm-label.tsx`

```tsx
import { getLLMIconName, getLlmNameAndFIdByLlmId } from '@/utils/llm-util';
import { memo } from 'react';
import { LlmIcon } from '../svg-icon';

interface IProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const LLMLabel = ({ value }: IProps) => {
  const { llmName, fId } = getLlmNameAndFIdByLlmId(value);

  return (
    <div className="flex items-center gap-1 text-xs text-text-secondary">
      <LlmIcon name={getLLMIconName(fId, llmName)} width={20} height={20} />
      <span className="flex-1 truncate"> {llmName}</span>
    </div>
  );
};

export default memo(LLMLabel);

```

### `web/src/components/llm-setting-items/index.module.less`

```less
.sliderInputNumber {
  width: 80px;
}
.variableSlider {
  width: 100%;
}

```

### `web/src/components/logical-operator.tsx`

```tsx
import { useBuildSwitchLogicOperatorOptions } from '@/hooks/logic-hooks/use-build-options';
import { RAGFlowFormItem } from './ragflow-form';
import { RAGFlowSelect } from './ui/select';

type LogicalOperatorProps = { name: string };

export function LogicalOperator({ name }: LogicalOperatorProps) {
  const switchLogicOperatorOptions = useBuildSwitchLogicOperatorOptions();

  return (
    <div className="relative min-w-14">
      <RAGFlowFormItem
        name={name}
        className="absolute top-1/2 -translate-y-1/2 right-1 left-0 z-10 bg-bg-base"
      >
        <RAGFlowSelect
          options={switchLogicOperatorOptions}
          triggerClassName="w-full text-xs px-1 py-0 h-6"
        ></RAGFlowSelect>
      </RAGFlowFormItem>
      <div className="absolute border-l border-y w-5 right-0 top-4 bottom-4 rounded-l-lg"></div>
    </div>
  );
}

```

### `web/src/components/max-token-number-from-field.tsx`

```tsx
import { FormLayout } from '@/constants/form';
import { useTranslate } from '@/hooks/common-hooks';
import { SliderInputFormField } from './slider-input-form-field';

interface IProps {
  initialValue?: number;
  max?: number;
  sliderTestId?: string;
  numberInputTestId?: string;
}

export function MaxTokenNumberFormField({
  max = 2048,
  initialValue,
  sliderTestId,
  numberInputTestId,
}: IProps) {
  const { t } = useTranslate('knowledgeConfiguration');

  return (
    <SliderInputFormField
      name={'parser_config.chunk_token_num'}
      label={t('chunkTokenNumber')}
      tooltip={t('chunkTokenNumberTip')}
      max={max}
      defaultValue={initialValue ?? 0}
      layout={FormLayout.Horizontal}
      sliderTestId={sliderTestId}
      numberInputTestId={numberInputTestId}
      min={1}
    ></SliderInputFormField>
  );
}

```

### `web/src/components/memories-form-field.tsx`

```tsx
import { useFetchAllMemoryList } from '@/hooks/use-memory-request';
import { useTranslation } from 'react-i18next';
import { RAGFlowFormItem } from './ragflow-form';
import { MultiSelect } from './ui/multi-select';

type MemoriesFormFieldProps = {
  label: string;
};

export function MemoriesFormField({ label }: MemoriesFormFieldProps) {
  const { t } = useTranslation();
  const memoryList = useFetchAllMemoryList();

  const options = memoryList.data?.map((memory) => ({
    label: memory.name,
    value: memory.id,
  }));

  return (
    <RAGFlowFormItem name="memory_ids" label={label}>
      {(field) => (
        <MultiSelect
          options={options || []}
          placeholder={t('common.pleaseSelect')}
          maxCount={100}
          onValueChange={field.onChange}
          defaultValue={field.value}
          modalPopover
        />
      )}
    </RAGFlowFormItem>
  );
}

```

### `web/src/components/message-input/index.less`

```less
.messageInputWrapper {
  margin-inline-end: 20px;
  padding: '0px 0px 10px 0px';
  border: 1px solid #d9d9d9;
  &:hover {
    border-color: #40a9ff;
    box-shadow: #40a9ff;
  }
  border-radius: 8px;
  :global(.ant-input-affix-wrapper) {
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }
}

.documentCard {
  :global(.ant-card-body) {
    padding: 10px;
    position: relative;
    width: 100%;
  }
}
.listWrapper {
  padding: 0 10px;
  overflow: auto;
  max-height: 170px;
  width: 100%;
}
.inputWrapper {
  border-radius: 8px;
}
.deleteIcon {
  position: absolute;
  inset-inline-end: -4px;
  top: -4px;
  color: #d92d20;
}

```

### `web/src/components/modal-manager.tsx`

```tsx
import { useState } from 'react';

export interface IModalManagerChildrenProps {
  showModal(): void;
  hideModal(): void;
  visible: boolean;
}
interface IProps {
  children: (props: IModalManagerChildrenProps) => React.ReactNode;
}

const ModalManager = ({ children }: IProps) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  return children({ visible, showModal, hideModal });
};

export default ModalManager;

```

### `web/src/components/more-button.tsx`

```tsx
import { cn } from '@/lib/utils';
import { Ellipsis } from 'lucide-react';
import React from 'react';
import { Button, ButtonProps } from './ui/button';

export const MoreButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function MoreButton({ className, size, ...props }, ref) {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size={size || 'icon-xs'}
        className={cn(
          'opacity-0 size-3.5 transition-all bg-transparent group-hover:bg-transparent',
          'group-focus-within:opacity-100 group-hover:opacity-100 aria-expanded:opacity-100',
          className,
        )}
        {...props}
      >
        <Ellipsis />
      </Button>
    );
  },
);

```

### `web/src/components/next-message-item/utils.ts`

```ts
import { currentReg, parseCitationIndex } from '@/utils/chat';

export const extractNumbersFromMessageContent = (content: string) => {
  const matches = content.match(currentReg);
  if (matches) {
    const list = matches
      .map((match) => {
        const parsed = parseCitationIndex(match);
        return Number.isNaN(parsed) ? null : parsed;
      })
      .filter((num) => num !== null) as number[];

    return list;
  }
  return [];
};

```

### `web/src/components/originui/calendar/index.less`

```less
.rdp-selected {
  background-color: var(--background-highlight);
}
.range-start {
  background-color: var(--text-secondary);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  button {
    color: rgba(0, 0, 0, 0.8);
  }
}
.range-end {
  background-color: var(--text-secondary);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  button {
    color: rgba(0, 0, 0, 0.8);
  }
}

```

### `web/src/components/originui/password-input.tsx`

```tsx
// https://originui.com/r/comp-23.json

'use client';

import React, { useId, useState } from 'react';
import { Input, InputProps } from '../ui/input';

export default React.forwardRef<HTMLInputElement, InputProps>(
  function PasswordInput({ ...props }, ref) {
    const id = useId();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="*:not-first:mt-2">
        {/* <Label htmlFor={id}>Show/hide password input</Label> */}
        <div className="relative">
          <Input
            id={id}
            className="pe-9"
            placeholder="Password"
            type={isVisible ? 'text' : 'password'}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);

```

### `web/src/components/page-header.tsx`

```tsx
import { PropsWithChildren } from 'react';

export function PageHeader({ children }: PropsWithChildren) {
  return (
    <header className="flex justify-between items-center bg-text-title-invert p-5">
      {children}
    </header>
  );
}

```

### `web/src/components/page-rank-form-field.tsx`

```tsx
import { FormLayout } from '@/constants/form';
import { useTranslate } from '@/hooks/common-hooks';
import { SliderInputFormField } from './slider-input-form-field';

export function PageRankFormField() {
  const { t } = useTranslate('knowledgeConfiguration');

  return (
    <SliderInputFormField
      name={'pagerank'}
      label={t('pageRank')}
      tooltip={t('pageRankTip')}
      defaultValue={0}
      max={100}
      min={0}
      layout={FormLayout.Horizontal}
      sliderTestId="ds-settings-parser-page-rank-slider"
      numberInputTestId="ds-settings-parser-page-rank-input"
    ></SliderInputFormField>
  );
}

export default PageRankFormField;

```

### `web/src/components/pdf-drawer/hooks.ts`

```ts
import { useSetModalState } from '@/hooks/common-hooks';
import { IReferenceChunk } from '@/interfaces/database/chat';
import { useCallback, useState } from 'react';

export const useClickDrawer = () => {
  const { visible, showModal, hideModal } = useSetModalState();
  const [selectedChunk, setSelectedChunk] = useState<IReferenceChunk>(
    {} as IReferenceChunk,
  );
  const [documentId, setDocumentId] = useState<string>('');

  const clickDocumentButton = useCallback(
    (documentId: string, chunk: IReferenceChunk) => {
      showModal();
      setSelectedChunk(chunk);
      setDocumentId(documentId);
    },
    [showModal],
  );

  return {
    clickDocumentButton,
    visible,
    showModal,
    hideModal,
    selectedChunk,
    documentId,
  };
};

```

### `web/src/components/shared-badge.tsx`

```tsx
import { useFetchUserInfo } from '@/hooks/use-user-setting-request';
import { PropsWithChildren } from 'react';

export function SharedBadge({ children }: PropsWithChildren) {
  const { data: userInfo } = useFetchUserInfo();

  if (typeof children === 'string' && userInfo.nickname === children) {
    return null;
  }

  return (
    <span
      title={typeof children === 'string' ? children : undefined}
      className="inline-block max-w-[120px] truncate align-middle bg-bg-card rounded-sm px-1 text-xs"
    >
      {children}
    </span>
  );
}

```

### `web/src/components/skeleton-card.tsx`

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type SkeletonCardProps = {
  className?: string;
};
export function SkeletonCard(props: SkeletonCardProps) {
  const { className } = props;
  return (
    <div className={cn('space-y-4', className)}>
      <Skeleton className="h-8 w-full bg-bg-card rounded-lg" />
      <Skeleton className="h-8 w-4/5 bg-bg-card rounded-lg" />
      <Skeleton className="h-8 w-3/5 bg-bg-card rounded-lg" />
    </div>
  );
}

```

### `web/src/components/table-skeleton.tsx`

```tsx
import { t } from 'i18next';
import { Loader2 } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { TableCell, TableRow } from './ui/table';

type IProps = { columnsLength: number };

function Row({ children, columnsLength }: PropsWithChildren & IProps) {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength} className="h-24 text-center">
        {children}
      </TableCell>
    </TableRow>
  );
}

export function TableSkeleton({
  columnsLength,
  children,
}: PropsWithChildren & IProps) {
  return (
    <Row columnsLength={columnsLength}>
      {children || (
        <Loader2 className="animate-spin size-16 inline-block text-gray-400" />
      )}
    </Row>
  );
}

export function TableEmpty({ columnsLength }: { columnsLength: number }) {
  return <Row columnsLength={columnsLength}>{t('common.noResults')}</Row>;
}

```

### `web/src/components/toc-enhance-form-field.tsx`

```tsx
import { useTranslation } from 'react-i18next';
import { SwitchFormField } from './switch-fom-field';

type Props = { name: string };

export function TOCEnhanceFormField({ name }: Props) {
  const { t } = useTranslation();

  return (
    <SwitchFormField
      name={name}
      label={t('chat.tocEnhance')}
      tooltip={t('chat.tocEnhanceTip')}
    ></SwitchFormField>
  );
}

```

### `web/src/components/top-n-item.tsx`

```tsx
import { FormLayout } from '@/constants/form';
import { useTranslate } from '@/hooks/common-hooks';
import { z } from 'zod';
import { SliderInputFormField } from './slider-input-form-field';

interface SimilaritySliderFormFieldProps {
  max?: number;
}

export const topnSchema = {
  top_n: z.number().optional(),
};

export function TopNFormField({ max = 30 }: SimilaritySliderFormFieldProps) {
  const { t } = useTranslate('chat');

  return (
    <SliderInputFormField
      name={'top_n'}
      label={t('topN')}
      max={max}
      tooltip={t('topNTip')}
      layout={FormLayout.Vertical}
    ></SliderInputFormField>
  );
}

```

### `web/src/components/ui/aspect-ratio.tsx`

```tsx
'use client';

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };

```

### `web/src/components/ui/collapsible.tsx`

```tsx
'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };

```

### `web/src/components/ui/label.tsx`

```tsx
'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-secondary',
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

### `web/src/components/ui/progress.tsx`

```tsx
'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-bg-accent',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-accent-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

### `web/src/components/ui/separator.tsx`

```tsx
'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border-button',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

```

### `web/src/components/ui/skeleton.tsx`

```tsx
import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-bg-card', className)}
      {...props}
    />
  );
}

function ParagraphSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="w-64">
      <Skeleton className="mb-3 h-28 rounded-xl" />
      <Skeleton className="mb-2 h-4" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

export { CardSkeleton, ParagraphSkeleton, Skeleton };

```

### `web/src/components/ui/sonner.tsx`

```tsx
'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

```

### `web/src/components/ui/toaster.tsx`

```tsx
'use client';

import { useToast } from '@/components/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

```

### `web/src/components/use-knowledge-graph-item.tsx`

```tsx
import { useTranslation } from 'react-i18next';
import { SwitchFormField } from './switch-fom-field';

interface UseKnowledgeGraphFormFieldProps {
  name: string;
}

export function UseKnowledgeGraphFormField({
  name,
}: UseKnowledgeGraphFormFieldProps) {
  const { t } = useTranslation();

  return (
    <SwitchFormField
      name={name}
      label={t('chat.useKnowledgeGraph')}
      tooltip={t('chat.useKnowledgeGraphTip')}
    ></SwitchFormField>
  );
}

```

### `web/src/components/webhook-response-status.tsx`

```tsx
import { useTranslation } from 'react-i18next';
import { RAGFlowFormItem } from './ragflow-form';
import { Input } from './ui/input';

type WebHookResponseStatusFormFieldProps = {
  name: string;
};

export function WebHookResponseStatusFormField({
  name,
}: WebHookResponseStatusFormFieldProps) {
  const { t } = useTranslation();

  return (
    <RAGFlowFormItem name={name} label={t('flow.webhook.status')}>
      <Input type="number"></Input>
    </RAGFlowFormItem>
  );
}

```

### `web/src/components/what-is-this.tsx`

```tsx
import { LucideCircleQuestionMark } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function WhatIsThis({ children }: React.PropsWithChildren<{}>) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <LucideCircleQuestionMark className="size-[1em]" />
      </TooltipTrigger>

      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
}

```

### `web/src/components/xyflow/base-node.tsx`

```tsx
import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const BaseNode = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { selected?: boolean }
>(({ className, selected, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative rounded bg-card text-card-foreground',
      className,
      selected ? 'border-muted-foreground shadow-lg' : '',
    )}
    tabIndex={0}
    {...props}
  />
));

BaseNode.displayName = 'BaseNode';

```

### `web/src/conf.json`

```json
{
  "appName": "RAGFlow"
}

```

### `web/src/constants/authorization.ts`

```ts
export const Authorization = 'Authorization';
export const Token = 'token';
export const UserInfo = 'userInfo';

```

### `web/src/constants/file.ts`

```ts
export const FileIconMap = {
  doc: 'doc',
  docx: 'doc',
  pdf: 'pdf',
  xls: 'excel',
  xlsx: 'excel',
  ppt: 'ppt',
  pptx: 'ppt',
  jpg: 'jpg',
  jpeg: 'jpg',
  png: 'png',
  txt: 'text',
  csv: 'pdf',
  md: 'md',
  mdx: 'md',
  mp4: 'mp4',
  avi: 'avi',
  mkv: 'mkv',
  rmvb: 'rmvb',
  wav: 'wav',
};

```

### `web/src/constants/form.ts`

```ts
export enum FormLayout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Inline = 'inline',
}

```

### `web/src/constants/permission.ts`

```ts
export enum PermissionRole {
  Me = 'me',
  Team = 'team',
}

```

### `web/src/custom.d.ts`

```ts
type Nullable<T> = T | null;

declare module '*.md' {
  const content: string;
  export default content;
}

declare module 'jsoneditor' {
  const JSONEditor: any;
  export default JSONEditor;
  export = JSONEditor;
}

```

### `web/src/global.less`

```less
@import url(./inter.less);

:root {
  --font-sans: 'Inter';
}

@supports (font-variation-settings: normal) {
  :root {
    --font-sans: 'InterVariable';
  }
}

html,
body,
#root {
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;

  margin: 0;
  padding: 0;
}

.vue-office-excel {
  height: 100%;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(219, 218, 218);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}

```

### `web/src/hooks/logic-hooks/use-build-options.ts`

```ts
import { SwitchLogicOperator } from '@/constants/agent';
import { buildOptions } from '@/utils/form';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useBuildSwitchLogicOperatorOptions() {
  const { t } = useTranslation();
  return buildOptions(
    SwitchLogicOperator,
    t,
    'flow.switchLogicOperatorOptions',
  );
}

export function useBuildModelTypeOptions() {
  const { t } = useTranslation();

  const buildModelTypeOptions = useCallback(
    (list: string[]) => {
      return list.map((x) => ({
        value: x,
        label: t(`setting.modelTypes.${x}`),
      }));
    },
    [t],
  );

  return {
    buildModelTypeOptions,
  };
}

```

### `web/src/hooks/logic-hooks/use-change-search.ts`

```ts
import { useCallback, useState } from 'react';

export const useHandleSearchStrChange = () => {
  const [searchString, setSearchString] = useState('');
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setSearchString(value);
    },
    [],
  );

  return { handleInputChange, searchString };
};

```

### `web/src/hooks/logic-hooks/use-pagination.ts`

```ts
import { useCallback, useMemo, useState } from 'react';

export function useClientPagination(list: Array<any>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onPaginationChange = useCallback((page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  }, []);

  const pagedList = useMemo(() => {
    return list?.slice((page - 1) * pageSize, page * pageSize);
  }, [list, page, pageSize]);

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
    onPaginationChange,
    pagedList,
  };
}

```

### `web/src/hooks/plugin-hooks.tsx`

```tsx
import { ILLMTools } from '@/interfaces/database/plugin';
import pluginService from '@/services/plugin-service';
import { useQuery } from '@tanstack/react-query';

export const useLlmToolsList = (): ILLMTools => {
  const { data } = useQuery({
    queryKey: ['llmTools'],
    initialData: [],
    queryFn: async () => {
      const { data } = await pluginService.getLlmTools();

      return data?.data ?? [];
    },
  });

  return data;
};

```

### `web/src/hooks/use-callback-ref.ts`

```ts
import * as React from 'react';

/**
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/use-callback-ref/src/useCallbackRef.tsx
 */

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
function useCallbackRef<T extends (...args: never[]) => unknown>(
  callback: T | undefined,
): T {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  // https://github.com/facebook/react/issues/19240
  return React.useMemo(
    () => ((...args) => callbackRef.current?.(...args)) as T,
    [],
  );
}

export { useCallbackRef };

```

### `web/src/hooks/use-memory-request.ts`

```ts
import { IMemory } from '@/interfaces/database/memory';
import memoryService from '@/services/memory-service';
import { useQuery } from '@tanstack/react-query';

export const enum MemoryApiAction {
  FetchMemoryList = 'fetchMemoryList',
}

export const useFetchAllMemoryList = () => {
  const { data, isLoading, isError, refetch } = useQuery<IMemory[], Error>({
    queryKey: [MemoryApiAction.FetchMemoryList],
    queryFn: async () => {
      const { data: response } = await memoryService.getMemoryList(
        {
          params: { page_size: 100000000, page: 1 },
          data: {},
        },
        true,
      );
      return response.data.memory_list ?? [];
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

```

### `web/src/hooks/use-system-request.ts`

```ts
import userService from '@/services/user-service';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook to fetch system configuration including register enable status
 * @returns System configuration with loading status
 */
export const useSystemConfig = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['systemConfig'],
    queryFn: async () => {
      const { data = {} } = await userService.getSystemConfig();
      return data.data || { registerEnabled: 1 }; // Default to enabling registration
    },
  });

  return { config: data, loading: isLoading };
};

```

### `web/src/interfaces/common.ts`

```ts
export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
  onChange?: (page: number, pageSize: number) => void;
}

export interface BaseState {
  pagination: Pagination;
  searchString: string;
}

export interface IModalProps<T> {
  showModal?(): void;
  hideModal?(): void;
  switchVisible?(visible: boolean): void;
  visible?: boolean;
  loading?: boolean;
  onOk?(payload?: T): Promise<any> | void;
  initialValues?: T;
}

```

### `web/src/interfaces/database/base.ts`

```ts
export interface ResponseType<T = any> {
  code: number;
  data: T;
  message: string;
  status: number;
}

export interface ResponseGetType<T = any> {
  data: T;
  loading?: boolean;
}

export interface ResponsePostType<T = any> {
  data: T;
  loading?: boolean;
  [key: string]: unknown;
}

```

### `web/src/interfaces/database/file-manager.ts`

```ts
export interface IFile {
  create_date: string;
  create_time: number;
  created_by: string;
  id: string;
  kbs_info: { kb_id: string; kb_name: string }[];
  location: string;
  name: string;
  parent_id: string;
  size: number;
  tenant_id: string;
  type: string;
  update_date: string;
  update_time: number;
  source_type: string;
  has_child_folder?: boolean;
}

export interface IFolder {
  create_date: string;
  create_time: number;
  created_by: string;
  id: string;
  location: string;
  name: string;
  parent_id: string;
  size: number;
  tenant_id: string;
  type: string;
  update_date: string;
  update_time: number;
  source_type: string;
}

export type IFetchFileListResult = {
  files: IFile[];
  parent_folder: IFolder;
  total: number;
};

```

### `web/src/interfaces/database/llm.ts`

```ts
export interface IThirdOAIModel {
  available: boolean;
  create_date: string;
  create_time: number;
  fid: string;
  id: number;
  llm_name: string;
  max_tokens: number;
  model_type: string;
  status: string;
  tags: string;
  update_date: string;
  update_time: number;
  tenant_id?: string;
  tenant_name?: string;
  is_tools: boolean;
}

export type IThirdOAIModelCollection = Record<string, IThirdOAIModel[]>;

export interface IFactory {
  create_date: string;
  create_time: number;
  logo: string;
  name: string;
  status: string;
  tags: string;
  update_date: string;
  update_time: number;
}

export interface IMyLlmValue {
  llm: Llm[];
  tags: string;
}

export interface Llm {
  name: string;
  type: string;
  status: '0' | '1';
  used_token: number;
}

```

### `web/src/interfaces/database/mcp-server.ts`

```ts
export enum McpServerType {
    Sse = 'sse',
    StreamableHttp = 'streamable-http',
}

export interface IMcpServerVariable {
    key: string;
    name: string;
}

export interface IMcpServerInfo {
    id: string;
    name: string;
    url: string;
    server_type: McpServerType;
    description?: string;
    variables?: IMcpServerVariable[];
    headers: Map<string, string>;
}

```

### `web/src/interfaces/database/memory.ts`

```ts
export interface IMemory {
  avatar: null;
  description: null;
  id: string;
  memory_type: string[];
  name: string;
  owner_name: string;
  permissions: string;
  storage_type: string;
  tenant_id: string;
}

```

### `web/src/interfaces/database/plugin.ts`

```ts
export type ILLMTools = ILLMToolMetadata[];

export interface ILLMToolMetadata {
    name: string;
    displayName: string;
    displayDescription: string;
    parameters: Map<string, ILLMToolParameter>;
}

export interface ILLMToolParameter {
    type: string;
    displayDescription: string;
}

```

### `web/src/interfaces/database/system.ts`

```ts
export interface ILangfuseConfig {
  secret_key: string;
  public_key: string;
  host: string;
  project_id: string;
  project_name: string;
}

```

### `web/src/interfaces/request/agent.ts`

```ts
export interface IDebugSingleRequestBody {
  component_id: string;
  params: Record<string, any>;
}

export interface IAgentWebhookTraceRequest {
  since_ts: number; // From the first request for return
  webhook_id: string; // Each external request generates a unique webhook ID.
}

```

### `web/src/interfaces/request/base.ts`

```ts
export interface IPaginationRequestBody {
  keywords?: string;
  page?: number;
  page_size?: number; // name|create|doc_num|create_time|update_time, default：create_time
  orderby?: string;
  desc?: string;
}

```

### `web/src/interfaces/request/chat.ts`

```ts
export interface IFeedbackRequestBody {
  messageId?: string;
  thumbup?: boolean;
  feedback?: string;
}

export interface IAskRequestBody {
  question: string;
  kb_ids: string[];
  search_id?: string;
}

```

### `web/src/interfaces/request/document.ts`

```ts
export interface IChangeParserConfigRequestBody {
  pages?: number[][];
  chunk_token_num?: number;
  layout_recognize?: string;
  task_page_size?: number;
  delimiter?: string;
  auto_keywords?: number;
  auto_questions?: number;
  html4excel?: boolean;
  toc_extraction?: boolean;
  image_table_context_window?: number;
  image_context_size?: number;
  table_context_size?: number;
  // Metadata fields
  metadata?: Array<{
    key?: string;
    description?: string;
    enum?: string[];
  }>;
  built_in_metadata?: Array<{
    key?: string;
    description?: string;
    enum?: string[];
  }>;
  enable_metadata?: boolean;
}

export interface IChangeParserRequestBody {
  parser_id: string;
  pipeline_id: string;
  doc_id: string;
  parser_config: IChangeParserConfigRequestBody;
}

export interface IDocumentMetaRequestBody {
  documentId: string;
  meta: string; // json format string
}

```

### `web/src/interfaces/request/file-manager.ts`

```ts
import { IPaginationRequestBody } from './base';

export interface IFileListRequestBody extends IPaginationRequestBody {
  parent_id?: string; // folder id
}

interface BaseRequestBody {
  parentId: string;
}

export interface IConnectRequestBody {
  fileIds: string[];
  kbIds: string[];
}

```

### `web/src/interfaces/request/flow.ts`

```ts
export interface IDebugSingleRequestBody {
  component_id: string;
  params: any[];
}

```

### `web/src/interfaces/request/knowledge.ts`

```ts
export interface ITestRetrievalRequestBody {
  question: string;
  similarity_threshold: number;
  vector_similarity_weight: number;
  rerank_id?: string;
  top_k?: number;
  use_kg?: boolean;
  highlight?: boolean;
  kb_id?: string[];
  meta_data_filter?: {
    logic?: string;
    method?: string;
    manual?: Array<{
      key: string;
      op: string;
      value: string;
    }>;
    semi_auto?: string[];
  };
}

export interface IFetchKnowledgeListRequestBody {
  owner_ids?: string[];
}

export interface IFetchKnowledgeListRequestParams {
  id?: string;
  page?: number;
  page_size?: number;
  ext?: {
    keywords?: string;
    owner_ids?: string[];
    parser_id?: string;
  };
}

export interface IFetchDocumentListRequestBody {
  suffix?: string[];
  run_status?: string[];
  return_empty_metadata?: boolean;
  metadata?: Record<string, string[]>;
}

```

### `web/src/interfaces/request/llm.ts`

```ts
export interface IAddLlmRequestBody {
  llm_factory: string; // Ollama
  llm_name: string;
  model_type: string;
  api_base?: string; // chat|embedding|speech2text|image2text
  api_key?: string | Record<string, any>;
  max_tokens: number;
}

export interface IDeleteLlmRequestBody {
  llm_factory: string; // Ollama
  llm_name?: string;
}

```

### `web/src/interfaces/request/mcp.ts`

```ts
import { IExportedMcpServer } from '@/interfaces/database/mcp';

export interface ITestMcpRequestBody {
  server_type: string;
  url: string;
  headers?: Record<string, any>;
  variables?: Record<string, any>;
  timeout?: number;
}

export interface IImportMcpServersRequestBody {
  mcpServers: Record<
    string,
    Pick<IExportedMcpServer, 'type' | 'url' | 'authorization_token'>
  >;
}

```

### `web/src/interfaces/request/system.ts`

```ts
export interface ISetLangfuseConfigRequestBody {
  secret_key: string;
  public_key: string;
  host: string;
}

```

### `web/src/layouts/components/bell-button.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { Routes } from '@/routes';
import { BellRing } from 'lucide-react';

export function BellButton() {
  return (
    <Button
      asLink
      to={`${Routes.UserSetting}${Routes.Team}`}
      variant="ghost"
      size="icon"
      className="group"
      dot
    >
      <BellRing className="size-4 animate-bell-shake group-hover:animate-none" />
    </Button>
  );
}

```

### `web/src/layouts/components/page-container.tsx`

```tsx
import { cn } from '@/lib/utils';

/**
 * Basic page container:
 * - Full size
 * - Padding x=2.5rem top=0.75rem
 * - Auto scrollbar
 */
export function PageContainer({
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn('size-full px-5 py-3 overflow-auto', className)}
      {...props}
    />
  );
}

```

### `web/src/layouts/components/theme-button.tsx`

```tsx
import { LucideMoon, LucideSun } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { ThemeEnum } from '@/constants/common';

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={() =>
        setTheme(theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark)
      }
    >
      {theme === ThemeEnum.Light ? <LucideSun /> : <LucideMoon />}
    </Button>
  );
}

```

### `web/src/layouts/root-layout.tsx`

```tsx
import { Outlet } from 'react-router';
import { Header } from './components/header';

export function RootLayoutContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="size-full grid grid-rows-[auto_1fr] grid-cols-1 grid-flow-col">
      <Header className="px-5 py-4" />

      <main className="size-full overflow-hidden">{children}</main>
    </div>
  );
}

export default function RootLayout() {
  return (
    <RootLayoutContainer>
      <Outlet />
    </RootLayoutContainer>
  );
}

```

### `web/src/less/index.less`

```less
@import './variable.less';
@import './mixins.less';

```

### `web/src/less/variable.less`

```less
@fontWeight600: 600;
@fontWeight700: 700;

@grayBackground: rgba(247, 248, 250, 0.1);
@gray2: rgba(29, 25, 41, 1);
@gray3: rgba(52, 48, 62, 1);
@gray8: rgba(165, 163, 169, 1);
@gray11: rgba(232, 232, 234, 1);
@purple: rgba(127, 86, 217, 1);
@selectedBackgroundColor: rgba(239, 248, 255, 1);
@blurBackground: rgba(22, 119, 255, 0.5);
@blurBackgroundHover: rgba(22, 119, 255, 0.2);

@fontSize12: 12px;
@fontSize14: 14px;
@fontSize16: 16px;
@fontSize18: 18px;

```

### `web/src/main.tsx`

```tsx
import React from 'react';
import { gotoVSCode, Inspector } from 'react-dev-inspector';
import ReactDOM from 'react-dom/client';
import '../tailwind.css';
import App from './app';
import './global.less';
import { initLanguage } from './locales/config';

initLanguage().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Inspector keys={['alt', 'c']} onInspectElement={gotoVSCode} />
      <App />
    </React.StrictMode>,
  );
});

```

### `web/src/pages/404.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { Routes } from '@/routes';
import { useLocation, useNavigate } from 'react-router';

const NoFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-6xl font-bold text-text-secondary mb-4">404</div>
      <div className="text-lg text-text-secondary mb-8">
        Page not found, please enter a correct address.
      </div>
      <Button
        onClick={() => {
          navigate(
            location.pathname.startsWith(Routes.Admin) ? Routes.Admin : '/',
          );
        }}
      >
        Business
      </Button>
    </div>
  );
};

export default NoFoundPage;

```

### `web/src/pages/admin/components/enterprise-feature.tsx`

```tsx
import { IS_ENTERPRISE } from '../utils';

export default function EnterpriseFeature({
  children,
}: {
  children: React.ReactNode | (() => React.ReactNode);
}) {
  return IS_ENTERPRISE
    ? typeof children === 'function'
      ? children()
      : children
    : null;
}

```

### `web/src/pages/admin/layouts/authorized-layout.tsx`

```tsx
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';

import { Routes } from '@/routes';
import authorizationUtil from '@/utils/authorization-util';
import { CurrentUserInfoContext } from './root-layout';

export default function AdminAuthorizedLayout() {
  const [{ userInfo }] = useContext(CurrentUserInfoContext);
  const isLoggedIn = !!authorizationUtil.getAuthorization() && userInfo;

  return isLoggedIn ? <Outlet /> : <Navigate to={Routes.Admin} />;
}

```

### `web/src/pages/admin/monitoring.tsx`

```tsx
import Spotlight from '@/components/spotlight';
import { Card, CardContent } from '@/components/ui/card';

function AdminMonitoring() {
  return (
    <Card className="!shadow-none relative h-full border-0.5 border-border-button bg-transparent rounded-xl overflow-x-hidden overflow-y-auto">
      <Spotlight />

      <CardContent className="size-full p-0">
        <iframe
          className="size-full"
          src={`${location.protocol}//${location.hostname}:9090/alerts`}
        />
      </CardContent>
    </Card>
  );
}

export default AdminMonitoring;

```

### `web/src/pages/agent/canvas/context-menu/index.module.less`

```less
.contextMenu {
  background: rgba(255, 255, 255, 0.1);
  border-style: solid;
  box-shadow: 10px 19px 20px rgba(0, 0, 0, 10%);
  position: absolute;
  z-index: 10;
  button {
    border: none;
    display: block;
    padding: 0.5em;
    text-align: start;
    width: 100%;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

```

### `web/src/pages/agent/canvas/index.module.less`

```less
.canvasWrapper {
  position: relative;
  height: calc(100% - 64px);
  :global(.react-flow__node-group) {
    .commonNode();
    border-radius: 0 0 10px 10px;
    padding: 0;
    border: 0;
    background-color: transparent;
  }
  :global(.react-flow__node-group.selectable.selected) {
    box-shadow: none;
  }
}

```

### `web/src/pages/agent/canvas/node/data-operations-node.tsx`

```tsx
import { BaseNode } from '@/interfaces/database/agent';
import { NodeProps } from '@xyflow/react';
import { camelCase } from 'lodash';
import { useTranslation } from 'react-i18next';
import { RagNode } from '.';
import { DataOperationsFormSchemaType } from '../../form/data-operations-form';
import { LabelCard } from './card';

export function DataOperationsNode({
  ...props
}: NodeProps<BaseNode<DataOperationsFormSchemaType>>) {
  const { data } = props;
  const { t } = useTranslation();
  const operations = data.form?.operations;

  return (
    <RagNode {...props}>
      <LabelCard>
        {operations && t(`flow.operationsOptions.${camelCase(operations)}`)}
      </LabelCard>
    </RagNode>
  );
}

```

### `web/src/pages/agent/canvas/node/exit-loop-node.tsx`

```tsx
import { BaseNode } from '@/interfaces/database/agent';
import { NodeProps } from '@xyflow/react';
import { LeftEndHandle } from './handle';
import NodeHeader from './node-header';
import { NodeWrapper } from './node-wrapper';
import { ToolBar } from './toolbar';

export function ExitLoopNode({ id, data, selected }: NodeProps<BaseNode<any>>) {
  return (
    <ToolBar
      selected={selected}
      id={id}
      label={data.label}
      showRun={false}
      showCopy={false}
    >
      <NodeWrapper selected={selected} id={id}>
        <LeftEndHandle></LeftEndHandle>
        <NodeHeader id={id} name={data.name} label={data.label}></NodeHeader>
      </NodeWrapper>
    </ToolBar>
  );
}

```

### `web/src/pages/agent/canvas/node/extractor-node.tsx`

```tsx
import { IRagNode } from '@/interfaces/database/agent';
import { NodeProps } from '@xyflow/react';
import { get } from 'lodash';
import { LLMLabelCard } from './card';
import { RagNode } from './index';

export function ExtractorNode({ ...props }: NodeProps<IRagNode>) {
  const { data } = props;

  return (
    <RagNode {...props}>
      <LLMLabelCard llmId={get(data, 'form.llm_id')}></LLMLabelCard>
    </RagNode>
  );
}

```

### `web/src/pages/agent/canvas/node/handle-icon.tsx`

```tsx
import { PlusOutlined } from '@ant-design/icons';
import { CSSProperties } from 'react';

export const HandleIcon = () => {
  return (
    <PlusOutlined
      style={{ fontSize: 6, color: 'white', position: 'absolute', zIndex: 10 }}
    />
  );
};

export const RightHandleStyle: CSSProperties = {
  right: 0,
};

export const LeftHandleStyle: CSSProperties = {
  left: 0,
};

export default HandleIcon;

```

### `web/src/pages/agent/canvas/node/list-operations-node.tsx`

```tsx
import { BaseNode } from '@/interfaces/database/agent';
import { NodeProps } from '@xyflow/react';
import { camelCase } from 'lodash';
import { useTranslation } from 'react-i18next';
import { RagNode } from '.';
import { ListOperationsFormSchemaType } from '../../form/list-operations-form';
import { LabelCard } from './card';

export function ListOperationsNode({
  ...props
}: NodeProps<BaseNode<ListOperationsFormSchemaType>>) {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <RagNode {...props}>
      <LabelCard>
        {t(`flow.ListOperationsOptions.${camelCase(data.form?.operations)}`)}
      </LabelCard>
    </RagNode>
  );
}

```

### `web/src/pages/agent/canvas/node/loop-node.tsx`

```tsx
import { BaseNode } from '@/interfaces/database/agent';
import { NodeProps } from '@xyflow/react';
import { memo } from 'react';
import { InnerIterationNode, InnerIterationStartNode } from './iteration-node';

export function InnerLoopNode({ ...props }: NodeProps<BaseNode<any>>) {
  return <InnerIterationNode {...props}></InnerIterationNode>;
}

export const LoopNode = memo(InnerLoopNode);

export function InnerLoopStartNode({ ...props }: NodeProps<BaseNode<any>>) {
  return <InnerIterationStartNode {...props}></InnerIterationStartNode>;
}

export const LoopStartNode = memo(InnerLoopStartNode);

```

### `web/src/pages/agent/canvas/node/node-header.tsx`

```tsx
import { cn } from '@/lib/utils';
import { memo } from 'react';
import { Operator } from '../../constant';
import OperatorIcon from '../../operator-icon';
interface IProps {
  id: string;
  label: string;
  name: string;
  gap?: number;
  className?: string;
  wrapperClassName?: string;
  icon?: React.ReactNode;
}

const InnerNodeHeader = ({
  label,
  name,
  className,
  wrapperClassName,
  icon,
}: IProps) => {
  return (
    <section className={cn(wrapperClassName, 'pb-2')}>
      <div className={cn(className, 'flex gap-2.5')}>
        {icon || <OperatorIcon name={label as Operator}></OperatorIcon>}
        <span className="truncate text-center font-semibold text-sm">
          {name}
        </span>
      </div>
    </section>
  );
};

const NodeHeader = memo(InnerNodeHeader);

export default NodeHeader;

```

### `web/src/pages/agent/canvas/node/placeholder-node.tsx`

```tsx
import { Skeleton } from '@/components/ui/skeleton';
import { NodeProps, Position } from '@xyflow/react';
import { memo } from 'react';
import { NodeHandleId } from '../../constant';
import { CommonHandle } from './handle';
import { LeftHandleStyle } from './handle-icon';
import { NodeWrapper } from './node-wrapper';

function InnerPlaceholderNode({ id, selected }: NodeProps) {
  return (
    <NodeWrapper selected={selected}>
      <CommonHandle
        type="target"
        position={Position.Left}
        isConnectable
        style={LeftHandleStyle}
        nodeId={id}
        id={NodeHandleId.End}
      ></CommonHandle>
      <div className="space-y-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </NodeWrapper>
  );
}

export const PlaceholderNode = memo(InnerPlaceholderNode);

```

### `web/src/pages/agent/canvas/node/resize-icon.tsx`

```tsx
export function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="var(--text-disabled)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        position: 'absolute',
        right: 5,
        bottom: 5,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}

export const controlStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'nwse-resize',
};

```

### `web/src/pages/agent/chat/chat-sheet.tsx`

```tsx
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { IModalProps } from '@/interfaces/common';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useIsTaskMode } from '../hooks/use-get-begin-query';
import AgentChatBox from './box';

export function ChatSheet({ hideModal }: IModalProps<any>) {
  const { t } = useTranslation();
  const isTaskMode = useIsTaskMode();

  return (
    <Sheet open modal={false} onOpenChange={hideModal}>
      <SheetContent
        data-testid="agent-run-chat"
        className={cn('top-20 bottom-0 p-0 flex flex-col h-auto')}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetTitle className="hidden"></SheetTitle>
        <div className="pl-5 pt-2">
          {t(isTaskMode ? 'flow.task' : 'chat.chat')}
        </div>
        <AgentChatBox></AgentChatBox>
      </SheetContent>
    </Sheet>
  );
}

```

### `web/src/pages/agent/chat/use-get-file-icon.tsx`

```tsx
import { fileIconMap } from '@/constants/common';
import { getFileExtension } from '@/utils';

export const useGetFileIcon = () => {
  const getFileIcon = (filename: string) => {
    const ext: string = getFileExtension(filename);
    const iconPath = fileIconMap[ext as keyof typeof fileIconMap];
    return `@/assets/svg/file-icon/${iconPath}`;
  };

  return getFileIcon;
};

```

### `web/src/pages/agent/flow-tooltip.tsx`

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

export const RunTooltip = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{t('flow.testRun')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

```

### `web/src/pages/agent/form-sheet/single-debug-sheet/utils.test.ts`

```ts
import { Operator } from '../../constant';
import { shouldUseCodeExecDebugLayout } from './utils';

describe('shouldUseCodeExecDebugLayout', () => {
  it('returns true only for CodeExec nodes', () => {
    expect(shouldUseCodeExecDebugLayout(Operator.Code)).toBe(true);
    expect(shouldUseCodeExecDebugLayout(Operator.Http)).toBe(false);
    expect(shouldUseCodeExecDebugLayout(undefined)).toBe(false);
  });
});

```

### `web/src/pages/agent/form/agent-form/use-get-tools.ts`

```ts
import { IAgentForm } from '@/interfaces/database/agent';
import { get } from 'lodash';
import { useContext, useMemo } from 'react';
import { AgentFormContext } from '../../context';

export function useGetNodeTools() {
  const node = useContext(AgentFormContext);
  return get(node, 'data.form.tools', []) as IAgentForm['tools'];
}

export function useGetAgentToolNames() {
  const node = useContext(AgentFormContext);

  const toolNames = useMemo(() => {
    const tools: IAgentForm['tools'] = get(node, 'data.form.tools', []);
    return tools.map((x) => x.component_name);
  }, [node]);

  return { toolNames };
}

export function useGetAgentMCPIds() {
  const node = useContext(AgentFormContext);

  const mcpIds = useMemo(() => {
    const ids: IAgentForm['mcp'] = get(node, 'data.form.mcp', []);
    return ids.map((x) => x.mcp_id);
  }, [node]);

  return { mcpIds };
}

```

### `web/src/pages/agent/form/agent-form/use-watch-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { PromptRole } from '../../constant';
import useGraphStore from '../../store';

export function useWatchFormChange(id?: string, form?: UseFormReturn<any>) {
  let values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id && form?.formState.isDirty) {
      values = form?.getValues();
      const nextValues: any = {
        ...values,
        prompts: [{ role: PromptRole.User, content: values.prompts }],
      };

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/form/begin-form/use-show-schema-dialog.tsx`

```tsx
import { JSONSchema } from '@/components/jsonjoy-builder';
import { useSetModalState } from '@/hooks/common-hooks';
import { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

export function useShowSchemaDialog(form: UseFormReturn<any>) {
  const {
    visible: schemaDialogVisible,
    showModal: showSchemaDialog,
    hideModal: hideSchemaDialog,
  } = useSetModalState();

  const handleSchemaDialogOk = useCallback(
    (values: JSONSchema) => {
      // Sync data to canvas
      form.setValue('schema', values);
      hideSchemaDialog();
    },
    [form, hideSchemaDialog],
  );

  return {
    schemaDialogVisible,
    showSchemaDialog,
    hideSchemaDialog,
    handleSchemaDialogOk,
  };
}

```

### `web/src/pages/agent/form/begin-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AgentDialogueMode } from '../../constant';
import { buildBeginInputListFromObject } from './utils';

export function useValues(node?: RAGFlowNodeType) {
  const { t } = useTranslation();

  const defaultValues = useMemo(
    () => ({
      enablePrologue: true,
      prologue: t('chat.setAnOpenerInitial'),
      mode: AgentDialogueMode.Conversational,
      inputs: [],
    }),
    [t],
  );

  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return defaultValues;
    }

    const inputs = buildBeginInputListFromObject(formData?.inputs);

    return { ...(formData || {}), inputs };
  }, [defaultValues, node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/begin-form/utils.ts`

```ts
import { BeginQuery } from '../../interface';

export function buildBeginInputListFromObject(
  inputs: Record<string, Omit<BeginQuery, 'key'>>,
) {
  return Object.entries(inputs || {}).reduce<BeginQuery[]>(
    (pre, [key, value]) => {
      pre.push({ ...(value || {}), key });

      return pre;
    },
    [],
  );
}

```

### `web/src/pages/agent/form/categorize-form/use-form-schema.ts`

```ts
import { LlmSettingSchema } from '@/components/llm-setting-items/next';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export function useCreateCategorizeFormSchema() {
  const { t } = useTranslation();

  const FormSchema = z.object({
    query: z.string().optional(),
    parameter: z.string().optional(),
    ...LlmSettingSchema,
    message_history_window_size: z.coerce.number(),
    items: z.array(
      z
        .object({
          name: z.string().min(1, t('flow.nameMessage')).trim(),
          description: z.string().optional(),
          uuid: z.string(),
          examples: z
            .array(
              z.object({
                value: z.string(),
              }),
            )
            .optional(),
        })
        .optional(),
    ),
  });

  return FormSchema;
}

export type CreateCategorizeFormSchema = ReturnType<
  typeof useCreateCategorizeFormSchema
>;

```

### `web/src/pages/agent/form/categorize-form/use-values.ts`

```ts
import { ModelVariableType } from '@/constants/knowledge';
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty, isPlainObject } from 'lodash';
import { useMemo } from 'react';

const defaultValues = {
  parameter: ModelVariableType.Precise,
  message_history_window_size: 1,
  temperatureEnabled: true,
  topPEnabled: true,
  presencePenaltyEnabled: true,
  frequencyPenaltyEnabled: true,
  maxTokensEnabled: true,
  items: [],
};

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;
    if (isEmpty(formData)) {
      return defaultValues;
    }
    if (isPlainObject(formData)) {
      // const nextValues = {
      //   ...omit(formData, 'category_description'),
      //   items,
      // };

      return formData;
    }
  }, [node]);

  return values;
}

```

### `web/src/pages/agent/form/categorize-form/use-watch-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';

export function useWatchFormChange(id?: string, form?: UseFormReturn<any>) {
  let values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id) {
      values = form?.getValues();

      updateNodeForm(id, { ...values, items: values.items?.slice() || [] });
    }
  }, [id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/form/code-form/monaco-config.ts`

```ts
export const CodeEditorOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollbar: {
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
  },
};

export const RAGFlowMonacoTheme = {
  Light: 'vs',
  Dark: 'vs-dark',
} as const;

```

### `web/src/pages/agent/form/code-form/schema.ts`

```ts
import { ProgrammingLanguage } from '@/constants/agent';
import { z } from 'zod';
import { isValidCodeOutputName } from './utils';

export const FormSchema = z.object({
  lang: z.enum([ProgrammingLanguage.Python, ProgrammingLanguage.Javascript]),
  script: z.string(),
  arguments: z.array(z.object({ name: z.string(), type: z.string() })),
  output: z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required')
      .refine(
        isValidCodeOutputName,
        'Name cannot use reserved outputs or path syntax',
      ),
    type: z.string().trim().min(1, 'Type is required'),
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

```

### `web/src/pages/agent/form/components/api-key-field.tsx`

```tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { t } from 'i18next';
import { useFormContext } from 'react-hook-form';

interface IApiKeyFieldProps {
  placeholder?: string;
}
export function ApiKeyField({ placeholder }: IApiKeyFieldProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="api_key"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('flow.apiKey')}</FormLabel>
          <FormControl>
            <Input type="password" {...field} placeholder={placeholder}></Input>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

```

### `web/src/pages/agent/form/components/description-field.tsx`

```tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { t } from 'i18next';
import { useFormContext } from 'react-hook-form';

export function DescriptionField() {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={`description`}
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>{t('flow.description')}</FormLabel>
          <FormControl>
            <Textarea {...field}></Textarea>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

```

### `web/src/pages/agent/form/components/dynamic-fom-header.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { FormLabel } from '@/components/ui/form';
import { Plus } from 'lucide-react';
import { ReactNode } from 'react';

export type FormListHeaderProps = {
  label: ReactNode;
  tooltip?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function DynamicFormHeader({
  label,
  tooltip,
  onClick,
  disabled = false,
}: FormListHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <FormLabel tooltip={tooltip}>{label}</FormLabel>
      <Button
        variant={'ghost'}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <Plus />
      </Button>
    </div>
  );
}

```

### `web/src/pages/agent/form/components/form-wrapper.tsx`

```tsx
type FormProps = React.ComponentProps<'form'>;

export function FormWrapper({ children, ...props }: FormProps) {
  return (
    <form
      className="space-y-6 p-4"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      {...props}
    >
      {children}
    </form>
  );
}

```

### `web/src/pages/agent/form/components/index.less`

```less
.dynamicInputVariable {
  background-color: #ebe9e950;
  :global(.ant-collapse-content) {
    background-color: #f6f6f657;
  }
  margin-bottom: 20px;
  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .variableType {
    width: 30%;
  }
  .variableValue {
    flex: 1;
  }

  .addButton {
    color: rgb(22, 119, 255);
    font-weight: 600;
  }
}

```

### `web/src/pages/agent/form/components/json-viewer.tsx`

```tsx
import JsonView from 'react18-json-view';

export function JsonViewer({
  data,
  title,
}: {
  data: Record<string, any>;
  title: string;
}) {
  return (
    <section className="space-y-2">
      <div>{title}</div>
      <JsonView
        src={data}
        displaySize
        collapseStringsAfterLength={100000000000}
        className="w-full h-[200px] break-words overflow-auto scrollbar-auto p-2 bg-muted"
      />
    </section>
  );
}

```

### `web/src/pages/agent/form/components/prompt-editor/constant.ts`

```ts
export const ProgrammaticTag = 'programmatic';

```

### `web/src/pages/agent/form/components/schema-panel.tsx`

```tsx
import { JSONSchema, JsonSchemaVisualizer } from '@/components/jsonjoy-builder';

export function SchemaPanel({ value }: { value: JSONSchema }) {
  return (
    <section className="h-48">
      <JsonSchemaVisualizer
        schema={value}
        readOnly
        showHeader={false}
      ></JsonSchemaVisualizer>
    </section>
  );
}

```

### `web/src/pages/agent/form/components/user-id-form-field.tsx`

```tsx
import { RAGFlowFormItem } from '@/components/ragflow-form';
import { useTranslation } from 'react-i18next';
import { PromptEditor } from './prompt-editor';

export function UserIdFormField() {
  const { t } = useTranslation();

  return (
    <RAGFlowFormItem name="user_id" label={t('flow.userId')}>
      <PromptEditor multiLine={false} showToolbar={false}></PromptEditor>
    </RAGFlowFormItem>
  );
}

```

### `web/src/pages/agent/form/doc-generator-form/use-watch-form-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import useGraphStore from '../../store';

export const useWatchFormChange = (
  nodeId: string | undefined,
  form: UseFormReturn<any>,
) => {
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    const { unsubscribe } = form.watch((value) => {
      if (nodeId) {
        updateNodeForm(nodeId, value);
      }
    });
    return () => unsubscribe();
  }, [form, nodeId, updateNodeForm]);
};

```

### `web/src/pages/agent/form/iteration-form/interface.ts`

```ts
export type OutputArray = Array<{ name: string; ref: string; type?: string }>;
export type OutputObject = Record<string, { ref: string; type?: string }>;

```

### `web/src/pages/agent/form/iteration-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialIterationValues } from '../../constant';
import { OutputObject } from './interface';

function convertToArray(outputObject: OutputObject) {
  return Object.entries(outputObject).map(([key, value]) => ({
    name: key,
    ref: value.ref,
    type: value.type,
  }));
}

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return { ...initialIterationValues, outputs: [] };
    }

    return { ...formData, outputs: convertToArray(formData.outputs) };
  }, [node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/iteration-start-from/index.tsx`

```tsx
import { Output, OutputType } from '@/pages/agent/form/components/output';
import { memo } from 'react';
import { initialIterationStartValues } from '../../constant';

const outputs = initialIterationStartValues.outputs;

const outputList = Object.entries(outputs).reduce<OutputType[]>(
  (pre, [key, value]) => {
    pre.push({ title: key, type: value.type });

    return pre;
  },
  [],
);
function IterationStartForm() {
  return (
    <section className="space-y-6 p-4">
      <Output list={outputList}></Output>
    </section>
  );
}

export default memo(IterationStartForm);

```

### `web/src/pages/agent/form/loop-form/schema.ts`

```ts
import { z } from 'zod';

export const FormSchema = z.object({
  loop_variables: z.array(
    z.object({
      variable: z.string().optional(),
      type: z.string().optional(),
      value: z.string().or(z.number()).or(z.boolean()).optional(),
      input_mode: z.string(),
    }),
  ),
  logical_operator: z.string(),
  loop_termination_condition: z.array(
    z.object({
      variable: z.string().optional(),
      operator: z.string().optional(),
      value: z.string().or(z.number()).or(z.boolean()).optional(),
      input_mode: z.string().optional(),
    }),
  ),
  maximum_loop_count: z.number(),
});

export type LoopFormSchemaType = z.infer<typeof FormSchema>;

```

### `web/src/pages/agent/form/loop-form/use-build-logical-options.ts`

```ts
import { SwitchOperatorOptions } from '@/constants/agent';
import { camelCase, toLower } from 'lodash';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LoopTerminationStringComparisonOperatorMap } from '../../constant';

export function useBuildLogicalOptions() {
  const { t } = useTranslation();

  const buildLogicalOptions = useCallback(
    (type: string) => {
      return LoopTerminationStringComparisonOperatorMap[
        toLower(type) as keyof typeof LoopTerminationStringComparisonOperatorMap
      ]?.map((x) => ({
        label: t(
          `flow.switchOperatorOptions.${camelCase(SwitchOperatorOptions.find((y) => y.value === x)?.label || x)}`,
        ),
        value: x,
      }));
    },
    [t],
  );

  return {
    buildLogicalOptions,
  };
}

```

### `web/src/pages/agent/form/loop-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty, omit } from 'lodash';
import { useMemo } from 'react';

export function useFormValues(
  defaultValues: Record<string, any>,
  node?: RAGFlowNodeType,
) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return omit(defaultValues, 'outputs');
    }

    return omit(formData, 'outputs');
  }, [defaultValues, node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/message-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialMessageValues } from '../../constant';
import { convertToObjectArray } from '../../utils';

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return initialMessageValues;
    }

    return {
      ...formData,
      content: convertToObjectArray(formData.content),
    };
  }, [node]);

  return values;
}

```

### `web/src/pages/agent/form/message-form/use-watch-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';
import { convertToStringArray } from '../../utils';

export function useWatchFormChange(id?: string, form?: UseFormReturn) {
  let values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id && form?.formState.isDirty) {
      values = form?.getValues();
      let nextValues: any = values;

      nextValues = {
        ...values,
        content: convertToStringArray(values.content),
      };

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/form/parser-form/email-form-fields.tsx`

```tsx
import { RAGFlowFormItem } from '@/components/ragflow-form';
import { MultiSelect } from '@/components/ui/multi-select';
import { buildOptions } from '@/utils/form';
import { useTranslation } from 'react-i18next';
import { ParserFields } from '../../constant/pipeline';
import { CommonProps } from './interface';
import { buildFieldNameWithPrefix } from './utils';

const options = buildOptions(ParserFields);

export function EmailFormFields({ prefix }: CommonProps) {
  const { t } = useTranslation();
  return (
    <>
      <RAGFlowFormItem
        name={buildFieldNameWithPrefix(`fields`, prefix)}
        label={t('flow.fields')}
      >
        {(field) => (
          <MultiSelect
            options={options}
            onValueChange={field.onChange}
            defaultValue={field.value}
            variant="inverted"
          ></MultiSelect>
        )}
      </RAGFlowFormItem>
    </>
  );
}

```

### `web/src/pages/agent/form/parser-form/interface.ts`

```ts
export type CommonProps = {
  prefix: string;
};

```

### `web/src/pages/agent/form/parser-form/use-set-initial-language.ts`

```ts
import { crossLanguageOptions } from '@/components/cross-language-form-field';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { buildFieldNameWithPrefix } from './utils';

export function useSetInitialLanguage({
  prefix,
  languageShown,
}: {
  prefix: string;
  languageShown: boolean;
}) {
  const form = useFormContext();
  const lang = form.getValues(buildFieldNameWithPrefix('lang', prefix));

  useEffect(() => {
    if (languageShown && isEmpty(lang)) {
      form.setValue(
        buildFieldNameWithPrefix('lang', prefix),
        crossLanguageOptions[0].value,
        {
          shouldValidate: true,
          shouldDirty: true,
        },
      );
    }
  }, [form, lang, languageShown, prefix]);
}

```

### `web/src/pages/agent/form/parser-form/utils.ts`

```ts
export function buildFieldNameWithPrefix(name: string, prefix: string) {
  return `${prefix}.${name}`;
}

```

### `web/src/pages/agent/form/parser-form/video-form-fields.tsx`

```tsx
import { LlmModelType } from '@/constants/knowledge';
import { useComposeLlmOptionsByModelTypes } from '@/hooks/use-llm-request';
import {
  LargeModelFormField,
  OutputFormatFormFieldProps,
} from './common-form-fields';

export function AudioFormFields({ prefix }: OutputFormatFormFieldProps) {
  const modelOptions = useComposeLlmOptionsByModelTypes([
    LlmModelType.Speech2text,
  ]);

  return (
    <>
      {/* Multimodal Model */}
      <LargeModelFormField
        prefix={prefix}
        options={modelOptions}
      ></LargeModelFormField>
    </>
  );
}

export function VideoFormFields({ prefix }: OutputFormatFormFieldProps) {
  const modelOptions = useComposeLlmOptionsByModelTypes([
    LlmModelType.Image2text,
  ]);

  return (
    <>
      {/* Multimodal Model */}
      <LargeModelFormField
        prefix={prefix}
        options={modelOptions}
      ></LargeModelFormField>
    </>
  );
}

```

### `web/src/pages/agent/form/parser-form/word-form-fields.tsx`

```tsx
import { LlmModelType } from '@/constants/knowledge';
import { useComposeLlmOptionsByModelTypes } from '@/hooks/use-llm-request';
import { useWatch } from 'react-hook-form';
import {
  FlattenMediaToTextFormField,
  LargeModelFormField,
  OutputFormatFormFieldProps,
  RmdirFormField,
} from './common-form-fields';
import { buildFieldNameWithPrefix } from './utils';

export function WordFormFields({ prefix }: OutputFormatFormFieldProps) {
  const modelOptions = useComposeLlmOptionsByModelTypes([
    LlmModelType.Image2text,
  ]);
  const flattenMediaToText = useWatch({
    name: buildFieldNameWithPrefix('flatten_media_to_text', prefix),
  });

  return (
    <>
      <RmdirFormField prefix={prefix} />
      <FlattenMediaToTextFormField prefix={prefix} />
      {!flattenMediaToText && (
        <LargeModelFormField
          prefix={prefix}
          options={modelOptions}
        ></LargeModelFormField>
      )}
    </>
  );
}

```

### `web/src/pages/agent/form/retrieval-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialRetrievalValues } from '../../constant';

export function useValues(node?: RAGFlowNodeType) {
  const defaultValues = useMemo(
    () => ({
      ...initialRetrievalValues,
    }),
    [],
  );

  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return defaultValues;
    }

    return formData;
  }, [defaultValues, node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/string-transform-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import {
  initialStringTransformValues,
  StringTransformMethod,
} from '../../constant';

function transferDelimiters(formData: typeof initialStringTransformValues) {
  return formData.method === StringTransformMethod.Merge
    ? formData.delimiters[0]
    : formData.delimiters;
}

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return {
        ...initialStringTransformValues,
        delimiters: transferDelimiters(formData),
      };
    }

    return {
      ...formData,
      delimiters: transferDelimiters(formData),
    };
  }, [node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/string-transform-form/use-watch-form-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { StringTransformMethod } from '../../constant';
import useGraphStore from '../../store';

export function useWatchFormChange(id?: string, form?: UseFormReturn<any>) {
  let values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id && form?.formState.isDirty) {
      values = form?.getValues();
      const nextValues: any = values;

      if (
        values.delimiters !== undefined &&
        values.method === StringTransformMethod.Merge
      ) {
        nextValues.delimiters = [values.delimiters];
      }

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/form/switch-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialSwitchValues } from '../../constant';

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;
    if (isEmpty(formData)) {
      return initialSwitchValues;
    }

    return formData;
  }, [node]);

  return values;
}

```

### `web/src/pages/agent/form/tavily-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialTavilyValues } from '../../constant';
import { convertToObjectArray } from '../../utils';

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return initialTavilyValues;
    }

    return {
      ...formData,
      include_domains: convertToObjectArray(formData.include_domains),
      exclude_domains: convertToObjectArray(formData.exclude_domains),
    };
  }, [node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/tavily-form/use-watch-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';
import { convertToStringArray } from '../../utils';

export function useWatchFormChange(id?: string, form?: UseFormReturn<any>) {
  let values = useWatch({ control: form?.control });
  const updateNodeForm = useGraphStore((state) => state.updateNodeForm);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id) {
      values = form?.getValues();
      const nextValues: any = {
        ...values,
        include_domains: convertToStringArray(values.include_domains),
        exclude_domains: convertToStringArray(values.exclude_domains),
      };

      updateNodeForm(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/form/tool-form/bing-form/index.tsx`

```tsx
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { BingFormSchema, BingFormWidgets } from '../../bing-form';
import { FormWrapper } from '../../components/form-wrapper';
import { useValues } from '../use-values';
import { useWatchFormChange } from '../use-watch-change';

export const FormSchema = z.object(BingFormSchema);

function BingForm() {
  const defaultValues = useValues();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  useWatchFormChange(form);

  return (
    <Form {...form}>
      <FormWrapper>
        <BingFormWidgets></BingFormWidgets>
      </FormWrapper>
    </Form>
  );
}

export default memo(BingForm);

```

### `web/src/pages/agent/form/tool-form/index.tsx`

```tsx
import { memo } from 'react';
import useGraphStore from '../../store';
import { ToolFormConfigMap } from './constant';
import MCPForm from './mcp-form';

const EmptyContent = () => <div></div>;

function ToolForm() {
  const clickedToolId = useGraphStore((state) => state.clickedToolId);
  const { getAgentToolById } = useGraphStore();
  const tool = getAgentToolById(clickedToolId);

  const ToolForm =
    ToolFormConfigMap[tool?.component_name as keyof typeof ToolFormConfigMap] ??
    MCPForm ??
    EmptyContent;

  return (
    <section>
      <ToolForm key={clickedToolId}></ToolForm>
    </section>
  );
}

export default memo(ToolForm);

```

### `web/src/pages/agent/form/tool-form/mcp-form/mcp-card.tsx`

```tsx
import { Card, CardContent } from '@/components/ui/card';
import { IMCPTool } from '@/interfaces/database/mcp';
import { PropsWithChildren } from 'react';

export function MCPCard({
  data,
  children,
}: { data: IMCPTool } & PropsWithChildren) {
  return (
    <Card className="p-3">
      <CardContent className="p-0 flex gap-3">
        {children}
        <section>
          <div className="pb-3 text-sm">{data.name}</div>
          <p className="text-text-secondary text-xs">{data.description}</p>
        </section>
      </CardContent>
    </Card>
  );
}

```

### `web/src/pages/agent/form/tool-form/mcp-form/use-values.ts`

```ts
import useGraphStore from '@/pages/agent/store';
import { getAgentNodeMCP } from '@/pages/agent/utils';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';

export function useValues() {
  const { clickedToolId, clickedNodeId, findUpstreamNodeById } = useGraphStore(
    (state) => state,
  );

  const values = useMemo(() => {
    const agentNode = findUpstreamNodeById(clickedNodeId);
    const mcpList = getAgentNodeMCP(agentNode);

    const formData =
      mcpList.find((x) => x.mcp_id === clickedToolId)?.tools || {};

    if (isEmpty(formData)) {
      return { items: [] };
    }

    return { items: Object.keys(formData) };
  }, [clickedNodeId, clickedToolId, findUpstreamNodeById]);

  return values;
}

```

### `web/src/pages/agent/form/user-fill-up-form/use-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import { initialUserFillUpValues } from '../../constant';
import { buildBeginInputListFromObject } from '../begin-form/utils';

export function useValues(node?: RAGFlowNodeType) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return initialUserFillUpValues;
    }

    const inputs = buildBeginInputListFromObject(formData?.inputs);

    return { ...(formData || {}), inputs };
  }, [node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/form/variable-aggregator-form/schema.ts`

```ts
import { z } from 'zod';

export const VariableAggregatorSchema = {
  groups: z.array(
    z.object({
      group_name: z.string(),
      variables: z.array(z.object({ value: z.string().optional() })),
      type: z.string().optional(),
    }),
  ),
};

export const FormSchema = z.object(VariableAggregatorSchema);

export type VariableAggregatorFormSchemaType = z.infer<typeof FormSchema>;

```

### `web/src/pages/agent/form/variable-aggregator-form/use-watch-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../../store';
import { VariableAggregatorFormSchemaType } from './schema';

export function useWatchFormChange(
  id?: string,
  form?: UseFormReturn<VariableAggregatorFormSchemaType>,
) {
  const values = useWatch({ control: form?.control });
  const { replaceNodeForm } = useGraphStore((state) => state);

  useEffect(() => {
    if (id && form?.formState.isDirty) {
      const outputs = values.groups?.reduce(
        (pre, cur) => {
          if (cur.group_name) {
            pre[cur.group_name] = {
              type: cur.type,
            };
          }

          return pre;
        },
        {} as Record<string, Record<string, any>>,
      );

      replaceNodeForm(id, { ...values, outputs: outputs ?? {} });
    }
  }, [form?.formState.isDirty, id, replaceNodeForm, values]);
}

```

### `web/src/pages/agent/hooks/use-build-options.tsx`

```tsx
import { buildUpstreamNodeOutputOptions } from '@/utils/canvas-util';
import { useMemo } from 'react';
import { Operator } from '../constant';
import OperatorIcon from '../operator-icon';
import useGraphStore from '../store';

export function useBuildNodeOutputOptions(nodeId?: string) {
  const nodes = useGraphStore((state) => state.nodes);
  const edges = useGraphStore((state) => state.edges);

  return useMemo(() => {
    return buildUpstreamNodeOutputOptions({
      nodes,
      edges,
      nodeId,
      Icon: ({ name }) => <OperatorIcon name={name as Operator}></OperatorIcon>,
    });
  }, [edges, nodeId, nodes]);
}

```

### `web/src/pages/agent/hooks/use-build-webhook-url.ts`

```ts
import { useParams } from 'react-router';

export function useBuildWebhookUrl() {
  const { id } = useParams();

  const text = `${location.protocol}//${location.host}/api/v1/agents/${id}/webhook`;
  return text;
}

```

### `web/src/pages/agent/hooks/use-calculate-sheet-right.ts`

```ts
import { useSize } from 'ahooks';

export function useCalculateSheetRight() {
  const size = useSize(document.querySelector('body'));
  const bodyWidth = size?.width ?? 0;

  return bodyWidth > 1800 ? 'right-[620px]' : `right-1/3`;
}

```

### `web/src/pages/agent/hooks/use-cancel-dataflow.ts`

```ts
import { useCancelDataflow } from '@/hooks/use-agent-request';
import { useCallback } from 'react';

export function useCancelCurrentDataflow({
  messageId,
  stopFetchTrace,
}: {
  messageId: string;
  stopFetchTrace(): void;
}) {
  const { cancelDataflow } = useCancelDataflow();

  const handleCancel = useCallback(async () => {
    const code = await cancelDataflow(messageId);
    if (code === 0) {
      stopFetchTrace();
    }
  }, [cancelDataflow, messageId, stopFetchTrace]);

  return { handleCancel };
}

```

### `web/src/pages/agent/hooks/use-fetch-data.ts`

```ts
import { useFetchAgent } from '@/hooks/use-agent-request';
import { IGraph } from '@/interfaces/database/agent';
import { useEffect } from 'react';
import { useSetGraphInfo } from './use-set-graph';

export const useFetchDataOnMount = () => {
  const { loading, data, refetch } = useFetchAgent();
  const setGraphInfo = useSetGraphInfo();

  useEffect(() => {
    setGraphInfo(data?.dsl?.graph ?? ({} as IGraph));
  }, [setGraphInfo, data]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { loading, flowDetail: data };
};

```

### `web/src/pages/agent/hooks/use-filter-child-node-ids.ts`

```ts
import { filterChildNodeIds } from '@/utils/canvas-util';
import useGraphStore from '../store';

export function useFilterChildNodeIds(nodeId?: string) {
  const nodes = useGraphStore((state) => state.nodes);

  const childNodeIds = filterChildNodeIds(nodes, nodeId);

  return childNodeIds ?? [];
}

```

### `web/src/pages/agent/hooks/use-find-mcp-by-id.ts`

```ts
import { useListMcpServer } from '@/hooks/use-mcp-request';

export function useFindMcpById() {
  const { data } = useListMcpServer();

  const findMcpById = (id: string) =>
    data.mcp_servers.find((item) => item.id === id);

  return {
    findMcpById,
  };
}

```

### `web/src/pages/agent/hooks/use-form-values.ts`

```ts
import { RAGFlowNodeType } from '@/interfaces/database/agent';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';

export function useFormValues(
  defaultValues: Record<string, any>,
  node?: RAGFlowNodeType,
) {
  const values = useMemo(() => {
    const formData = node?.data?.form;

    if (isEmpty(formData)) {
      return defaultValues;
    }

    return formData;
  }, [defaultValues, node?.data?.form]);

  return values;
}

```

### `web/src/pages/agent/hooks/use-is-mcp.ts`

```ts
import { Operator } from '../constant';
import useGraphStore from '../store';

export function useIsMcp(operatorName: Operator) {
  const { clickedToolId, getAgentToolById } = useGraphStore();

  const { component_name: toolName } = getAgentToolById(clickedToolId) ?? {};

  return (
    operatorName === Operator.Tool &&
    Object.values(Operator).every((x) => x !== toolName)
  );
}

```

### `web/src/pages/agent/hooks/use-is-pipeline.ts`

```ts
import { AgentCategory, AgentQuery } from '@/constants/agent';
import { useSearchParams } from 'react-router';

export function useIsPipeline() {
  const [queryParameters] = useSearchParams();

  return (
    queryParameters.get(AgentQuery.Category) === AgentCategory.DataflowCanvas
  );
}

```

### `web/src/pages/agent/hooks/use-is-webhook.ts`

```ts
import { AgentDialogueMode, BeginId } from '../constant';
import useGraphStore from '../store';

export function useIsWebhookMode() {
  const getNode = useGraphStore((state) => state.getNode);

  const beginNode = getNode(BeginId);

  return beginNode?.data.form?.mode === AgentDialogueMode.Webhook;
}

export function useIsConversationMode() {
  const getNode = useGraphStore((state) => state.getNode);

  const beginNode = getNode(BeginId);

  return beginNode?.data.form?.mode === AgentDialogueMode.Conversational;
}

```

### `web/src/pages/agent/hooks/use-iteration.ts`

```ts

```

### `web/src/pages/agent/hooks/use-move-note.ts`

```ts
import { useMouse } from 'ahooks';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useMoveNote() {
  const ref = useRef<SVGSVGElement>(null);
  const mouse = useMouse();
  const [imgVisible, setImgVisible] = useState(false);

  const toggleVisible = useCallback((visible: boolean) => {
    setImgVisible(visible);
  }, []);

  const showImage = useCallback(() => {
    toggleVisible(true);
  }, [toggleVisible]);

  const hideImage = useCallback(() => {
    toggleVisible(false);
  }, [toggleVisible]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = `${mouse.clientY - 70}px`;
      ref.current.style.left = `${mouse.clientX + 10}px`;
    }
  }, [mouse.clientX, mouse.clientY]);

  return {
    ref,
    showImage,
    hideImage,
    mouse,
    imgVisible,
  };
}

```

### `web/src/pages/agent/hooks/use-open-document.ts`

```ts
import { useCallback } from 'react';

export function useOpenDocument() {
  const openDocument = useCallback(() => {
    window.open(
      'https://ragflow.io/docs/dev/category/agent-components',
      '_blank',
    );
  }, []);

  return openDocument;
}

```

### `web/src/pages/agent/hooks/use-save-on-blur.ts`

```ts
import { useCallback } from 'react';
import { useSaveGraph } from './use-save-graph';

// Hook to save the graph when a form field loses focus.
// This ensures changes are persisted immediately without waiting for the debounce timer.
export const useSaveOnBlur = () => {
  const { saveGraph } = useSaveGraph(false);

  const handleSaveOnBlur = useCallback(() => {
    saveGraph();
  }, [saveGraph]);

  return { handleSaveOnBlur };
};

```

### `web/src/pages/agent/hooks/use-set-graph.ts`

```ts
import { IGraph } from '@/interfaces/database/agent';
import { useCallback } from 'react';
import useGraphStore from '../store';

export const useSetGraphInfo = () => {
  const { setEdges, setNodes } = useGraphStore((state) => state);
  const setGraphInfo = useCallback(
    ({ nodes = [], edges = [] }: IGraph) => {
      if (nodes.length || edges.length) {
        setNodes(nodes);
        setEdges(edges);
      }
    },
    [setEdges, setNodes],
  );
  return setGraphInfo;
};

```

### `web/src/pages/agent/hooks/use-stop-message.ts`

```ts
import { useCancelConversation } from '@/hooks/use-agent-request';
import { useCallback, useEffect } from 'react';

export function useStopMessage() {
  const { cancelConversation } = useCancelConversation();

  const stopMessage = useCallback(
    (taskId?: string) => {
      if (taskId) {
        cancelConversation(taskId);
      }
    },
    [cancelConversation],
  );

  return { stopMessage };
}

export function useStopMessageUnmount(chatVisible: boolean, taskId?: string) {
  const { stopMessage } = useStopMessage();

  const handleBeforeUnload = useCallback(() => {
    if (chatVisible) {
      stopMessage(taskId);
    }
  }, [chatVisible, stopMessage, taskId]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return { stopMessage };
}

```

### `web/src/pages/agent/hooks/use-watch-form-change.ts`

```ts
import { useEffect } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import useGraphStore from '../store';

export function useWatchFormChange(
  id?: string,
  form?: UseFormReturn<any>,
  enableReplacement = false,
) {
  let values = useWatch({ control: form?.control });
  const { updateNodeForm, replaceNodeForm } = useGraphStore((state) => state);

  useEffect(() => {
    // Manually triggered form updates are synchronized to the canvas
    if (id) {
      values = form?.getValues() || {};
      const nextValues: any = values;

      (enableReplacement ? replaceNodeForm : updateNodeForm)(id, nextValues);
    }
  }, [form?.formState.isDirty, id, updateNodeForm, values]);
}

```

### `web/src/pages/agent/pipeline-run-sheet/index.tsx`

```tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { IModalProps } from '@/interfaces/common';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { RunDataflowType } from '../hooks/use-run-dataflow';
import { UploaderForm } from './uploader';

type RunSheetProps = IModalProps<any> &
  Pick<RunDataflowType, 'run' | 'loading'>;

const PipelineRunSheet = ({ hideModal, run, loading }: RunSheetProps) => {
  const { t } = useTranslation();

  return (
    <Sheet onOpenChange={hideModal} open modal={false}>
      <SheetContent className={cn('top-20 p-2')}>
        <SheetHeader>
          <SheetTitle>{t('flow.testRun')}</SheetTitle>
          <UploaderForm ok={run} loading={loading}></UploaderForm>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PipelineRunSheet;

```

### `web/src/pages/agent/share/parameter-dialog.tsx`

```tsx
import { Modal } from '@/components/ui/modal/modal';
import { IModalProps } from '@/interfaces/common';
import DebugContent from '@/pages/agent/debug-content';
import { buildBeginInputListFromObject } from '@/pages/agent/form/begin-form/utils';
import { BeginQuery } from '@/pages/agent/interface';

interface IProps extends IModalProps<any> {
  ok(parameters: any[]): void;
  data: Record<string, Omit<BeginQuery, 'key'>>;
}
export function ParameterDialog({ ok, data }: IProps) {
  return (
    <Modal
      open
      title={'Parameter'}
      closable={false}
      showfooter={false}
      maskClosable={false}
    >
      <div className="mb-8">
        <DebugContent
          parameters={buildBeginInputListFromObject(data)}
          ok={ok}
          isNext={false}
          btnText={'Submit'}
        ></DebugContent>
      </div>
    </Modal>
  );
}

```

### `web/src/pages/agent/utils/build-output-list.ts`

```ts
import { OutputType } from '../form/components/output';

export function buildOutputList(outputs: Record<string, Record<string, any>>) {
  return Object.entries(outputs).reduce<OutputType[]>((pre, [key, val]) => {
    pre.push({ title: key, type: val.type });
    return pre;
  }, []);
}

```

### `web/src/pages/agent/utils/chat.ts`

```ts
import { MessageType } from '@/constants/chat';
import { IMessage, IReference } from '@/interfaces/database/chat';
import { isEmpty } from 'lodash';

export const buildAgentMessageItemReference = (
  conversation: { messages: IMessage[]; reference: IReference[] },
  message: IMessage,
) => {
  const assistantMessages = conversation.messages?.filter(
    (x) => x.role === MessageType.Assistant,
  );
  const referenceIndex = assistantMessages.findIndex(
    (x) => x.id === message.id,
  );
  const reference = !isEmpty(message?.reference)
    ? message?.reference
    : (conversation?.reference ?? [])[referenceIndex];

  return reference ?? { doc_aggs: [], chunks: [], total: 0 };
};

```

### `web/src/pages/agent/utils/delete-node.ts`

```ts
import { Edge } from '@xyflow/react';
import { filterAllDownstreamAgentAndToolNodeIds } from './filter-downstream-nodes';

// Delete all downstream agent and tool operators of the current agent operator
export function deleteAllDownstreamAgentsAndTool(
  nodeId: string,
  edges: Edge[],
) {
  const downstreamAgentAndToolNodeIds = filterAllDownstreamAgentAndToolNodeIds(
    edges,
    [nodeId],
  );

  const downstreamAgentAndToolEdges = downstreamAgentAndToolNodeIds.reduce<
    Edge[]
  >((pre, cur) => {
    const relatedEdges = edges.filter(
      (x) => x.source === cur || x.target === cur,
    );

    relatedEdges.forEach((x) => {
      if (!pre.some((y) => y.id !== x.id)) {
        pre.push(x);
      }
    });

    return pre;
  }, []);

  return {
    downstreamAgentAndToolNodeIds,
    downstreamAgentAndToolEdges,
  };
}

```

### `web/src/pages/agents/constant.ts`

```ts
export enum FlowType {
  Agent = 'agent',
  Flow = 'flow',
}

```

### `web/src/pages/agents/hooks/use-selelct-filters.ts`

```ts
import { FilterCollection } from '@/components/list-filter-bar/interface';
import { useFetchAgentList } from '@/hooks/use-agent-request';
import { buildOwnersFilter, groupListByType } from '@/utils/list-filter-util';
import { useMemo } from 'react';

export function useSelectFilters() {
  const { data } = useFetchAgentList({});

  const canvasCategory = useMemo(() => {
    return groupListByType(
      data?.canvas ?? [],
      'canvas_category',
      'canvas_category',
    );
  }, [data?.canvas]);

  const filters: FilterCollection[] = [
    buildOwnersFilter(data?.canvas ?? []),
    {
      field: 'canvasCategory',
      list: canvasCategory,
      label: 'Canvas category',
    },
  ];

  return filters;
}

```

### `web/src/pages/agents/name-form-field.tsx`

```tsx
import { RAGFlowFormItem } from '@/components/ragflow-form';
import { Input } from '@/components/ui/input';
import i18n from '@/locales/config';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const NameFormSchema = {
  name: z
    .string()
    .min(1, {
      message: i18n.t('common.namePlaceholder'),
    })
    .trim(),
};

export function NameFormField() {
  const { t } = useTranslation();
  return (
    <RAGFlowFormItem name="name" required label={t('common.name')}>
      <Input
        data-testid="agent-name-input"
        placeholder={t('common.namePlaceholder')}
        autoComplete="off"
      />
    </RAGFlowFormItem>
  );
}

```

### `web/src/pages/chunk/chunk-result/index.tsx`

```tsx
import ChunkedResultPanel from '../chunked-result-panel';
import ParsedResultPanel from '../parsed-result-panel';

export default function ChunkResult() {
  return (
    <section className="flex">
      <ParsedResultPanel></ParsedResultPanel>
      <div className="flex-1">
        <ChunkedResultPanel></ChunkedResultPanel>
      </div>
    </section>
  );
}

```

### `web/src/pages/chunk/chunk-toolbar.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface ChunkToolbarProps {
  text: string;
}

export function ChunkToolbar({ text }: ChunkToolbarProps) {
  return (
    <div className="flex justify-between px-9">
      <span className="text-colors-text-neutral-strong text-3xl font-bold">
        {text}
      </span>
      <div className="flex items-center gap-3">
        <Button variant={'ghost'} size={'icon'}>
          <Copy />
        </Button>
        <Button variant={'outline'} size={'sm'}>
          Export
        </Button>
      </div>
    </div>
  );
}

```

### `web/src/pages/chunk/parsed-result/add-knowledge/components/knowledge-chunk/components/chunk-card/index.module.less`

```less
.image {
  width: 100px !important;
  object-fit: contain;
}

.imagePreview {
  width: 100%;
  height: 100%;
  max-width: 50vw;
  max-height: 50vh;
  object-fit: contain;
}

.content {
  flex: 1;
  .chunkText;
}

.contentEllipsis {
  .multipleLineEllipsis(3);
}

.contentText {
  word-break: break-word;
  overflow-wrap: break-word;
}

.chunkCard {
  width: 100%;
  padding: 18px 10px;
}

.cardSelected {
  background-color: @selectedBackgroundColor;
}

.cardSelectedDark {
  background-color: #ffffff2f;
}

```

### `web/src/pages/chunk/parsed-result/add-knowledge/components/knowledge-chunk/constant.ts`

```ts
export enum ChunkTextMode {
  Full = 'full',
  Ellipse = 'ellipse',
}

```

### `web/src/pages/chunk/parsed-result/add-knowledge/components/knowledge-chunk/utils.ts`

```ts
export type FormListItem = {
  frequency: number;
  tag: string;
};

export function transformTagFeaturesArrayToObject(
  list: Array<FormListItem> = [],
) {
  return list.reduce<Record<string, number>>((pre, cur) => {
    pre[cur.tag] = cur.frequency;

    return pre;
  }, {});
}

export function transformTagFeaturesObjectToArray(
  object: Record<string, number> = {},
) {
  return Object.keys(object).reduce<Array<FormListItem>>((pre, key) => {
    pre.push({ frequency: object[key], tag: key });

    return pre;
  }, []);
}

```

### `web/src/pages/chunk/parsed-result/add-knowledge/constant.ts`

```ts
export enum KnowledgeDatasetRouteKey {
  Chunk = 'chunk',
  File = 'file',
}

```

### `web/src/pages/chunk/parsed-result/add-knowledge/index.module.less`

```less
.container {
  display: flex;
  height: 100%;
  width: 100%;
  .contentWrapper {
    flex: 1;
    overflow-x: auto;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 16px 20px 28px 40px;
    display: flex;
    flex-direction: column;
  }
  .content {
    background-color: rgba(255, 255, 255, 0.1);
    margin-top: 16px;
    flex: 1;
  }
}

```

### `web/src/pages/chunk/parsed-result/index.tsx`

```tsx
import ParsedResultPanel from '../parsed-result-panel';

export default function ParsedResult() {
  return (
    <section className="flex">
      <div className="flex-1"></div>
      <ParsedResultPanel></ParsedResultPanel>
    </section>
  );
}

```

### `web/src/pages/chunk/result-view/index.tsx`

```tsx
import ChunkedResultPanel from '../chunked-result-panel';

export default function ResultView() {
  return (
    <section className="flex">
      <div className="flex-1">xxx</div>
      <div className="flex-1">
        <ChunkedResultPanel></ChunkedResultPanel>
      </div>
    </section>
  );
}

```

### `web/src/pages/dataflow-result/components/chunk-card/index.module.less`

```less
.image {
  width: 100px !important;
  object-fit: contain;
}

.imagePreview {
  max-width: 50vw;
  max-height: 50vh;
  object-fit: contain;
}

.content {
  flex: 1;
  .chunkText;
}

.contentEllipsis {
  .multipleLineEllipsis(3);
}

.contentText {
  word-break: break-word;
  overflow-wrap: break-word;
}

.chunkCard {
  width: 100%;
  padding: 18px 10px;
}

.cardSelected {
  background-color: @selectedBackgroundColor;
}

.cardSelectedDark {
  background-color: #ffffff2f;
}

```

### `web/src/pages/dataflow-result/components/parse-editer/hook.ts`

```ts
import { useEffect, useRef, useState } from 'react';
import { IJsonContainerProps, IObjContainerProps } from './interface';

export const useParserInit = ({
  initialValue,
}: {
  initialValue:
    | IJsonContainerProps['initialValue']
    | IObjContainerProps['initialValue'];
}) => {
  const [content, setContent] = useState(initialValue);

  useEffect(() => {
    setContent(initialValue);
    console.log('initialValue json parse', initialValue);
  }, [initialValue]);

  const [activeEditIndex, setActiveEditIndex] = useState<number | undefined>(
    undefined,
  );
  const editDivRef = useRef<HTMLDivElement>(null);

  return {
    content,
    setContent,
    activeEditIndex,
    setActiveEditIndex,
    editDivRef,
  };
};

```

### `web/src/pages/dataflow-result/constant.ts`

```ts
export enum ChunkTextMode {
  Full = 'full',
  Ellipse = 'ellipse',
}

export enum TimelineNodeType {
  begin = 'file',
  parser = 'parser',
  contextGenerator = 'extractor',
  titleChunker = 'titleChunker',
  tokenChunker = 'tokenChunker',
  tokenizer = 'tokenizer',
  end = 'end',
}

export enum PipelineResultSearchParams {
  DocumentId = 'doc_id',
  KnowledgeId = 'knowledgeId',
  Type = 'type',
  IsReadOnly = 'is_read_only',
  AgentId = 'agent_id',
  AgentTitle = 'agent_title',
  CreatedBy = 'created_by', // Who uploaded the file
  DocumentExtension = 'extension',
}

```

### `web/src/pages/dataflow-result/utils.ts`

```ts
export type FormListItem = {
  frequency: number;
  tag: string;
};

export function transformTagFeaturesArrayToObject(
  list: Array<FormListItem> = [],
) {
  return list.reduce<Record<string, number>>((pre, cur) => {
    pre[cur.tag] = cur.frequency;

    return pre;
  }, {});
}

export function transformTagFeaturesObjectToArray(
  object: Record<string, number> = {},
) {
  return Object.keys(object).reduce<Array<FormListItem>>((pre, key) => {
    pre.push({ frequency: object[key], tag: key });

    return pre;
  }, []);
}

```

### `web/src/pages/dataset/dataset-overview/dataset-common.ts`

```ts
export enum LogTabs {
  FILE_LOGS = 'fileLogs',
  DATASET_LOGS = 'datasetLogs',
}

export enum ProcessingType {
  knowledgeGraph = 'Graph',
  raptor = 'RAPTOR',
}

export const ProcessingTypeMap = {
  [ProcessingType.knowledgeGraph]: 'Knowledge Graph',
  [ProcessingType.raptor]: 'RAPTOR',
};

```

### `web/src/pages/dataset/dataset-setting/configuration-form-container.tsx`

```tsx
import { FormContainerProps } from '@/components/form-container';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export function ConfigurationFormContainer({
  children,
  className,
}: FormContainerProps) {
  return <section className={cn('space-y-4', className)}>{children}</section>;
}

export function MainContainer({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <section className={cn('space-y-5', className)}>{children}</section>;
}

```

### `web/src/pages/dataset/dataset-setting/configuration/audio.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { ConfigurationFormContainer } from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function AudioConfiguration() {
  return (
    <ConfigurationFormContainer>
      <>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </>

      {/* <TagItems></TagItems> */}
    </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/book.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import {
  ConfigurationFormContainer,
  MainContainer,
} from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function BookConfiguration() {
  return (
    <MainContainer>
      <ConfigurationFormContainer>
        <LayoutRecognizeFormField></LayoutRecognizeFormField>
      </ConfigurationFormContainer>

      <ConfigurationFormContainer>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </ConfigurationFormContainer>
      {/* <ConfigurationFormContainer>
        <TagItems></TagItems>
      </ConfigurationFormContainer> */}
    </MainContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/email.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { ConfigurationFormContainer } from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function EmailConfiguration() {
  return (
    <ConfigurationFormContainer>
      <>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </>
      {/* <TagItems></TagItems> */}
    </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/knowledge-graph.tsx`

```tsx
import { DelimiterFormField } from '@/components/delimiter-form-field';
import { EntityTypesFormField } from '@/components/entity-types-form-field';
import { MaxTokenNumberFormField } from '@/components/max-token-number-from-field';

export function KnowledgeGraphConfiguration() {
  return (
    <>
      <>
        <EntityTypesFormField></EntityTypesFormField>
        <MaxTokenNumberFormField max={8192 * 2}></MaxTokenNumberFormField>
        <DelimiterFormField></DelimiterFormField>
      </>
    </>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/laws.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import {
  ConfigurationFormContainer,
  MainContainer,
} from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function LawsConfiguration() {
  return (
    <MainContainer>
      <ConfigurationFormContainer>
        <LayoutRecognizeFormField></LayoutRecognizeFormField>
      </ConfigurationFormContainer>

      <ConfigurationFormContainer>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </ConfigurationFormContainer>

      {/* <ConfigurationFormContainer>
        <TagItems></TagItems>
      </ConfigurationFormContainer> */}
    </MainContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/manual.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import {
  ConfigurationFormContainer,
  MainContainer,
} from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function ManualConfiguration() {
  return (
    <MainContainer>
      <ConfigurationFormContainer>
        <LayoutRecognizeFormField></LayoutRecognizeFormField>
      </ConfigurationFormContainer>

      <ConfigurationFormContainer>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </ConfigurationFormContainer>

      {/* <TagItems></TagItems> */}
    </MainContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/one.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import { ConfigurationFormContainer } from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function OneConfiguration() {
  return (
    <ConfigurationFormContainer>
      <LayoutRecognizeFormField></LayoutRecognizeFormField>
      <>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </>

      {/* <TagItems></TagItems> */}
    </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/paper.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import {
  ConfigurationFormContainer,
  MainContainer,
} from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function PaperConfiguration() {
  return (
    <MainContainer>
      <ConfigurationFormContainer>
        <LayoutRecognizeFormField></LayoutRecognizeFormField>
      </ConfigurationFormContainer>

      <ConfigurationFormContainer>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </ConfigurationFormContainer>
      {/* <ConfigurationFormContainer>
        <TagItems></TagItems>
      </ConfigurationFormContainer> */}
    </MainContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/picture.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { ConfigurationFormContainer } from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function PictureConfiguration() {
  return (
    <ConfigurationFormContainer>
      <>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </>
      {/* <TagItems></TagItems> */}
    </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/presentation.tsx`

```tsx
import {
  AutoKeywordsFormField,
  AutoQuestionsFormField,
} from '@/components/auto-keywords-form-field';
import { LayoutRecognizeFormField } from '@/components/layout-recognize-form-field';
import {
  ConfigurationFormContainer,
  MainContainer,
} from '../configuration-form-container';
import { AutoMetadata } from './common-item';

export function PresentationConfiguration() {
  return (
    <MainContainer>
      <ConfigurationFormContainer>
        <LayoutRecognizeFormField></LayoutRecognizeFormField>
      </ConfigurationFormContainer>

      <ConfigurationFormContainer>
        <AutoMetadata />
        <AutoKeywordsFormField></AutoKeywordsFormField>
        <AutoQuestionsFormField></AutoQuestionsFormField>
      </ConfigurationFormContainer>

      {/* <ConfigurationFormContainer>
        <TagItems></TagItems>
      </ConfigurationFormContainer> */}
    </MainContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/qa.tsx`

```tsx
export function QAConfiguration() {
  return (
    <></>
    // <ConfigurationFormContainer>
    //   <TagItems></TagItems>
    // </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/resume.tsx`

```tsx
export function ResumeConfiguration() {
  return (
    <></>
    // <ConfigurationFormContainer>
    //   <TagItems></TagItems>
    // </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/table.tsx`

```tsx
import { ConfigurationFormContainer } from '../configuration-form-container';

export function TableConfiguration() {
  return (
    <ConfigurationFormContainer>
      {/* <ChunkMethodItem></ChunkMethodItem>
      <EmbeddingModelItem></EmbeddingModelItem>

      <PageRankFormField></PageRankFormField> */}
    </ConfigurationFormContainer>
  );
}

```

### `web/src/pages/dataset/dataset-setting/configuration/tag.tsx`

```tsx
import { ConfigurationFormContainer } from '../configuration-form-container';

export function TagConfiguration() {
  return <ConfigurationFormContainer></ConfigurationFormContainer>;
}

```

### `web/src/pages/dataset/dataset-setting/permission-form-field.tsx`

```tsx
import { SelectWithSearch } from '@/components/originui/select-with-search';
import { RAGFlowFormItem } from '@/components/ragflow-form';
import { PermissionRole } from '@/constants/permission';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function PermissionFormField() {
  const { t } = useTranslation();
  const teamOptions = useMemo(() => {
    return Object.values(PermissionRole).map((x) => ({
      label: t('knowledgeConfiguration.' + x),
      value: x,
    }));
  }, [t]);

  return (
    <RAGFlowFormItem
      name="permission"
      label={t('knowledgeConfiguration.permissions')}
      tooltip={t('knowledgeConfiguration.permissionsTip')}
      horizontal
    >
      <SelectWithSearch
        options={teamOptions}
        triggerClassName="w-full"
        testId="ds-settings-basic-permissions-select"
      ></SelectWithSearch>
    </RAGFlowFormItem>
  );
}

```

### `web/src/pages/dataset/dataset-setting/utils.ts`

```ts
const getImageName = (prefix: string, length: number) =>
  new Array(length)
    .fill(0)
    .map((x, idx) => `chunk-method/${prefix}-0${idx + 1}`);

export const ImageMap = {
  book: getImageName('book', 4),
  laws: getImageName('law', 2),
  manual: getImageName('manual', 4),
  picture: getImageName('media', 2),
  naive: getImageName('naive', 2),
  paper: getImageName('paper', 2),
  presentation: getImageName('presentation', 2),
  qa: getImageName('qa', 2),
  resume: getImageName('resume', 2),
  table: getImageName('table', 2),
  one: getImageName('one', 2),
  knowledge_graph: getImageName('knowledge-graph', 2),
  tag: getImageName('tag', 2),
};

```

### `web/src/pages/dataset/dataset-title.tsx`

```tsx
import { ReactNode } from 'react';

type TopTitleProps = {
  title: ReactNode;
  description: ReactNode;
};

export function TopTitle({ title, description }: TopTitleProps) {
  return (
    <div className="pb-5">
      <div className="text-2xl font-semibold">{title}</div>
      <p className="text-text-secondary pt-2">{description}</p>
    </div>
  );
}

```

### `web/src/pages/dataset/dataset/constant.ts`

```ts
import { RunningStatus } from '@/constants/knowledge';

export const RunningStatusMap = {
  [RunningStatus.UNSTART]: {
    label: 'UNSTART',
    color: 'rgba(var(--accent-primary))',
  },
  [RunningStatus.RUNNING]: {
    label: 'Parsing',
    color: 'var(--team-member)',
  },
  [RunningStatus.CANCEL]: {
    label: 'CANCEL',
    color: 'rgba(var(--state-warning))',
  },
  [RunningStatus.DONE]: {
    label: 'SUCCESS',
    color: 'rgba(var(--state-success))',
  },
  [RunningStatus.FAIL]: { label: 'FAIL', color: 'rgba(var(--state-error))' },
};

export * from '@/constants/knowledge';

```

### `web/src/pages/dataset/dataset/use-create-empty-document.ts`

```ts
import { useSetModalState } from '@/hooks/common-hooks';
import { useCreateDocument } from '@/hooks/use-document-request';
import { useCallback } from 'react';

export const useCreateEmptyDocument = () => {
  const { createDocument, loading } = useCreateDocument();

  const {
    visible: createVisible,
    hideModal: hideCreateModal,
    showModal: showCreateModal,
  } = useSetModalState();

  const onCreateOk = useCallback(
    async (name: string) => {
      const ret = await createDocument(name);
      if (ret === 0) {
        hideCreateModal();
      }
    },
    [hideCreateModal, createDocument],
  );

  return {
    createLoading: loading,
    onCreateOk,
    createVisible,
    hideCreateModal,
    showCreateModal,
  };
};

```

### `web/src/pages/dataset/dataset/utils.ts`

```ts
import { RunningStatus } from './constant';

export const isParserRunning = (text: RunningStatus) => {
  const isRunning = text === RunningStatus.RUNNING;
  return isRunning;
};

```

### `web/src/pages/dataset/index.tsx`

```tsx
import { useFetchKnowledgeBaseConfiguration } from '@/hooks/use-knowledge-request';
import { KnowledgeBaseProvider } from '@/pages/dataset/contexts/knowledge-base-context';

import { Outlet } from 'react-router';
import { SideBar } from './sidebar';

export default function DatasetWrapper() {
  const { data, loading } = useFetchKnowledgeBaseConfiguration();

  return (
    <KnowledgeBaseProvider knowledgeBase={data} loading={loading}>
      <article className="pt-3 size-full grid grid-cols-[auto_1fr] grid-rows-1">
        <SideBar dataset={data} />

        <Outlet />
      </article>
    </KnowledgeBaseProvider>
  );
}

```

### `web/src/pages/dataset/knowledge-graph/index.module.less`

```less
.forceContainer {
  :global(.tooltip) {
    padding: 0.5rem 0.75rem !important;
    border-radius: 0.5rem !important;
    font-family: var(--font-sans) !important;
  }
}

```

### `web/src/pages/dataset/knowledge-graph/use-delete-graph.ts`

```ts
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { useRemoveKnowledgeGraph } from '@/hooks/use-knowledge-request';
import { useCallback } from 'react';
import { useParams } from 'react-router';

export function useDeleteKnowledgeGraph() {
  const { removeKnowledgeGraph, loading } = useRemoveKnowledgeGraph();
  const { navigateToDataset } = useNavigatePage();
  const { id } = useParams();

  const handleDeleteKnowledgeGraph = useCallback(async () => {
    const ret = await removeKnowledgeGraph();
    if (ret === 0 && id) {
      navigateToDataset(id)();
    }
  }, [id, navigateToDataset, removeKnowledgeGraph]);

  return { handleDeleteKnowledgeGraph, loading };
}

```

### `web/src/pages/dataset/sidebar/hooks.tsx`

```tsx
import { Routes } from '@/routes';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

export const useHandleMenuClick = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMenuClick = useCallback(
    (key: Routes, data?: any) => () => {
      navigate(`${Routes.DatasetBase}${key}/${id}`, { state: data });
    },
    [id, navigate],
  );

  return { handleMenuClick };
};

```

### `web/src/pages/datasets/use-display-owner.ts`

```ts
import { useFetchTenantInfo } from '@/hooks/use-user-setting-request';
import { useCallback } from 'react';

export function useDisplayOwnerName() {
  const { data } = useFetchTenantInfo();
  const getOwnerName = useCallback(
    (tenantId: string, nickname: string) => {
      if (tenantId === data.tenant_id) {
        return null;
      }
      return nickname;
    },
    [data.tenant_id],
  );

  return getOwnerName;
}

```

### `web/src/pages/datasets/use-select-owners.ts`

```ts
import { FilterCollection } from '@/components/list-filter-bar/interface';
import { useFetchKnowledgeList } from '@/hooks/use-knowledge-request';
import { buildOwnersFilter } from '@/utils/list-filter-util';

export function useSelectOwners() {
  const { list } = useFetchKnowledgeList();

  const filters: FilterCollection[] = [buildOwnersFilter(list)];

  return filters;
}

```

### `web/src/pages/document-viewer/file-error/index.tsx`

```tsx
import { useTranslate } from '@/hooks/common-hooks';
import React from 'react';

const FileError = ({ children }: React.PropsWithChildren) => {
  const { t } = useTranslate('fileManager');
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-state-error-5 border border-state-error rounded-lg p-4 shadow-sm">
        <div className="flex ml-3">
          <div className="text-white font-medium">
            {children || t('fileError')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileError;

```

### `web/src/pages/document-viewer/index.less`

```less
.viewerWrapper {
  width: 100%;
  height: 100%;
  :global {
    .pdf-canvas {
      text-align: center;
    }
  }
  .image {
    width: 100%;
    height: 100%;
  }
}

```

### `web/src/pages/files/use-create-folder.ts`

```ts
import { useSetModalState } from '@/hooks/common-hooks';
import { useCreateFolder } from '@/hooks/use-file-request';
import { useCallback } from 'react';
import { useGetFolderId } from './hooks';

export const useHandleCreateFolder = () => {
  const {
    visible: folderCreateModalVisible,
    hideModal: hideFolderCreateModal,
    showModal: showFolderCreateModal,
  } = useSetModalState();
  const { createFolder, loading } = useCreateFolder();
  const id = useGetFolderId();

  const onFolderCreateOk = useCallback(
    async (name: string) => {
      const ret = await createFolder({ parentId: id, name });

      if (ret === 0) {
        hideFolderCreateModal();
      }
    },
    [createFolder, hideFolderCreateModal, id],
  );

  return {
    folderCreateLoading: loading,
    onFolderCreateOk,
    folderCreateModalVisible,
    hideFolderCreateModal,
    showFolderCreateModal,
  };
};

```

### `web/src/pages/files/use-delete-file.ts`

```ts
import { useDeleteFile } from '@/hooks/use-file-request';
import { useCallback } from 'react';
import { useGetFolderId } from './hooks';

export const useHandleDeleteFile = () => {
  const { deleteFile: removeDocument } = useDeleteFile();
  const parentId = useGetFolderId();

  const handleRemoveFile = useCallback(
    async (fileIds: string[]) => {
      const code = await removeDocument({ fileIds, parentId });

      return code;
    },
    [parentId, removeDocument],
  );

  return { handleRemoveFile };
};

```

### `web/src/pages/files/use-navigate-to-folder.ts`

```ts
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { useFetchParentFolderList } from '@/hooks/use-file-request';
import { Routes } from '@/routes';
import { useCallback } from 'react';

export const useNavigateToOtherFolder = () => {
  const { navigateToFiles } = useNavigatePage();

  const navigateToOtherFolder = useCallback(
    (folderId: string) => {
      navigateToFiles(folderId);
    },
    [navigateToFiles],
  );

  return navigateToOtherFolder;
};

export const useSelectBreadcrumbItems = () => {
  const parentFolderList = useFetchParentFolderList();

  return parentFolderList.length === 1
    ? []
    : parentFolderList.map((x) => ({
        title: x.name === '/' ? 'root' : x.name,
        path: `${Routes.Files}?folderId=${x.id}`,
      }));
};

```

### `web/src/pages/files/util.ts`

```ts
export function isFolderType(type: string) {
  return type === 'folder';
}

export function isKnowledgeBaseType(sourceType: string) {
  return sourceType === 'knowledgebase';
}

```

### `web/src/pages/home/index.tsx`

```tsx
import { PageContainer } from '@/layouts/components/page-container';
import { Applications } from './applications';
import { NextBanner } from './banner';
import { Datasets } from './datasets';

const Home = () => {
  return (
    <PageContainer>
      <article>
        <header className="mb-8">
          <NextBanner />
        </header>

        <Datasets />
        <Applications />
      </article>
    </PageContainer>
  );
};

export default Home;

```

### `web/src/pages/memories/memory-card.tsx`

```tsx
import { HomeCard } from '@/components/home-card';
import { MoreButton } from '@/components/more-button';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { IMemory } from './interface';
import { MemoryDropdown } from './memory-dropdown';

interface IProps {
  data: IMemory;
  showMemoryRenameModal: (data: IMemory) => void;
}
export function MemoryCard({ data, showMemoryRenameModal }: IProps) {
  const { navigateToMemory } = useNavigatePage();

  return (
    <HomeCard
      data={{
        name: data?.name,
        avatar: data?.avatar,
        description: data?.description,
        update_time: data?.create_time,
      }}
      moreDropdown={
        <MemoryDropdown
          memory={data}
          showMemoryRenameModal={showMemoryRenameModal}
        >
          <MoreButton></MoreButton>
        </MemoryDropdown>
      }
      onClick={navigateToMemory(data?.id)}
    />
  );
}

```

### `web/src/pages/memory/constant.tsx`

```tsx
export enum MemoryApiAction {
  FetchMemoryDetail = 'fetchMemoryDetail',
  FetchMemoryMessage = 'fetchMemoryMessage',
  FetchMessageContent = 'fetchMessageContent',
}

```

### `web/src/pages/memory/index.tsx`

```tsx
import Spotlight from '@/components/spotlight';
import { Outlet } from 'react-router';
import { SideBar } from './sidebar';

export default function DatasetWrapper() {
  return (
    <section className="flex h-full flex-col w-full pt-3">
      <div className="flex flex-1 min-h-0">
        <SideBar></SideBar>
        <div className=" relative flex-1 overflow-auto border-[0.5px] border-border-button p-5 rounded-md mr-5 mb-5">
          <Spotlight />
          <Outlet />
        </div>
      </div>
    </section>
  );
}

```

### `web/src/pages/memory/memory-message/interface.ts`

```ts
export interface IMessageInfo {
  message_id: number;
  message_type: 'semantic' | 'raw' | 'procedural';
  source_id: string | '-';
  user_id: string;
  agent_id: string;
  agent_name: string;
  session_id: string;
  valid_at: string;
  invalid_at: string;
  forget_at: string;
  status: boolean;
  extract?: Omit<IMessageInfo, 'task'>[];
  task: {
    chunk_ids: string;
    create_time: number;
    digest: string;
    doc_id: string;
    from_page: number;
    id: string;
    progress: number;
    progress_msg: string;
  };
}

export interface IMessageTableProps {
  messages: { message_list: Array<IMessageInfo>; total_count: number };
  storage_type: string;
}

export interface IMessageContentProps {
  content: string;
  content_embed: string;
}

```

### `web/src/pages/memory/sidebar/hooks.tsx`

```tsx
import { Routes } from '@/routes';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

export const useHandleMenuClick = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMenuClick = useCallback(
    (key: Routes) => () => {
      navigate(`${Routes.Memory}${key}/${id}`);
    },
    [id, navigate],
  );

  return { handleMenuClick };
};

```

### `web/src/pages/next-chats/chat/app-settings/chat-model-settings.tsx`

```tsx
import { LlmSettingFieldItems } from '@/components/llm-setting-items/next';

export function ChatModelSettings() {
  return (
    <div className="space-y-8">
      <LlmSettingFieldItems
        prefix="llm_setting"
        llmId="llm_id"
      ></LlmSettingFieldItems>
    </div>
  );
}

```

### `web/src/pages/next-chats/chat/app-settings/saving-button.tsx`

```tsx
import { ButtonLoading } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type SaveButtonProps = {
  loading: boolean;
};

export function SavingButton({ loading }: SaveButtonProps) {
  const { t } = useTranslation();

  return (
    <ButtonLoading
      data-testid="chat-settings-save"
      type="submit"
      loading={loading}
    >
      {t('common.save')}
    </ButtonLoading>
  );
}

```

### `web/src/pages/next-chats/chat/chat-box/use-set-default-model.ts`

```ts
import { LlmModelType } from '@/constants/knowledge';
import { useComposeLlmOptionsByModelTypes } from '@/hooks/use-llm-request';
import { useMount } from 'ahooks';
import { UseFormReturn } from 'react-hook-form';

export function useSetDefaultModel(form: UseFormReturn<any>) {
  const modelOptions = useComposeLlmOptionsByModelTypes([
    LlmModelType.Chat,
    LlmModelType.Image2text,
  ]);

  useMount(() => {
    const firstModel = modelOptions.at(0)?.options.at(0)?.value;
    if (firstModel) {
      form.setValue('llm_id', firstModel);
    }
  });
}

```

### `web/src/pages/next-chats/chat/interface.ts`

```ts
import { FormInstance } from '@/interfaces/antd-compat';

export interface ISegmentedContentProps {
  show: boolean;
  form: FormInstance;
  setHasError: (hasError: boolean) => void;
}

export interface IVariable {
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
}

export interface VariableTableDataType {
  key: string;
  variable: string;
  optional: boolean;
}

export type IPromptConfigParameters = Omit<VariableTableDataType, 'variable'>;

```

### `web/src/pages/next-chats/chat/use-add-box.ts`

```ts
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export function useAddChatBox(isDebugMode: boolean) {
  const [ids, setIds] = useState<string[]>([uuid()]);

  const hasSingleChatBox = ids.length === 1;

  const hasThreeChatBox = ids.length === 3;

  const addChatBox = useCallback(() => {
    setIds((prev) => [...prev, uuid()]);
  }, []);

  const removeChatBox = useCallback((id: string) => {
    setIds((prev) => prev.filter((x) => x !== id));
  }, []);

  useEffect(() => {
    if (!isDebugMode) {
      setIds((pre) => pre.slice(0, 1));
    }
  }, [isDebugMode]);

  return {
    chatBoxIds: ids,
    hasSingleChatBox,
    hasThreeChatBox,
    addChatBox,
    removeChatBox,
  };
}

```

### `web/src/pages/next-chats/chat/use-show-internet.ts`

```ts
import { useFetchChat } from '@/hooks/use-chat-request';
import { isEmpty } from 'lodash';

export function useShowInternet() {
  const { data: currentDialog } = useFetchChat();

  return !isEmpty(currentDialog?.prompt_config?.tavily_api_key);
}

```

### `web/src/pages/next-chats/chat/use-switch-debug-mode.ts`

```ts
import { useCallback, useState } from 'react';

export function useSwitchDebugMode() {
  const [isDebugMode, setIsDebugMode] = useState(false);

  const switchDebugMode = useCallback(() => {
    setIsDebugMode(!isDebugMode);
  }, [isDebugMode]);

  return {
    isDebugMode,
    switchDebugMode,
  };
}

```

### `web/src/pages/next-chats/constants.ts`

```ts
export const EmptyConversationId = 'empty';

```

### `web/src/pages/next-chats/hooks/use-button-disabled.tsx`

```tsx
import { trim } from 'lodash';
import { useParams } from 'react-router';

export const useGetSendButtonDisabled = () => {
  const { id: dialogId } = useParams();

  return dialogId === '';
};

export const useSendButtonDisabled = (value: string) => {
  return trim(value) === '';
};

```

### `web/src/pages/next-chats/hooks/use-click-card.ts`

```ts
import { useCallback, useState } from 'react';
import { useChatUrlParams } from './use-chat-url';

export function useHandleClickConversationCard() {
  const [controller, setController] = useState(new AbortController());
  const { setConversationBoth } = useChatUrlParams();

  const stopOutputMessage = useCallback(() => {
    setController((pre) => {
      pre.abort();
      return new AbortController();
    });
  }, []);

  const handleConversationCardClick = useCallback(
    (conversationId: string, isNew: boolean) => {
      setConversationBoth(conversationId, isNew ? 'true' : '');
      stopOutputMessage();
    },
    [setConversationBoth, stopOutputMessage],
  );

  return { controller, handleConversationCardClick, stopOutputMessage };
}

```

### `web/src/pages/next-chats/hooks/use-create-conversation.ts`

```ts
import { useCallback } from 'react';
import { useParams } from 'react-router';
import { useChatUrlParams } from './use-chat-url';
import { useSetConversation } from './use-set-conversation';

export const useCreateConversationBeforeUploadDocument = () => {
  const { setConversation } = useSetConversation();
  const { id: dialogId } = useParams();
  const { getIsNew } = useChatUrlParams();

  const createConversationBeforeUploadDocument = useCallback(
    async (message: string) => {
      const isNew = getIsNew();
      if (isNew === 'true') {
        const data = await setConversation(message);

        return data;
      }
    },
    [setConversation, getIsNew],
  );

  return {
    createConversationBeforeUploadDocument,
    dialogId,
  };
};

```

### `web/src/pages/next-chats/hooks/use-set-conversation.ts`

```ts
import { useCreateSession } from '@/hooks/use-chat-request';
import { useCallback } from 'react';
import { useParams } from 'react-router';

export const useSetConversation = () => {
  const { id: chatId } = useParams();
  const { createSession } = useCreateSession();

  const setConversation = useCallback(
    async (name: string) => {
      const data = await createSession({ chatId: chatId!, name });
      return data;
    },
    [createSession, chatId],
  );

  return { setConversation };
};

```

### `web/src/pages/next-chats/widget/index.tsx`

```tsx
import FloatingChatWidget from '@/components/floating-chat-widget';

const ChatWidget = () => {
  return (
    <div
      style={{
        background: 'transparent',
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        html, body { 
          background: transparent !important; 
          margin: 0; 
          padding: 0; 
        }
        #root {
          background: transparent !important;
        }
      `}</style>
      <FloatingChatWidget />
    </div>
  );
};

export default ChatWidget;

```

### `web/src/pages/next-search/document-preview-modal/hooks.ts`

```ts
import { useSetModalState } from '@/hooks/common-hooks';
import { IReferenceChunk } from '@/interfaces/database/chat';
import { useCallback, useState } from 'react';

export const useClickDrawer = () => {
  const { visible, showModal, hideModal } = useSetModalState();
  const [selectedChunk, setSelectedChunk] = useState<IReferenceChunk>(
    {} as IReferenceChunk,
  );
  const [documentId, setDocumentId] = useState<string>('');

  const clickDocumentButton = useCallback(
    (documentId: string, chunk: IReferenceChunk) => {
      showModal();
      setSelectedChunk(chunk);
      setDocumentId(documentId);
    },
    [showModal],
  );

  return {
    clickDocumentButton,
    visible,
    showModal,
    hideModal,
    selectedChunk,
    documentId,
  };
};

```

### `web/src/pages/next-search/retrieval-documents/index.less`

```less
.selectFilesCollapse {
  :global(.ant-collapse-header) {
    padding-inline-start: 22px;
  }
  margin-bottom: 32px;
  overflow-y: auto;
}

.selectFilesTitle {
  padding-inline-end: 10px;
}

```

### `web/src/pages/next-search/searching.tsx`

```tsx
import { Dispatch, SetStateAction } from 'react';
import { ISearchAppDetailProps } from '../next-searches/hooks';
import { useSearching } from './hooks';
import './index.less';
import SearchingView from './search-view';
export default function SearchingPage({
  searchText,
  data: searchData,
  setIsSearching,
  setSearchText,
  showEmbedLogo,
}: {
  searchText: string;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
  data: ISearchAppDetailProps;
  showEmbedLogo?: boolean;
}) {
  const searchingParam = useSearching({
    searchText,
    data: searchData,
    setIsSearching,
    setSearchText,
  });
  return (
    <SearchingView
      {...searchingParam}
      searchData={searchData}
      setIsSearching={setIsSearching}
      showEmbedLogo={showEmbedLogo}
    />
  );
}

```

### `web/src/pages/next-searches/search-card.tsx`

```tsx
import { HomeCard } from '@/components/home-card';
import { MoreButton } from '@/components/more-button';
import { useNavigatePage } from '@/hooks/logic-hooks/navigate-hooks';
import { ISearchAppProps } from './hooks';
import { SearchDropdown } from './search-dropdown';

interface IProps {
  data: ISearchAppProps;
  showSearchRenameModal: (data: ISearchAppProps) => void;
}
export function SearchCard({ data, showSearchRenameModal }: IProps) {
  const { navigateToSearch } = useNavigatePage();

  return (
    <HomeCard
      data={data}
      moreDropdown={
        <SearchDropdown
          dataset={data}
          showSearchRenameModal={showSearchRenameModal}
        >
          <MoreButton></MoreButton>
        </SearchDropdown>
      }
      onClick={navigateToSearch(data?.id)}
    />
  );
}

```

### `web/src/pages/user-setting/components/user-setting-header/index.tsx`

```tsx
import Spotlight from '@/components/spotlight';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PropsWithChildren } from 'react';

export function Title({ children }: PropsWithChildren) {
  return <span className="font-bold text-xl">{children}</span>;
}

type ProfileSettingWrapperCardProps = {
  header: React.ReactNode;
} & PropsWithChildren;

export function ProfileSettingWrapperCard({
  header,
  children,
}: ProfileSettingWrapperCardProps) {
  return (
    <Card
      as="article"
      className="relative w-full border-border-button bg-transparent border-0.5 flex flex-col"
    >
      <CardHeader className="flex-0 border-b-0.5 border-border-button p-5">
        {header}
      </CardHeader>

      <CardContent className="flex-1 h-0 p-0">{children}</CardContent>

      <Spotlight />
    </Card>
  );
}

```

### `web/src/pages/user-setting/index.module.less`

```less
.settingWrapper {
  width: 100%;

  .outletWrapper {
    height: 100%;
    overflow-y: auto;
  }

  .itemDescription {
    padding: 10px 0;
    margin: 0;
  }
}

```

### `web/src/pages/user-setting/index.tsx`

```tsx
import { Outlet } from 'react-router';
import { SideBar } from './sidebar';

import { cn } from '@/lib/utils';

const UserSetting = () => {
  return (
    <section className="pt-8 size-full grid grid-cols-[auto_1fr] grid-rows-1">
      <SideBar />

      <div className={cn('pr-6 pb-6 flex flex-1 rounded-lg overflow-hidden')}>
        <Outlet />
      </div>
    </section>
  );
};

export default UserSetting;

```

### `web/src/pages/user-setting/interface.ts`

```ts
export interface ApiKeyPostBody {
  api_key: string;
  base_url: string;
  group_id?: string;
}

```

### `web/src/pages/user-setting/mcp/tool-card.tsx`

```tsx
import { IMCPTool } from '@/interfaces/database/mcp';

export type McpToolCardProps = {
  data: IMCPTool;
};

export function McpToolCard({ data }: McpToolCardProps) {
  return (
    <section className="group py-2.5">
      <div className="text-sm font-normal line-clamp-1 pb-2">{data.name}</div>
      <div className="text-xs font-normal text-text-secondary">
        {data.description}
      </div>
    </section>
  );
}

```

### `web/src/pages/user-setting/mcp/use-export-mcp.ts`

```ts
import { useExportMcpServer } from '@/hooks/use-mcp-request';
import { downloadJsonFile } from '@/utils/file-util';
import { useCallback } from 'react';

export function useExportMcp() {
  const { exportMcpServer } = useExportMcpServer();

  const handleExportMcpJson = useCallback(
    (ids: string[]) => async () => {
      const data = await exportMcpServer(ids);
      if (data.code === 0) {
        downloadJsonFile(data.data, `mcp.json`);
      }
    },
    [exportMcpServer],
  );

  return {
    handleExportMcpJson,
  };
}

```

### `web/src/pages/user-setting/setting-api/index.module.less`

```less
.apiWrapper {
  width: 100%;

  div[class^='chartWrapper'] {
    height: auto !important;
  }
}

```

### `web/src/pages/user-setting/setting-api/index.tsx`

```tsx
import ApiContent from '@/components/api-service/chat-overview-modal/api-content';

const ApiPage = () => {
  return <ApiContent idKey="dialogId"></ApiContent>;
};

export default ApiPage;

```

### `web/src/pages/user-setting/setting-model/components/used-model.tsx`

```tsx
import { LlmItem, useSelectLlmList } from '@/hooks/use-llm-request';
import { t } from 'i18next';
import { ModelProviderCard } from './modal-card';

export const UsedModel = ({
  handleAddModel,
  handleEditModel,
}: {
  handleAddModel: (factory: string) => void;
  handleEditModel: (model: any, factory: LlmItem) => void;
}) => {
  const { myLlmList: llmList } = useSelectLlmList();
  return (
    <div
      className="flex flex-col w-full gap-5 mb-4"
      data-testid="added-models-section"
    >
      <div className="text-text-primary text-2xl font-medium mb-2 mt-4">
        {t('setting.addedModels')}
      </div>
      {llmList.map((llm) => {
        return (
          <ModelProviderCard
            key={llm.name}
            item={llm}
            clickApiKey={handleAddModel}
            handleEditModel={handleEditModel}
          />
        );
      })}
    </div>
  );
};

```

### `web/src/pages/user-setting/setting-model/constant.ts`

```ts
export const BedrockRegionList = [
  'us-east-2',
  'us-east-1',
  'us-west-1',
  'us-west-2',
  'af-south-1',
  'ap-east-1',
  'ap-south-2',
  'ap-southeast-3',
  'ap-southeast-5',
  'ap-southeast-4',
  'ap-south-1',
  'ap-northeast-3',
  'ap-northeast-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-east-2',
  'ap-southeast-7',
  'ap-northeast-1',
  'ca-central-1',
  'ca-west-1',
  'cn-north-1',
  'cn-northwest-1',
  'eu-central-1',
  'eu-west-1',
  'eu-west-2',
  'eu-south-1',
  'eu-west-3',
  'eu-south-2',
  'eu-north-1',
  'eu-central-2',
  'il-central-1',
  'mx-central-1',
  'me-south-1',
  'me-central-1',
  'sa-east-1',
  'us-gov-east-1',
  'us-gov-west-1',
];

```

### `web/src/pages/user-setting/sidebar/hooks.tsx`

```tsx
import { useLogout } from '@/hooks/use-login-request';
import { Routes } from '@/routes';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useHandleMenuClick = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<Routes>();
  const { logout } = useLogout();
  const location = useLocation();
  useEffect(() => {
    const path = (location.pathname.split('/')?.[2] || '') as Routes;
    if (path) {
      setActive(('/' + path) as Routes);
    }
  }, [location]);

  const handleMenuClick = useCallback(
    (key: Routes) => () => {
      if (key === Routes.Logout) {
        logout();
      } else {
        setActive(key);
        navigate(`${Routes.UserSetting}${key}`);
      }
    },
    [logout, navigate],
  );

  return { handleMenuClick, active, setActive };
};

```

### `web/src/pages/user-setting/utils.ts`

```ts
import { LocalLlmFactories } from './constants';

export const isLocalLlmFactory = (llmFactory: string) =>
  LocalLlmFactories.some((x) => x === llmFactory);

```

### `web/src/services/dataflow-service.ts`

```ts
import api from '@/utils/api';
import { registerNextServer } from '@/utils/register-server';

const {
  listDataflow,
  removeDataflow,
  fetchDataflow,
  runDataflow,
  setDataflow,
} = api;

const methods = {
  listDataflow: {
    url: listDataflow,
    method: 'get',
  },
  removeDataflow: {
    url: removeDataflow,
    method: 'post',
  },
  fetchDataflow: {
    url: fetchDataflow,
    method: 'get',
  },
  runDataflow: {
    url: runDataflow,
    method: 'post',
  },
  setDataflow: {
    url: setDataflow,
    method: 'post',
  },
} as const;

const dataflowService = registerNextServer<keyof typeof methods>(methods);

export default dataflowService;

```

### `web/src/services/plugin-service.ts`

```ts
import api from '@/utils/api';
import registerServer from '@/utils/register-server';
import request from '@/utils/request';

const { llmTools } = api;

const methods = {
  getLlmTools: {
    url: llmTools,
    method: 'get',
  },
} as const;

const pluginService = registerServer<keyof typeof methods>(methods, request);

export default pluginService;

```

### `web/src/theme/theme.ts`

```ts
module.exports = {
  'primary-color': '#338AFF', // '#338AFF',
  'border-radius-base': '4px',
  // 'menu-dark-color': '',
  // 'menu-dark-danger-color': '',
  'menu-dark-bg': '#092140',
  'menu-dark-item-active-bg': '#092140',

  // 'menu-dark-arrow-color': '',
  // 'menu-dark-inline-submenu-bg': '',
};

```

### `web/src/theme/vars.less`

```less
@header-height: 64px;
@menu-width: 200px;
@menu-small-width: 83px;
@layout-bg: #f2f3f6;
@logo-font-size: 22px;
@border-color: #d9d9d9;
@dashboard-desc-color: #9d9fa2;
@primary-color: #338aff;
@primary-color-light: rgba(21, 65, 255, 0.5);

```

### `web/src/typings.d.ts`

```ts
import '@tanstack/react-table';
declare module 'lodash';

declare global {
  type Nullable<T> = T | null;
}

declare module '@tanstack/react-table' {
  interface ColumnMeta {
    headerClassName?: string;
    headerCellClassName?: string;
    cellClassName?: string;
  }
}

```

### `web/src/utils/citation-utils.ts`

```ts
export const normalizeCitationDigits = (text: string) => {
  if (!text) return text;
  return text.replace(/[٠-٩۰-۹]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code >= 0x0660 && code <= 0x0669) {
      return String.fromCharCode(code - 0x0660 + 0x30);
    }
    if (code >= 0x06f0 && code <= 0x06f9) {
      return String.fromCharCode(code - 0x06f0 + 0x30);
    }
    return char;
  });
};

export const parseCitationIndex = (value: string) => {
  const normalized = normalizeCitationDigits(value);
  const markerMatch = normalized.match(/\[(?:ID:)?(\d+)\]/);
  if (markerMatch) return Number(markerMatch[1]);
  if (/^\d+$/.test(normalized)) return Number(normalized);
  return Number.NaN;
};

export const citationMarkerReg =
  /\[(?:ID:)?([0-9\u0660-\u0669\u06F0-\u06F9]+)\]/g;

```

### `web/src/utils/component-util.ts`

```ts
export function buildSelectOptions(
  list: Array<any>,
  keyName?: string,
  valueName?: string,
) {
  if (!Array.isArray(list) || !list.length) {
    return [];
  }
  if (keyName && valueName) {
    return list.map((x) => ({ label: x[valueName], value: x[keyName] }));
  }
  return list.map((x) => ({ label: x, value: x }));
}

```

### `web/src/utils/css-support.ts`

```ts
export const supportsCssAnchor =
  CSS.supports('position-anchor', '--anchor-name') &&
  CSS.supports('anchor-name', '--anchor-name') &&
  CSS.supports('top', 'anchor(--anchor-name bottom)') &&
  CSS.supports('width', 'anchor-size(--anchor-name width)');

```

### `web/src/utils/dataset-util.ts`

```ts
import { DocumentParserType } from '@/constants/knowledge';

export function isKnowledgeGraphParser(parserId: DocumentParserType) {
  return parserId === DocumentParserType.KnowledgeGraph;
}

export function isNaiveParser(parserId: DocumentParserType) {
  return parserId === DocumentParserType.Naive;
}

```

### `web/src/utils/dom-util.ts`

```ts
export const scrollToBottom = (element: HTMLElement) => {
  element.scrollTo(0, element.scrollHeight);
};

```

### `web/src/utils/store-util.ts`

```ts
export const getOneNamespaceEffectsLoading = (
  namespace: string,
  effects: Record<string, boolean>,
  effectNames: Array<string>,
) => {
  return effectNames.some(
    (effectName) => effects[`${namespace}/${effectName}`],
  );
};

export const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

```

### `web/src/wrappers/auth.tsx`

```tsx
import { useAuth } from '@/hooks/auth-hooks';
import { redirectToLogin } from '@/utils/authorization-util';
import { Outlet } from 'react-router';

export default function AuthWrapper() {
  const { isLogin } = useAuth();
  if (isLogin === true) {
    return <Outlet />;
  } else if (isLogin === false) {
    redirectToLogin();
  }

  return <></>;
}

```

### `web/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* JSX support */
    "jsx": "react-jsx",

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@parent/*": ["../src/*"]
    },

    "types": ["vite/client", "node", "@testing-library/jest-dom"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

### `web/tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```
