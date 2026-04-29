# Stirling-Tools/stirling-pdf@main

- Files included: 397
- Files skipped: 3259
- Total size: 187.3 KB
- Estimated tokens: ~39,937
- ⚠️ Partial: Hit max files cap (500). Raise it in Settings or tighten filters.

## Directory Structure

```
├── .devcontainer
│   ├── devcontainer.json
│   ├── git-init.sh
│   └── init-setup.sh
├── .github
│   ├── actions
│   │   └── setup-bot
│   │       └── action.yml
│   ├── aur
│   │   ├── stirling-pdf-desktop
│   │   │   └── PKGBUILD
│   │   └── stirling-pdf-server-bin
│   │       └── PKGBUILD
│   ├── config
│   │   ├── .files.yaml
│   │   ├── dependency-review-config.yml
│   │   ├── repo_devs.json
│   │   └── system-prompt.txt
│   ├── ISSUE_TEMPLATE
│   │   ├── 1-bug.yml
│   │   ├── 2-feature.yml
│   │   └── config.yml
│   ├── scripts
│   │   ├── check_language_toml.py
│   │   ├── requirements_dev.in
│   │   ├── requirements_dev.txt
│   │   ├── requirements_pre_commit.in
│   │   ├── requirements_pre_commit.txt
│   │   ├── requirements_sync_readme.in
│   │   └── requirements_sync_readme.txt
│   ├── workflows
│   │   ├── ai_pr_title_review.yml
│   │   ├── ai-engine.yml
│   │   ├── aur-publish.yml
│   │   ├── auto-labelerV2.yml
│   │   ├── build-enterprise.yml
│   │   ├── build.yml
│   │   ├── check_toml.yml
│   │   ├── dependency-review.yml
│   │   ├── deploy-on-v2-commit.yml
│   │   ├── frontend-backend-licenses-update.yml
│   │   ├── manage-label.yml
│   │   ├── multiOSReleases.yml
│   │   ├── nightly.yml
│   │   ├── package-managers.yml
│   │   ├── PR-Auto-Deploy-V2.yml
│   │   ├── PR-Demo-cleanup.yml
│   │   ├── PR-Demo-Comment-with-react.yml
│   │   ├── pre_commit.yml
│   │   ├── push-docker-base.yml
│   │   ├── push-docker.yml
│   │   ├── rollback-latest.yml
│   │   ├── scorecards.yml
│   │   ├── stale.yml
│   │   ├── swagger.yml
│   │   ├── sync_files_v2.yml
│   │   ├── tauri-build.yml
│   │   └── testdriver.yml
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   ├── labeler-config-srvaroa.yml
│   ├── labels.yml
│   ├── pull_request_template.md
│   └── release.yml
├── .taskfiles
│   ├── backend.yml
│   ├── desktop.yml
│   ├── docker.yml
│   ├── engine.yml
│   └── frontend.yml
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── app
│   ├── common
│   │   ├── src
│   │   │   ├── main
│   │   │   │   ├── java
│   │   │   │   │   ├── org
│   │   │   │   │   │   └── apache
│   │   │   │   │   │       └── pdfbox
│   │   │   │   │   │           └── examples
│   │   │   │   │   │               └── util
│   │   │   │   │   │                   └── DeletingRandomAccessFile.java
│   │   │   │   │   └── stirling
│   │   │   │   │       └── software
│   │   │   │   │           ├── common
│   │   │   │   │           │   ├── annotations
│   │   │   │   │           │   │   ├── api
│   │   │   │   │           │   │   │   ├── AccountSecurityApi.java
│   │   │   │   │           │   │   │   ├── AdminApi.java
│   │   │   │   │           │   │   │   ├── AdminServerCertificateApi.java
│   │   │   │   │           │   │   │   ├── AnalysisApi.java
│   │   │   │   │           │   │   │   ├── ConfigApi.java
│   │   │   │   │           │   │   │   ├── ConvertApi.java
│   │   │   │   │           │   │   │   ├── DatabaseApi.java
│   │   │   │   │           │   │   │   ├── DatabaseManagementApi.java
│   │   │   │   │           │   │   │   ├── FilterApi.java
│   │   │   │   │           │   │   │   ├── GeneralApi.java
│   │   │   │   │           │   │   │   ├── InfoApi.java
│   │   │   │   │           │   │   │   ├── InviteApi.java
│   │   │   │   │           │   │   │   ├── MiscApi.java
│   │   │   │   │           │   │   │   ├── PipelineApi.java
│   │   │   │   │           │   │   │   ├── ProprietaryUiDataApi.java
│   │   │   │   │           │   │   │   ├── SecurityApi.java
│   │   │   │   │           │   │   │   ├── SettingsApi.java
│   │   │   │   │           │   │   │   ├── TeamApi.java
│   │   │   │   │           │   │   │   ├── UiDataApi.java
│   │   │   │   │           │   │   │   └── UserApi.java
│   │   │   │   │           │   │   └── AutoJobPostMapping.java
│   │   │   │   │           │   ├── aop
│   │   │   │   │           │   │   └── AutoJobAspect.java
│   │   │   │   │           │   ├── config
│   │   │   │   │           │   │   ├── TempFileConfiguration.java
│   │   │   │   │           │   │   └── TempFileShutdownHook.java
│   │   │   │   │           │   ├── configuration
│   │   │   │   │           │   │   ├── interfaces
│   │   │   │   │           │   │   │   └── ShowAdminInterface.java
│   │   │   │   │           │   │   ├── AppConfig.java
│   │   │   │   │           │   │   ├── ConfigInitializer.java
│   │   │   │   │           │   │   ├── InstallationPathConfig.java
│   │   │   │   │           │   │   ├── PostHogConfig.java
│   │   │   │   │           │   │   ├── PostHogLoggerImpl.java
│   │   │   │   │           │   │   ├── RuntimePathConfig.java
│   │   │   │   │           │   │   ├── SchedulingConfig.java
│   │   │   │   │           │   │   └── YamlPropertySourceFactory.java
│   │   │   │   │           │   ├── constants
│   │   │   │   │           │   │   └── JwtConstants.java
│   │   │   │   │           │   ├── model
│   │   │   │   │           │   │   ├── api
│   │   │   │   │           │   │   │   ├── converters
│   │   │   │   │           │   │   │   │   ├── EmlToPdfRequest.java
│   │   │   │   │           │   │   │   │   └── HTMLToPdfRequest.java
│   │   │   │   │           │   │   │   ├── misc
│   │   │   │   │           │   │   │   │   ├── HighContrastColorCombination.java
│   │   │   │   │           │   │   │   │   └── ReplaceAndInvert.java
│   │   │   │   │           │   │   │   ├── security
│   │   │   │   │           │   │   │   │   ├── RedactionArea.java
│   │   │   │   │           │   │   │   │   └── UserSummaryDTO.java
│   │   │   │   │           │   │   │   ├── GeneralFile.java
│   │   │   │   │           │   │   │   └── PDFFile.java
│   │   │   │   │           │   │   ├── enumeration
│   │   │   │   │           │   │   │   ├── Role.java
│   │   │   │   │           │   │   │   └── UsernameAttribute.java
│   │   │   │   │           │   │   ├── exception
│   │   │   │   │           │   │   │   ├── UnsupportedClaimException.java
│   │   │   │   │           │   │   │   └── UnsupportedProviderException.java
│   │   │   │   │           │   │   ├── job
│   │   │   │   │           │   │   │   ├── JobProgress.java
│   │   │   │   │           │   │   │   ├── JobResponse.java
│   │   │   │   │           │   │   │   ├── JobResult.java
│   │   │   │   │           │   │   │   ├── JobStats.java
│   │   │   │   │           │   │   │   └── ResultFile.java
│   │   │   │   │           │   │   ├── oauth2
│   │   │   │   │           │   │   │   ├── GitHubProvider.java
│   │   │   │   │           │   │   │   ├── GoogleProvider.java
│   │   │   │   │           │   │   │   ├── KeycloakProvider.java
│   │   │   │   │           │   │   │   └── Provider.java
│   │   │   │   │           │   │   ├── ApplicationProperties.java
│   │   │   │   │           │   │   ├── FileInfo.java
│   │   │   │   │           │   │   ├── FormFieldWithCoordinates.java
│   │   │   │   │           │   │   └── PdfMetadata.java
│   │   │   │   │           │   ├── service
│   │   │   │   │           │   │   ├── CustomPDFDocumentFactory.java
│   │   │   │   │           │   │   ├── FileOrUploadService.java
│   │   │   │   │           │   │   ├── FileStorage.java
│   │   │   │   │           │   │   ├── InternalApiClient.java
│   │   │   │   │           │   │   ├── JobExecutorService.java
│   │   │   │   │           │   │   ├── JobOwnershipService.java
│   │   │   │   │           │   │   ├── JobQueue.java
│   │   │   │   │           │   │   ├── LicenseServiceInterface.java
│   │   │   │   │           │   │   ├── LineArtConversionService.java
│   │   │   │   │           │   │   ├── MobileScannerService.java
│   │   │   │   │           │   │   ├── PdfMetadataService.java
│   │   │   │   │           │   │   ├── PdfSigningService.java
│   │   │   │   │           │   │   ├── PersonalSignatureServiceInterface.java
│   │   │   │   │           │   │   ├── PostHogService.java
│   │   │   │   │           │   │   ├── ResourceMonitor.java
│   │   │   │   │           │   │   ├── ServerCertificateServiceInterface.java
│   │   │   │   │           │   │   ├── SsrfProtectionService.java
│   │   │   │   │           │   │   ├── TaskManager.java
│   │   │   │   │           │   │   ├── TempFileCleanupService.java
│   │   │   │   │           │   │   ├── ToolMetadataService.java
│   │   │   │   │           │   │   └── UserServiceInterface.java
│   │   │   │   │           │   └── util
│   │   │   │   │           │       ├── misc
│   │   │   │   │           │       │   ├── ColorSpaceConversionStrategy.java
│   │   │   │   │           │       │   ├── CustomColorReplaceStrategy.java
│   │   │   │   │           │       │   ├── HighContrastColorReplaceDecider.java
│   │   │   │   │           │       │   ├── InvertFullColorStrategy.java
│   │   │   │   │           │       │   ├── PdfTextStripperCustom.java
│   │   │   │   │           │       │   └── ReplaceAndInvertColorStrategy.java
│   │   │   │   │           │       ├── propertyeditor
│   │   │   │   │           │       │   ├── StringToArrayListPropertyEditor.java
│   │   │   │   │           │       │   └── StringToMapPropertyEditor.java
│   │   │   │   │           │       ├── AppArgsCapture.java
│   │   │   │   │           │       ├── ApplicationContextProvider.java
│   │   │   │   │           │       ├── AttachmentUtils.java
│   │   │   │   │           │       ├── CbrUtils.java
│   │   │   │   │           │       ├── CbzUtils.java
│   │   │   │   │           │       ├── CheckProgramInstall.java
│   │   │   │   │           │       ├── ChecksumUtils.java
│   │   │   │   │           │       ├── CustomHtmlSanitizer.java
│   │   │   │   │           │       ├── EmlParser.java
│   │   │   │   │           │       ├── EmlProcessingUtils.java
│   │   │   │   │           │       ├── EmlToPdf.java
│   │   │   │   │           │       ├── ErrorUtils.java
│   │   │   │   │           │       ├── ExceptionUtils.java
│   │   │   │   │           │       ├── ExecutorFactory.java
│   │   │   │   │           │       ├── FileMonitor.java
│   │   │   │   │           │       ├── FileReadinessChecker.java
│   │   │   │   │           │       ├── FileToPdf.java
│   │   │   │   │           │       ├── FormFieldTypeSupport.java
│   │   │   │   │           │       ├── FormUtils.java
│   │   │   │   │           │       ├── GeneralFormCopyUtils.java
│   │   │   │   │           │       ├── GeneralFormFieldTypeSupport.java
│   │   │   │   │           │       ├── GeneralUtils.java
│   │   │   │   │           │       ├── ImageProcessingUtils.java
│   │   │   │   │           │       ├── JarPathUtil.java
│   │   │   │   │           │       ├── JobContext.java
│   │   │   │   │           │       ├── PdfAttachmentHandler.java
│   │   │   │   │           │       ├── PdfErrorUtils.java
│   │   │   │   │           │       ├── PDFService.java
│   │   │   │   │           │       ├── PdfToCbrUtils.java
│   │   │   │   │           │       ├── PdfToCbzUtils.java
│   │   │   │   │           │       ├── PDFToFile.java
│   │   │   │   │           │       ├── PdfUtils.java
│   │   │   │   │           │       ├── ProcessExecutor.java
│   │   │   │   │           │       ├── PropertyConfigs.java
│   │   │   │   │           │       ├── ProviderUtils.java
│   │   │   │   │           │       ├── RegexPatternUtils.java
│   │   │   │   │           │       ├── RequestUriUtils.java
│   │   │   │   │           │       ├── SpringContextHolder.java
│   │   │   │   │           │       ├── SvgSanitizer.java
│   │   │   │   │           │       ├── TempDirectory.java
│   │   │   │   │           │       ├── TempFile.java
│   │   │   │   │           │       ├── TempFileManager.java
│   │   │   │   │           │       ├── TempFileRegistry.java
│   │   │   │   │           │       ├── TempFileUtil.java
│   │   │   │   │           │       ├── UIScaling.java
│   │   │   │   │           │       ├── UnoServerPool.java
│   │   │   │   │           │       ├── UrlUtils.java
│   │   │   │   │           │       ├── ValidationUtils.java
│   │   │   │   │           │       ├── WebResponseUtils.java
│   │   │   │   │           │       ├── YamlHelper.java
│   │   │   │   │           │       └── ZipExtractionUtils.java
│   │   │   │   │           └── SPDF
│   │   │   │   │               └── config
│   │   │   │   │                   ├── swagger
│   │   │   │   │                   │   ├── ErrorResponse.java
│   │   │   │   │                   │   └── StandardPdfResponse.java
│   │   │   │   │                   └── EndpointConfiguration.java
│   │   │   │   └── resources
│   │   │   │       └── templates
│   │   │   │           └── email-pdf-styles.css
│   │   │   └── test
│   │   │       ├── java
│   │   │       │   └── stirling
│   │   │       │       └── software
│   │   │       │           └── common
│   │   │       │               ├── annotations
│   │   │       │               │   └── AutoJobPostMappingIntegrationTest.java
│   │   │       │               ├── configuration
│   │   │       │               │   └── interfaces
│   │   │       │               │       └── ShowAdminInterfaceTest.java
│   │   │       │               ├── model
│   │   │       │               │   ├── exception
│   │   │       │               │   │   └── UnsupportedClaimExceptionTest.java
│   │   │       │               │   ├── ApplicationPropertiesDynamicYamlPropertySourceTest.java
│   │   │       │               │   ├── ApplicationPropertiesLogicTest.java
│   │   │       │               │   ├── ApplicationPropertiesSaml2HttpTest.java
│   │   │       │               │   ├── ApplicationPropertiesSaml2ResourceTest.java
│   │   │       │               │   └── FileInfoTest.java
│   │   │       │               ├── service
│   │   │       │               │   ├── CustomPDFDocumentFactoryTest.java
│   │   │       │               │   ├── FileStorageTest.java
│   │   │       │               │   ├── InternalApiClientTest.java
│   │   │       │               │   ├── JobExecutorServiceTest.java
│   │   │       │               │   ├── JobQueueTest.java
│   │   │       │               │   ├── ResourceMonitorTest.java
│   │   │       │               │   ├── SpyPDFDocumentFactory.java
│   │   │       │               │   ├── TaskManagerTest.java
│   │   │       │               │   └── TempFileCleanupServiceTest.java
│   │   │       │               └── util
│   │   │       │                   ├── misc
│   │   │       │                   │   ├── CustomColorReplaceStrategyTest.java
│   │   │       │                   │   ├── HighContrastColorReplaceDeciderTest.java
│   │   │       │                   │   ├── InvertFullColorStrategyTest.java
│   │   │       │                   │   ├── PdfTextStripperCustomTest.java
│   │   │       │                   │   └── ReplaceAndInvertColorStrategyTest.java
│   │   │       │                   ├── propertyeditor
│   │   │       │                   │   ├── StringToArrayListPropertyEditorTest.java
│   │   │       │                   │   └── StringToMapPropertyEditorTest.java
│   │   │       │                   ├── AppArgsCaptureTest.java
│   │   │       │                   ├── ApplicationContextProviderTest.java
│   │   │       │                   ├── AttachmentUtilsTest.java
│   │   │       │                   ├── CbrUtilsTest.java
│   │   │       │                   ├── CbzUtilsTest.java
│   │   │       │                   ├── CheckProgramInstallTest.java
│   │   │       │                   ├── ChecksumUtilsAdditionalTest.java
│   │   │       │                   ├── ChecksumUtilsTest.java
│   │   │       │                   ├── CustomHtmlSanitizerTest.java
│   │   │       │                   ├── EmlParserTest.java
│   │   │       │                   ├── EmlProcessingUtilsTest.java
│   │   │       │                   ├── EmlToPdfTest.java
│   │   │       │                   ├── ErrorUtilsTest.java
│   │   │       │                   ├── ExceptionUtilsTest.java
│   │   │       │                   ├── ExecutorFactoryTest.java
│   │   │       │                   ├── FileMonitorTest.java
│   │   │       │                   ├── FileReadinessCheckerTest.java
│   │   │       │                   ├── FileToPdfTest.java
│   │   │       │                   ├── FormFieldTypeSupportTest.java
│   │   │       │                   ├── FormUtilsAdditionalTest.java
│   │   │       │                   ├── FormUtilsTest.java
│   │   │       │                   ├── GeneralFormCopyUtilsTest.java
│   │   │       │                   ├── GeneralFormFieldTypeSupportTest.java
│   │   │       │                   ├── GeneralUtilsAdditionalTest.java
│   │   │       │                   ├── GeneralUtilsTest.java
│   │   │       │                   ├── ImageProcessingUtilsTest.java
│   │   │       │                   ├── JarPathUtilTest.java
│   │   │       │                   ├── JobContextTest.java
│   │   │       │                   ├── PdfAttachmentHandlerTest.java
│   │   │       │                   ├── PdfErrorUtilsTest.java
│   │   │       │                   ├── PDFServiceTest.java
│   │   │       │                   ├── PdfToCbrUtilsTest.java
│   │   │       │                   ├── PdfToCbzUtilsTest.java
│   │   │       │                   ├── PDFToFileTest.java
│   │   │       │                   ├── PdfUtilsTest.java
│   │   │       │                   ├── ProcessExecutorTest.java
│   │   │       │                   ├── PropertyConfigsTest.java
│   │   │       │                   ├── ProviderUtilsAdditionalTest.java
│   │   │       │                   ├── ProviderUtilsTest.java
│   │   │       │                   ├── RegexPatternUtilsTest.java
│   │   │       │                   ├── RequestUriUtilsTest.java
│   │   │       │                   ├── SpringContextHolderTest.java
│   │   │       │                   ├── SvgSanitizerTest.java
│   │   │       │                   ├── TempDirectoryTest.java
│   │   │       │                   ├── TempFileManagerTest.java
│   │   │       │                   ├── TempFileRegistryTest.java
│   │   │       │                   ├── TempFileTest.java
│   │   │       │                   ├── TempFileUtilTest.java
│   │   │       │                   ├── UIScalingTest.java
│   │   │       │                   ├── UnoServerPoolTest.java
│   │   │       │                   ├── UrlUtilsTest.java
│   │   │       │                   ├── ValidationUtilsTest.java
│   │   │       │                   ├── WebResponseUtilsTest.java
│   │   │       │                   └── YamlHelperTest.java
│   │   │       └── resources
│   │   │           ├── saml
│   │   │           │   └── dummy.txt
│   │   │           └── example.pdf
│   │   ├── .gitignore
│   │   └── build.gradle
│   ├── core
│   │   ├── src
│   │   │   ├── main
│   │   │   │   ├── java
│   │   │   │   │   ├── org
│   │   │   │   │   │   └── apache
│   │   │   │   │   │       └── pdfbox
│   │   │   │   │   │           └── examples
│   │   │   │   │   │               ├── signature
│   │   │   │   │   │               │   ├── CMSProcessableInputStream.java
│   │   │   │   │   │               │   ├── CreateSignatureBase.java
│   │   │   │   │   │               │   ├── TSAClient.java
│   │   │   │   │   │               │   └── ValidationTimeStamp.java
│   │   │   │   │   │               └── util
│   │   │   │   │   │                   └── ConnectedInputStream.java
│   │   │   │   │   └── stirling
│   │   │   │   │       └── software
│   │   │   │   │           ├── common
│   │   │   │   │           │   └── controller
│   │   │   │   │           │       └── JobController.java
│   │   │   │   │           └── SPDF
│   │   │   │   │               ├── config
│   │   │   │   │               │   ├── fingerprint
│   │   │   │   │               │   │   ├── FingerprintBasedSessionFilter.java
│   │   │   │   │               │   │   ├── FingerprintBasedSessionManager.java
│   │   │   │   │               │   │   └── FingerprintGenerator.java
│   │   │   │   │               │   ├── swagger
│   │   │   │   │               │   │   ├── CsvConversionResponse.java
│   │   │   │   │               │   │   ├── FilterResponse.java
│   │   │   │   │               │   │   ├── HtmlConversionResponse.java
│   │   │   │   │               │   │   ├── JavaScriptResponse.java
│   │   │   │   │               │   │   ├── JsonDataResponse.java
│   │   │   │   │               │   │   ├── MarkdownConversionResponse.java
│   │   │   │   │               │   │   ├── MultiFileResponse.java
│   │   │   │   │               │   │   ├── PowerPointConversionResponse.java
│   │   │   │   │               │   │   ├── TextPlainConversionResponse.java
│   │   │   │   │               │   │   ├── WordConversionResponse.java
│   │   │   │   │               │   │   └── XmlConversionResponse.java
│   │   │   │   │               │   ├── AppUpdateService.java
│   │   │   │   │               │   ├── CleanUrlInterceptor.java
│   │   │   │   │               │   ├── EndpointInspector.java
│   │   │   │   │               │   ├── EndpointInterceptor.java
│   │   │   │   │               │   ├── ExternalAppDepConfig.java
│   │   │   │   │               │   ├── GlobalErrorResponseCustomizer.java
│   │   │   │   │               │   ├── InitialSetup.java
│   │   │   │   │               │   ├── LocaleConfiguration.java
│   │   │   │   │               │   ├── LogbackPropertyLoader.java
│   │   │   │   │               │   ├── MetricsConfig.java
│   │   │   │   │               │   ├── MetricsFilter.java
│   │   │   │   │               │   ├── MultipartConfiguration.java
│   │   │   │   │               │   ├── OpenApiConfig.java
│   │   │   │   │               │   ├── SpringDocConfig.java
│   │   │   │   │               │   ├── StartupApplicationListener.java
│   │   │   │   │               │   ├── TauriProcessMonitor.java
│   │   │   │   │               │   ├── TelegramBotConfig.java
│   │   │   │   │               │   ├── WAUTrackingFilter.java
│   │   │   │   │               │   └── WebMvcConfig.java
│   │   │   │   │               ├── controller
│   │   │   │   │               │   ├── api
│   │   │   │   │               │   │   ├── converters
│   │   │   │   │               │   │   │   ├── ConvertEbookToPDFController.java
│   │   │   │   │               │   │   │   ├── ConvertEmlToPDF.java
│   │   │   │   │               │   │   │   ├── ConvertHtmlToPDF.java
│   │   │   │   │               │   │   │   ├── ConvertImgPDFController.java
│   │   │   │   │               │   │   │   ├── ConvertMarkdownToPdf.java
│   │   │   │   │               │   │   │   ├── ConvertOfficeController.java
│   │   │   │   │               │   │   │   ├── ConvertPdfJsonController.java
│   │   │   │   │               │   │   │   ├── ConvertPdfJsonExceptionHandler.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToEpubController.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToExcelController.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToHtml.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToOffice.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToPDFA.java
│   │   │   │   │               │   │   │   ├── ConvertPdfToVideoController.java
│   │   │   │   │               │   │   │   ├── ConvertSvgToPDF.java
│   │   │   │   │               │   │   │   ├── ConvertWebsiteToPDF.java
│   │   │   │   │               │   │   │   ├── ExtractCSVController.java
│   │   │   │   │               │   │   │   └── PdfVectorExportController.java
│   │   │   │   │               │   │   ├── filters
│   │   │   │   │               │   │   │   └── FilterController.java
│   │   │   │   │               │   │   ├── form
│   │   │   │   │               │   │   │   ├── FormFillController.java
│   │   │   │   │               │   │   │   └── FormPayloadParser.java
│   │   │   │   │               │   │   ├── misc
│   │   │   │   │               │   │   │   ├── AttachmentController.java
│   │   │   │   │               │   │   │   ├── AutoRenameController.java
│   │   │   │   │               │   │   │   ├── AutoSplitPdfController.java
│   │   │   │   │               │   │   │   ├── BlankPageController.java
│   │   │   │   │               │   │   │   ├── CompressController.java
│   │   │   │   │               │   │   │   ├── ConfigController.java
│   │   │   │   │               │   │   │   ├── DecompressPdfController.java
│   │   │   │   │               │   │   │   ├── ExtractImageScansController.java
│   │   │   │   │               │   │   │   ├── ExtractImagesController.java
│   │   │   │   │               │   │   │   ├── FlattenController.java
│   │   │   │   │               │   │   │   ├── MetadataController.java
│   │   │   │   │               │   │   │   ├── MobileScannerController.java
│   │   │   │   │               │   │   │   ├── OCRController.java
│   │   │   │   │               │   │   │   ├── OverlayImageController.java
│   │   │   │   │               │   │   │   ├── PageNumbersController.java
│   │   │   │   │               │   │   │   ├── PrintFileController.java
│   │   │   │   │               │   │   │   ├── RemoveImagesController.java
│   │   │   │   │               │   │   │   ├── RepairController.java
│   │   │   │   │               │   │   │   ├── ReplaceAndInvertColorController.java
│   │   │   │   │               │   │   │   ├── ScannerEffectController.java
│   │   │   │   │               │   │   │   ├── ShowJavascript.java
│   │   │   │   │               │   │   │   ├── StampController.java
│   │   │   │   │               │   │   │   └── UnlockPDFFormsController.java
│   │   │   │   │               │   │   ├── pipeline
│   │   │   │   │               │   │   │   ├── PipelineController.java
│   │   │   │   │               │   │   │   ├── PipelineDirectoryProcessor.java
│   │   │   │   │               │   │   │   └── PipelineProcessor.java
│   │   │   │   │               │   │   ├── security
│   │   │   │   │               │   │   │   ├── CertSignController.java
│   │   │   │   │               │   │   │   ├── GetInfoOnPDF.java
│   │   │   │   │               │   │   │   ├── PasswordController.java
│   │   │   │   │               │   │   │   ├── RedactController.java
│   │   │   │   │               │   │   │   ├── RemoveCertSignController.java
│   │   │   │   │               │   │   │   ├── SanitizeController.java
│   │   │   │   │               │   │   │   ├── TimestampController.java
│   │   │   │   │               │   │   │   ├── ValidateSignatureController.java
│   │   │   │   │               │   │   │   ├── VerifyPDFController.java
│   │   │   │   │               │   │   │   └── WatermarkController.java
│   │   │   │   │               │   │   ├── AdditionalLanguageJsController.java
│   │   │   │   │               │   │   ├── AnalysisController.java
│   │   │   │   │               │   │   ├── BookletImpositionController.java
│   │   │   │   │               │   │   ├── CropController.java
│   │   │   │   │               │   │   ├── EditTableOfContentsController.java
│   │   │   │   │               │   │   ├── MergeController.java
│   │   │   │   │               │   │   ├── MultiPageLayoutController.java
│   │   │   │   │               │   │   ├── PdfOverlayController.java
│   │   │   │   │               │   │   ├── PosterPdfController.java
│   │   │   │   │               │   │   ├── RearrangePagesPDFController.java
│   │   │   │   │               │   │   ├── RotationController.java
│   │   │   │   │               │   │   ├── ScalePagesController.java
│   │   │   │   │               │   │   ├── SettingsController.java
│   │   │   │   │               │   │   ├── SplitPdfByChaptersController.java
│   │   │   │   │               │   │   ├── SplitPdfBySectionsController.java
│   │   │   │   │               │   │   ├── SplitPdfBySizeController.java
│   │   │   │   │               │   │   ├── SplitPDFController.java
│   │   │   │   │               │   │   ├── ToSinglePageController.java
│   │   │   │   │               │   │   └── UIDataController.java
│   │   │   │   │               │   └── web
│   │   │   │   │               │       ├── MetricsController.java
│   │   │   │   │               │       ├── ReactRoutingController.java
│   │   │   │   │               │       ├── SignatureImageController.java
│   │   │   │   │               │       └── UploadLimitService.java
│   │   │   │   │               ├── exception
│   │   │   │   │               │   ├── CacheUnavailableException.java
│   │   │   │   │               │   └── GlobalExceptionHandler.java
│   │   │   │   │               ├── Factories
│   │   │   │   │               │   └── ReplaceAndInvertColorFactory.java
│   │   │   │   │               ├── model
│   │   │   │   │               │   ├── api
│   │   │   │   │               │   │   ├── converters
│   │   │   │   │               │   │   │   ├── ConvertCbrToPdfRequest.java
│   │   │   │   │               │   │   │   ├── ConvertCbzToPdfRequest.java
│   │   │   │   │               │   │   │   ├── ConvertEbookToPdfRequest.java
│   │   │   │   │               │   │   │   ├── ConvertPdfToCbrRequest.java
│   │   │   │   │               │   │   │   ├── ConvertPdfToCbzRequest.java
│   │   │   │   │               │   │   │   ├── ConvertPdfToEpubRequest.java
│   │   │   │   │               │   │   │   ├── ConvertPDFToMarkdown.java
│   │   │   │   │               │   │   │   ├── ConvertToImageRequest.java
│   │   │   │   │               │   │   │   ├── ConvertToPdfRequest.java
│   │   │   │   │               │   │   │   ├── PdfToBookRequest.java
│   │   │   │   │               │   │   │   ├── PdfToPdfARequest.java
│   │   │   │   │               │   │   │   ├── PdfToPresentationRequest.java
│   │   │   │   │               │   │   │   ├── PdfToTextOrRTFRequest.java
│   │   │   │   │               │   │   │   ├── PdfToVideoRequest.java
│   │   │   │   │               │   │   │   ├── PdfToWordRequest.java
│   │   │   │   │               │   │   │   ├── PdfVectorExportRequest.java
│   │   │   │   │               │   │   │   ├── SvgToPdfRequest.java
│   │   │   │   │               │   │   │   └── UrlToPdfRequest.java
│   │   │   │   │               │   │   ├── filter
│   │   │   │   │               │   │   │   ├── ContainsTextRequest.java
│   │   │   │   │               │   │   │   ├── FileSizeRequest.java
│   │   │   │   │               │   │   │   ├── PageRotationRequest.java
│   │   │   │   │               │   │   │   └── PageSizeRequest.java
│   │   │   │   │               │   │   ├── general
│   │   │   │   │               │   │   │   ├── BookletImpositionRequest.java
│   │   │   │   │               │   │   │   ├── CropPdfForm.java
│   │   │   │   │               │   │   │   ├── MergeMultiplePagesRequest.java
│   │   │   │   │               │   │   │   ├── MergePdfsRequest.java
│   │   │   │   │               │   │   │   ├── OverlayPdfsRequest.java
│   │   │   │   │               │   │   │   ├── PosterPdfRequest.java
│   │   │   │   │               │   │   │   ├── RearrangePagesRequest.java
│   │   │   │   │               │   │   │   ├── RotatePDFRequest.java
│   │   │   │   │               │   │   │   ├── ScalePagesRequest.java
│   │   │   │   │               │   │   │   └── SplitPdfBySizeOrCountRequest.java
│   │   │   │   │               │   │   ├── misc
│   │   │   │   │               │   │   │   ├── AddAttachmentRequest.java
│   │   │   │   │               │   │   │   ├── AddPageNumbersRequest.java
│   │   │   │   │               │   │   │   ├── AddStampRequest.java
│   │   │   │   │               │   │   │   ├── AttachmentInfo.java
│   │   │   │   │               │   │   │   ├── AutoSplitPdfRequest.java
│   │   │   │   │               │   │   │   ├── DeleteAttachmentRequest.java
│   │   │   │   │               │   │   │   ├── ExtractAttachmentsRequest.java
│   │   │   │   │               │   │   │   ├── ExtractHeaderRequest.java
│   │   │   │   │               │   │   │   ├── ExtractImageScansRequest.java
│   │   │   │   │               │   │   │   ├── FlattenRequest.java
│   │   │   │   │               │   │   │   ├── ListAttachmentsRequest.java
│   │   │   │   │               │   │   │   ├── MetadataRequest.java
│   │   │   │   │               │   │   │   ├── OptimizePdfRequest.java
│   │   │   │   │               │   │   │   ├── OverlayImageRequest.java
│   │   │   │   │               │   │   │   ├── PrintFileRequest.java
│   │   │   │   │               │   │   │   ├── ProcessPdfWithOcrRequest.java
│   │   │   │   │               │   │   │   ├── RemoveBlankPagesRequest.java
│   │   │   │   │               │   │   │   ├── RenameAttachmentRequest.java
│   │   │   │   │               │   │   │   ├── ReplaceAndInvertColorRequest.java
│   │   │   │   │               │   │   │   └── ScannerEffectRequest.java
│   │   │   │   │               │   │   ├── security
│   │   │   │   │               │   │   │   ├── AddPasswordRequest.java
│   │   │   │   │               │   │   │   ├── AddWatermarkRequest.java
│   │   │   │   │               │   │   │   ├── ManualRedactPdfRequest.java
│   │   │   │   │               │   │   │   ├── PDFPasswordRequest.java
│   │   │   │   │               │   │   │   ├── PDFVerificationRequest.java
│   │   │   │   │               │   │   │   ├── PDFVerificationResult.java
│   │   │   │   │               │   │   │   ├── RedactPdfRequest.java
│   │   │   │   │               │   │   │   ├── SanitizePdfRequest.java
│   │   │   │   │               │   │   │   ├── SignatureValidationRequest.java
│   │   │   │   │               │   │   │   ├── SignatureValidationResult.java
│   │   │   │   │               │   │   │   ├── SignPDFWithCertRequest.java
│   │   │   │   │               │   │   │   └── TimestampPdfRequest.java
│   │   │   │   │               │   │   ├── signature
│   │   │   │   │               │   │   │   ├── SavedSignatureRequest.java
│   │   │   │   │               │   │   │   └── SavedSignatureResponse.java
│   │   │   │   │               │   │   ├── EditTableOfContentsRequest.java
│   │   │   │   │               │   │   ├── HandleDataRequest.java
│   │   │   │   │               │   │   ├── ImageFile.java
│   │   │   │   │               │   │   ├── MultiplePDFFiles.java
│   │   │   │   │               │   │   ├── PDFComparison.java
│   │   │   │   │               │   │   ├── PDFComparisonAndCount.java
│   │   │   │   │               │   │   ├── PDFExtractImagesRequest.java
│   │   │   │   │               │   │   ├── PdfJsonConversionProgress.java
│   │   │   │   │               │   │   ├── PDFWithImageFormatRequest.java
│   │   │   │   │               │   │   ├── PDFWithPageNums.java
│   │   │   │   │               │   │   ├── PDFWithPageSize.java
│   │   │   │   │               │   │   ├── SplitPagesRequest.java
│   │   │   │   │               │   │   ├── SplitPdfByChaptersRequest.java
│   │   │   │   │               │   │   └── SplitPdfBySectionsRequest.java
│   │   │   │   │               │   ├── json
│   │   │   │   │               │   │   ├── PdfJsonAnnotation.java
│   │   │   │   │               │   │   ├── PdfJsonCosValue.java
│   │   │   │   │               │   │   ├── PdfJsonDocument.java
│   │   │   │   │               │   │   ├── PdfJsonDocumentMetadata.java
│   │   │   │   │               │   │   ├── PdfJsonFont.java
│   │   │   │   │               │   │   ├── PdfJsonFontCidSystemInfo.java
│   │   │   │   │               │   │   ├── PdfJsonFontConversionCandidate.java
│   │   │   │   │               │   │   ├── PdfJsonFontConversionStatus.java
│   │   │   │   │               │   │   ├── PdfJsonFontType3Glyph.java
│   │   │   │   │               │   │   ├── PdfJsonFormField.java
│   │   │   │   │               │   │   ├── PdfJsonImageElement.java
│   │   │   │   │               │   │   ├── PdfJsonMetadata.java
│   │   │   │   │               │   │   ├── PdfJsonPage.java
│   │   │   │   │               │   │   ├── PdfJsonPageDimension.java
│   │   │   │   │               │   │   ├── PdfJsonStream.java
│   │   │   │   │               │   │   ├── PdfJsonTextColor.java
│   │   │   │   │               │   │   └── PdfJsonTextElement.java
│   │   │   │   │               │   ├── ApiEndpoint.java
│   │   │   │   │               │   ├── Dependency.java
│   │   │   │   │               │   ├── PDFText.java
│   │   │   │   │               │   ├── PipelineConfig.java
│   │   │   │   │               │   ├── PipelineOperation.java
│   │   │   │   │               │   ├── PipelineResult.java
│   │   │   │   │               │   ├── SignatureFile.java
│   │   │   │   │               │   ├── SortTypes.java
│   │   │   │   │               │   └── SplitTypes.java
│   │   │   │   │               ├── pdf
│   │   │   │   │               │   ├── FlexibleCSVWriter.java
│   │   │   │   │               │   └── TextFinder.java
│   │   │   │   │               ├── service
│   │   │   │   │               │   ├── misc
│   │   │   │   │               │   │   └── ReplaceAndInvertColorService.java
│   │   │   │   │               │   ├── pdfjson
│   │   │   │   │               │   │   ├── type3
│   │   │   │   │               │   │   │   ├── library
│   │   │   │   │               │   │   │   │   ├── Type3FontLibrary.java
│   │   │   │   │               │   │   │   │   ├── Type3FontLibraryEntry.java
│   │   │   │   │               │   │   │   │   ├── Type3FontLibraryMatch.java
│   │   │   │   │               │   │   │   │   └── Type3FontLibraryPayload.java
│   │   │   │   │               │   │   │   ├── model
│   │   │   │   │               │   │   │   │   └── Type3GlyphOutline.java
│   │   │   │   │               │   │   │   ├── tool
│   │   │   │   │               │   │   │   │   └── Type3SignatureTool.java
│   │   │   │   │               │   │   │   ├── Type3ConversionRequest.java
│   │   │   │   │               │   │   │   ├── Type3ConversionStrategy.java
│   │   │   │   │               │   │   │   ├── Type3FontConversionService.java
│   │   │   │   │               │   │   │   ├── Type3FontSignatureCalculator.java
│   │   │   │   │               │   │   │   ├── Type3GlyphContext.java
│   │   │   │   │               │   │   │   ├── Type3GlyphExtractor.java
│   │   │   │   │               │   │   │   ├── Type3GraphicsEngine.java
│   │   │   │   │               │   │   │   └── Type3LibraryStrategy.java
│   │   │   │   │               │   │   ├── JobOwnershipServiceImpl.java
│   │   │   │   │               │   │   ├── NoOpJobOwnershipService.java
│   │   │   │   │               │   │   ├── PdfJsonFontService.java
│   │   │   │   │               │   │   ├── PdfJsonImageService.java
│   │   │   │   │               │   │   ├── PdfJsonMetadataService.java
│   │   │   │   │               │   │   └── PdfLazyLoadingService.java
│   │   │   │   │               │   ├── telegram
│   │   │   │   │               │   │   ├── FeedbackEnum.java
│   │   │   │   │               │   │   └── TelegramPipelineBot.java
│   │   │   │   │               │   ├── ApiDocService.java
│   │   │   │   │               │   ├── AttachmentService.java
│   │   │   │   │               │   ├── AttachmentServiceInterface.java
│   │   │   │   │               │   ├── CertificateValidationService.java
│   │   │   │   │               │   ├── LanguageService.java
│   │   │   │   │               │   ├── MetricsAggregatorService.java
│   │   │   │   │               │   ├── PdfJsonConversionService.java
│   │   │   │   │               │   ├── PdfJsonCosMapper.java
│   │   │   │   │               │   ├── PdfJsonFallbackFontService.java
│   │   │   │   │               │   ├── PdfSigningServiceImpl.java
│   │   │   │   │               │   ├── SharedSignatureService.java
│   │   │   │   │               │   ├── VeraPDFService.java
│   │   │   │   │               │   └── WeeklyActiveUsersService.java
│   │   │   │   │               ├── utils
│   │   │   │   │               │   ├── text
│   │   │   │   │               │   │   ├── TextEncodingHelper.java
│   │   │   │   │               │   │   ├── TextFinderUtils.java
│   │   │   │   │               │   │   └── WidthCalculator.java
│   │   │   │   │               │   ├── SvgOverlayUtil.java
│   │   │   │   │               │   └── SvgToPdf.java
│   │   │   │   │               ├── LibreOfficeListener.java
│   │   │   │   │               └── SPDFApplication.java
│   │   │   │   └── resources
│   │   │   │       ├── icc
│   │   │   │       │   └── sRGB2014.icc
│   │   │   │       ├── static
│   │   │   │       │   ├── css
│   │   │   │       │   │   ├── fonts
│   │   │   │       │   │   │   ├── bootstrap-icons.woff
│   │   │   │       │   │   │   └── bootstrap-icons.woff2
│   │   │   │       │   │   ├── account.css
│   │   │   │       │   │   ├── add-image.css
│   │   │   │       │   │   ├── bootstrap-icons.css
│   │   │   │       │   │   ├── bootstrap-icons.min.css
│   │   │   │       │   │   ├── bootstrap.min.css
│   │   │   │       │   │   ├── bootstrap.min.css.map
│   │   │   │       │   │   ├── cookieconsent.css
│   │   │   │       │   │   ├── cookieconsentCustomisation.css
│   │   │   │       │   │   ├── dragdrop.css
│   │   │   │       │   │   ├── edit-table-of-contents.css
│   │   │   │       │   │   ├── error.css
│   │   │   │       │   │   ├── errorBanner.css
│   │   │   │       │   │   ├── fileSelect.css
│   │   │   │       │   │   ├── footer.css
│   │   │   │       │   │   ├── game.css
│   │   │   │       │   │   ├── general.css
│   │   │   │       │   │   ├── home-legacy.css
│   │   │   │       │   │   ├── imageHighlighter.css
│   │   │   │       │   │   ├── licenses.css
│   │   │   │       │   │   ├── login.css
│   │   │   │       │   │   ├── merge.css
│   │   │   │       │   │   ├── pipeline.css
│   │   │   │       │   │   ├── prism.css
│   │   │   │       │   │   ├── rainbow-mode.css
│   │   │   │       │   │   ├── redact.css
│   │   │   │       │   │   ├── rotate-pdf.css
│   │   │   │       │   │   ├── sign.css
│   │   │   │       │   │   ├── split-pdf-by-sections.css
│   │   │   │       │   │   ├── stamp.css
│   │   │   │       │   │   ├── tab-container.css
│   │   │   │       │   │   └── usage.css
│   │   │   │       │   ├── files
│   │   │   │       │   │   ├── Auto Splitter Divider (with instructions).pdf
│   │   │   │       │   │   └── popularity.txt
│   │   │   │       │   ├── fonts
│   │   │   │       │   │   ├── Arimo-Regular.woff2
│   │   │   │       │   │   ├── DancingScript-Regular.woff2
│   │   │   │       │   │   ├── DejaVuSans-Bold.ttf
│   │   │   │       │   │   ├── DejaVuSans-BoldOblique.ttf
│   │   │   │       │   │   ├── DejaVuSans-Oblique.ttf
│   │   │   │       │   │   ├── DejaVuSans.ttf
│   │   │   │       │   │   ├── DejaVuSansMono-Bold.ttf
│   │   │   │       │   │   ├── DejaVuSansMono-BoldOblique.ttf
│   │   │   │       │   │   ├── DejaVuSansMono-Oblique.ttf
│   │   │   │       │   │   ├── DejaVuSansMono.ttf
│   │   │   │       │   │   ├── DejaVuSerif-Bold.ttf
│   │   │   │       │   │   ├── DejaVuSerif-BoldItalic.ttf
│   │   │   │       │   │   ├── DejaVuSerif-Italic.ttf
│   │   │   │       │   │   ├── DejaVuSerif.ttf
│   │   │   │       │   │   ├── Estonia.woff2
│   │   │   │       │   │   ├── google-symbol.woff2
│   │   │   │       │   │   ├── IndieFlower-Regular.woff2
│   │   │   │       │   │   ├── LiberationMono-Bold.ttf
│   │   │   │       │   │   ├── LiberationMono-BoldItalic.ttf
│   │   │   │       │   │   ├── LiberationMono-Italic.ttf
│   │   │   │       │   │   ├── LiberationMono-Regular.ttf
│   │   │   │       │   │   ├── LiberationSans-Bold.ttf
│   │   │   │       │   │   ├── LiberationSans-BoldItalic.ttf
│   │   │   │       │   │   ├── LiberationSans-Italic.ttf
│   │   │   │       │   │   ├── LiberationSans-Regular.ttf
│   │   │   │       │   │   ├── LiberationSerif-Bold.ttf
│   │   │   │       │   │   ├── LiberationSerif-BoldItalic.ttf
│   │   │   │       │   │   ├── LiberationSerif-Italic.ttf
│   │   │   │       │   │   ├── LiberationSerif-Regular.ttf
│   │   │   │       │   │   ├── NotoSans-Bold.ttf
│   │   │   │       │   │   ├── NotoSans-BoldItalic.ttf
│   │   │   │       │   │   ├── NotoSans-Italic.ttf
│   │   │   │       │   │   ├── NotoSans-Regular.ttf
│   │   │   │       │   │   ├── NotoSansArabic-Regular.ttf
│   │   │   │       │   │   ├── NotoSansDevanagari-Regular.ttf
│   │   │   │       │   │   ├── NotoSansJP-Regular.ttf
│   │   │   │       │   │   ├── NotoSansKR-Regular.ttf
│   │   │   │       │   │   ├── NotoSansMalayalam-Regular.ttf
│   │   │   │       │   │   ├── NotoSansSC-Regular.ttf
│   │   │   │       │   │   ├── NotoSansTC-Regular.ttf
│   │   │   │       │   │   ├── NotoSansThai-Regular.ttf
│   │   │   │       │   │   ├── NotoSerifTibetan-Regular.ttf
│   │   │   │       │   │   ├── Tangerine.woff2
│   │   │   │       │   │   └── Tinos-Regular.woff2
│   │   │   │       │   ├── images
│   │   │   │       │   │   ├── arrow-right-short.svg
│   │   │   │       │   │   ├── book.svg
│   │   │   │       │   │   ├── clipboard.svg
│   │   │   │       │   │   ├── discord.svg
│   │   │   │       │   │   ├── docker.svg
│   │   │   │       │   │   ├── file-earmark-pdf.svg
│   │   │   │       │   │   ├── Files.svg
│   │   │   │       │   │   ├── github.svg
│   │   │   │       │   │   ├── google-drive.svg
│   │   │   │       │   │   ├── redact-auto.svg
│   │   │   │       │   │   ├── redact-manual.svg
│   │   │   │       │   │   ├── rename.svg
│   │   │   │       │   │   ├── signature.png
│   │   │   │       │   │   ├── split-auto.svg
│   │   │   │       │   │   ├── split-chapters.svg
│   │   │   │       │   │   ├── split-size.svg
│   │   │   │       │   │   ├── stirling-logo-white.png
│   │   │   │       │   │   └── update.svg
│   │   │   │       │   ├── js
│   │   │   │       │   │   └── thirdParty
│   │   │   │       │   │       └── cookieconsent.umd.js
│   │   │   │       │   ├── pdfjs-legacy
│   │   │   │       │   │   ├── cmaps
│   │   │   │       │   │   │   ├── 78-EUC-H.bcmap
│   │   │   │       │   │   │   ├── 78-EUC-V.bcmap
│   │   │   │       │   │   │   ├── 78-H.bcmap
│   │   │   │       │   │   │   ├── 78-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 78-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── 78-V.bcmap
│   │   │   │       │   │   │   ├── 78ms-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 78ms-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── 83pv-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 90ms-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 90ms-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── 90msp-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 90msp-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── 90pv-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── 90pv-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── Add-H.bcmap
│   │   │   │       │   │   │   ├── Add-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── Add-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── Add-V.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-0.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-1.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-2.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-3.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-4.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-5.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-6.bcmap
│   │   │   │       │   │   │   ├── Adobe-CNS1-UCS2.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-0.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-1.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-2.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-3.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-4.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-5.bcmap
│   │   │   │       │   │   │   ├── Adobe-GB1-UCS2.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-0.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-1.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-2.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-3.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-4.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-5.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-6.bcmap
│   │   │   │       │   │   │   ├── Adobe-Japan1-UCS2.bcmap
│   │   │   │       │   │   │   ├── Adobe-Korea1-0.bcmap
│   │   │   │       │   │   │   ├── Adobe-Korea1-1.bcmap
│   │   │   │       │   │   │   ├── Adobe-Korea1-2.bcmap
│   │   │   │       │   │   │   ├── Adobe-Korea1-UCS2.bcmap
│   │   │   │       │   │   │   ├── B5-H.bcmap
│   │   │   │       │   │   │   ├── B5-V.bcmap
│   │   │   │       │   │   │   ├── B5pc-H.bcmap
│   │   │   │       │   │   │   ├── B5pc-V.bcmap
│   │   │   │       │   │   │   ├── CNS-EUC-H.bcmap
│   │   │   │       │   │   │   ├── CNS-EUC-V.bcmap
│   │   │   │       │   │   │   ├── CNS1-H.bcmap
│   │   │   │       │   │   │   ├── CNS1-V.bcmap
│   │   │   │       │   │   │   ├── CNS2-H.bcmap
│   │   │   │       │   │   │   ├── CNS2-V.bcmap
│   │   │   │       │   │   │   ├── ETen-B5-H.bcmap
│   │   │   │       │   │   │   ├── ETen-B5-V.bcmap
│   │   │   │       │   │   │   ├── ETenms-B5-H.bcmap
│   │   │   │       │   │   │   ├── ETenms-B5-V.bcmap
│   │   │   │       │   │   │   ├── ETHK-B5-H.bcmap
│   │   │   │       │   │   │   ├── ETHK-B5-V.bcmap
│   │   │   │       │   │   │   ├── EUC-H.bcmap
│   │   │   │       │   │   │   ├── EUC-V.bcmap
│   │   │   │       │   │   │   ├── Ext-H.bcmap
│   │   │   │       │   │   │   ├── Ext-RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── Ext-RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── Ext-V.bcmap
│   │   │   │       │   │   │   ├── GB-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GB-EUC-V.bcmap
│   │   │   │       │   │   │   ├── GB-H.bcmap
│   │   │   │       │   │   │   ├── GB-V.bcmap
│   │   │   │       │   │   │   ├── GBK-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GBK-EUC-V.bcmap
│   │   │   │       │   │   │   ├── GBK2K-H.bcmap
│   │   │   │       │   │   │   ├── GBK2K-V.bcmap
│   │   │   │       │   │   │   ├── GBKp-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GBKp-EUC-V.bcmap
│   │   │   │       │   │   │   ├── GBpc-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GBpc-EUC-V.bcmap
│   │   │   │       │   │   │   ├── GBT-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GBT-EUC-V.bcmap
│   │   │   │       │   │   │   ├── GBT-H.bcmap
│   │   │   │       │   │   │   ├── GBT-V.bcmap
│   │   │   │       │   │   │   ├── GBTpc-EUC-H.bcmap
│   │   │   │       │   │   │   ├── GBTpc-EUC-V.bcmap
│   │   │   │       │   │   │   ├── H.bcmap
│   │   │   │       │   │   │   ├── Hankaku.bcmap
│   │   │   │       │   │   │   ├── Hiragana.bcmap
│   │   │   │       │   │   │   ├── HKdla-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKdla-B5-V.bcmap
│   │   │   │       │   │   │   ├── HKdlb-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKdlb-B5-V.bcmap
│   │   │   │       │   │   │   ├── HKgccs-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKgccs-B5-V.bcmap
│   │   │   │       │   │   │   ├── HKm314-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKm314-B5-V.bcmap
│   │   │   │       │   │   │   ├── HKm471-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKm471-B5-V.bcmap
│   │   │   │       │   │   │   ├── HKscs-B5-H.bcmap
│   │   │   │       │   │   │   ├── HKscs-B5-V.bcmap
│   │   │   │       │   │   │   ├── Katakana.bcmap
│   │   │   │       │   │   │   ├── KSC-EUC-H.bcmap
│   │   │   │       │   │   │   ├── KSC-EUC-V.bcmap
│   │   │   │       │   │   │   ├── KSC-H.bcmap
│   │   │   │       │   │   │   ├── KSC-Johab-H.bcmap
│   │   │   │       │   │   │   ├── KSC-Johab-V.bcmap
│   │   │   │       │   │   │   ├── KSC-V.bcmap
│   │   │   │       │   │   │   ├── KSCms-UHC-H.bcmap
│   │   │   │       │   │   │   ├── KSCms-UHC-HW-H.bcmap
│   │   │   │       │   │   │   ├── KSCms-UHC-HW-V.bcmap
│   │   │   │       │   │   │   ├── KSCms-UHC-V.bcmap
│   │   │   │       │   │   │   ├── KSCpc-EUC-H.bcmap
│   │   │   │       │   │   │   ├── KSCpc-EUC-V.bcmap
│   │   │   │       │   │   │   ├── LICENSE
│   │   │   │       │   │   │   ├── NWP-H.bcmap
│   │   │   │       │   │   │   ├── NWP-V.bcmap
│   │   │   │       │   │   │   ├── RKSJ-H.bcmap
│   │   │   │       │   │   │   ├── RKSJ-V.bcmap
│   │   │   │       │   │   │   ├── Roman.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UCS2-H.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UCS2-V.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF16-H.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF16-V.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF8-H.bcmap
│   │   │   │       │   │   │   ├── UniCNS-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── UniGB-UCS2-H.bcmap
│   │   │   │       │   │   │   ├── UniGB-UCS2-V.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF16-H.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF16-V.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF8-H.bcmap
│   │   │   │       │   │   │   ├── UniGB-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UCS2-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UCS2-HW-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UCS2-HW-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UCS2-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF16-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF16-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF8-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF16-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF16-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF8-H.bcmap
│   │   │   │       │   │   │   ├── UniJIS2004-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── UniJISPro-UCS2-HW-V.bcmap
│   │   │   │       │   │   │   ├── UniJISPro-UCS2-V.bcmap
│   │   │   │       │   │   │   ├── UniJISPro-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── UniJISX0213-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniJISX0213-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniJISX02132004-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniJISX02132004-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniKS-UCS2-H.bcmap
│   │   │   │       │   │   │   ├── UniKS-UCS2-V.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF16-H.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF16-V.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF32-H.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF32-V.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF8-H.bcmap
│   │   │   │       │   │   │   ├── UniKS-UTF8-V.bcmap
│   │   │   │       │   │   │   ├── V.bcmap
│   │   │   │       │   │   │   └── WP-Symbol.bcmap
│   │   │   │       │   │   ├── css
│   │   │   │       │   │   │   ├── debugger.css
│   │   │   │       │   │   │   ├── viewer-redact.css
│   │   │   │       │   │   │   └── viewer.css
│   │   │   │       │   │   ├── example
│   │   │   │       │   │   │   ├── Welcome_old.pdf
│   │   │   │       │   │   │   └── Welcome.pdf
│   │   │   │       │   │   ├── images
│   │   │   │       │   │   │   ├── altText_add.svg
│   │   │   │       │   │   │   ├── altText_done.svg
│   │   │   │       │   │   │   ├── annotation-check.svg
│   │   │   │       │   │   │   ├── annotation-comment.svg
│   │   │   │       │   │   │   ├── annotation-help.svg
│   │   │   │       │   │   │   ├── annotation-insert.svg
│   │   │   │       │   │   │   ├── annotation-key.svg
│   │   │   │       │   │   │   ├── annotation-newparagraph.svg
│   │   │   │       │   │   │   ├── annotation-noicon.svg
│   │   │   │       │   │   │   ├── annotation-note.svg
│   │   │   │       │   │   │   ├── annotation-paperclip.svg
│   │   │   │       │   │   │   ├── annotation-paragraph.svg
│   │   │   │       │   │   │   ├── annotation-pushpin.svg
│   │   │   │       │   │   │   ├── cursor-editorFreeHighlight.svg
│   │   │   │       │   │   │   ├── cursor-editorFreeText.svg
│   │   │   │       │   │   │   ├── cursor-editorInk.svg
│   │   │   │       │   │   │   ├── cursor-editorTextHighlight.svg
│   │   │   │       │   │   │   ├── editor-toolbar-delete.svg
│   │   │   │       │   │   │   ├── findbarButton-next.svg
│   │   │   │       │   │   │   ├── findbarButton-previous.svg
│   │   │   │       │   │   │   ├── gv-toolbarButton-download.svg
│   │   │   │       │   │   │   ├── loading-icon.gif
│   │   │   │       │   │   │   ├── loading.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-documentProperties.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-firstPage.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-handTool.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-lastPage.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-rotateCcw.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-rotateCw.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-scrollHorizontal.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-scrollPage.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-scrollVertical.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-scrollWrapped.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-selectTool.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-spreadEven.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-spreadNone.svg
│   │   │   │       │   │   │   ├── secondaryToolbarButton-spreadOdd.svg
│   │   │   │       │   │   │   ├── toolbarButton-bookmark.svg
│   │   │   │       │   │   │   ├── toolbarButton-currentOutlineItem.svg
│   │   │   │       │   │   │   ├── toolbarButton-download.svg
│   │   │   │       │   │   │   ├── toolbarButton-editorFreeText.svg
│   │   │   │       │   │   │   ├── toolbarButton-editorHighlight.svg
│   │   │   │       │   │   │   ├── toolbarButton-editorInk.svg
│   │   │   │       │   │   │   ├── toolbarButton-editorStamp.svg
│   │   │   │       │   │   │   ├── toolbarButton-home.svg
│   │   │   │       │   │   │   ├── toolbarButton-menuArrow.svg
│   │   │   │       │   │   │   ├── toolbarButton-openFile.svg
│   │   │   │       │   │   │   ├── toolbarButton-pageDown.svg
│   │   │   │       │   │   │   ├── toolbarButton-pageUp.svg
│   │   │   │       │   │   │   ├── toolbarButton-presentationMode.svg
│   │   │   │       │   │   │   ├── toolbarButton-print.svg
│   │   │   │       │   │   │   ├── toolbarButton-search.svg
│   │   │   │       │   │   │   ├── toolbarButton-secondaryToolbarToggle.svg
│   │   │   │       │   │   │   ├── toolbarButton-sidebarToggle.svg
│   │   │   │       │   │   │   ├── toolbarButton-viewAttachments.svg
│   │   │   │       │   │   │   ├── toolbarButton-viewLayers.svg
│   │   │   │       │   │   │   ├── toolbarButton-viewOutline.svg
│   │   │   │       │   │   │   ├── toolbarButton-viewThumbnail.svg
│   │   │   │       │   │   │   ├── toolbarButton-zoomIn.svg
│   │   │   │       │   │   │   ├── toolbarButton-zoomOut.svg
│   │   │   │       │   │   │   ├── treeitem-collapsed.svg
│   │   │   │       │   │   │   └── treeitem-expanded.svg
│   │   │   │       │   │   ├── js
│   │   │   │       │   │   │   ├── viewer.mjs
│   │   │   │       │   │   │   └── viewer.mjs.map
│   │   │   │       │   │   ├── locale
│   │   │   │       │   │   │   ├── ach
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── af
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── an
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ar
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ast
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── az
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── be
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── bg
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── bn
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── bo
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── br
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── brx
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── bs
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ca
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── cak
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ckb
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── cs
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── cy
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── da
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── de
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── dsb
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── el
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── en-CA
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── en-GB
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── en-US
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── eo
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── es-AR
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── es-CL
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── es-ES
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── es-MX
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── et
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── eu
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── fa
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ff
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── fi
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── fr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── fur
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── fy-NL
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ga-IE
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── gd
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── gl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── gn
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── gu-IN
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── he
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hi-IN
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hsb
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hu
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hy-AM
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── hye
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ia
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── id
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── is
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── it
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ja
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ka
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── kab
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── kk
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── km
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── kn
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ko
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── lij
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── lo
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── lt
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ltg
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── lv
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── meh
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── mk
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── mr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ms
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── my
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── nb-NO
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ne-NP
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── nl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── nn-NO
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── oc
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── pa-IN
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── pl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── pt-BR
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── pt-PT
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── rm
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ro
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ru
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sat
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sc
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── scn
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sco
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── si
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sk
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── skr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── son
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sq
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── sv-SE
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── szl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ta
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── te
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── tg
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── th
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── tl
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── tr
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── trs
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── uk
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── ur
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── uz
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── vi
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── wo
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── xh
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── zh-CN
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   ├── zh-TW
│   │   │   │       │   │   │   │   └── viewer.ftl
│   │   │   │       │   │   │   └── locale.json
│   │   │   │       │   │   ├── standard_fonts
│   │   │   │       │   │   │   ├── FoxitDingbats.pfb
│   │   │   │       │   │   │   ├── FoxitFixed.pfb
│   │   │   │       │   │   │   ├── FoxitFixedBold.pfb
│   │   │   │       │   │   │   ├── FoxitFixedBoldItalic.pfb
│   │   │   │       │   │   │   ├── FoxitFixedItalic.pfb
│   │   │   │       │   │   │   ├── FoxitSerif.pfb
│   │   │   │       │   │   │   ├── FoxitSerifBold.pfb
│   │   │   │       │   │   │   ├── FoxitSerifBoldItalic.pfb
│   │   │   │       │   │   │   ├── FoxitSerifItalic.pfb
│   │   │   │       │   │   │   ├── FoxitSymbol.pfb
│   │   │   │       │   │   │   ├── LICENSE_FOXIT
│   │   │   │       │   │   │   └── LICENSE_LIBERATION
│   │   │   │       │   │   ├── pdf.mjs
│   │   │   │       │   │   ├── pdf.mjs.map
│   │   │   │       │   │   ├── pdf.sandbox.mjs
│   │   │   │       │   │   ├── pdf.sandbox.mjs.map
│   │   │   │       │   │   ├── pdf.worker.entry.js
│   │   │   │       │   │   ├── pdf.worker.mjs
│   │   │   │       │   │   └── pdf.worker.mjs.map
│   │   │   │       │   ├── pipeline
│   │   │   │       │   │   └── defaultWebUIConfigs
│   │   │   │       │   │       ├── OCR images.json
│   │   │   │       │   │       ├── Pre-publish-sanitization.json
│   │   │   │       │   │       ├── Prepare-pdfs-for-email.json
│   │   │   │       │   │       └── split-rotate-auto-rename.json
│   │   │   │       │   ├── python
│   │   │   │       │   │   ├── png_to_webp.py
│   │   │   │       │   │   └── split_photos.py
│   │   │   │       │   ├── 3rdPartyLicenses.json
│   │   │   │       │   ├── android-chrome-192x192.png
│   │   │   │       │   ├── android-chrome-512x512.png
│   │   │   │       │   ├── api-landing.html
│   │   │   │       │   ├── api-wordmark.svg
│   │   │   │       │   ├── apple-touch-icon.png
│   │   │   │       │   ├── browserconfig.xml
│   │   │   │       │   ├── favicon-16x16.png
│   │   │   │       │   ├── favicon-32x32.png
│   │   │   │       │   ├── favicon.icns
│   │   │   │       │   ├── favicon.ico
│   │   │   │       │   ├── favicon.png
│   │   │   │       │   ├── favicon.svg
│   │   │   │       │   ├── manifest.json
│   │   │   │       │   ├── moon.svg
│   │   │   │       │   ├── mstile-144x144.png
│   │   │   │       │   ├── mstile-150x150.png
│   │   │   │       │   ├── mstile-310x150.png
│   │   │   │       │   ├── mstile-310x310.png
│   │   │   │       │   ├── mstile-70x70.png
│   │   │   │       │   ├── rainbow.svg
│   │   │   │       │   ├── safari-pinned-tab.svg
│   │   │   │       │   ├── site.webmanifest
│   │   │   │       │   └── sun.svg
│   │   │   │       ├── type3
│   │   │   │       │   ├── library
│   │   │   │       │   │   ├── fonts
│   │   │   │       │   │   │   ├── cm
│   │   │   │       │   │   │   │   ├── cmbx10.ttf
│   │   │   │       │   │   │   │   ├── cmmi10.ttf
│   │   │   │       │   │   │   │   ├── cmr10.ttf
│   │   │   │       │   │   │   │   ├── cmss10.ttf
│   │   │   │       │   │   │   │   ├── cmsy10.ttf
│   │   │   │       │   │   │   │   ├── cmti10.ttf
│   │   │   │       │   │   │   │   └── cmtt10.ttf
│   │   │   │       │   │   │   ├── dejavu
│   │   │   │       │   │   │   │   ├── DejaVuSans-Bold.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSans-BoldOblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSans-ExtraLight.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSans-Oblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSans.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansCondensed-Bold.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansCondensed-BoldOblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansCondensed-Oblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansCondensed.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansMono-Bold.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansMono-BoldOblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansMono-Oblique.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSansMono.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerif-Bold.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerif-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerif-Italic.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerif.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerifCondensed-Bold.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerifCondensed-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── DejaVuSerifCondensed-Italic.ttf
│   │   │   │       │   │   │   │   └── DejaVuSerifCondensed.ttf
│   │   │   │       │   │   │   ├── liberation
│   │   │   │       │   │   │   │   ├── LiberationMono-Bold.ttf
│   │   │   │       │   │   │   │   ├── LiberationMono-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── LiberationMono-Italic.ttf
│   │   │   │       │   │   │   │   ├── LiberationMono-Regular.ttf
│   │   │   │       │   │   │   │   ├── LiberationSans-Bold.ttf
│   │   │   │       │   │   │   │   ├── LiberationSans-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── LiberationSans-Italic.ttf
│   │   │   │       │   │   │   │   ├── LiberationSans-Regular.ttf
│   │   │   │       │   │   │   │   ├── LiberationSerif-Bold.ttf
│   │   │   │       │   │   │   │   ├── LiberationSerif-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── LiberationSerif-Italic.ttf
│   │   │   │       │   │   │   │   └── LiberationSerif-Regular.ttf
│   │   │   │       │   │   │   ├── noto
│   │   │   │       │   │   │   │   ├── NotoSans-Black.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-BlackItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Bold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-BoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Condensed.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedBlack.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedBlackItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedExtraBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedExtraBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedExtraLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedExtraLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedMedium.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedMediumItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedSemiBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedSemiBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedThin.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-CondensedThinItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensed.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedBlack.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedBlackItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedExtraBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedExtraBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedExtraLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedExtraLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedMedium.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedMediumItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedSemiBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedSemiBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedThin.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraCondensedThinItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-ExtraLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Italic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Italic[wdth,wght].ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Italic[wght].ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Light.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-LightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Medium.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-MediumItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Regular.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensed.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedBlack.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedBlackItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedExtraBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedExtraBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedExtraLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedExtraLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedLight.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedLightItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedMedium.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedMediumItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedSemiBold.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedSemiBoldItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedThin.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-SemiCondensedThinItalic.ttf
│   │   │   │       │   │   │   │   ├── NotoSans-Thin.ttf
│   │   │   │       │   │   │   │   └── NotoSans-ThinItalic.ttf
│   │   │   │       │   │   │   ├── scp
│   │   │   │       │   │   │   │   └── SauceCodeProNerdFont-Regular.ttf
│   │   │   │       │   │   │   └── stix
│   │   │   │       │   │   │       ├── STIXSizeThreeSym-Regular.otf
│   │   │   │       │   │   │       ├── STIXTwoMath-Regular.otf
│   │   │   │       │   │   │       ├── STIXTwoText-Bold.otf
│   │   │   │       │   │   │       ├── STIXTwoText-Italic.otf
│   │   │   │       │   │   │       └── STIXTwoText-Regular.otf
│   │   │   │       │   │   └── index.json
│   │   │   │       │   └── catalogue.json
│   │   │   │       ├── application.properties
│   │   │   │       ├── banner.txt
│   │   │   │       ├── certdata.txt
│   │   │   │       ├── logback.xml
│   │   │   │       ├── messages.properties
│   │   │   │       └── settings.yml.template
│   │   │   └── test
│   │   │       ├── java
│   │   │       │   ├── org
│   │   │       │   │   └── apache
│   │   │       │   │       └── pdfbox
│   │   │       │   │           └── examples
│   │   │       │   │               └── util
│   │   │       │   │                   └── ConnectedInputStreamTest.java
│   │   │       │   └── stirling
│   │   │       │       └── software
│   │   │       │           ├── common
│   │   │       │           │   └── controller
│   │   │       │           │       └── JobControllerTest.java
│   │   │       │           └── SPDF
│   │   │       │               ├── config
│   │   │       │               │   ├── AppUpdateServiceTest.java
│   │   │       │               │   ├── CleanUrlInterceptorTest.java
│   │   │       │               │   ├── EndpointInspectorTest.java
│   │   │       │               │   ├── EndpointInterceptorTest.java
│   │   │       │               │   ├── ExternalAppDepConfigTest.java
│   │   │       │               │   ├── GlobalErrorResponseCustomizerTest.java
│   │   │       │               │   ├── LocaleConfigurationTest.java
│   │   │       │               │   └── LogbackPropertyLoaderTest.java
│   │   │       │               ├── controller
│   │   │       │               │   ├── api
│   │   │       │               │   │   ├── converters
│   │   │       │               │   │   │   ├── CbrUtilsTest.java
│   │   │       │               │   │   │   ├── CbzUtilsTest.java
│   │   │       │               │   │   │   ├── ConvertEbookToPDFControllerTest.java
│   │   │       │               │   │   │   ├── ConvertEmlToPDFTest.java
│   │   │       │               │   │   │   ├── ConvertHtmlToPDFTest.java
│   │   │       │               │   │   │   ├── ConvertImgPDFControllerTest.java
│   │   │       │               │   │   │   ├── ConvertMarkdownToPdfTest.java
│   │   │       │               │   │   │   ├── ConvertPdfJsonControllerTest.java
│   │   │       │               │   │   │   ├── ConvertPDFToEpubControllerTest.java
│   │   │       │               │   │   │   ├── ConvertPDFToExcelControllerTest.java
│   │   │       │               │   │   │   ├── ConvertPDFToHtmlTest.java
│   │   │       │               │   │   │   ├── ConvertPDFToOfficeTest.java
│   │   │       │               │   │   │   ├── ConvertPDFToPDFATest.java
│   │   │       │               │   │   │   ├── ConvertSvgToPDFTest.java
│   │   │       │               │   │   │   ├── ConvertWebsiteToPdfTest.java
│   │   │       │               │   │   │   ├── ExtractCSVControllerTest.java
│   │   │       │               │   │   │   ├── PdfToCbzUtilsTest.java
│   │   │       │               │   │   │   └── PdfVectorExportControllerTest.java
│   │   │       │               │   │   ├── filters
│   │   │       │               │   │   │   └── FilterControllerTest.java
│   │   │       │               │   │   ├── form
│   │   │       │               │   │   │   ├── FormFillControllerTest.java
│   │   │       │               │   │   │   └── FormPayloadParserTest.java
│   │   │       │               │   │   ├── misc
│   │   │       │               │   │   │   ├── AttachmentControllerTest.java
│   │   │       │               │   │   │   ├── AutoRenameControllerTest.java
│   │   │       │               │   │   │   ├── BlankPageControllerTest.java
│   │   │       │               │   │   │   ├── ConfigControllerTest.java
│   │   │       │               │   │   │   ├── DecompressPdfControllerTest.java
│   │   │       │               │   │   │   ├── ExtractImagesControllerTest.java
│   │   │       │               │   │   │   ├── FlattenControllerTest.java
│   │   │       │               │   │   │   ├── MetadataControllerTest.java
│   │   │       │               │   │   │   ├── MobileScannerControllerTest.java
│   │   │       │               │   │   │   ├── OverlayImageControllerTest.java
│   │   │       │               │   │   │   ├── PrintFileControllerTest.java
│   │   │       │               │   │   │   ├── ReplaceAndInvertColorControllerTest.java
│   │   │       │               │   │   │   ├── ShowJavascriptTest.java
│   │   │       │               │   │   │   ├── StampControllerTest.java
│   │   │       │               │   │   │   └── UnlockPDFFormsControllerTest.java
│   │   │       │               │   │   ├── pipeline
│   │   │       │               │   │   │   └── PipelineProcessorTest.java
│   │   │       │               │   │   ├── security
│   │   │       │               │   │   │   ├── CertSignControllerTest.java
│   │   │       │               │   │   │   ├── GetInfoOnPDFTest.java
│   │   │       │               │   │   │   ├── PasswordControllerTest.java
│   │   │       │               │   │   │   ├── RedactControllerTest.java
│   │   │       │               │   │   │   ├── RemoveCertSignControllerTest.java
│   │   │       │               │   │   │   ├── SanitizeControllerTest.java
│   │   │       │               │   │   │   ├── TimestampControllerTest.java
│   │   │       │               │   │   │   ├── ValidateSignatureControllerTest.java
│   │   │       │               │   │   │   ├── VerifyPDFControllerTest.java
│   │   │       │               │   │   │   └── WatermarkControllerTest.java
│   │   │       │               │   │   ├── AdditionalLanguageJsControllerTest.java
│   │   │       │               │   │   ├── AnalysisControllerTest.java
│   │   │       │               │   │   ├── BookletImpositionControllerTest.java
│   │   │       │               │   │   ├── CropControllerTest.java
│   │   │       │               │   │   ├── EditTableOfContentsControllerTest.java
│   │   │       │               │   │   ├── MergeControllerTest.java
│   │   │       │               │   │   ├── MultiPageLayoutControllerTest.java
│   │   │       │               │   │   ├── PdfOverlayControllerTest.java
│   │   │       │               │   │   ├── RearrangePagesPDFControllerTest.java
│   │   │       │               │   │   ├── RotationControllerTest.java
│   │   │       │               │   │   ├── ScalePagesControllerTest.java
│   │   │       │               │   │   ├── SplitPdfByChaptersControllerTest.java
│   │   │       │               │   │   ├── SplitPdfBySectionsControllerTest.java
│   │   │       │               │   │   ├── SplitPdfBySizeControllerTest.java
│   │   │       │               │   │   └── SplitPDFControllerTest.java
│   │   │       │               │   └── web
│   │   │       │               │       ├── MetricsControllerTest.java
│   │   │       │               │       ├── ReactRoutingControllerTest.java
│   │   │       │               │       ├── SignatureImageControllerTest.java
│   │   │       │               │       └── UploadLimitServiceTest.java
│   │   │       │               ├── exception
│   │   │       │               │   ├── CacheUnavailableExceptionTest.java
│   │   │       │               │   └── GlobalExceptionHandlerTest.java
│   │   │       │               ├── Factories
│   │   │       │               │   └── ReplaceAndInvertColorFactoryTest.java
│   │   │       │               ├── model
│   │   │       │               │   ├── api
│   │   │       │               │   │   ├── converters
│   │   │       │               │   │   │   └── ConvertPDFToMarkdownTest.java
│   │   │       │               │   │   ├── misc
│   │   │       │               │   │   │   └── ScannerEffectRequestTest.java
│   │   │       │               │   │   └── PDFWithPageNumsTest.java
│   │   │       │               │   ├── ApiEndpointTest.java
│   │   │       │               │   └── SortTypesTest.java
│   │   │       │               ├── pdf
│   │   │       │               │   ├── FlexibleCSVWriterTest.java
│   │   │       │               │   └── TextFinderTest.java
│   │   │       │               ├── service
│   │   │       │               │   ├── misc
│   │   │       │               │   │   ├── ReplaceAndInvertColorServiceExtendedTest.java
│   │   │       │               │   │   └── ReplaceAndInvertColorServiceTest.java
│   │   │       │               │   ├── pdfjson
│   │   │       │               │   │   ├── type3
│   │   │       │               │   │   │   ├── library
│   │   │       │               │   │   │   │   ├── Type3FontLibraryEntryTest.java
│   │   │       │               │   │   │   │   ├── Type3FontLibraryMatchTest.java
│   │   │       │               │   │   │   │   └── Type3FontLibraryPayloadTest.java
│   │   │       │               │   │   │   ├── model
│   │   │       │               │   │   │   │   └── Type3GlyphOutlineTest.java
│   │   │       │               │   │   │   ├── tool
│   │   │       │               │   │   │   │   └── Type3SignatureToolTest.java
│   │   │       │               │   │   │   ├── Type3FontConversionServiceTest.java
│   │   │       │               │   │   │   ├── Type3FontSignatureCalculatorTest.java
│   │   │       │               │   │   │   ├── Type3GlyphContextTest.java
│   │   │       │               │   │   │   ├── Type3GlyphExtractorTest.java
│   │   │       │               │   │   │   ├── Type3GraphicsEngineTest.java
│   │   │       │               │   │   │   └── Type3LibraryStrategyTest.java
│   │   │       │               │   │   ├── JobOwnershipServiceImplTest.java
│   │   │       │               │   │   ├── NoOpJobOwnershipServiceTest.java
│   │   │       │               │   │   ├── PdfJsonFontServiceTest.java
│   │   │       │               │   │   ├── PdfJsonImageServiceTest.java
│   │   │       │               │   │   ├── PdfJsonMetadataServiceTest.java
│   │   │       │               │   │   └── PdfLazyLoadingServiceTest.java
│   │   │       │               │   ├── telegram
│   │   │       │               │   │   ├── FeedbackEnumTest.java
│   │   │       │               │   │   └── TelegramPipelineBotTest.java
│   │   │       │               │   ├── ApiDocServiceTest.java
│   │   │       │               │   ├── AttachmentServiceTest.java
│   │   │       │               │   ├── CertificateValidationServiceTest.java
│   │   │       │               │   ├── LanguageServiceBasicTest.java
│   │   │       │               │   ├── LanguageServiceTest.java
│   │   │       │               │   ├── MetricsAggregatorServiceExtendedTest.java
│   │   │       │               │   ├── MetricsAggregatorServiceTest.java
│   │   │       │               │   ├── PdfMetadataServiceBasicTest.java
│   │   │       │               │   ├── PdfMetadataServiceTest.java
│   │   │       │               │   ├── SharedSignatureServiceExtendedTest.java
│   │   │       │               │   ├── SignatureServiceTest.java
│   │   │       │               │   ├── VeraPDFServiceTest.java
│   │   │       │               │   └── WeeklyActiveUsersServiceTest.java
│   │   │       │               ├── utils
│   │   │       │               │   ├── text
│   │   │       │               │   │   ├── TextEncodingHelperTest.java
│   │   │       │               │   │   ├── TextFinderUtilsTest.java
│   │   │       │               │   │   └── WidthCalculatorTest.java
│   │   │       │               │   ├── SvgOverlayUtilTest.java
│   │   │       │               │   └── SvgToPdfTest.java
│   │   │       │               └── SPDFApplicationTest.java
│   │   │       └── resources
│   │   │           └── certs
│   │   │               ├── test-cert.cer
│   │   │               ├── test-cert.crt
│   │   │               ├── test-cert.der
│   │   │               ├── test-cert.jks
│   │   │               ├── test-cert.p12
│   │   │               ├── test-cert.pem
│   │   │               ├── test-cert.pfx
│   │   │               ├── test-key.key
│   │   │               └── test-key.pem
│   │   ├── .gitignore
│   │   └── build.gradle
│   ├── proprietary
│   │   ├── src
│   │   │   ├── main
│   │   │   │   ├── java
│   │   │   │   │   └── stirling
│   │   │   │   │       └── software
│   │   │   │   │           └── proprietary
│   │   │   │   │               ├── audit
│   │   │   │   │               │   ├── AuditAspect.java
│   │   │   │   │               │   ├── Audited.java
│   │   │   │   │               │   ├── AuditEventType.java
│   │   │   │   │               │   ├── AuditLevel.java
│   │   │   │   │               │   └── ControllerAuditAspect.java
│   │   │   │   │               ├── config
│   │   │   │   │               │   ├── AsyncConfig.java
│   │   │   │   │               │   ├── AuditConfigurationProperties.java
│   │   │   │   │               │   ├── AuditJpaConfig.java
│   │   │   │   │               │   └── CustomAuditEventRepository.java
│   │   │   │   │               ├── configuration
│   │   │   │   │               │   └── ServerCertificateInitializer.java
│   │   │   │   │               ├── controller
│   │   │   │   │               │   └── api
│   │   │   │   │               │       ├── AdminJobController.java
│   │   │   │   │               │       ├── AiEngineController.java
│   │   │   │   │               │       ├── AuditDashboardController.java
│   │   │   │   │               │       ├── AuditRestController.java
│   │   │   │   │               │       ├── MathAuditorAgentController.java
│   │   │   │   │               │       ├── ProprietaryUIDataController.java
│   │   │   │   │               │       ├── SignatureController.java
│   │   │   │   │               │       └── UsageRestController.java
│   │   │   │   │               ├── model
│   │   │   │   │               │   ├── api
│   │   │   │   │               │   │   ├── ai
│   │   │   │   │               │   │   │   ├── AiConversationMessage.java
│   │   │   │   │               │   │   │   ├── AiPdfContentType.java
│   │   │   │   │               │   │   │   ├── AiWorkflowFileInput.java
│   │   │   │   │               │   │   │   ├── AiWorkflowFileRequest.java
│   │   │   │   │               │   │   │   ├── AiWorkflowOutcome.java
│   │   │   │   │               │   │   │   ├── AiWorkflowPhase.java
│   │   │   │   │               │   │   │   ├── AiWorkflowProgressEvent.java
│   │   │   │   │               │   │   │   ├── AiWorkflowRequest.java
│   │   │   │   │               │   │   │   ├── AiWorkflowResponse.java
│   │   │   │   │               │   │   │   ├── AiWorkflowResultFile.java
│   │   │   │   │               │   │   │   ├── AiWorkflowTextSelection.java
│   │   │   │   │               │   │   │   ├── AuditDiscrepancy.java
│   │   │   │   │               │   │   │   ├── AuditSeverity.java
│   │   │   │   │               │   │   │   ├── DiscrepancyKind.java
│   │   │   │   │               │   │   │   ├── Evidence.java
│   │   │   │   │               │   │   │   ├── Folio.java
│   │   │   │   │               │   │   │   ├── FolioManifest.java
│   │   │   │   │               │   │   │   ├── FolioType.java
│   │   │   │   │               │   │   │   ├── Requisition.java
│   │   │   │   │               │   │   │   └── Verdict.java
│   │   │   │   │               │   │   ├── audit
│   │   │   │   │               │   │   │   ├── AuditDataRequest.java
│   │   │   │   │               │   │   │   ├── AuditDataResponse.java
│   │   │   │   │               │   │   │   ├── AuditDateExportRequest.java
│   │   │   │   │               │   │   │   ├── AuditExportRequest.java
│   │   │   │   │               │   │   │   └── AuditStatsResponse.java
│   │   │   │   │               │   │   └── signature
│   │   │   │   │               │   │       ├── SavedSignatureRequest.java
│   │   │   │   │               │   │       └── SavedSignatureResponse.java
│   │   │   │   │               │   ├── dto
│   │   │   │   │               │   │   └── TeamWithUserCountDTO.java
│   │   │   │   │               │   ├── security
│   │   │   │   │               │   │   └── PersistentAuditEvent.java
│   │   │   │   │               │   ├── Team.java
│   │   │   │   │               │   └── UserLicenseSettings.java
│   │   │   │   │               ├── pdf
│   │   │   │   │               │   └── FlexibleCSVWriter.java
│   │   │   │   │               ├── repository
│   │   │   │   │               │   └── PersistentAuditEventRepository.java
│   │   │   │   │               ├── security
│   │   │   │   │               │   ├── config
│   │   │   │   │               │   │   ├── EnterpriseEndpoint.java
│   │   │   │   │               │   │   ├── EnterpriseEndpointAspect.java
│   │   │   │   │               │   │   ├── PremiumEndpoint.java
│   │   │   │   │               │   │   └── PremiumEndpointAspect.java
│   │   │   │   │               │   ├── configuration
│   │   │   │   │               │   │   ├── ee
│   │   │   │   │               │   │   │   ├── DynamicLicenseService.java
│   │   │   │   │               │   │   │   ├── EEAppConfig.java
│   │   │   │   │               │   │   │   ├── KeygenLicenseVerifier.java
│   │   │   │   │               │   │   │   └── LicenseKeyChecker.java
│   │   │   │   │               │   │   ├── CacheConfig.java
│   │   │   │   │               │   │   ├── DatabaseConfig.java
│   │   │   │   │               │   │   ├── MailConfig.java
│   │   │   │   │               │   │   ├── ProprietaryWebMvcConfig.java
│   │   │   │   │               │   │   └── SecurityConfiguration.java
│   │   │   │   │               │   ├── controller
│   │   │   │   │               │   │   └── api
│   │   │   │   │               │   │       ├── enterprise
│   │   │   │   │               │   │       │   └── DatabaseControllerEnterprise.java
│   │   │   │   │               │   │       ├── AdminLicenseController.java
│   │   │   │   │               │   │       ├── AdminSettingsController.java
│   │   │   │   │               │   │       ├── AuthController.java
│   │   │   │   │               │   │       ├── DatabaseController.java
│   │   │   │   │               │   │       ├── EmailController.java
│   │   │   │   │               │   │       ├── InviteLinkController.java
│   │   │   │   │               │   │       ├── ServerCertificateController.java
│   │   │   │   │               │   │       ├── TeamController.java
│   │   │   │   │               │   │       ├── UIDataTessdataController.java
│   │   │   │   │               │   │       └── UserController.java
│   │   │   │   │               │   ├── database
│   │   │   │   │               │   │   ├── repository
│   │   │   │   │               │   │   │   ├── AuthorityRepository.java
│   │   │   │   │               │   │   │   ├── JPATokenRepositoryImpl.java
│   │   │   │   │               │   │   │   ├── PersistentLoginRepository.java
│   │   │   │   │               │   │   │   ├── SessionRepository.java
│   │   │   │   │               │   │   │   └── UserRepository.java
│   │   │   │   │               │   │   ├── service
│   │   │   │   │               │   │   │   └── DatabaseNotificationService.java
│   │   │   │   │               │   │   ├── DatabaseNotificationServiceInterface.java
│   │   │   │   │               │   │   ├── H2SQLCondition.java
│   │   │   │   │               │   │   └── ScheduledTasks.java
│   │   │   │   │               │   ├── filter
│   │   │   │   │               │   │   ├── EnterpriseEndpointFilter.java
│   │   │   │   │               │   │   ├── IPRateLimitingFilter.java
│   │   │   │   │               │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   │               │   │   ├── ParticipantRateLimitInterceptor.java
│   │   │   │   │               │   │   ├── UserAuthenticationFilter.java
│   │   │   │   │               │   │   └── UserBasedRateLimitingFilter.java
│   │   │   │   │               │   ├── model
│   │   │   │   │               │   │   ├── api
│   │   │   │   │               │   │   │   ├── admin
│   │   │   │   │               │   │   │   │   ├── SettingValueResponse.java
│   │   │   │   │               │   │   │   │   ├── UpdateSettingsRequest.java
│   │   │   │   │               │   │   │   │   └── UpdateSettingValueRequest.java
│   │   │   │   │               │   │   │   ├── user
│   │   │   │   │               │   │   │   │   ├── MfaCodeRequest.java
│   │   │   │   │               │   │   │   │   ├── UpdateUserDetails.java
│   │   │   │   │               │   │   │   │   ├── UpdateUserUsername.java
│   │   │   │   │               │   │   │   │   ├── Username.java
│   │   │   │   │               │   │   │   │   ├── UsernameAndPass.java
│   │   │   │   │               │   │   │   │   └── UsernameAndPassMfa.java
│   │   │   │   │               │   │   │   └── Email.java
│   │   │   │   │               │   │   ├── dto
│   │   │   │   │               │   │   │   └── AdminUserSummary.java
│   │   │   │   │               │   │   ├── exception
│   │   │   │   │               │   │   │   ├── AuthenticationFailureException.java
│   │   │   │   │               │   │   │   ├── BackupNotFoundException.java
│   │   │   │   │               │   │   │   └── NoProviderFoundException.java
│   │   │   │   │               │   │   ├── ApiKeyAuthenticationToken.java
│   │   │   │   │               │   │   ├── AttemptCounter.java
│   │   │   │   │               │   │   ├── AuthenticationType.java
│   │   │   │   │               │   │   ├── Authority.java
│   │   │   │   │               │   │   ├── InviteToken.java
│   │   │   │   │               │   │   ├── JwtVerificationKey.java
│   │   │   │   │               │   │   ├── PersistentLogin.java
│   │   │   │   │               │   │   ├── SessionEntity.java
│   │   │   │   │               │   │   └── User.java
│   │   │   │   │               │   ├── oauth2
│   │   │   │   │               │   │   ├── CustomOAuth2AuthenticationFailureHandler.java
│   │   │   │   │               │   │   ├── CustomOAuth2AuthenticationSuccessHandler.java
│   │   │   │   │               │   │   ├── OAuth2Configuration.java
│   │   │   │   │               │   │   ├── TauriAuthorizationRequestResolver.java
│   │   │   │   │               │   │   └── TauriOAuthUtils.java
│   │   │   │   │               │   ├── repository
│   │   │   │   │               │   │   ├── InviteTokenRepository.java
│   │   │   │   │               │   │   ├── TeamRepository.java
│   │   │   │   │               │   │   └── UserLicenseSettingsRepository.java
│   │   │   │   │               │   ├── saml2
│   │   │   │   │               │   │   ├── CertificateUtils.java
│   │   │   │   │               │   │   ├── CustomSaml2AuthenticatedPrincipal.java
│   │   │   │   │               │   │   ├── CustomSaml2AuthenticationFailureHandler.java
│   │   │   │   │               │   │   ├── CustomSaml2AuthenticationSuccessHandler.java
│   │   │   │   │               │   │   ├── CustomSaml2ResponseAuthenticationConverter.java
│   │   │   │   │               │   │   ├── Saml2Configuration.java
│   │   │   │   │               │   │   └── TauriSamlUtils.java
│   │   │   │   │               │   ├── service
│   │   │   │   │               │   │   ├── AppUpdateAuthService.java
│   │   │   │   │               │   │   ├── CustomOAuth2UserService.java
│   │   │   │   │               │   │   ├── CustomUserDetailsService.java
│   │   │   │   │               │   │   ├── DatabaseService.java
│   │   │   │   │               │   │   ├── DatabaseServiceInterface.java
│   │   │   │   │               │   │   ├── EmailService.java
│   │   │   │   │               │   │   ├── JwtService.java
│   │   │   │   │               │   │   ├── JwtServiceInterface.java
│   │   │   │   │               │   │   ├── KeyPairCleanupService.java
│   │   │   │   │               │   │   ├── KeyPersistenceService.java
│   │   │   │   │               │   │   ├── KeyPersistenceServiceInterface.java
│   │   │   │   │               │   │   ├── LoginAttemptService.java
│   │   │   │   │               │   │   ├── MfaService.java
│   │   │   │   │               │   │   ├── RefreshRateLimitService.java
│   │   │   │   │               │   │   ├── SaveUserRequest.java
│   │   │   │   │               │   │   ├── TeamService.java
│   │   │   │   │               │   │   ├── TotpService.java
│   │   │   │   │               │   │   └── UserService.java
│   │   │   │   │               │   ├── session
│   │   │   │   │               │   │   ├── CustomHttpSessionListener.java
│   │   │   │   │               │   │   ├── SessionPersistentRegistry.java
│   │   │   │   │               │   │   ├── SessionRegistryConfig.java
│   │   │   │   │               │   │   └── SessionScheduled.java
│   │   │   │   │               │   ├── util
│   │   │   │   │               │   │   ├── Base32Codec.java
│   │   │   │   │               │   │   └── DesktopClientUtils.java
│   │   │   │   │               │   ├── CustomAuthenticationFailureHandler.java
│   │   │   │   │               │   ├── CustomAuthenticationSuccessHandler.java
│   │   │   │   │               │   ├── CustomLogoutSuccessHandler.java
│   │   │   │   │               │   ├── InitialSecuritySetup.java
│   │   │   │   │               │   ├── JwtAuthenticationEntryPoint.java
│   │   │   │   │               │   └── RateLimitResetScheduler.java
│   │   │   │   │               ├── service
│   │   │   │   │               │   ├── AiEngineClient.java
│   │   │   │   │               │   ├── AiWorkflowService.java
│   │   │   │   │               │   ├── AuditCleanupService.java
│   │   │   │   │               │   ├── AuditService.java
│   │   │   │   │               │   ├── ImageMagickLineArtConversionService.java
│   │   │   │   │               │   ├── MathAuditorOrchestrator.java
│   │   │   │   │               │   ├── PdfContentExtractor.java
│   │   │   │   │               │   ├── ServerCertificateService.java
│   │   │   │   │               │   ├── SignatureService.java
│   │   │   │   │               │   └── UserLicenseSettingsService.java
│   │   │   │   │               ├── storage
│   │   │   │   │               │   ├── config
│   │   │   │   │               │   │   └── StorageProviderConfig.java
│   │   │   │   │               │   ├── controller
│   │   │   │   │               │   │   └── FileStorageController.java
│   │   │   │   │               │   ├── converter
│   │   │   │   │               │   │   └── JsonMapConverter.java
│   │   │   │   │               │   ├── model
│   │   │   │   │               │   │   ├── api
│   │   │   │   │               │   │   │   ├── CreateShareLinkRequest.java
│   │   │   │   │               │   │   │   ├── SharedUserResponse.java
│   │   │   │   │               │   │   │   ├── ShareLinkAccessResponse.java
│   │   │   │   │               │   │   │   ├── ShareLinkMetadataResponse.java
│   │   │   │   │               │   │   │   ├── ShareLinkResponse.java
│   │   │   │   │               │   │   │   ├── ShareWithUserRequest.java
│   │   │   │   │               │   │   │   └── StoredFileResponse.java
│   │   │   │   │               │   │   ├── FilePurpose.java
│   │   │   │   │               │   │   ├── FileShare.java
│   │   │   │   │               │   │   ├── FileShareAccess.java
│   │   │   │   │               │   │   ├── FileShareAccessType.java
│   │   │   │   │               │   │   ├── ShareAccessRole.java
│   │   │   │   │               │   │   ├── StorageCleanupEntry.java
│   │   │   │   │               │   │   ├── StoredFile.java
│   │   │   │   │               │   │   └── StoredFileBlob.java
│   │   │   │   │               │   ├── provider
│   │   │   │   │               │   │   ├── DatabaseStorageProvider.java
│   │   │   │   │               │   │   ├── LocalStorageProvider.java
│   │   │   │   │               │   │   ├── StorageProvider.java
│   │   │   │   │               │   │   └── StoredObject.java
│   │   │   │   │               │   ├── repository
│   │   │   │   │               │   │   ├── FileShareAccessRepository.java
│   │   │   │   │               │   │   ├── FileShareRepository.java
│   │   │   │   │               │   │   ├── StorageCleanupEntryRepository.java
│   │   │   │   │               │   │   ├── StoredFileBlobRepository.java
│   │   │   │   │               │   │   └── StoredFileRepository.java
│   │   │   │   │               │   └── service
│   │   │   │   │               │       ├── FileStorageService.java
│   │   │   │   │               │       └── StorageCleanupService.java
│   │   │   │   │               ├── util
│   │   │   │   │               │   └── SecretMasker.java
│   │   │   │   │               ├── web
│   │   │   │   │               │   ├── AuditWebFilter.java
│   │   │   │   │               │   └── CorrelationIdFilter.java
│   │   │   │   │               └── workflow
│   │   │   │   │                   ├── controller
│   │   │   │   │                   │   ├── SigningSessionController.java
│   │   │   │   │                   │   └── WorkflowParticipantController.java
│   │   │   │   │                   ├── dto
│   │   │   │   │                   │   ├── CertificateInfo.java
│   │   │   │   │                   │   ├── CertificateSubmission.java
│   │   │   │   │                   │   ├── CertificateValidationResponse.java
│   │   │   │   │                   │   ├── ParticipantRequest.java
│   │   │   │   │                   │   ├── ParticipantResponse.java
│   │   │   │   │                   │   ├── SignatureSubmissionRequest.java
│   │   │   │   │                   │   ├── SignDocumentRequest.java
│   │   │   │   │                   │   ├── SignRequestDetailDTO.java
│   │   │   │   │                   │   ├── SignRequestSummaryDTO.java
│   │   │   │   │                   │   ├── WetSignatureMetadata.java
│   │   │   │   │                   │   ├── WorkflowCreationRequest.java
│   │   │   │   │                   │   └── WorkflowSessionResponse.java
│   │   │   │   │                   ├── model
│   │   │   │   │                   │   ├── CertificateType.java
│   │   │   │   │                   │   ├── ParticipantStatus.java
│   │   │   │   │                   │   ├── UserServerCertificateEntity.java
│   │   │   │   │                   │   ├── WorkflowParticipant.java
│   │   │   │   │                   │   ├── WorkflowSession.java
│   │   │   │   │                   │   ├── WorkflowStatus.java
│   │   │   │   │                   │   └── WorkflowType.java
│   │   │   │   │                   ├── repository
│   │   │   │   │                   │   ├── UserServerCertificateRepository.java
│   │   │   │   │                   │   ├── WorkflowParticipantRepository.java
│   │   │   │   │                   │   └── WorkflowSessionRepository.java
│   │   │   │   │                   ├── service
│   │   │   │   │                   │   ├── CertificateSubmissionValidator.java
│   │   │   │   │                   │   ├── MetadataEncryptionService.java
│   │   │   │   │                   │   ├── SigningFinalizationService.java
│   │   │   │   │                   │   ├── UnifiedAccessControlService.java
│   │   │   │   │                   │   ├── UserServerCertificateService.java
│   │   │   │   │                   │   └── WorkflowSessionService.java
│   │   │   │   │                   └── util
│   │   │   │   │                       └── WorkflowMapper.java
│   │   │   │   └── resources
│   │   │   │       ├── templates
│   │   │   │       │   ├── AUDIT_HELP.md
│   │   │   │       │   └── AUDIT_USAGE.md
│   │   │   │       └── application-proprietary.properties
│   │   │   └── test
│   │   │       ├── java
│   │   │       │   └── stirling
│   │   │       │       └── software
│   │   │       │           └── proprietary
│   │   │       │               ├── controller
│   │   │       │               │   └── api
│   │   │       │               │       ├── ProprietaryUIDataControllerTest.java
│   │   │       │               │       └── SignatureControllerTest.java
│   │   │       │               ├── model
│   │   │       │               │   ├── dto
│   │   │       │               │   │   └── TeamWithUserCountDTOTest.java
│   │   │       │               │   └── TeamTest.java
│   │   │       │               ├── security
│   │   │       │               │   ├── configuration
│   │   │       │               │   │   ├── ee
│   │   │       │               │   │   │   └── LicenseKeyCheckerTest.java
│   │   │       │               │   │   └── DatabaseConfigTest.java
│   │   │       │               │   ├── controller
│   │   │       │               │   │   └── api
│   │   │       │               │   │       ├── AuthControllerLoginTest.java
│   │   │       │               │   │       ├── AuthControllerMfaTest.java
│   │   │       │               │   │       ├── EmailControllerTest.java
│   │   │       │               │   │       ├── InviteLinkControllerTest.java
│   │   │       │               │   │       ├── UIDataTessdataControllerTest.java
│   │   │       │               │   │       └── UserControllerTest.java
│   │   │       │               │   ├── database
│   │   │       │               │   │   ├── repository
│   │   │       │               │   │   │   └── JPATokenRepositoryImplTest.java
│   │   │       │               │   │   ├── H2SQLConditionTest.java
│   │   │       │               │   │   └── ScheduledTasksTest.java
│   │   │       │               │   ├── filter
│   │   │       │               │   │   └── JwtAuthenticationFilterTest.java
│   │   │       │               │   ├── model
│   │   │       │               │   │   ├── exception
│   │   │       │               │   │   │   ├── BackupNotFoundExceptionTest.java
│   │   │       │               │   │   │   └── NoProviderFoundExceptionTest.java
│   │   │       │               │   │   ├── ApiKeyAuthenticationTokenTest.java
│   │   │       │               │   │   ├── AttemptCounterTest.java
│   │   │       │               │   │   ├── AuthorityTest.java
│   │   │       │               │   │   └── UserTest.java
│   │   │       │               │   ├── oauth2
│   │   │       │               │   │   ├── CustomOAuth2AuthenticationFailureHandlerTest.java
│   │   │       │               │   │   ├── CustomOAuth2AuthenticationSuccessHandlerTest.java
│   │   │       │               │   │   ├── OAuth2ConfigurationTest.java
│   │   │       │               │   │   ├── TauriAuthorizationRequestResolverTest.java
│   │   │       │               │   │   └── TauriOAuthUtilsTest.java
│   │   │       │               │   ├── service
│   │   │       │               │   │   ├── DatabaseServiceTest.java
│   │   │       │               │   │   ├── EmailServiceTest.java
│   │   │       │               │   │   ├── JwtServiceTest.java
│   │   │       │               │   │   ├── KeyPersistenceServiceInterfaceTest.java
│   │   │       │               │   │   ├── LoginAttemptServiceTest.java
│   │   │       │               │   │   ├── MailConfigTest.java
│   │   │       │               │   │   ├── MfaServiceTest.java
│   │   │       │               │   │   ├── TeamServiceTest.java
│   │   │       │               │   │   ├── TotpServiceTest.java
│   │   │       │               │   │   └── UserServiceTest.java
│   │   │       │               │   ├── util
│   │   │       │               │   │   └── Base32CodecTest.java
│   │   │       │               │   ├── CustomLogoutSuccessHandlerTest.java
│   │   │       │               │   ├── InitialSecuritySetupTest.java
│   │   │       │               │   └── JwtAuthenticationEntryPointTest.java
│   │   │       │               ├── service
│   │   │       │               │   ├── AiWorkflowServiceTest.java
│   │   │       │               │   └── UserLicenseSettingsServiceTest.java
│   │   │       │               ├── storage
│   │   │       │               │   ├── converter
│   │   │       │               │   │   └── JsonMapConverterTest.java
│   │   │       │               │   └── service
│   │   │       │               │       └── FileStorageServiceTest.java
│   │   │       │               ├── util
│   │   │       │               │   └── SecretMaskerTest.java
│   │   │       │               ├── web
│   │   │       │               │   ├── AuditWebFilterTest.java
│   │   │       │               │   └── CorrelationIdFilterTest.java
│   │   │       │               └── workflow
│   │   │       │                   ├── controller
│   │   │       │                   │   ├── CertificateValidationIntegrationTest.java
│   │   │       │                   │   └── WorkflowParticipantValidateCertificateTest.java
│   │   │       │                   ├── dto
│   │   │       │                   │   └── WetSignatureMetadataTest.java
│   │   │       │                   ├── service
│   │   │       │                   │   ├── CertificateSubmissionValidatorTest.java
│   │   │       │                   │   ├── MetadataEncryptionServiceTest.java
│   │   │       │                   │   ├── SigningFinalizationServiceTest.java
│   │   │       │                   │   ├── UnifiedAccessControlServiceTest.java
│   │   │       │                   │   ├── UserServerCertificateServiceTest.java
│   │   │       │                   │   └── WorkflowSessionServiceTest.java
│   │   │       │                   └── util
│   │   │       │                       └── WorkflowMapperShareTokenTest.java
│   │   │       └── resources
│   │   │           └── test-certs
│   │   │               ├── expired-test.p12
│   │   │               ├── not-yet-valid-test.p12
│   │   │               ├── valid-test.jks
│   │   │               └── valid-test.p12
│   │   ├── .gitignore
│   │   ├── build.gradle
│   │   └── LICENSE
│   └── allowed-licenses.json
├── devGuide
│   ├── DeveloperGuide.md
│   ├── EXCEPTION_HANDLING_GUIDE.md
│   ├── FILE_HISTORY_SPECIFICATION.md
│   ├── HowToAddNewLanguage.md
│   ├── README.md
│   ├── STYLELINT.md
│   └── USERS.md
├── devTools
│   ├── .stylelintrc.json
│   ├── package-lock.json
│   └── package.json
├── docker
│   ├── base
│   │   └── Dockerfile
│   ├── compose
│   │   ├── docker-compose-unified-backend.yml
│   │   ├── docker-compose-unified-both.yml
│   │   ├── docker-compose-unified-frontend.yml
│   │   ├── docker-compose.fat.yml
│   │   ├── docker-compose.ultra-lite.yml
│   │   └── docker-compose.yml
│   ├── embedded
│   │   ├── compose
│   │   │   ├── docker-compose-latest-fat-endpoints-disabled.yml
│   │   │   ├── docker-compose-latest-fat-security.yml
│   │   │   ├── docker-compose-latest-security-remote-uno.yml
│   │   │   ├── docker-compose-latest-security.yml
│   │   │   ├── docker-compose-latest-ultra-lite.yml
│   │   │   ├── README-remote-uno.md
│   │   │   └── test_cicd.yml
│   │   ├── Dockerfile
│   │   ├── Dockerfile.fat
│   │   └── Dockerfile.ultra-lite
│   ├── frontend
│   │   ├── Dockerfile
│   │   ├── entrypoint.sh
│   │   └── nginx.conf
│   └── README.md
├── docs
│   ├── security
│   │   ├── signing-key.pub
│   │   └── VERIFYING_RELEASES.md
│   ├── counter_translation.md
│   ├── stirling.png
│   ├── stirling.svg
│   └── type3_fallback_plan.md
├── engine
│   ├── scripts
│   │   ├── generate_tool_models.py
│   │   └── setup_env.py
│   ├── src
│   │   └── stirling
│   │       ├── agents
│   │       │   ├── ledger
│   │       │   │   ├── validators
│   │       │   │   │   ├── __init__.py
│   │       │   │   │   ├── _parsing.py
│   │       │   │   │   ├── arithmetic.py
│   │       │   │   │   ├── figures.py
│   │       │   │   │   └── formula.py
│   │       │   │   ├── __init__.py
│   │       │   │   ├── agent.py
│   │       │   │   └── prompts.py
│   │       │   ├── __init__.py
│   │       │   ├── _page_text.py
│   │       │   ├── execution.py
│   │       │   ├── orchestrator.py
│   │       │   ├── pdf_edit.py
│   │       │   ├── pdf_questions.py
│   │       │   └── user_spec.py
│   │       ├── api
│   │       │   ├── routes
│   │       │   │   ├── __init__.py
│   │       │   │   ├── agent_drafts.py
│   │       │   │   ├── execution.py
│   │       │   │   ├── ledger.py
│   │       │   │   ├── orchestrator.py
│   │       │   │   ├── pdf_edit.py
│   │       │   │   ├── pdf_questions.py
│   │       │   │   └── rag.py
│   │       │   ├── __init__.py
│   │       │   ├── app.py
│   │       │   ├── dependencies.py
│   │       │   └── middleware.py
│   │       ├── config
│   │       │   ├── __init__.py
│   │       │   └── settings.py
│   │       ├── contracts
│   │       │   ├── __init__.py
│   │       │   ├── agent_drafts.py
│   │       │   ├── agent_specs.py
│   │       │   ├── common.py
│   │       │   ├── execution.py
│   │       │   ├── health.py
│   │       │   ├── ledger.py
│   │       │   ├── orchestrator.py
│   │       │   ├── pdf_edit.py
│   │       │   ├── pdf_questions.py
│   │       │   └── rag.py
│   │       ├── models
│   │       │   ├── __init__.py
│   │       │   ├── agent_tool_models.py
│   │       │   ├── base.py
│   │       │   └── tool_models.py
│   │       ├── rag
│   │       │   ├── __init__.py
│   │       │   ├── capability.py
│   │       │   ├── chunker.py
│   │       │   ├── embedder.py
│   │       │   ├── pgvector_store.py
│   │       │   ├── README.md
│   │       │   ├── service.py
│   │       │   ├── sqlite_vec_store.py
│   │       │   └── store.py
│   │       ├── services
│   │       │   ├── __init__.py
│   │       │   ├── runtime.py
│   │       │   └── tracking.py
│   │       ├── __init__.py
│   │       └── logging.py
│   ├── tests
│   │   ├── ledger
│   │   │   ├── __init__.py
│   │   │   ├── test_arithmetic_scanner.py
│   │   │   ├── test_figure_tracker.py
│   │   │   ├── test_formula_evaluator.py
│   │   │   ├── test_models.py
│   │   │   └── test_routes.py
│   │   ├── conftest.py
│   │   ├── test_pdf_edit_agent.py
│   │   ├── test_pdf_question_agent.py
│   │   ├── test_rag_routes.py
│   │   ├── test_rag.py
│   │   ├── test_stirling_api.py
│   │   ├── test_stirling_contracts.py
│   │   └── test_user_spec_agent.py
│   ├── .env
│   ├── .gitignore
│   ├── .python-version
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── LICENSE
│   ├── pyproject.toml
│   └── uv.lock
├── frontend
│   ├── .claude
│   │   └── agents
│   │       ├── playwright-test-generator.md
│   │       ├── playwright-test-healer.md
│   │       └── playwright-test-planner.md
│   ├── public
│   │   ├── classic-logo
│   │   │   ├── favicon.ico
│   │   │   ├── Firstpage.png
│   │   │   ├── logo-tooltip.svg
│   │   │   ├── logo192.png
│   │   │   ├── logo512.png
│   │   │   ├── StirlingPDFLogoBlackText.svg
│   │   │   ├── StirlingPDFLogoGreyText.svg
│   │   │   ├── StirlingPDFLogoNoTextDark.svg
│   │   │   ├── StirlingPDFLogoNoTextLight.svg
│   │   │   └── StirlingPDFLogoWhiteText.svg
│   │   ├── css
│   │   │   ├── cookieconsent.css
│   │   │   └── cookieconsentCustomisation.css
│   │   ├── images
│   │   │   └── google-drive.svg
│   │   ├── js
│   │   │   └── thirdParty
│   │   │       └── cookieconsent.umd.js
│   │   ├── locales
│   │   │   ├── ar-AR
│   │   │   │   └── translation.toml
│   │   │   ├── az-AZ
│   │   │   │   └── translation.toml
│   │   │   ├── bg-BG
│   │   │   │   └── translation.toml
│   │   │   ├── bo-CN
│   │   │   │   └── translation.toml
│   │   │   ├── ca-CA
│   │   │   │   └── translation.toml
│   │   │   ├── cs-CZ
│   │   │   │   └── translation.toml
│   │   │   ├── da-DK
│   │   │   │   └── translation.toml
│   │   │   ├── de-DE
│   │   │   │   └── translation.toml
│   │   │   ├── el-GR
│   │   │   │   └── translation.toml
│   │   │   ├── en-GB
│   │   │   │   └── translation.toml
│   │   │   ├── es-ES
│   │   │   │   └── translation.toml
│   │   │   ├── eu-ES
│   │   │   │   └── translation.toml
│   │   │   ├── fa-IR
│   │   │   │   └── translation.toml
│   │   │   ├── fr-FR
│   │   │   │   └── translation.toml
│   │   │   ├── ga-IE
│   │   │   │   └── translation.toml
│   │   │   ├── hi-IN
│   │   │   │   └── translation.toml
│   │   │   ├── hr-HR
│   │   │   │   └── translation.toml
│   │   │   ├── hu-HU
│   │   │   │   └── translation.toml
│   │   │   ├── id-ID
│   │   │   │   └── translation.toml
│   │   │   ├── it-IT
│   │   │   │   └── translation.toml
│   │   │   ├── ja-JP
│   │   │   │   └── translation.toml
│   │   │   ├── ko-KR
│   │   │   │   └── translation.toml
│   │   │   ├── ml-ML
│   │   │   │   └── translation.toml
│   │   │   ├── nl-NL
│   │   │   │   └── translation.toml
│   │   │   ├── no-NB
│   │   │   │   └── translation.toml
│   │   │   ├── pl-PL
│   │   │   │   └── translation.toml
│   │   │   ├── pt-BR
│   │   │   │   └── translation.toml
│   │   │   ├── pt-PT
│   │   │   │   └── translation.toml
│   │   │   ├── ro-RO
│   │   │   │   └── translation.toml
│   │   │   ├── ru-RU
│   │   │   │   └── translation.toml
│   │   │   ├── sk-SK
│   │   │   │   └── translation.toml
│   │   │   ├── sl-SI
│   │   │   │   └── translation.toml
│   │   │   ├── sr-LATN-RS
│   │   │   │   └── translation.toml
│   │   │   ├── sv-SE
│   │   │   │   └── translation.toml
│   │   │   ├── th-TH
│   │   │   │   └── translation.toml
│   │   │   ├── tr-TR
│   │   │   │   └── translation.toml
│   │   │   ├── uk-UA
│   │   │   │   └── translation.toml
│   │   │   ├── vi-VN
│   │   │   │   └── translation.toml
│   │   │   ├── zh-BO
│   │   │   │   └── translation.toml
│   │   │   ├── zh-CN
│   │   │   │   └── translation.toml
│   │   │   └── zh-TW
│   │   │       └── translation.toml
│   │   ├── Login
│   │   │   ├── AddToPDF.png
│   │   │   ├── apple.svg
│   │   │   ├── authentik.svg
│   │   │   ├── azure.svg
│   │   │   ├── cloudron.svg
│   │   │   ├── Firstpage.png
│   │   │   ├── github.svg
│   │   │   ├── google.svg
│   │   │   ├── keycloak.svg
│   │   │   ├── LoginBackgroundPanel.png
│   │   │   ├── microsoft.svg
│   │   │   ├── oidc.svg
│   │   │   └── SecurePDF.png
│   │   ├── modern-logo
│   │   │   ├── favicon.ico
│   │   │   ├── Firstpage.png
│   │   │   ├── logo-tooltip.svg
│   │   │   ├── logo192.png
│   │   │   ├── logo512.png
│   │   │   ├── StirlingPDFLogoBlackText.svg
│   │   │   ├── StirlingPDFLogoGreyText.svg
│   │   │   ├── StirlingPDFLogoNoTextDark.svg
│   │   │   ├── StirlingPDFLogoNoTextLight.svg
│   │   │   └── StirlingPDFLogoWhiteText.svg
│   │   ├── og_images
│   │   │   ├── add-attachments.png
│   │   │   ├── add-image.png
│   │   │   ├── add-page-numbers.png
│   │   │   ├── add-password.png
│   │   │   ├── add-stamp.png
│   │   │   ├── add-watermark.png
│   │   │   ├── adjust-colors-contrast.png
│   │   │   ├── adjust-page-size-scale.png
│   │   │   ├── auto-rename-pdf-file.png
│   │   │   ├── auto-split-by-size-count.png
│   │   │   ├── auto-split-pages.png
│   │   │   ├── automate.png
│   │   │   ├── certSign.png
│   │   │   ├── change-metadata.png
│   │   │   ├── change-permissions.png
│   │   │   ├── compare.png
│   │   │   ├── compress.png
│   │   │   ├── convert.png
│   │   │   ├── cropPdf.png
│   │   │   ├── detect-split-scanned-photos.png
│   │   │   ├── edit-table-of-contents.png
│   │   │   ├── extract-images.png
│   │   │   ├── extract-pages.png
│   │   │   ├── flatten.png
│   │   │   ├── get-all-info-on-pdf.png
│   │   │   ├── home.png
│   │   │   ├── manage-certificates.png
│   │   │   ├── mergePdfs.png
│   │   │   ├── multi-page-layout.png
│   │   │   ├── multi-tool.png
│   │   │   ├── ocr.png
│   │   │   ├── overlay-pdfs.png
│   │   │   ├── read.png
│   │   │   ├── redact.png
│   │   │   ├── remove-annotations.png
│   │   │   ├── remove-blank-pages.png
│   │   │   ├── remove-certificate-sign.png
│   │   │   ├── remove-image.png
│   │   │   ├── remove-password.png
│   │   │   ├── remove.png
│   │   │   ├── reorganize-pages.png
│   │   │   ├── repair.png
│   │   │   ├── replace-and-invert-color.png
│   │   │   ├── rotate.png
│   │   │   ├── sanitize.png
│   │   │   ├── scanner-effect.png
│   │   │   ├── show-javascript.png
│   │   │   ├── sign.png
│   │   │   ├── single-large-page.png
│   │   │   ├── split-by-chapters.png
│   │   │   ├── split-by-sections.png
│   │   │   ├── split.png
│   │   │   ├── splitPdf.png
│   │   │   ├── unlock-pdf-forms.png
│   │   │   ├── validate-pdf-signature.png
│   │   │   └── view-pdf.png
│   │   ├── samples
│   │   │   └── Sample.pdf
│   │   ├── vendor
│   │   │   └── jscanify
│   │   │       ├── jscanify.js
│   │   │       └── opencv.js
│   │   ├── manifest-classic.json
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── scripts
│   │   ├── sample-pdf
│   │   │   ├── generate.mjs
│   │   │   ├── styles.css
│   │   │   └── template.html
│   │   ├── build-provisioner.mjs
│   │   ├── generate-icons.js
│   │   ├── generate-licenses.js
│   │   ├── setup-env.ts
│   │   ├── tsconfig.json
│   │   └── update-minor.js
│   ├── src
│   │   ├── assets
│   │   │   └── 3rdPartyLicenses.json
│   │   ├── core
│   │   │   ├── auth
│   │   │   │   └── UseSession.tsx
│   │   │   ├── components
│   │   │   │   ├── annotation
│   │   │   │   │   ├── providers
│   │   │   │   │   │   └── PDFAnnotationProvider.tsx
│   │   │   │   │   ├── shared
│   │   │   │   │   │   ├── BaseAnnotationTool.tsx
│   │   │   │   │   │   ├── ColorControl.tsx
│   │   │   │   │   │   ├── ColorPicker.tsx
│   │   │   │   │   │   ├── DrawingCanvas.tsx
│   │   │   │   │   │   ├── DrawingControls.tsx
│   │   │   │   │   │   ├── ImageUploader.tsx
│   │   │   │   │   │   ├── OpacityControl.tsx
│   │   │   │   │   │   ├── PropertiesPopover.tsx
│   │   │   │   │   │   ├── TextInputWithFont.tsx
│   │   │   │   │   │   └── WidthControl.tsx
│   │   │   │   │   └── tools
│   │   │   │   │       ├── DrawingTool.tsx
│   │   │   │   │       └── ImageTool.tsx
│   │   │   │   ├── fileEditor
│   │   │   │   │   ├── AddFileCard.tsx
│   │   │   │   │   ├── FileEditor.module.css
│   │   │   │   │   ├── FileEditor.tsx
│   │   │   │   │   ├── FileEditorFileName.tsx
│   │   │   │   │   ├── fileEditorRightRailButtons.tsx
│   │   │   │   │   └── FileEditorThumbnail.tsx
│   │   │   │   ├── fileManager
│   │   │   │   │   ├── CompactFileDetails.tsx
│   │   │   │   │   ├── DesktopLayout.tsx
│   │   │   │   │   ├── DragOverlay.tsx
│   │   │   │   │   ├── EmptyFilesState.tsx
│   │   │   │   │   ├── FileActions.tsx
│   │   │   │   │   ├── FileDetails.tsx
│   │   │   │   │   ├── FileHistoryGroup.tsx
│   │   │   │   │   ├── FileInfoCard.tsx
│   │   │   │   │   ├── FileListArea.tsx
│   │   │   │   │   ├── FileListItem.tsx
│   │   │   │   │   ├── FileSourceButtons.tsx
│   │   │   │   │   ├── HiddenFileInput.tsx
│   │   │   │   │   ├── MobileLayout.tsx
│   │   │   │   │   └── SearchInput.tsx
│   │   │   │   ├── home
│   │   │   │   │   └── HomePageExtensions.tsx
│   │   │   │   ├── hotkeys
│   │   │   │   │   └── HotkeyDisplay.tsx
│   │   │   │   ├── layout
│   │   │   │   │   ├── Workbench.module.css
│   │   │   │   │   └── Workbench.tsx
│   │   │   │   ├── onboarding
│   │   │   │   │   ├── InitialOnboardingModal
│   │   │   │   │   │   ├── InitialOnboardingModal.module.css
│   │   │   │   │   │   └── renderButtons.tsx
│   │   │   │   │   ├── orchestrator
│   │   │   │   │   │   ├── onboardingConfig.ts
│   │   │   │   │   │   ├── onboardingStorage.ts
│   │   │   │   │   │   └── useOnboardingOrchestrator.ts
│   │   │   │   │   ├── slides
│   │   │   │   │   │   ├── AnalyticsChoiceSlide.tsx
│   │   │   │   │   │   ├── AnimatedSlideBackground.module.css
│   │   │   │   │   │   ├── AnimatedSlideBackground.tsx
│   │   │   │   │   │   ├── DesktopInstallSlide.tsx
│   │   │   │   │   │   ├── DesktopInstallTitle.tsx
│   │   │   │   │   │   ├── FirstLoginSlide.tsx
│   │   │   │   │   │   ├── MFASetupSlide.tsx
│   │   │   │   │   │   ├── PlanOverviewSlide.tsx
│   │   │   │   │   │   ├── SecurityCheckSlide.tsx
│   │   │   │   │   │   ├── ServerLicenseSlide.tsx
│   │   │   │   │   │   ├── TourOverviewSlide.tsx
│   │   │   │   │   │   ├── unifiedBackgroundConfig.ts
│   │   │   │   │   │   └── WelcomeSlide.tsx
│   │   │   │   │   ├── adminStepsConfig.ts
│   │   │   │   │   ├── Onboarding.tsx
│   │   │   │   │   ├── onboardingFlowConfig.ts
│   │   │   │   │   ├── OnboardingModalSlide.tsx
│   │   │   │   │   ├── OnboardingStepper.tsx
│   │   │   │   │   ├── OnboardingTour.css
│   │   │   │   │   ├── OnboardingTour.tsx
│   │   │   │   │   ├── tourGlow.ts
│   │   │   │   │   ├── useBypassOnboarding.ts
│   │   │   │   │   ├── useOnboardingDownload.ts
│   │   │   │   │   ├── useOnboardingEffects.ts
│   │   │   │   │   ├── userStepsConfig.ts
│   │   │   │   │   └── whatsNewStepsConfig.ts
│   │   │   │   ├── pageEditor
│   │   │   │   │   ├── bulkSelectionPanel
│   │   │   │   │   │   ├── AdvancedSelectionPanel.tsx
│   │   │   │   │   │   ├── BulkSelectionPanel.module.css
│   │   │   │   │   │   ├── OperatorsSection.tsx
│   │   │   │   │   │   ├── PageSelectionInput.tsx
│   │   │   │   │   │   ├── SelectedPagesDisplay.tsx
│   │   │   │   │   │   └── SelectPages.tsx
│   │   │   │   │   ├── commands
│   │   │   │   │   │   └── pageCommands.ts
│   │   │   │   │   ├── hooks
│   │   │   │   │   │   ├── useEditedDocumentState.ts
│   │   │   │   │   │   ├── useEditorCommands.ts
│   │   │   │   │   │   ├── useFileColorMap.ts
│   │   │   │   │   │   ├── useInitialPageDocument.ts
│   │   │   │   │   │   ├── usePageDocument.ts
│   │   │   │   │   │   ├── usePageEditorDropdownState.ts
│   │   │   │   │   │   ├── usePageEditorExport.ts
│   │   │   │   │   │   ├── usePageEditorState.ts
│   │   │   │   │   │   ├── usePageSelectionManager.ts
│   │   │   │   │   │   └── useUndoManagerState.ts
│   │   │   │   │   ├── utils
│   │   │   │   │   │   └── splitPositions.ts
│   │   │   │   │   ├── BulkSelectionPanel.tsx
│   │   │   │   │   ├── constants.ts
│   │   │   │   │   ├── DragDropGrid.module.css
│   │   │   │   │   ├── DragDropGrid.tsx
│   │   │   │   │   ├── fileColors.ts
│   │   │   │   │   ├── FileThumbnail.tsx
│   │   │   │   │   ├── PageEditor.module.css
│   │   │   │   │   ├── PageEditor.tsx
│   │   │   │   │   ├── PageEditorControls.tsx
│   │   │   │   │   ├── pageEditorRightRailButtons.tsx
│   │   │   │   │   ├── PageSelectByNumberButton.tsx
│   │   │   │   │   └── PageThumbnail.tsx
│   │   │   │   ├── quickAccessBar
│   │   │   │   │   └── QuickAccessBarFooterExtensions.tsx
│   │   │   │   ├── rightRail
│   │   │   │   │   └── RightRailFooterExtensions.tsx
│   │   │   │   ├── shared
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── configSections
│   │   │   │   │   │   │   ├── GeneralSection.tsx
│   │   │   │   │   │   │   ├── HotkeysSection.tsx
│   │   │   │   │   │   │   ├── Overview.tsx
│   │   │   │   │   │   │   ├── ProviderCard.tsx
│   │   │   │   │   │   │   ├── providerDefinitions.ts
│   │   │   │   │   │   │   ├── SaasPlanSection.tsx
│   │   │   │   │   │   │   └── SaaSTeamsSection.tsx
│   │   │   │   │   │   ├── configNavSections.tsx
│   │   │   │   │   │   ├── LoginRequiredBanner.tsx
│   │   │   │   │   │   ├── OverviewHeader.tsx
│   │   │   │   │   │   ├── PendingBadge.tsx
│   │   │   │   │   │   ├── RestartConfirmationModal.tsx
│   │   │   │   │   │   ├── SettingsSearchBar.tsx
│   │   │   │   │   │   ├── SettingsStickyFooter.tsx
│   │   │   │   │   │   ├── types.ts
│   │   │   │   │   │   └── useRestartServer.ts
│   │   │   │   │   ├── filePreview
│   │   │   │   │   │   ├── DocumentStack.tsx
│   │   │   │   │   │   ├── DocumentThumbnail.tsx
│   │   │   │   │   │   ├── getFileTypeIcon.tsx
│   │   │   │   │   │   ├── HoverOverlay.tsx
│   │   │   │   │   │   └── NavigationArrows.tsx
│   │   │   │   │   ├── fitText
│   │   │   │   │   │   ├── FitText.README.md
│   │   │   │   │   │   └── textFit.ts
│   │   │   │   │   ├── modals
│   │   │   │   │   │   ├── CreditExhaustedModal.tsx
│   │   │   │   │   │   └── InsufficientCreditsModal.tsx
│   │   │   │   │   ├── ObscuredOverlay
│   │   │   │   │   │   └── ObscuredOverlay.module.css
│   │   │   │   │   ├── pageEditor
│   │   │   │   │   │   └── useFileItemDragDrop.ts
│   │   │   │   │   ├── quickAccessBar
│   │   │   │   │   │   ├── ActiveToolButton.tsx
│   │   │   │   │   │   ├── QuickAccessBar.css
│   │   │   │   │   │   ├── QuickAccessBar.ts
│   │   │   │   │   │   ├── QuickAccessButton.tsx
│   │   │   │   │   │   └── useToursTooltip.ts
│   │   │   │   │   ├── rightRail
│   │   │   │   │   │   ├── RightRail.css
│   │   │   │   │   │   ├── RightRail.README.md
│   │   │   │   │   │   └── ViewerAnnotationControls.tsx
│   │   │   │   │   ├── signing
│   │   │   │   │   │   ├── steps
│   │   │   │   │   │   │   ├── ConfigureSignatureDefaultsStep.tsx
│   │   │   │   │   │   │   ├── ReviewSessionStep.tsx
│   │   │   │   │   │   │   ├── SelectDocumentStep.tsx
│   │   │   │   │   │   │   └── SelectParticipantsStep.tsx
│   │   │   │   │   │   ├── ActiveSessionsPanel.tsx
│   │   │   │   │   │   ├── CompletedSessionsPanel.tsx
│   │   │   │   │   │   ├── CreateSessionFlow.tsx
│   │   │   │   │   │   ├── CreateSessionPanel.tsx
│   │   │   │   │   │   └── SignPopout.tsx
│   │   │   │   │   ├── sliderWithInput
│   │   │   │   │   │   └── SliderWithInput.tsx
│   │   │   │   │   ├── textInput
│   │   │   │   │   │   └── TextInput.module.css
│   │   │   │   │   ├── tooltip
│   │   │   │   │   │   ├── Tooltip.module.css
│   │   │   │   │   │   ├── Tooltip.README.md
│   │   │   │   │   │   └── TooltipContent.tsx
│   │   │   │   │   ├── wetSignature
│   │   │   │   │   │   ├── DrawSignatureCanvas.tsx
│   │   │   │   │   │   ├── SignatureTypeSelector.tsx
│   │   │   │   │   │   ├── TypeSignatureText.tsx
│   │   │   │   │   │   └── UploadSignatureImage.tsx
│   │   │   │   │   ├── AllToolsNavButton.tsx
│   │   │   │   │   ├── AppConfigLoader.tsx
│   │   │   │   │   ├── AppConfigModal.css
│   │   │   │   │   ├── AppConfigModal.tsx
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── BulkShareModal.tsx
│   │   │   │   │   ├── BulkUploadToServerModal.tsx
│   │   │   │   │   ├── ButtonSelector.test.tsx
│   │   │   │   │   ├── ButtonSelector.tsx
│   │   │   │   │   ├── ButtonToggle.tsx
│   │   │   │   │   ├── CardSelector.tsx
│   │   │   │   │   ├── CloudBadge.tsx
│   │   │   │   │   ├── DismissAllErrorsButton.tsx
│   │   │   │   │   ├── DropdownListWithFooter.tsx
│   │   │   │   │   ├── EditableSecretField.tsx
│   │   │   │   │   ├── EncryptedPdfUnlockModal.tsx
│   │   │   │   │   ├── ErrorBoundary.tsx
│   │   │   │   │   ├── FileCard.tsx
│   │   │   │   │   ├── FileDropdownMenu.tsx
│   │   │   │   │   ├── FileGrid.tsx
│   │   │   │   │   ├── FilePickerModal.tsx
│   │   │   │   │   ├── FilePreview.tsx
│   │   │   │   │   ├── FileUploadButton.tsx
│   │   │   │   │   ├── FirstLoginModal.tsx
│   │   │   │   │   ├── FitText.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── HoverActionMenu.module.css
│   │   │   │   │   ├── HoverActionMenu.tsx
│   │   │   │   │   ├── InfoBanner.tsx
│   │   │   │   │   ├── LandingActions.tsx
│   │   │   │   │   ├── LandingDocumentStack.tsx
│   │   │   │   │   ├── LandingPage.css
│   │   │   │   │   ├── LandingPage.tsx
│   │   │   │   │   ├── LanguageSelector.module.css
│   │   │   │   │   ├── LanguageSelector.tsx
│   │   │   │   │   ├── LoadingFallback.tsx
│   │   │   │   │   ├── LocalIcon.tsx
│   │   │   │   │   ├── LogoIcon.tsx
│   │   │   │   │   ├── MobileUploadModal.tsx
│   │   │   │   │   ├── MultiSelectControls.tsx
│   │   │   │   │   ├── NavigationWarningModal.tsx
│   │   │   │   │   ├── ObscuredOverlay.tsx
│   │   │   │   │   ├── PageEditorFileDropdown.tsx
│   │   │   │   │   ├── PageSelectionSyntaxHint.tsx
│   │   │   │   │   ├── PrivateContent.tsx
│   │   │   │   │   ├── QuickAccessBar.tsx
│   │   │   │   │   ├── RainbowThemeProvider.tsx
│   │   │   │   │   ├── RightRail.tsx
│   │   │   │   │   ├── ShareFileModal.tsx
│   │   │   │   │   ├── ShareManagementModal.tsx
│   │   │   │   │   ├── SkeletonLoader.tsx
│   │   │   │   │   ├── TextInput.tsx
│   │   │   │   │   ├── ToolChain.tsx
│   │   │   │   │   ├── ToolIcon.tsx
│   │   │   │   │   ├── Tooltip.tsx
│   │   │   │   │   ├── TopControls.tsx
│   │   │   │   │   ├── UpdateModal.tsx
│   │   │   │   │   ├── UploadToServerModal.tsx
│   │   │   │   │   ├── UserSelector.tsx
│   │   │   │   │   ├── Wordmark.tsx
│   │   │   │   │   └── ZipWarningModal.tsx
│   │   │   │   ├── toast
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Toast.README.md
│   │   │   │   │   ├── ToastContext.tsx
│   │   │   │   │   ├── ToastRenderer.css
│   │   │   │   │   ├── ToastRenderer.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── tools
│   │   │   │   │   ├── addAttachments
│   │   │   │   │   │   └── AddAttachmentsSettings.tsx
│   │   │   │   │   ├── addPageNumbers
│   │   │   │   │   │   ├── AddPageNumbersAppearanceSettings.tsx
│   │   │   │   │   │   ├── AddPageNumbersAutomationSettings.tsx
│   │   │   │   │   │   ├── AddPageNumbersPositionSettings.tsx
│   │   │   │   │   │   ├── PageNumberPreview.module.css
│   │   │   │   │   │   ├── PageNumberPreview.tsx
│   │   │   │   │   │   ├── useAddPageNumbersOperation.ts
│   │   │   │   │   │   └── useAddPageNumbersParameters.ts
│   │   │   │   │   ├── addPassword
│   │   │   │   │   │   ├── AddPasswordSettings.test.tsx
│   │   │   │   │   │   └── AddPasswordSettings.tsx
│   │   │   │   │   ├── addStamp
│   │   │   │   │   │   ├── AddStampAutomationSettings.tsx
│   │   │   │   │   │   ├── StampPositionFormattingSettings.tsx
│   │   │   │   │   │   ├── StampPreview.module.css
│   │   │   │   │   │   ├── StampPreview.tsx
│   │   │   │   │   │   ├── StampPreviewUtils.ts
│   │   │   │   │   │   ├── StampSetupSettings.tsx
│   │   │   │   │   │   ├── useAddStampOperation.ts
│   │   │   │   │   │   └── useAddStampParameters.ts
│   │   │   │   │   ├── addWatermark
│   │   │   │   │   │   ├── AddWatermarkSingleStepSettings.tsx
│   │   │   │   │   │   ├── WatermarkFormatting.tsx
│   │   │   │   │   │   ├── WatermarkImageFile.tsx
│   │   │   │   │   │   ├── WatermarkStyleSettings.tsx
│   │   │   │   │   │   ├── WatermarkTextStyle.tsx
│   │   │   │   │   │   ├── WatermarkTypeSettings.tsx
│   │   │   │   │   │   └── WatermarkWording.tsx
│   │   │   │   │   ├── adjustContrast
│   │   │   │   │   │   ├── AdjustContrastBasicSettings.tsx
│   │   │   │   │   │   ├── AdjustContrastColorSettings.tsx
│   │   │   │   │   │   ├── AdjustContrastPreview.tsx
│   │   │   │   │   │   ├── AdjustContrastSingleStepSettings.tsx
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── adjustPageScale
│   │   │   │   │   │   ├── AdjustPageScaleSettings.test.tsx
│   │   │   │   │   │   └── AdjustPageScaleSettings.tsx
│   │   │   │   │   ├── automate
│   │   │   │   │   │   ├── AutomationCreation.tsx
│   │   │   │   │   │   ├── AutomationEntry.tsx
│   │   │   │   │   │   ├── AutomationRun.tsx
│   │   │   │   │   │   ├── AutomationSelection.tsx
│   │   │   │   │   │   ├── iconMap.ts
│   │   │   │   │   │   ├── IconSelector.tsx
│   │   │   │   │   │   ├── ToolConfigurationModal.tsx
│   │   │   │   │   │   ├── ToolList.tsx
│   │   │   │   │   │   └── ToolSelector.tsx
│   │   │   │   │   ├── autoRename
│   │   │   │   │   │   └── AutoRenameSettings.tsx
│   │   │   │   │   ├── bookletImposition
│   │   │   │   │   │   └── BookletImpositionSettings.tsx
│   │   │   │   │   ├── certSign
│   │   │   │   │   │   ├── modals
│   │   │   │   │   │   │   ├── AddParticipantsFlow.tsx
│   │   │   │   │   │   │   ├── CertificateConfigModal.tsx
│   │   │   │   │   │   │   └── SelectSignatureModal.tsx
│   │   │   │   │   │   ├── panels
│   │   │   │   │   │   │   ├── ParticipantListPanel.tsx
│   │   │   │   │   │   │   └── SessionActionsPanel.tsx
│   │   │   │   │   │   ├── steps
│   │   │   │   │   │   │   ├── AddSignaturesStep.tsx
│   │   │   │   │   │   │   ├── CertificateSelectionStep.tsx
│   │   │   │   │   │   │   ├── ReviewSignatureStep.tsx
│   │   │   │   │   │   │   ├── SignatureCreationStep.tsx
│   │   │   │   │   │   │   └── SignaturePlacementStep.tsx
│   │   │   │   │   │   ├── CertificateFilesSettings.tsx
│   │   │   │   │   │   ├── CertificateFormatSettings.tsx
│   │   │   │   │   │   ├── CertificateSelector.tsx
│   │   │   │   │   │   ├── CertificateTypeSettings.tsx
│   │   │   │   │   │   ├── CertSignAutomationSettings.tsx
│   │   │   │   │   │   ├── SessionDetailWorkbenchView.tsx
│   │   │   │   │   │   ├── SignatureAppearanceSettings.tsx
│   │   │   │   │   │   ├── SignatureSettingsDisplay.tsx
│   │   │   │   │   │   ├── SignatureSettingsInput.tsx
│   │   │   │   │   │   ├── SignControlsStrip.module.css
│   │   │   │   │   │   ├── SignControlsStrip.tsx
│   │   │   │   │   │   ├── SignRequestWorkbenchView.tsx
│   │   │   │   │   │   └── WetSignatureInput.tsx
│   │   │   │   │   ├── changeMetadata
│   │   │   │   │   │   ├── steps
│   │   │   │   │   │   │   ├── AdvancedOptionsStep.tsx
│   │   │   │   │   │   │   ├── CustomMetadataStep.tsx
│   │   │   │   │   │   │   ├── DeleteAllStep.tsx
│   │   │   │   │   │   │   ├── DocumentDatesStep.tsx
│   │   │   │   │   │   │   └── StandardMetadataStep.tsx
│   │   │   │   │   │   └── ChangeMetadataSingleStep.tsx
│   │   │   │   │   ├── changePermissions
│   │   │   │   │   │   ├── ChangePermissionsSettings.test.tsx
│   │   │   │   │   │   └── ChangePermissionsSettings.tsx
│   │   │   │   │   ├── compare
│   │   │   │   │   │   ├── hooks
│   │   │   │   │   │   │   ├── useCompareChangeNavigation.ts
│   │   │   │   │   │   │   ├── useCompareHighlights.ts
│   │   │   │   │   │   │   ├── useComparePagePreviews.ts
│   │   │   │   │   │   │   ├── useComparePanZoom.ts
│   │   │   │   │   │   │   └── useCompareRightRailButtons.tsx
│   │   │   │   │   │   ├── compare.ts
│   │   │   │   │   │   ├── CompareDocumentPane.tsx
│   │   │   │   │   │   ├── CompareNavigationDropdown.tsx
│   │   │   │   │   │   ├── ComparePixelWorkbenchView.tsx
│   │   │   │   │   │   ├── compareView.css
│   │   │   │   │   │   └── CompareWorkbenchView.tsx
│   │   │   │   │   ├── compress
│   │   │   │   │   │   └── CompressSettings.tsx
│   │   │   │   │   ├── convert
│   │   │   │   │   │   ├── ConvertFromCbrSettings.tsx
│   │   │   │   │   │   ├── ConvertFromCbzSettings.tsx
│   │   │   │   │   │   ├── ConvertFromEbookSettings.tsx
│   │   │   │   │   │   ├── ConvertFromEmailSettings.tsx
│   │   │   │   │   │   ├── ConvertFromImageSettings.tsx
│   │   │   │   │   │   ├── ConvertFromSvgSettings.tsx
│   │   │   │   │   │   ├── ConvertFromWebSettings.tsx
│   │   │   │   │   │   ├── ConvertSettings.tsx
│   │   │   │   │   │   ├── ConvertToCbrSettings.tsx
│   │   │   │   │   │   ├── ConvertToCbzSettings.tsx
│   │   │   │   │   │   ├── ConvertToEpubSettings.tsx
│   │   │   │   │   │   ├── ConvertToImageSettings.tsx
│   │   │   │   │   │   ├── ConvertToPdfaSettings.tsx
│   │   │   │   │   │   ├── ConvertToPdfxSettings.tsx
│   │   │   │   │   │   └── GroupedFormatDropdown.tsx
│   │   │   │   │   ├── crop
│   │   │   │   │   │   ├── CropAreaSelector.tsx
│   │   │   │   │   │   ├── CropAutomationSettings.tsx
│   │   │   │   │   │   ├── CropCoordinateInputs.tsx
│   │   │   │   │   │   └── CropSettings.tsx
│   │   │   │   │   ├── editTableOfContents
│   │   │   │   │   │   ├── BookmarkEditor.tsx
│   │   │   │   │   │   ├── EditTableOfContentsSettings.tsx
│   │   │   │   │   │   └── EditTableOfContentsWorkbenchView.tsx
│   │   │   │   │   ├── extractImages
│   │   │   │   │   │   └── ExtractImagesSettings.tsx
│   │   │   │   │   ├── extractPages
│   │   │   │   │   │   └── ExtractPagesSettings.tsx
│   │   │   │   │   ├── flatten
│   │   │   │   │   │   └── FlattenSettings.tsx
│   │   │   │   │   ├── fullscreen
│   │   │   │   │   │   ├── CompactToolItem.tsx
│   │   │   │   │   │   ├── DetailedToolItem.tsx
│   │   │   │   │   │   └── shared.ts
│   │   │   │   │   ├── getPdfInfo
│   │   │   │   │   │   ├── sections
│   │   │   │   │   │   │   ├── ComplianceSection.tsx
│   │   │   │   │   │   │   ├── KeyValueSection.tsx
│   │   │   │   │   │   │   ├── OtherSection.tsx
│   │   │   │   │   │   │   ├── PerPageSection.tsx
│   │   │   │   │   │   │   ├── SummarySection.tsx
│   │   │   │   │   │   │   └── TableOfContentsSection.tsx
│   │   │   │   │   │   ├── shared
│   │   │   │   │   │   │   ├── accordionStyles.ts
│   │   │   │   │   │   │   ├── KeyValueList.tsx
│   │   │   │   │   │   │   ├── ScrollableCodeBlock.tsx
│   │   │   │   │   │   │   └── SectionBlock.tsx
│   │   │   │   │   │   ├── GetPdfInfoReportView.tsx
│   │   │   │   │   │   └── GetPdfInfoResults.tsx
│   │   │   │   │   ├── merge
│   │   │   │   │   │   ├── MergeFileSorter.test.tsx
│   │   │   │   │   │   ├── MergeFileSorter.tsx
│   │   │   │   │   │   ├── MergeSettings.test.tsx
│   │   │   │   │   │   └── MergeSettings.tsx
│   │   │   │   │   ├── ocr
│   │   │   │   │   │   ├── AdvancedOCRSettings.tsx
│   │   │   │   │   │   ├── LanguagePicker.module.css
│   │   │   │   │   │   ├── LanguagePicker.tsx
│   │   │   │   │   │   └── OCRSettings.tsx
│   │   │   │   │   ├── overlayPdfs
│   │   │   │   │   │   ├── OverlayPdfsSettings.module.css
│   │   │   │   │   │   └── OverlayPdfsSettings.tsx
│   │   │   │   │   ├── pageLayout
│   │   │   │   │   │   ├── utils
│   │   │   │   │   │   │   └── computeBoxes.ts
│   │   │   │   │   │   ├── constants.ts
│   │   │   │   │   │   ├── LayoutPreview.tsx
│   │   │   │   │   │   ├── PageLayoutAdvancedSettings.tsx
│   │   │   │   │   │   ├── PageLayoutMarginsBordersSettings.tsx
│   │   │   │   │   │   ├── PageLayoutPreview.tsx
│   │   │   │   │   │   └── PageLayoutSettings.tsx
│   │   │   │   │   ├── pdfTextEditor
│   │   │   │   │   │   ├── FontStatusPanel.tsx
│   │   │   │   │   │   ├── PdfTextEditorSidebar.tsx
│   │   │   │   │   │   └── PdfTextEditorView.tsx
│   │   │   │   │   ├── redact
│   │   │   │   │   │   ├── ManualRedactionControls.tsx
│   │   │   │   │   │   ├── RedactAdvancedSettings.test.tsx
│   │   │   │   │   │   ├── RedactAdvancedSettings.tsx
│   │   │   │   │   │   ├── RedactModeSelector.tsx
│   │   │   │   │   │   ├── RedactSingleStepSettings.test.tsx
│   │   │   │   │   │   ├── RedactSingleStepSettings.tsx
│   │   │   │   │   │   ├── WordsToRedactInput.test.tsx
│   │   │   │   │   │   └── WordsToRedactInput.tsx
│   │   │   │   │   ├── removeAnnotations
│   │   │   │   │   │   └── RemoveAnnotationsSettings.tsx
│   │   │   │   │   ├── removeBlanks
│   │   │   │   │   │   └── RemoveBlanksSettings.tsx
│   │   │   │   │   ├── removeCertificateSign
│   │   │   │   │   │   └── RemoveCertificateSignSettings.tsx
│   │   │   │   │   ├── removePages
│   │   │   │   │   │   └── RemovePagesSettings.tsx
│   │   │   │   │   ├── removePassword
│   │   │   │   │   │   ├── RemovePasswordSettings.test.tsx
│   │   │   │   │   │   └── RemovePasswordSettings.tsx
│   │   │   │   │   ├── reorganizePages
│   │   │   │   │   │   ├── constants.ts
│   │   │   │   │   │   └── ReorganizePagesSettings.tsx
│   │   │   │   │   ├── repair
│   │   │   │   │   │   └── RepairSettings.tsx
│   │   │   │   │   ├── replaceColor
│   │   │   │   │   │   └── ReplaceColorSettings.tsx
│   │   │   │   │   ├── rotate
│   │   │   │   │   │   ├── RotateAutomationSettings.tsx
│   │   │   │   │   │   └── RotateSettings.tsx
│   │   │   │   │   ├── sanitize
│   │   │   │   │   │   ├── SanitizeSettings.test.tsx
│   │   │   │   │   │   └── SanitizeSettings.tsx
│   │   │   │   │   ├── scannerImageSplit
│   │   │   │   │   │   └── ScannerImageSplitSettings.tsx
│   │   │   │   │   ├── shared
│   │   │   │   │   │   ├── createToolFlow.tsx
│   │   │   │   │   │   ├── ErrorNotification.tsx
│   │   │   │   │   │   ├── FileMetadata.tsx
│   │   │   │   │   │   ├── FileStatusIndicator.tsx
│   │   │   │   │   │   ├── FilesToolStep.tsx
│   │   │   │   │   │   ├── NavigationControls.tsx
│   │   │   │   │   │   ├── NoToolsFound.tsx
│   │   │   │   │   │   ├── NumberInputWithUnit.tsx
│   │   │   │   │   │   ├── OperationButton.tsx
│   │   │   │   │   │   ├── renderToolButtons.tsx
│   │   │   │   │   │   ├── ResultsPreview.tsx
│   │   │   │   │   │   ├── ReviewToolStep.tsx
│   │   │   │   │   │   ├── ScopedOperationButton.tsx
│   │   │   │   │   │   ├── SubcategoryHeader.tsx
│   │   │   │   │   │   ├── SuggestedToolsSection.tsx
│   │   │   │   │   │   ├── ToolStep.tsx
│   │   │   │   │   │   └── ToolWorkflowTitle.tsx
│   │   │   │   │   ├── showJS
│   │   │   │   │   │   ├── ShowJSView.css
│   │   │   │   │   │   ├── ShowJSView.tsx
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── sign
│   │   │   │   │   │   ├── PenSizeSelector.tsx
│   │   │   │   │   │   ├── SavedSignaturesSection.tsx
│   │   │   │   │   │   └── SignSettings.tsx
│   │   │   │   │   ├── singleLargePage
│   │   │   │   │   │   └── SingleLargePageSettings.tsx
│   │   │   │   │   ├── split
│   │   │   │   │   │   ├── SplitAutomationSettings.tsx
│   │   │   │   │   │   └── SplitSettings.tsx
│   │   │   │   │   ├── timestampPdf
│   │   │   │   │   │   └── TimestampPdfSettings.tsx
│   │   │   │   │   ├── toolPicker
│   │   │   │   │   │   ├── FavoriteStar.tsx
│   │   │   │   │   │   ├── ToolButton.tsx
│   │   │   │   │   │   ├── ToolPicker.css
│   │   │   │   │   │   ├── ToolPickerFooterExtensions.tsx
│   │   │   │   │   │   └── ToolSearch.tsx
│   │   │   │   │   ├── unlockPdfForms
│   │   │   │   │   │   └── UnlockPdfFormsSettings.tsx
│   │   │   │   │   ├── validateSignature
│   │   │   │   │   │   ├── reportView
│   │   │   │   │   │   │   ├── FieldBlock.tsx
│   │   │   │   │   │   │   ├── FileSummaryHeader.tsx
│   │   │   │   │   │   │   ├── SignatureSection.tsx
│   │   │   │   │   │   │   ├── SignatureStatusBadge.tsx
│   │   │   │   │   │   │   ├── styles.css
│   │   │   │   │   │   │   └── ThumbnailPreview.tsx
│   │   │   │   │   │   ├── ValidateSignatureReportView.tsx
│   │   │   │   │   │   ├── ValidateSignatureResults.tsx
│   │   │   │   │   │   └── ValidateSignatureSettings.tsx
│   │   │   │   │   ├── FullscreenToolList.tsx
│   │   │   │   │   ├── FullscreenToolSurface.tsx
│   │   │   │   │   ├── SearchResults.tsx
│   │   │   │   │   ├── ToolLoadingFallback.tsx
│   │   │   │   │   ├── ToolPanel.css
│   │   │   │   │   ├── ToolPanel.tsx
│   │   │   │   │   ├── ToolPanelModePrompt.css
│   │   │   │   │   ├── ToolPanelModePrompt.tsx
│   │   │   │   │   ├── ToolPicker.tsx
│   │   │   │   │   └── ToolRenderer.tsx
│   │   │   │   ├── tooltips
│   │   │   │   │   ├── PageLayout
│   │   │   │   │   │   ├── usePageLayoutAdvancedTips.ts
│   │   │   │   │   │   ├── usePageLayoutMarginsBordersTips.ts
│   │   │   │   │   │   └── usePageLayoutTips.ts
│   │   │   │   │   ├── useAddAttachmentsTips.ts
│   │   │   │   │   ├── useAddPasswordPermissionsTips.ts
│   │   │   │   │   ├── useAddPasswordTips.ts
│   │   │   │   │   ├── useAdjustPageScaleTips.ts
│   │   │   │   │   ├── useAdvancedOCRTips.ts
│   │   │   │   │   ├── useAutoRenameTips.ts
│   │   │   │   │   ├── useBookletImpositionTips.ts
│   │   │   │   │   ├── useCertificateChoiceTips.ts
│   │   │   │   │   ├── useCertificateTypeTips.ts
│   │   │   │   │   ├── useCertSignTooltips.ts
│   │   │   │   │   ├── useChangeMetadataTips.ts
│   │   │   │   │   ├── useChangePermissionsTips.ts
│   │   │   │   │   ├── useCompressTips.ts
│   │   │   │   │   ├── useCropTooltips.ts
│   │   │   │   │   ├── useExtractPagesTips.ts
│   │   │   │   │   ├── useFlattenTips.ts
│   │   │   │   │   ├── useGroupSigningTips.ts
│   │   │   │   │   ├── useMergeTips.tsx
│   │   │   │   │   ├── useOCRTips.ts
│   │   │   │   │   ├── useOverlayPdfsTips.ts
│   │   │   │   │   ├── usePageSelectionTips.ts
│   │   │   │   │   ├── usePageSelectionTips.tsx
│   │   │   │   │   ├── usePdfTextEditorTips.ts
│   │   │   │   │   ├── useRedactTips.ts
│   │   │   │   │   ├── useRemoveAnnotationsTips.ts
│   │   │   │   │   ├── useRemoveBlanksTips.ts
│   │   │   │   │   ├── useRemovePagesTips.ts
│   │   │   │   │   ├── useRemovePasswordTips.ts
│   │   │   │   │   ├── useReplaceColorTips.ts
│   │   │   │   │   ├── useRotateTips.ts
│   │   │   │   │   ├── useScannerImageSplitTips.ts
│   │   │   │   │   ├── useSessionManagementTips.ts
│   │   │   │   │   ├── useSignatureAppearanceTips.ts
│   │   │   │   │   ├── useSignatureSettingsTips.ts
│   │   │   │   │   ├── useSignModeTips.ts
│   │   │   │   │   ├── useSplitMethodTips.ts
│   │   │   │   │   ├── useSplitSettingsTips.ts
│   │   │   │   │   ├── useWatermarkTips.ts
│   │   │   │   │   └── useWetSignatureTips.ts
│   │   │   │   ├── viewer
│   │   │   │   │   ├── constants
│   │   │   │   │   │   └── search.ts
│   │   │   │   │   ├── hooks
│   │   │   │   │   │   └── useDocumentReady.ts
│   │   │   │   │   ├── nonpdf
│   │   │   │   │   │   ├── CsvViewer.tsx
│   │   │   │   │   │   ├── HtmlViewer.tsx
│   │   │   │   │   │   ├── ImageViewer.tsx
│   │   │   │   │   │   ├── JsonViewer.tsx
│   │   │   │   │   │   ├── NonPdfBanner.tsx
│   │   │   │   │   │   ├── TextViewer.tsx
│   │   │   │   │   │   └── types.ts
│   │   │   │   │   ├── ActiveDocumentContext.tsx
│   │   │   │   │   ├── AnnotationAPIBridge.tsx
│   │   │   │   │   ├── AnnotationMenuButtons.tsx
│   │   │   │   │   ├── AnnotationSelectionMenu.tsx
│   │   │   │   │   ├── AnnotationTypeButtons.tsx
│   │   │   │   │   ├── AttachmentAPIBridge.tsx
│   │   │   │   │   ├── AttachmentSidebar.css
│   │   │   │   │   ├── AttachmentSidebar.tsx
│   │   │   │   │   ├── BookmarkAPIBridge.tsx
│   │   │   │   │   ├── BookmarkSidebar.css
│   │   │   │   │   ├── BookmarkSidebar.tsx
│   │   │   │   │   ├── CommentsSidebar.tsx
│   │   │   │   │   ├── CustomSearchLayer.tsx
│   │   │   │   │   ├── DocumentPermissionsAPIBridge.tsx
│   │   │   │   │   ├── DocumentReadyWrapper.tsx
│   │   │   │   │   ├── EmbedPdfViewer.tsx
│   │   │   │   │   ├── ExportAPIBridge.tsx
│   │   │   │   │   ├── HistoryAPIBridge.tsx
│   │   │   │   │   ├── LayerSidebar.css
│   │   │   │   │   ├── LayerSidebar.tsx
│   │   │   │   │   ├── layerUtils.ts
│   │   │   │   │   ├── LinkLayer.tsx
│   │   │   │   │   ├── LocalEmbedPDF.tsx
│   │   │   │   │   ├── LocalEmbedPDFWithAnnotations.tsx
│   │   │   │   │   ├── NonPdfViewer.tsx
│   │   │   │   │   ├── PanAPIBridge.tsx
│   │   │   │   │   ├── PdfViewerToolbar.tsx
│   │   │   │   │   ├── PrintAPIBridge.tsx
│   │   │   │   │   ├── readAloudHighlight.test.ts
│   │   │   │   │   ├── readAloudHighlight.ts
│   │   │   │   │   ├── RedactionAPIBridge.tsx
│   │   │   │   │   ├── RedactionPendingTracker.tsx
│   │   │   │   │   ├── RedactionSelectionMenu.tsx
│   │   │   │   │   ├── RotateAPIBridge.tsx
│   │   │   │   │   ├── RulerOverlay.tsx
│   │   │   │   │   ├── ScrollAPIBridge.tsx
│   │   │   │   │   ├── SearchAPIBridge.tsx
│   │   │   │   │   ├── SearchInterface.tsx
│   │   │   │   │   ├── SelectionAPIBridge.tsx
│   │   │   │   │   ├── SidebarBase.css
│   │   │   │   │   ├── SignatureAPIBridge.tsx
│   │   │   │   │   ├── SignatureFieldOverlay.tsx
│   │   │   │   │   ├── SignaturePlacementOverlay.tsx
│   │   │   │   │   ├── SpreadAPIBridge.tsx
│   │   │   │   │   ├── StampPlacementOverlay.tsx
│   │   │   │   │   ├── TextSelectionHandler.tsx
│   │   │   │   │   ├── ThumbnailAPIBridge.tsx
│   │   │   │   │   ├── ThumbnailSidebar.tsx
│   │   │   │   │   ├── useActiveDocumentId.ts
│   │   │   │   │   ├── useAnnotationMenuHandlers.ts
│   │   │   │   │   ├── useStopReadAloudOnNavigation.ts
│   │   │   │   │   ├── useViewerReadAloud.ts
│   │   │   │   │   ├── useViewerRightRailButtons.tsx
│   │   │   │   │   ├── Viewer.tsx
│   │   │   │   │   ├── viewerTypes.ts
│   │   │   │   │   └── ZoomAPIBridge.tsx
│   │   │   │   ├── AppLayout.tsx
│   │   │   │   ├── AppProviders.tsx
│   │   │   │   ├── FileManager.tsx
│   │   │   │   └── StorageStatsCard.tsx
│   │   │   ├── constants
│   │   │   │   ├── addWatermarkConstants.ts
│   │   │   │   ├── app.ts
│   │   │   │   ├── automation.ts
│   │   │   │   ├── convertConstants.ts
│   │   │   │   ├── convertSupportedFornats.ts
│   │   │   │   ├── cropConstants.ts
│   │   │   │   ├── downloads.ts
│   │   │   │   ├── events.ts
│   │   │   │   ├── links.ts
│   │   │   │   ├── logo.ts
│   │   │   │   ├── pageSizeConstants.ts
│   │   │   │   ├── routes.ts
│   │   │   │   ├── signConstants.ts
│   │   │   │   ├── splitConstants.ts
│   │   │   │   ├── theme.ts
│   │   │   │   ├── toolPanel.ts
│   │   │   │   └── zIndex.ts
│   │   │   ├── contexts
│   │   │   │   ├── file
│   │   │   │   │   ├── contexts.ts
│   │   │   │   │   ├── fileActions.ts
│   │   │   │   │   ├── fileHooks.ts
│   │   │   │   │   ├── FileReducer.ts
│   │   │   │   │   ├── fileSelectors.ts
│   │   │   │   │   └── lifecycle.ts
│   │   │   │   ├── toolWorkflow
│   │   │   │   │   └── toolWorkflowState.ts
│   │   │   │   ├── viewer
│   │   │   │   │   ├── viewerActions.ts
│   │   │   │   │   └── viewerBridges.ts
│   │   │   │   ├── AdminTourOrchestrationContext.tsx
│   │   │   │   ├── AnnotationContext.tsx
│   │   │   │   ├── AppConfigContext.test.tsx
│   │   │   │   ├── AppConfigContext.tsx
│   │   │   │   ├── BannerContext.tsx
│   │   │   │   ├── CommentAuthorContext.tsx
│   │   │   │   ├── FileContext.tsx
│   │   │   │   ├── FileManagerContext.tsx
│   │   │   │   ├── FilesModalContext.tsx
│   │   │   │   ├── HotkeyContext.tsx
│   │   │   │   ├── IndexedDBContext.tsx
│   │   │   │   ├── NavigationContext.tsx
│   │   │   │   ├── PageEditorContext.tsx
│   │   │   │   ├── PreferencesContext.tsx
│   │   │   │   ├── RedactionContext.tsx
│   │   │   │   ├── RightRailContext.tsx
│   │   │   │   ├── SaasBillingContext.tsx
│   │   │   │   ├── SaaSTeamContext.tsx
│   │   │   │   ├── SidebarContext.tsx
│   │   │   │   ├── SignatureContext.tsx
│   │   │   │   ├── ToolActionsContext.tsx
│   │   │   │   ├── ToolRegistryContext.tsx
│   │   │   │   ├── ToolRegistryProvider.tsx
│   │   │   │   ├── ToolWorkflowContext.tsx
│   │   │   │   ├── TourOrchestrationContext.tsx
│   │   │   │   ├── UnsavedChangesContext.tsx
│   │   │   │   └── ViewerContext.tsx
│   │   │   ├── data
│   │   │   │   ├── toolsTaxonomy.ts
│   │   │   │   ├── useProprietaryToolRegistry.tsx
│   │   │   │   └── useTranslatedToolRegistry.tsx
│   │   │   ├── extensions
│   │   │   │   ├── accountLogout.ts
│   │   │   │   └── cookieConsentConfig.ts
│   │   │   ├── hooks
│   │   │   │   ├── signing
│   │   │   │   │   ├── useSigningSessions.ts
│   │   │   │   │   └── useSigningWorkbench.ts
│   │   │   │   ├── tools
│   │   │   │   │   ├── addAttachments
│   │   │   │   │   │   ├── useAddAttachmentsOperation.ts
│   │   │   │   │   │   └── useAddAttachmentsParameters.ts
│   │   │   │   │   ├── addPassword
│   │   │   │   │   │   ├── useAddPasswordOperation.test.ts
│   │   │   │   │   │   ├── useAddPasswordOperation.ts
│   │   │   │   │   │   ├── useAddPasswordParameters.test.ts
│   │   │   │   │   │   └── useAddPasswordParameters.ts
│   │   │   │   │   ├── addWatermark
│   │   │   │   │   │   ├── useAddWatermarkOperation.ts
│   │   │   │   │   │   └── useAddWatermarkParameters.ts
│   │   │   │   │   ├── adjustContrast
│   │   │   │   │   │   ├── useAdjustContrastOperation.ts
│   │   │   │   │   │   └── useAdjustContrastParameters.ts
│   │   │   │   │   ├── adjustPageScale
│   │   │   │   │   │   ├── useAdjustPageScaleOperation.ts
│   │   │   │   │   │   ├── useAdjustPageScaleParameters.test.ts
│   │   │   │   │   │   └── useAdjustPageScaleParameters.ts
│   │   │   │   │   ├── automate
│   │   │   │   │   │   ├── useAutomateOperation.ts
│   │   │   │   │   │   ├── useAutomationForm.ts
│   │   │   │   │   │   ├── useSavedAutomations.ts
│   │   │   │   │   │   └── useSuggestedAutomations.ts
│   │   │   │   │   ├── autoRename
│   │   │   │   │   │   ├── useAutoRenameOperation.ts
│   │   │   │   │   │   └── useAutoRenameParameters.ts
│   │   │   │   │   ├── bookletImposition
│   │   │   │   │   │   ├── useBookletImpositionOperation.ts
│   │   │   │   │   │   └── useBookletImpositionParameters.ts
│   │   │   │   │   ├── certSign
│   │   │   │   │   │   ├── useCertSignOperation.ts
│   │   │   │   │   │   └── useCertSignParameters.ts
│   │   │   │   │   ├── changeMetadata
│   │   │   │   │   │   ├── useChangeMetadataOperation.test.ts
│   │   │   │   │   │   ├── useChangeMetadataOperation.ts
│   │   │   │   │   │   ├── useChangeMetadataParameters.test.ts
│   │   │   │   │   │   ├── useChangeMetadataParameters.ts
│   │   │   │   │   │   └── useMetadataExtraction.ts
│   │   │   │   │   ├── changePermissions
│   │   │   │   │   │   ├── useChangePermissionsOperation.test.ts
│   │   │   │   │   │   ├── useChangePermissionsOperation.ts
│   │   │   │   │   │   ├── useChangePermissionsParameters.test.ts
│   │   │   │   │   │   └── useChangePermissionsParameters.ts
│   │   │   │   │   ├── compare
│   │   │   │   │   │   ├── operationUtils.ts
│   │   │   │   │   │   ├── useCompareOperation.ts
│   │   │   │   │   │   └── useCompareParameters.ts
│   │   │   │   │   ├── compress
│   │   │   │   │   │   ├── useCompressOperation.ts
│   │   │   │   │   │   └── useCompressParameters.ts
│   │   │   │   │   ├── convert
│   │   │   │   │   │   ├── useConvertOperation.ts
│   │   │   │   │   │   ├── useConvertParameters.test.ts
│   │   │   │   │   │   ├── useConvertParameters.ts
│   │   │   │   │   │   └── useConvertParametersAutoDetection.test.ts
│   │   │   │   │   ├── crop
│   │   │   │   │   │   ├── useCropOperation.ts
│   │   │   │   │   │   └── useCropParameters.ts
│   │   │   │   │   ├── editTableOfContents
│   │   │   │   │   │   ├── useEditTableOfContentsOperation.ts
│   │   │   │   │   │   └── useEditTableOfContentsParameters.ts
│   │   │   │   │   ├── extractImages
│   │   │   │   │   │   ├── useExtractImagesOperation.ts
│   │   │   │   │   │   └── useExtractImagesParameters.ts
│   │   │   │   │   ├── extractPages
│   │   │   │   │   │   ├── useExtractPagesOperation.ts
│   │   │   │   │   │   └── useExtractPagesParameters.ts
│   │   │   │   │   ├── flatten
│   │   │   │   │   │   ├── useFlattenOperation.ts
│   │   │   │   │   │   └── useFlattenParameters.ts
│   │   │   │   │   ├── getPdfInfo
│   │   │   │   │   │   ├── useGetPdfInfoOperation.ts
│   │   │   │   │   │   └── useGetPdfInfoParameters.ts
│   │   │   │   │   ├── merge
│   │   │   │   │   │   ├── useMergeOperation.test.ts
│   │   │   │   │   │   ├── useMergeOperation.ts
│   │   │   │   │   │   ├── useMergeParameters.test.ts
│   │   │   │   │   │   └── useMergeParameters.ts
│   │   │   │   │   ├── ocr
│   │   │   │   │   │   ├── useOCROperation.ts
│   │   │   │   │   │   └── useOCRParameters.ts
│   │   │   │   │   ├── overlayPdfs
│   │   │   │   │   │   ├── useOverlayPdfsOperation.ts
│   │   │   │   │   │   └── useOverlayPdfsParameters.ts
│   │   │   │   │   ├── pageLayout
│   │   │   │   │   │   ├── usePageLayoutOperation.ts
│   │   │   │   │   │   └── usePageLayoutParameters.ts
│   │   │   │   │   ├── redact
│   │   │   │   │   │   ├── useRedactOperation.test.ts
│   │   │   │   │   │   ├── useRedactOperation.ts
│   │   │   │   │   │   ├── useRedactParameters.test.ts
│   │   │   │   │   │   └── useRedactParameters.ts
│   │   │   │   │   ├── removeAnnotations
│   │   │   │   │   │   ├── useRemoveAnnotationsOperation.ts
│   │   │   │   │   │   └── useRemoveAnnotationsParameters.ts
│   │   │   │   │   ├── removeBlanks
│   │   │   │   │   │   ├── useRemoveBlanksOperation.ts
│   │   │   │   │   │   └── useRemoveBlanksParameters.ts
│   │   │   │   │   ├── removeCertificateSign
│   │   │   │   │   │   ├── useRemoveCertificateSignOperation.ts
│   │   │   │   │   │   └── useRemoveCertificateSignParameters.ts
│   │   │   │   │   ├── removeImage
│   │   │   │   │   │   ├── useRemoveImageOperation.ts
│   │   │   │   │   │   └── useRemoveImageParameters.ts
│   │   │   │   │   ├── removePages
│   │   │   │   │   │   ├── useRemovePagesOperation.ts
│   │   │   │   │   │   └── useRemovePagesParameters.ts
│   │   │   │   │   ├── removePassword
│   │   │   │   │   │   ├── buildRemovePasswordFormData.ts
│   │   │   │   │   │   ├── useRemovePasswordOperation.test.ts
│   │   │   │   │   │   ├── useRemovePasswordOperation.ts
│   │   │   │   │   │   ├── useRemovePasswordParameters.test.ts
│   │   │   │   │   │   └── useRemovePasswordParameters.ts
│   │   │   │   │   ├── reorganizePages
│   │   │   │   │   │   ├── useReorganizePagesOperation.ts
│   │   │   │   │   │   └── useReorganizePagesParameters.ts
│   │   │   │   │   ├── repair
│   │   │   │   │   │   ├── useRepairOperation.ts
│   │   │   │   │   │   └── useRepairParameters.ts
│   │   │   │   │   ├── replaceColor
│   │   │   │   │   │   ├── useReplaceColorOperation.ts
│   │   │   │   │   │   └── useReplaceColorParameters.ts
│   │   │   │   │   ├── rotate
│   │   │   │   │   │   ├── useRotateOperation.test.ts
│   │   │   │   │   │   ├── useRotateOperation.ts
│   │   │   │   │   │   ├── useRotateParameters.test.ts
│   │   │   │   │   │   └── useRotateParameters.ts
│   │   │   │   │   ├── sanitize
│   │   │   │   │   │   ├── useSanitizeOperation.ts
│   │   │   │   │   │   ├── useSanitizeParameters.test.ts
│   │   │   │   │   │   └── useSanitizeParameters.ts
│   │   │   │   │   ├── scannerImageSplit
│   │   │   │   │   │   ├── useScannerImageSplitOperation.ts
│   │   │   │   │   │   └── useScannerImageSplitParameters.ts
│   │   │   │   │   ├── shared
│   │   │   │   │   │   ├── toolOperationHelpers.ts
│   │   │   │   │   │   ├── toolOperationTypes.ts
│   │   │   │   │   │   ├── useAccordionSteps.ts
│   │   │   │   │   │   ├── useBaseParameters.ts
│   │   │   │   │   │   ├── useBaseTool.ts
│   │   │   │   │   │   ├── useOperationResults.ts
│   │   │   │   │   │   ├── useToolApiCalls.ts
│   │   │   │   │   │   ├── useToolOperation.ts
│   │   │   │   │   │   ├── useToolResources.ts
│   │   │   │   │   │   ├── useToolState.ts
│   │   │   │   │   │   └── useViewScopedFiles.ts
│   │   │   │   │   ├── showJS
│   │   │   │   │   │   ├── useShowJSOperation.ts
│   │   │   │   │   │   └── useShowJSParameters.ts
│   │   │   │   │   ├── sign
│   │   │   │   │   │   ├── useSavedSignatures.ts
│   │   │   │   │   │   ├── useSignOperation.ts
│   │   │   │   │   │   └── useSignParameters.ts
│   │   │   │   │   ├── singleLargePage
│   │   │   │   │   │   ├── useSingleLargePageOperation.ts
│   │   │   │   │   │   └── useSingleLargePageParameters.ts
│   │   │   │   │   ├── split
│   │   │   │   │   │   ├── useSplitOperation.ts
│   │   │   │   │   │   └── useSplitParameters.ts
│   │   │   │   │   ├── timestampPdf
│   │   │   │   │   │   ├── useTimestampPdfOperation.ts
│   │   │   │   │   │   └── useTimestampPdfParameters.ts
│   │   │   │   │   ├── unlockPdfForms
│   │   │   │   │   │   ├── useUnlockPdfFormsOperation.ts
│   │   │   │   │   │   └── useUnlockPdfFormsParameters.ts
│   │   │   │   │   ├── validateSignature
│   │   │   │   │   │   ├── outputtedPDFSections
│   │   │   │   │   │   │   ├── CenteredMessageSection.ts
│   │   │   │   │   │   │   ├── FieldBoxSection.ts
│   │   │   │   │   │   │   ├── SignatureSection.ts
│   │   │   │   │   │   │   ├── StatusBadgeSection.ts
│   │   │   │   │   │   │   ├── SummarySection.ts
│   │   │   │   │   │   │   └── ThumbnailSection.ts
│   │   │   │   │   │   ├── utils
│   │   │   │   │   │   │   ├── pdfPageHelpers.ts
│   │   │   │   │   │   │   ├── pdfPalette.ts
│   │   │   │   │   │   │   ├── pdfText.ts
│   │   │   │   │   │   │   ├── reportStatus.ts
│   │   │   │   │   │   │   ├── signatureCsv.ts
│   │   │   │   │   │   │   ├── signatureReportBuilder.ts
│   │   │   │   │   │   │   ├── signatureStatus.ts
│   │   │   │   │   │   │   └── signatureUtils.ts
│   │   │   │   │   │   ├── signatureReportPdf.ts
│   │   │   │   │   │   ├── useValidateSignatureOperation.ts
│   │   │   │   │   │   └── useValidateSignatureParameters.ts
│   │   │   │   │   ├── useFavoriteToolItems.ts
│   │   │   │   │   ├── useToolPanelGeometry.ts
│   │   │   │   │   └── useUserToolActivity.ts
│   │   │   │   ├── useAdminSettings.ts
│   │   │   │   ├── useAppInitialization.ts
│   │   │   │   ├── useAuditFilters.ts
│   │   │   │   ├── useBackendHealth.ts
│   │   │   │   ├── useBackendProbe.ts
│   │   │   │   ├── useBaseUrl.ts
│   │   │   │   ├── useConfigButtonIcon.tsx
│   │   │   │   ├── useConversionCloudStatus.ts
│   │   │   │   ├── useCookieConsent.ts
│   │   │   │   ├── useCreditCheck.ts
│   │   │   │   ├── useDocumentMeta.ts
│   │   │   │   ├── useEndpointConfig.ts
│   │   │   │   ├── useEnhancedProcessedFiles.ts
│   │   │   │   ├── useFileActionIcons.ts
│   │   │   │   ├── useFileActionTerminology.ts
│   │   │   │   ├── useFileHandler.ts
│   │   │   │   ├── useFileManager.ts
│   │   │   │   ├── useFileWithUrl.ts
│   │   │   │   ├── useFocusTrap.ts
│   │   │   │   ├── useFooterInfo.ts
│   │   │   │   ├── useFrontendVersionInfo.ts
│   │   │   │   ├── useGoogleDrivePicker.ts
│   │   │   │   ├── useGroupEnabled.ts
│   │   │   │   ├── useGroupSigningEnabled.ts
│   │   │   │   ├── useIndexedDBThumbnail.ts
│   │   │   │   ├── useIsMobile.ts
│   │   │   │   ├── useIsOverflowing.ts
│   │   │   │   ├── useJwtConfigSync.ts
│   │   │   │   ├── useLicenseAlert.ts
│   │   │   │   ├── useLoginRequired.ts
│   │   │   │   ├── useLogoAssets.test.ts
│   │   │   │   ├── useLogoAssets.ts
│   │   │   │   ├── useLogoPath.ts
│   │   │   │   ├── useLogoVariant.ts
│   │   │   │   ├── useOs.ts
│   │   │   │   ├── usePdfLibLinks.ts
│   │   │   │   ├── usePDFProcessor.ts
│   │   │   │   ├── usePdfSignatureDetection.ts
│   │   │   │   ├── useProcessedFiles.ts
│   │   │   │   ├── useProgressivePagePreviews.ts
│   │   │   │   ├── useRainbowTheme.ts
│   │   │   │   ├── useRequestHeaders.ts
│   │   │   │   ├── useRightRailButtons.ts
│   │   │   │   ├── useRightRailTooltipSide.ts
│   │   │   │   ├── useSaaSMode.ts
│   │   │   │   ├── useScarfTracking.ts
│   │   │   │   ├── useSelfHostedToolAvailability.ts
│   │   │   │   ├── useServerExperience.ts
│   │   │   │   ├── useSettingsDirty.ts
│   │   │   │   ├── useSharingEnabled.ts
│   │   │   │   ├── useShouldShowWelcomeModal.ts
│   │   │   │   ├── useSidebarNavigation.ts
│   │   │   │   ├── useSuggestedTools.ts
│   │   │   │   ├── useThumbnailGeneration.ts
│   │   │   │   ├── useToolCloudStatus.ts
│   │   │   │   ├── useToolManagement.tsx
│   │   │   │   ├── useToolNavigation.ts
│   │   │   │   ├── useToolParameters.ts
│   │   │   │   ├── useToolSections.ts
│   │   │   │   ├── useTooltipPosition.ts
│   │   │   │   ├── useTranslation.ts
│   │   │   │   ├── useUndoRedo.ts
│   │   │   │   ├── useUrlSync.ts
│   │   │   │   ├── useViewerKeyCommand.ts
│   │   │   │   ├── useWheelZoom.ts
│   │   │   │   ├── useWillUseCloud.ts
│   │   │   │   └── useZipConfirmation.ts
│   │   │   ├── i18n
│   │   │   │   ├── config.ts
│   │   │   │   └── tomlBackend.ts
│   │   │   ├── pages
│   │   │   │   ├── HomePage.css
│   │   │   │   ├── HomePage.tsx
│   │   │   │   └── MobileScannerPage.tsx
│   │   │   ├── responses
│   │   │   │   └── Mfa
│   │   │   │       └── MfaResponse.ts
│   │   │   ├── services
│   │   │   │   ├── accountService.ts
│   │   │   │   ├── apiClient.ts
│   │   │   │   ├── apiClientConfig.ts
│   │   │   │   ├── apiClientSetup.ts
│   │   │   │   ├── auditService.ts
│   │   │   │   ├── automationStorage.ts
│   │   │   │   ├── backendReadinessGuard.ts
│   │   │   │   ├── desktopNotificationService.ts
│   │   │   │   ├── documentManipulationService.ts
│   │   │   │   ├── downloadService.ts
│   │   │   │   ├── enhancedPDFProcessingService.ts
│   │   │   │   ├── errorUtils.ts
│   │   │   │   ├── fileAnalyzer.ts
│   │   │   │   ├── fileDialogService.ts
│   │   │   │   ├── fileProcessingService.ts
│   │   │   │   ├── fileStorage.ts
│   │   │   │   ├── fileStubHelpers.ts
│   │   │   │   ├── googleDrivePickerService.ts
│   │   │   │   ├── httpErrorHandler.ts
│   │   │   │   ├── httpErrorUtils.ts
│   │   │   │   ├── indexedDBManager.ts
│   │   │   │   ├── localFileSaveService.ts
│   │   │   │   ├── openFilesFromDisk.ts
│   │   │   │   ├── operationResultsSaveService.ts
│   │   │   │   ├── pdfExportHelpers.ts
│   │   │   │   ├── pdfExportService.ts
│   │   │   │   ├── pdfiumDocBuilder.ts
│   │   │   │   ├── pdfiumService.ts
│   │   │   │   ├── pdfMetadataService.ts
│   │   │   │   ├── pdfProcessingService.ts
│   │   │   │   ├── pdfWorkerManager.ts
│   │   │   │   ├── pendingFilePathMappings.ts
│   │   │   │   ├── pixelCompareService.ts
│   │   │   │   ├── preferencesService.ts
│   │   │   │   ├── processingCache.ts
│   │   │   │   ├── processingErrorHandler.ts
│   │   │   │   ├── saasErrorInterceptor.ts
│   │   │   │   ├── serverStorageBundle.ts
│   │   │   │   ├── serverStorageUpload.ts
│   │   │   │   ├── shareBundleUtils.ts
│   │   │   │   ├── signatureDetectionService.ts
│   │   │   │   ├── signatureStorageService.ts
│   │   │   │   ├── specialErrorToasts.ts
│   │   │   │   ├── supabaseClient.ts
│   │   │   │   ├── thumbnailGenerationService.ts
│   │   │   │   ├── updateService.ts
│   │   │   │   ├── usageAnalyticsService.ts
│   │   │   │   └── zipFileService.ts
│   │   │   ├── styles
│   │   │   │   ├── cookieconsent.css
│   │   │   │   ├── index.css
│   │   │   │   ├── rainbow.module.css
│   │   │   │   ├── tailwind.css
│   │   │   │   ├── theme.css
│   │   │   │   └── zIndex.ts
│   │   │   ├── testing
│   │   │   │   └── serverExperienceSimulations.ts
│   │   │   ├── tests
│   │   │   │   ├── convert
│   │   │   │   │   ├── ConvertIntegration.test.tsx
│   │   │   │   │   ├── ConvertSmartDetectionIntegration.test.tsx
│   │   │   │   │   └── README.md
│   │   │   │   ├── enterprise
│   │   │   │   │   ├── license-and-features.spec.ts
│   │   │   │   │   ├── oauth-keycloak-login.spec.ts
│   │   │   │   │   └── saml-keycloak-login.spec.ts
│   │   │   │   ├── helpers
│   │   │   │   │   ├── api-stubs.ts
│   │   │   │   │   ├── login.ts
│   │   │   │   │   ├── stub-test-base.ts
│   │   │   │   │   ├── test-base.ts
│   │   │   │   │   └── ui-helpers.ts
│   │   │   │   ├── live
│   │   │   │   │   ├── authentication-login.spec.ts
│   │   │   │   │   ├── automate-chain.spec.ts
│   │   │   │   │   ├── e2e-pdf-operations.spec.ts
│   │   │   │   │   ├── edge-cases-security.spec.ts
│   │   │   │   │   ├── encrypted-unlock-then-tool.spec.ts
│   │   │   │   │   ├── password-change.spec.ts
│   │   │   │   │   └── username-change.spec.ts
│   │   │   │   ├── live-setup
│   │   │   │   │   └── bootstrap.setup.ts
│   │   │   │   ├── stubbed
│   │   │   │   │   ├── add-page-numbers-tool.spec.ts
│   │   │   │   │   ├── add-password-tool.spec.ts
│   │   │   │   │   ├── add-stamp-tool.spec.ts
│   │   │   │   │   ├── all-tool-pages-load.spec.ts
│   │   │   │   │   ├── audit-log-ui.spec.ts
│   │   │   │   │   ├── automation-page-ui.spec.ts
│   │   │   │   │   ├── cert-sign-wizard.spec.ts
│   │   │   │   │   ├── certificate-validation.spec.ts
│   │   │   │   │   ├── compare.spec.ts
│   │   │   │   │   ├── compress-tool.spec.ts
│   │   │   │   │   ├── convert.spec.ts
│   │   │   │   │   ├── cookie-preferences.spec.ts
│   │   │   │   │   ├── encrypted-pdf-unlock.spec.ts
│   │   │   │   │   ├── file-state-across-tools.spec.ts
│   │   │   │   │   ├── first-login-modal.spec.ts
│   │   │   │   │   ├── language-localization.spec.ts
│   │   │   │   │   ├── license-states.spec.ts
│   │   │   │   │   ├── main-dashboard.spec.ts
│   │   │   │   │   ├── merge-tool.spec.ts
│   │   │   │   │   ├── navigation.spec.ts
│   │   │   │   │   ├── oauth-buttons.spec.ts
│   │   │   │   │   ├── pdf-text-search.spec.ts
│   │   │   │   │   ├── premium-feature-gates.spec.ts
│   │   │   │   │   ├── seed.spec.ts
│   │   │   │   │   ├── settings.spec.ts
│   │   │   │   │   ├── split-tool.spec.ts
│   │   │   │   │   ├── teams-ui.spec.ts
│   │   │   │   │   ├── tool-pages-common.spec.ts
│   │   │   │   │   ├── tool-search.spec.ts
│   │   │   │   │   ├── tour-onboarding.spec.ts
│   │   │   │   │   ├── unsaved-changes-guard.spec.ts
│   │   │   │   │   ├── watermark-tool.spec.ts
│   │   │   │   │   └── workspace-people-teams.spec.ts
│   │   │   │   ├── test-fixtures
│   │   │   │   │   ├── certs
│   │   │   │   │   │   ├── expired-test.p12
│   │   │   │   │   │   ├── not-yet-valid-test.p12
│   │   │   │   │   │   ├── valid-test.jks
│   │   │   │   │   │   └── valid-test.p12
│   │   │   │   │   ├── compare_sample_a.pdf
│   │   │   │   │   ├── compare_sample_b.pdf
│   │   │   │   │   ├── corrupted.pdf
│   │   │   │   │   ├── encrypted.pdf
│   │   │   │   │   ├── README.md
│   │   │   │   │   ├── sample.csv
│   │   │   │   │   ├── sample.doc
│   │   │   │   │   ├── sample.docx
│   │   │   │   │   ├── sample.eml
│   │   │   │   │   ├── sample.htm
│   │   │   │   │   ├── sample.html
│   │   │   │   │   ├── sample.jpg
│   │   │   │   │   ├── sample.md
│   │   │   │   │   ├── sample.pdf
│   │   │   │   │   ├── sample.png
│   │   │   │   │   ├── sample.pptx
│   │   │   │   │   ├── sample.svg
│   │   │   │   │   ├── sample.txt
│   │   │   │   │   ├── sample.xlsx
│   │   │   │   │   └── sample.xml
│   │   │   │   ├── utils
│   │   │   │   │   └── testFileHelpers.ts
│   │   │   │   ├── missingTranslations.test.ts
│   │   │   │   ├── translation.test.ts
│   │   │   │   └── translationStructure.test.ts
│   │   │   ├── theme
│   │   │   │   └── mantineTheme.ts
│   │   │   ├── tools
│   │   │   │   ├── annotate
│   │   │   │   │   ├── AnnotationPanel.tsx
│   │   │   │   │   ├── useAnnotationSelection.ts
│   │   │   │   │   └── useAnnotationStyleState.ts
│   │   │   │   ├── formFill
│   │   │   │   │   ├── providers
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   ├── PdfBoxFormProvider.ts
│   │   │   │   │   │   ├── PdfiumFormProvider.ts
│   │   │   │   │   │   └── types.ts
│   │   │   │   │   ├── ButtonAppearanceOverlay.tsx
│   │   │   │   │   ├── FieldInput.tsx
│   │   │   │   │   ├── fieldMeta.tsx
│   │   │   │   │   ├── formApi.ts
│   │   │   │   │   ├── FormFieldOverlay.tsx
│   │   │   │   │   ├── FormFieldSidebar.tsx
│   │   │   │   │   ├── FormFill.module.css
│   │   │   │   │   ├── FormFill.tsx
│   │   │   │   │   ├── FormFillContext.tsx
│   │   │   │   │   ├── FormSaveBar.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── types.ts
│   │   │   │   ├── pdfTextEditor
│   │   │   │   │   ├── fontAnalysis.ts
│   │   │   │   │   ├── PdfTextEditor.tsx
│   │   │   │   │   ├── pdfTextEditorTypes.ts
│   │   │   │   │   └── pdfTextEditorUtils.ts
│   │   │   │   ├── stamp
│   │   │   │   │   └── createStampTool.tsx
│   │   │   │   ├── AddAttachments.tsx
│   │   │   │   ├── AddImage.tsx
│   │   │   │   ├── AddPageNumbers.tsx
│   │   │   │   ├── AddPassword.tsx
│   │   │   │   ├── AddStamp.tsx
│   │   │   │   ├── AddText.tsx
│   │   │   │   ├── AddWatermark.tsx
│   │   │   │   ├── AdjustContrast.tsx
│   │   │   │   ├── AdjustPageScale.tsx
│   │   │   │   ├── Annotate.tsx
│   │   │   │   ├── Automate.tsx
│   │   │   │   ├── AutoRename.tsx
│   │   │   │   ├── BookletImposition.tsx
│   │   │   │   ├── CertSign.tsx
│   │   │   │   ├── ChangeMetadata.tsx
│   │   │   │   ├── ChangePermissions.tsx
│   │   │   │   ├── Compare.tsx
│   │   │   │   ├── Compress.tsx
│   │   │   │   ├── Convert.tsx
│   │   │   │   ├── Crop.tsx
│   │   │   │   ├── EditTableOfContents.tsx
│   │   │   │   ├── ExtractImages.tsx
│   │   │   │   ├── ExtractPages.tsx
│   │   │   │   ├── Flatten.tsx
│   │   │   │   ├── GetPdfInfo.tsx
│   │   │   │   ├── Merge.tsx
│   │   │   │   ├── OCR.tsx
│   │   │   │   ├── OverlayPdfs.tsx
│   │   │   │   ├── PageLayout.tsx
│   │   │   │   ├── Redact.tsx
│   │   │   │   ├── RemoveAnnotations.tsx
│   │   │   │   ├── RemoveBlanks.tsx
│   │   │   │   ├── RemoveCertificateSign.tsx
│   │   │   │   ├── RemoveImage.tsx
│   │   │   │   ├── RemovePages.tsx
│   │   │   │   ├── RemovePassword.tsx
│   │   │   │   ├── ReorganizePages.tsx
│   │   │   │   ├── Repair.tsx
│   │   │   │   ├── ReplaceColor.tsx
│   │   │   │   ├── Rotate.tsx
│   │   │   │   ├── Sanitize.tsx
│   │   │   │   ├── ScannerImageSplit.tsx
│   │   │   │   ├── ShowJS.tsx
│   │   │   │   ├── Sign.tsx
│   │   │   │   ├── SingleLargePage.tsx
│   │   │   │   ├── Split.tsx
│   │   │   │   ├── SwaggerUI.tsx
│   │   │   │   ├── TimestampPdf.tsx
│   │   │   │   ├── UnlockPdfForms.tsx
│   │   │   │   └── ValidateSignature.tsx
│   │   │   ├── types
│   │   │   │   ├── appConfig.ts
│   │   │   │   ├── automation.ts
│   │   │   │   ├── backendHealth.ts
│   │   │   │   ├── compare.ts
│   │   │   │   ├── endpointAvailability.ts
│   │   │   │   ├── file.ts
│   │   │   │   ├── fileContext.ts
│   │   │   │   ├── fileIdSafety.d.ts
│   │   │   │   ├── getPdfInfo.ts
│   │   │   │   ├── groupEnabled.ts
│   │   │   │   ├── metadata.ts
│   │   │   │   ├── navigation.ts
│   │   │   │   ├── navigationActions.ts
│   │   │   │   ├── pageEditor.ts
│   │   │   │   ├── parameters.ts
│   │   │   │   ├── processing.ts
│   │   │   │   ├── proprietaryToolId.ts
│   │   │   │   ├── rightRail.ts
│   │   │   │   ├── sidebar.ts
│   │   │   │   ├── signature.ts
│   │   │   │   ├── signingSession.ts
│   │   │   │   ├── tips.ts
│   │   │   │   ├── tool.ts
│   │   │   │   ├── toolId.ts
│   │   │   │   ├── types.ts
│   │   │   │   ├── validateSignature.ts
│   │   │   │   └── workbench.ts
│   │   │   ├── utils
│   │   │   │   ├── bulkselection
│   │   │   │   │   ├── parseSelection.test.ts
│   │   │   │   │   ├── parseSelection.ts
│   │   │   │   │   ├── README.md
│   │   │   │   │   └── selectionBuilders.ts
│   │   │   │   ├── automationConverter.ts
│   │   │   │   ├── automationExecutor.ts
│   │   │   │   ├── automationFileProcessor.ts
│   │   │   │   ├── browserIdentifier.ts
│   │   │   │   ├── clickHandlers.ts
│   │   │   │   ├── convertUtils.test.ts
│   │   │   │   ├── convertUtils.ts
│   │   │   │   ├── cropCoordinates.ts
│   │   │   │   ├── downloadUtils.ts
│   │   │   │   ├── editTableOfContents.ts
│   │   │   │   ├── fileDialogUtils.ts
│   │   │   │   ├── fileHash.ts
│   │   │   │   ├── fileHistoryUtils.ts
│   │   │   │   ├── fileIdSafety.ts
│   │   │   │   ├── fileResponseUtils.test.ts
│   │   │   │   ├── fileResponseUtils.ts
│   │   │   │   ├── fileUtils.test.ts
│   │   │   │   ├── fileUtils.ts
│   │   │   │   ├── fuzzySearch.ts
│   │   │   │   ├── genericUtils.ts
│   │   │   │   ├── homePageNavigation.test.ts
│   │   │   │   ├── homePageNavigation.ts
│   │   │   │   ├── hotkeys.ts
│   │   │   │   ├── imageToPdfUtils.ts
│   │   │   │   ├── imageTransparency.ts
│   │   │   │   ├── languageMapping.ts
│   │   │   │   ├── loadJscanify.ts
│   │   │   │   ├── pageMetadata.ts
│   │   │   │   ├── pageSelection.ts
│   │   │   │   ├── patchDomForTranslators.ts
│   │   │   │   ├── pdfiumBitmapUtils.ts
│   │   │   │   ├── pdfiumPageRender.ts
│   │   │   │   ├── pdfLinkUtils.ts
│   │   │   │   ├── resourceManager.ts
│   │   │   │   ├── scarfTracking.ts
│   │   │   │   ├── scriptLoader.ts
│   │   │   │   ├── settingsNavigation.ts
│   │   │   │   ├── settingsPendingHelper.ts
│   │   │   │   ├── sidebarUtils.ts
│   │   │   │   ├── signatureFlattening.ts
│   │   │   │   ├── signaturePreview.ts
│   │   │   │   ├── storageUtils.ts
│   │   │   │   ├── textDiff.ts
│   │   │   │   ├── textUtils.ts
│   │   │   │   ├── thumbnailUtils.ts
│   │   │   │   ├── toolErrorHandler.ts
│   │   │   │   ├── toolResponseProcessor.ts
│   │   │   │   ├── toolSearch.ts
│   │   │   │   ├── toolSynonyms.ts
│   │   │   │   ├── urlMapping.ts
│   │   │   │   ├── urlRouting.ts
│   │   │   │   └── viewerZoom.ts
│   │   │   ├── workers
│   │   │   │   ├── compareWorker.ts
│   │   │   │   └── pixelCompareWorker.ts
│   │   │   ├── App.tsx
│   │   │   ├── env.test.ts
│   │   │   ├── i18n.ts
│   │   │   ├── setupTests.js
│   │   │   ├── setupTests.ts
│   │   │   └── tsconfig.json
│   │   ├── desktop
│   │   │   ├── auth
│   │   │   │   └── supabase.ts
│   │   │   ├── components
│   │   │   │   ├── fileEditor
│   │   │   │   │   └── FileEditorFileName.tsx
│   │   │   │   ├── onboarding
│   │   │   │   │   └── orchestrator
│   │   │   │   │       ├── onboardingConfig.ts
│   │   │   │   │       └── useOnboardingOrchestrator.ts
│   │   │   │   ├── quickAccessBar
│   │   │   │   │   └── QuickAccessBarFooterExtensions.tsx
│   │   │   │   ├── rightRail
│   │   │   │   │   └── RightRailFooterExtensions.tsx
│   │   │   │   ├── SetupWizard
│   │   │   │   │   ├── DesktopAuthLayout.tsx
│   │   │   │   │   ├── desktopOAuth.css
│   │   │   │   │   ├── DesktopOAuthButtons.tsx
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── SaaSLoginScreen.tsx
│   │   │   │   │   ├── SaaSSignupScreen.tsx
│   │   │   │   │   ├── SelfHostedLink.tsx
│   │   │   │   │   ├── SelfHostedLoginScreen.tsx
│   │   │   │   │   ├── ServerSelection.tsx
│   │   │   │   │   └── ServerSelectionScreen.tsx
│   │   │   │   ├── shared
│   │   │   │   │   ├── billing
│   │   │   │   │   │   └── SaaSStripeCheckout.tsx
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── configSections
│   │   │   │   │   │   │   ├── plan
│   │   │   │   │   │   │   │   ├── ActiveSubscriptionCard.tsx
│   │   │   │   │   │   │   │   ├── PlanUpgradeCard.tsx
│   │   │   │   │   │   │   │   ├── SaaSAvailablePlansSection.tsx
│   │   │   │   │   │   │   │   ├── SaasPlanCard.tsx
│   │   │   │   │   │   │   │   └── UsageDisplay.tsx
│   │   │   │   │   │   │   ├── DefaultAppSettings.tsx
│   │   │   │   │   │   │   ├── GeneralSection.tsx
│   │   │   │   │   │   │   ├── SaasPlanSection.tsx
│   │   │   │   │   │   │   └── SaaSTeamsSection.tsx
│   │   │   │   │   │   ├── configNavSections.tsx
│   │   │   │   │   │   └── types.ts
│   │   │   │   │   ├── modals
│   │   │   │   │   │   ├── CreditExhaustedModal.tsx
│   │   │   │   │   │   ├── CreditModalBootstrap.tsx
│   │   │   │   │   │   ├── CreditUsageBanner.tsx
│   │   │   │   │   │   ├── FeatureListItem.tsx
│   │   │   │   │   │   └── InsufficientCreditsModal.tsx
│   │   │   │   │   ├── CloudBadge.tsx
│   │   │   │   │   ├── DefaultAppBanner.tsx
│   │   │   │   │   ├── DisabledButtonWithTooltip.css
│   │   │   │   │   ├── DisabledButtonWithTooltip.tsx
│   │   │   │   │   ├── SelfHostedOfflineBanner.tsx
│   │   │   │   │   └── TeamInvitationBanner.tsx
│   │   │   │   ├── tools
│   │   │   │   │   └── toolPicker
│   │   │   │   │       ├── ToolButton.tsx
│   │   │   │   │       └── ToolPickerFooterExtensions.tsx
│   │   │   │   ├── viewer
│   │   │   │   │   └── PrintAPIBridge.tsx
│   │   │   │   ├── AppProviders.tsx
│   │   │   │   ├── BackendHealthIndicator.tsx
│   │   │   │   ├── ConnectionSettings.tsx
│   │   │   │   ├── DesktopBannerInitializer.tsx
│   │   │   │   ├── DesktopConfigSync.tsx
│   │   │   │   ├── DesktopOnboardingModal.tsx
│   │   │   │   ├── SaveShortcutListener.tsx
│   │   │   │   └── SignInModal.tsx
│   │   │   ├── config
│   │   │   │   ├── billing.ts
│   │   │   │   ├── defaultAppConfig.ts
│   │   │   │   └── planFeatures.ts
│   │   │   ├── constants
│   │   │   │   ├── backendErrors.ts
│   │   │   │   ├── connection.ts
│   │   │   │   ├── creditEvents.ts
│   │   │   │   └── signInEvents.ts
│   │   │   ├── contexts
│   │   │   │   ├── SaasBillingContext.tsx
│   │   │   │   ├── SaaSCheckoutContext.tsx
│   │   │   │   └── SaaSTeamContext.tsx
│   │   │   ├── extensions
│   │   │   │   ├── accountLogout.ts
│   │   │   │   ├── authCallback.ts
│   │   │   │   ├── authSessionCleanup.ts
│   │   │   │   ├── cookieConsentConfig.ts
│   │   │   │   ├── oauthNavigation.ts
│   │   │   │   └── platformSessionBridge.ts
│   │   │   ├── hooks
│   │   │   │   ├── useAppInitialization.ts
│   │   │   │   ├── useBackendHealth.ts
│   │   │   │   ├── useBackendInitializer.ts
│   │   │   │   ├── useConversionCloudStatus.ts
│   │   │   │   ├── useCreditCheck.ts
│   │   │   │   ├── useCreditEvents.ts
│   │   │   │   ├── useDefaultApp.ts
│   │   │   │   ├── useEnableMeteredBilling.ts
│   │   │   │   ├── useEndpointConfig.ts
│   │   │   │   ├── useExitWarning.ts
│   │   │   │   ├── useFileActionIcons.ts
│   │   │   │   ├── useFileActionTerminology.ts
│   │   │   │   ├── useFirstLaunchCheck.ts
│   │   │   │   ├── useFrontendVersionInfo.ts
│   │   │   │   ├── useGroupEnabled.ts
│   │   │   │   ├── useGroupSigningEnabled.ts
│   │   │   │   ├── useOpenedFile.ts
│   │   │   │   ├── useSaaSMode.ts
│   │   │   │   ├── useSaaSPlans.ts
│   │   │   │   ├── useSaveShortcut.ts
│   │   │   │   ├── useSelfHostedAuth.ts
│   │   │   │   ├── useSelfHostedToolAvailability.ts
│   │   │   │   ├── useSharingEnabled.ts
│   │   │   │   ├── useToolCloudStatus.ts
│   │   │   │   ├── useViewerKeyCommand.ts
│   │   │   │   └── useWillUseCloud.ts
│   │   │   ├── routes
│   │   │   │   ├── login
│   │   │   │   │   └── LoginHeader.tsx
│   │   │   │   ├── Landing.tsx
│   │   │   │   └── Login.tsx
│   │   │   ├── services
│   │   │   │   ├── apiClient.ts
│   │   │   │   ├── apiClientConfig.ts
│   │   │   │   ├── apiClientSetup.ts
│   │   │   │   ├── authService.ts
│   │   │   │   ├── authTokenStore.ts
│   │   │   │   ├── backendHealthMonitor.ts
│   │   │   │   ├── backendReadinessGuard.ts
│   │   │   │   ├── connectionModeService.ts
│   │   │   │   ├── defaultAppService.ts
│   │   │   │   ├── desktopNotificationService.ts
│   │   │   │   ├── downloadService.ts
│   │   │   │   ├── endpointAvailabilityService.ts
│   │   │   │   ├── fileDialogService.ts
│   │   │   │   ├── fileOpenService.ts
│   │   │   │   ├── httpErrorHandler.ts
│   │   │   │   ├── localFileSaveService.ts
│   │   │   │   ├── nativePrintService.ts
│   │   │   │   ├── operationResultsSaveService.ts
│   │   │   │   ├── operationRouter.ts
│   │   │   │   ├── platformService.ts
│   │   │   │   ├── saasBillingService.ts
│   │   │   │   ├── saasErrorInterceptor.ts
│   │   │   │   ├── selfHostedServerMonitor.ts
│   │   │   │   ├── tauriBackendService.ts
│   │   │   │   └── tauriHttpClient.ts
│   │   │   ├── types
│   │   │   │   └── billing.ts
│   │   │   ├── utils
│   │   │   │   └── oauthCallbackHtml.ts
│   │   │   ├── LICENSE
│   │   │   └── tsconfig.json
│   │   ├── proprietary
│   │   │   ├── auth
│   │   │   │   ├── oauthStorage.ts
│   │   │   │   ├── oauthTypes.ts
│   │   │   │   ├── springAuthClient.test.ts
│   │   │   │   ├── springAuthClient.ts
│   │   │   │   └── UseSession.tsx
│   │   │   ├── components
│   │   │   │   ├── shared
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── configSections
│   │   │   │   │   │   │   ├── apiKeys
│   │   │   │   │   │   │   │   ├── hooks
│   │   │   │   │   │   │   │   │   └── useApiKey.ts
│   │   │   │   │   │   │   │   ├── ApiKeySection.tsx
│   │   │   │   │   │   │   │   └── RefreshModal.tsx
│   │   │   │   │   │   │   ├── audit
│   │   │   │   │   │   │   │   ├── AuditChartsSection.tsx
│   │   │   │   │   │   │   │   ├── AuditClearDataSection.tsx
│   │   │   │   │   │   │   │   ├── AuditEventsTable.tsx
│   │   │   │   │   │   │   │   ├── AuditExportSection.tsx
│   │   │   │   │   │   │   │   ├── AuditFiltersForm.tsx
│   │   │   │   │   │   │   │   ├── AuditStatsCards.tsx
│   │   │   │   │   │   │   │   └── AuditSystemStatus.tsx
│   │   │   │   │   │   │   ├── plan
│   │   │   │   │   │   │   │   ├── AvailablePlansSection.tsx
│   │   │   │   │   │   │   │   ├── FeatureComparisonTable.tsx
│   │   │   │   │   │   │   │   ├── LicenseKeySection.tsx
│   │   │   │   │   │   │   │   ├── PlanCard.tsx
│   │   │   │   │   │   │   │   ├── StaticCheckoutModal.tsx
│   │   │   │   │   │   │   │   └── StaticPlanSection.tsx
│   │   │   │   │   │   │   ├── usage
│   │   │   │   │   │   │   │   ├── UsageAnalyticsChart.tsx
│   │   │   │   │   │   │   │   └── UsageAnalyticsTable.tsx
│   │   │   │   │   │   │   ├── AccountSection.tsx
│   │   │   │   │   │   │   ├── AdminAdvancedSection.tsx
│   │   │   │   │   │   │   ├── AdminAuditSection.tsx
│   │   │   │   │   │   │   ├── AdminConnectionsSection.tsx
│   │   │   │   │   │   │   ├── AdminDatabaseSection.tsx
│   │   │   │   │   │   │   ├── AdminEndpointsSection.tsx
│   │   │   │   │   │   │   ├── AdminFeaturesSection.tsx
│   │   │   │   │   │   │   ├── AdminGeneralSection.tsx
│   │   │   │   │   │   │   ├── AdminLegalSection.tsx
│   │   │   │   │   │   │   ├── AdminMailSection.tsx
│   │   │   │   │   │   │   ├── AdminPlanSection.tsx
│   │   │   │   │   │   │   ├── AdminPremiumSection.tsx
│   │   │   │   │   │   │   ├── AdminPrivacySection.tsx
│   │   │   │   │   │   │   ├── AdminSecuritySection.tsx
│   │   │   │   │   │   │   ├── AdminStorageSharingSection.tsx
│   │   │   │   │   │   │   ├── AdminUsageSection.tsx
│   │   │   │   │   │   │   ├── ApiKeys.tsx
│   │   │   │   │   │   │   ├── PeopleSection.tsx
│   │   │   │   │   │   │   ├── TeamDetailsSection.tsx
│   │   │   │   │   │   │   └── TeamsSection.tsx
│   │   │   │   │   │   ├── configNavSections.tsx
│   │   │   │   │   │   ├── EnterpriseRequiredBanner.tsx
│   │   │   │   │   │   └── OverviewHeader.tsx
│   │   │   │   │   ├── dividerWithText
│   │   │   │   │   │   └── DividerWithText.css
│   │   │   │   │   ├── stripeCheckout
│   │   │   │   │   │   ├── components
│   │   │   │   │   │   │   ├── PriceDisplay.tsx
│   │   │   │   │   │   │   └── PricingBadge.tsx
│   │   │   │   │   │   ├── hooks
│   │   │   │   │   │   │   ├── useCheckoutNavigation.ts
│   │   │   │   │   │   │   ├── useCheckoutSession.ts
│   │   │   │   │   │   │   ├── useCheckoutState.ts
│   │   │   │   │   │   │   └── useLicensePolling.ts
│   │   │   │   │   │   ├── stages
│   │   │   │   │   │   │   ├── EmailStage.tsx
│   │   │   │   │   │   │   ├── ErrorStage.tsx
│   │   │   │   │   │   │   ├── PaymentStage.tsx
│   │   │   │   │   │   │   ├── PlanSelectionStage.tsx
│   │   │   │   │   │   │   └── SuccessStage.tsx
│   │   │   │   │   │   ├── types
│   │   │   │   │   │   │   └── checkout.ts
│   │   │   │   │   │   ├── utils
│   │   │   │   │   │   │   ├── cardStyles.ts
│   │   │   │   │   │   │   ├── checkoutUtils.ts
│   │   │   │   │   │   │   ├── pricingUtils.ts
│   │   │   │   │   │   │   └── savingsCalculator.ts
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   └── StripeCheckout.tsx
│   │   │   │   │   ├── ChangeUserPasswordModal.tsx
│   │   │   │   │   ├── DividerWithText.tsx
│   │   │   │   │   ├── InviteMembersModal.tsx
│   │   │   │   │   ├── LoginRightCarousel.tsx
│   │   │   │   │   ├── loginSlides.ts
│   │   │   │   │   ├── ManageBillingButton.tsx
│   │   │   │   │   ├── UpdateSeatsButton.tsx
│   │   │   │   │   ├── UpdateSeatsModal.tsx
│   │   │   │   │   ├── UpgradeBanner.tsx
│   │   │   │   │   └── UpgradeBannerInitializer.tsx
│   │   │   │   ├── workflow
│   │   │   │   │   └── ParticipantView.tsx
│   │   │   │   └── AppProviders.tsx
│   │   │   ├── constants
│   │   │   │   ├── planConstants.ts
│   │   │   │   └── staticStripeLinks.ts
│   │   │   ├── contexts
│   │   │   │   ├── CheckoutContext.tsx
│   │   │   │   ├── LicenseContext.tsx
│   │   │   │   ├── ServerExperienceContext.tsx
│   │   │   │   └── UpdateSeatsContext.tsx
│   │   │   ├── data
│   │   │   │   └── useProprietaryToolRegistry.tsx
│   │   │   ├── extensions
│   │   │   │   ├── accountLogout.ts
│   │   │   │   ├── authCallback.ts
│   │   │   │   ├── authSessionCleanup.ts
│   │   │   │   ├── oauthNavigation.ts
│   │   │   │   └── platformSessionBridge.ts
│   │   │   ├── hooks
│   │   │   │   ├── workflow
│   │   │   │   │   └── useParticipantSession.ts
│   │   │   │   ├── usePlans.ts
│   │   │   │   ├── useRequestHeaders.ts
│   │   │   │   ├── useServerExperience.ts
│   │   │   │   └── useShouldShowWelcomeModal.ts
│   │   │   ├── routes
│   │   │   │   ├── authShared
│   │   │   │   │   ├── auth.css
│   │   │   │   │   ├── AuthLayout.module.css
│   │   │   │   │   └── AuthLayout.tsx
│   │   │   │   ├── login
│   │   │   │   │   ├── EmailPasswordForm.tsx
│   │   │   │   │   ├── ErrorMessage.tsx
│   │   │   │   │   ├── LoggedInState.tsx
│   │   │   │   │   ├── LoginHeader.tsx
│   │   │   │   │   ├── NavigationLink.tsx
│   │   │   │   │   ├── OAuthButtons.test.tsx
│   │   │   │   │   └── OAuthButtons.tsx
│   │   │   │   ├── signup
│   │   │   │   │   ├── AuthService.ts
│   │   │   │   │   ├── SignupForm.tsx
│   │   │   │   │   └── SignupFormValidation.ts
│   │   │   │   ├── AuthCallback.module.css
│   │   │   │   ├── AuthCallback.test.tsx
│   │   │   │   ├── AuthCallback.tsx
│   │   │   │   ├── InviteAccept.tsx
│   │   │   │   ├── Landing.tsx
│   │   │   │   ├── Login.test.tsx
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── ShareLinkLoader.tsx
│   │   │   │   ├── ShareLinkPage.tsx
│   │   │   │   └── Signup.tsx
│   │   │   ├── services
│   │   │   │   ├── apiClientSetup.ts
│   │   │   │   ├── databaseManagementService.ts
│   │   │   │   ├── licenseService.ts
│   │   │   │   ├── shareLinkImport.ts
│   │   │   │   ├── teamService.ts
│   │   │   │   ├── userManagementService.ts
│   │   │   │   └── workflowService.ts
│   │   │   ├── styles
│   │   │   │   └── auth-theme.css
│   │   │   ├── testing
│   │   │   │   └── serverExperienceSimulations.ts
│   │   │   ├── types
│   │   │   │   ├── license.ts
│   │   │   │   └── proprietaryToolId.ts
│   │   │   ├── utils
│   │   │   │   ├── creditCosts.ts
│   │   │   │   ├── currencyDetection.ts
│   │   │   │   ├── licenseCheckoutUtils.ts
│   │   │   │   ├── planTierUtils.ts
│   │   │   │   ├── protocolDetection.ts
│   │   │   │   └── urlMapping.ts
│   │   │   ├── App.tsx
│   │   │   ├── LICENSE
│   │   │   └── tsconfig.json
│   │   ├── prototypes
│   │   │   ├── components
│   │   │   │   ├── chat
│   │   │   │   │   ├── ChatContext.tsx
│   │   │   │   │   ├── ChatPanel.css
│   │   │   │   │   └── ChatPanel.tsx
│   │   │   │   ├── home
│   │   │   │   │   └── HomePageExtensions.tsx
│   │   │   │   └── AppProviders.tsx
│   │   │   ├── App.tsx
│   │   │   ├── LICENSE
│   │   │   └── tsconfig.json
│   │   ├── saas
│   │   │   ├── auth
│   │   │   │   ├── supabase.ts
│   │   │   │   └── UseSession.tsx
│   │   │   ├── components
│   │   │   │   ├── auth
│   │   │   │   │   ├── GuestUserBanner.css
│   │   │   │   │   ├── GuestUserBanner.tsx
│   │   │   │   │   └── RequireAuth.tsx
│   │   │   │   ├── feedback
│   │   │   │   │   └── UserbackWidget.tsx
│   │   │   │   ├── home
│   │   │   │   │   └── HomePageExtensions.tsx
│   │   │   │   ├── onboarding
│   │   │   │   │   ├── slides
│   │   │   │   │   │   └── FreeTrialSlide.tsx
│   │   │   │   │   ├── OnboardingTour.tsx
│   │   │   │   │   ├── renderButtons.tsx
│   │   │   │   │   ├── saasFlowResolver.ts
│   │   │   │   │   ├── saasOnboardingFlowConfig.ts
│   │   │   │   │   ├── SaasOnboardingModal.tsx
│   │   │   │   │   └── useSaasOnboardingState.ts
│   │   │   │   ├── shared
│   │   │   │   │   ├── charts
│   │   │   │   │   │   ├── stackedBarChart
│   │   │   │   │   │   │   └── StackedBarTooltip.tsx
│   │   │   │   │   │   ├── utils
│   │   │   │   │   │   │   ├── d3Utils.ts
│   │   │   │   │   │   │   ├── themeUtils.ts
│   │   │   │   │   │   │   └── tooltipUtils.ts
│   │   │   │   │   │   └── StackedBarChart.tsx
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── configSections
│   │   │   │   │   │   │   ├── apiKeys
│   │   │   │   │   │   │   │   ├── hooks
│   │   │   │   │   │   │   │   │   ├── useApiKey.ts
│   │   │   │   │   │   │   │   │   └── useCredits.ts
│   │   │   │   │   │   │   │   └── UsageSection.tsx
│   │   │   │   │   │   │   ├── plan
│   │   │   │   │   │   │   │   ├── ActivePlanSection.tsx
│   │   │   │   │   │   │   │   ├── ApiPackagesSection.tsx
│   │   │   │   │   │   │   │   ├── AvailablePlansSection.tsx
│   │   │   │   │   │   │   │   └── PlanCard.tsx
│   │   │   │   │   │   │   ├── ApiKeys.tsx
│   │   │   │   │   │   │   ├── Overview.tsx
│   │   │   │   │   │   │   ├── PasswordSecurity.tsx
│   │   │   │   │   │   │   └── Plan.tsx
│   │   │   │   │   │   ├── ProfilePictureCropper.tsx
│   │   │   │   │   │   ├── saasConfigNavSections.tsx
│   │   │   │   │   │   └── types.ts
│   │   │   │   │   ├── utils
│   │   │   │   │   │   └── date.ts
│   │   │   │   │   ├── AppConfigModal.tsx
│   │   │   │   │   ├── InfoBanner.tsx
│   │   │   │   │   ├── ManageBillingButton.tsx
│   │   │   │   │   ├── PrivateContent.tsx
│   │   │   │   │   ├── StripeCheckoutSaas.tsx
│   │   │   │   │   ├── TrialExpiredModal.tsx
│   │   │   │   │   └── TrialStatusBanner.tsx
│   │   │   │   ├── toast
│   │   │   │   │   └── ToastRenderer.css
│   │   │   │   ├── tools
│   │   │   │   │   └── sign
│   │   │   │   │       └── SignSettings.tsx
│   │   │   │   ├── OnboardingBootstrap.tsx
│   │   │   │   └── TrialExpiredBootstrap.tsx
│   │   │   ├── constants
│   │   │   │   ├── app.ts
│   │   │   │   ├── authProviders.ts
│   │   │   │   └── links.ts
│   │   │   ├── contexts
│   │   │   │   └── OnboardingContext.tsx
│   │   │   ├── hooks
│   │   │   │   ├── useAutoAnonymousAuth.ts
│   │   │   │   ├── useConfigButtonIcon.tsx
│   │   │   │   ├── useCreditCheck.ts
│   │   │   │   ├── useCredits.ts
│   │   │   │   ├── useEndpointConfig.ts
│   │   │   │   ├── useJwtConfigSync.ts
│   │   │   │   └── usePlans.ts
│   │   │   ├── routes
│   │   │   │   ├── authShared
│   │   │   │   │   ├── AuthLayout.module.css
│   │   │   │   │   ├── AuthLayout.tsx
│   │   │   │   │   ├── GuestSignInButton.tsx
│   │   │   │   │   └── saas-auth.css
│   │   │   │   ├── login
│   │   │   │   │   ├── EmailPasswordForm.tsx
│   │   │   │   │   ├── LoadingState.tsx
│   │   │   │   │   ├── MagicLinkForm.tsx
│   │   │   │   │   ├── OAuthButtons.tsx
│   │   │   │   │   └── SuccessMessage.tsx
│   │   │   │   ├── signup
│   │   │   │   │   └── AuthService.ts
│   │   │   │   ├── AuthCallback.tsx
│   │   │   │   ├── Landing.tsx
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── ResetPassword.tsx
│   │   │   │   └── Signup.tsx
│   │   │   ├── services
│   │   │   │   ├── accountDeletion.ts
│   │   │   │   ├── apiClient.test.ts
│   │   │   │   ├── apiClient.ts
│   │   │   │   ├── avatarSyncService.ts
│   │   │   │   ├── signatureStorageService.ts
│   │   │   │   ├── userManagementService.ts
│   │   │   │   └── userService.ts
│   │   │   ├── styles
│   │   │   │   ├── saas-theme.css
│   │   │   │   └── zIndex.ts
│   │   │   ├── types
│   │   │   │   ├── charts.ts
│   │   │   │   ├── credits.ts
│   │   │   │   └── stripe.ts
│   │   │   ├── utils
│   │   │   │   ├── appSettings.ts
│   │   │   │   ├── cropImage.ts
│   │   │   │   └── pathUtils.ts
│   │   │   ├── App.tsx
│   │   │   ├── LICENSE
│   │   │   ├── setupTests.ts
│   │   │   └── tsconfig.json
│   │   ├── global.d.ts
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── output.css
│   │   └── reportWebVitals.js
│   ├── src-tauri
│   │   ├── capabilities
│   │   │   └── default.json
│   │   ├── icons
│   │   │   ├── android
│   │   │   │   ├── mipmap-hdpi
│   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   └── ic_launcher.png
│   │   │   │   ├── mipmap-mdpi
│   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   └── ic_launcher.png
│   │   │   │   ├── mipmap-xhdpi
│   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   └── ic_launcher.png
│   │   │   │   ├── mipmap-xxhdpi
│   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   ├── ic_launcher_round.png
│   │   │   │   │   └── ic_launcher.png
│   │   │   │   └── mipmap-xxxhdpi
│   │   │   │       ├── ic_launcher_foreground.png
│   │   │   │       ├── ic_launcher_round.png
│   │   │   │       └── ic_launcher.png
│   │   │   ├── ios
│   │   │   │   ├── AppIcon-20x20@1x.png
│   │   │   │   ├── AppIcon-20x20@2x-1.png
│   │   │   │   ├── AppIcon-20x20@2x.png
│   │   │   │   ├── AppIcon-20x20@3x.png
│   │   │   │   ├── AppIcon-29x29@1x.png
│   │   │   │   ├── AppIcon-29x29@2x-1.png
│   │   │   │   ├── AppIcon-29x29@2x.png
│   │   │   │   ├── AppIcon-29x29@3x.png
│   │   │   │   ├── AppIcon-40x40@1x.png
│   │   │   │   ├── AppIcon-40x40@2x-1.png
│   │   │   │   ├── AppIcon-40x40@2x.png
│   │   │   │   ├── AppIcon-40x40@3x.png
│   │   │   │   ├── AppIcon-512@2x.png
│   │   │   │   ├── AppIcon-60x60@2x.png
│   │   │   │   ├── AppIcon-60x60@3x.png
│   │   │   │   ├── AppIcon-76x76@1x.png
│   │   │   │   ├── AppIcon-76x76@2x.png
│   │   │   │   └── AppIcon-83.5x83.5@2x.png
│   │   │   ├── 128x128.png
│   │   │   ├── 128x128@2x.png
│   │   │   ├── 16x16.png
│   │   │   ├── 192x192.png
│   │   │   ├── 32x32.png
│   │   │   ├── 64x64.png
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── android-chrome-512x512.png
│   │   │   ├── icon_orig.png
│   │   │   ├── icon.icns
│   │   │   ├── icon.ico
│   │   │   ├── icon.png
│   │   │   ├── mstile-144x144.png
│   │   │   ├── mstile-150x150.png
│   │   │   ├── mstile-310x150.png
│   │   │   ├── mstile-310x310.png
│   │   │   ├── mstile-70x70.png
│   │   │   ├── rainbow.svg
│   │   │   ├── Square107x107Logo.png
│   │   │   ├── Square142x142Logo.png
│   │   │   ├── Square150x150Logo.png
│   │   │   ├── Square284x284Logo.png
│   │   │   ├── Square30x30Logo.png
│   │   │   ├── Square310x310Logo.png
│   │   │   ├── Square44x44Logo.png
│   │   │   ├── Square71x71Logo.png
│   │   │   ├── Square89x89Logo.png
│   │   │   └── StoreLogo.png
│   │   ├── provisioner
│   │   │   ├── src
│   │   │   │   └── main.rs
│   │   │   ├── Cargo.lock
│   │   │   └── Cargo.toml
│   │   ├── src
│   │   │   ├── commands
│   │   │   │   ├── auth.rs
│   │   │   │   ├── backend.rs
│   │   │   │   ├── connection.rs
│   │   │   │   ├── default_app.rs
│   │   │   │   ├── files.rs
│   │   │   │   ├── mod.rs
│   │   │   │   ├── platform.rs
│   │   │   │   └── print.rs
│   │   │   ├── state
│   │   │   │   ├── connection_state.rs
│   │   │   │   └── mod.rs
│   │   │   ├── utils
│   │   │   │   ├── logging.rs
│   │   │   │   ├── mod.rs
│   │   │   │   └── paths.rs
│   │   │   ├── lib.rs
│   │   │   └── main.rs
│   │   ├── thumbnail-handler
│   │   │   ├── src
│   │   │   │   └── lib.rs
│   │   │   ├── .gitignore
│   │   │   ├── Cargo.lock
│   │   │   ├── Cargo.toml
│   │   │   └── README.md
│   │   ├── windows
│   │   │   └── wix
│   │   │       └── provisioning.wxs
│   │   ├── .gitignore
│   │   ├── build.rs
│   │   ├── Cargo.lock
│   │   ├── Cargo.toml
│   │   ├── Info.plist
│   │   ├── stirling-pdf.desktop
│   │   └── tauri.conf.json
│   ├── .env
│   ├── .env.desktop
│   ├── .env.saas
│   ├── .gitignore
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── DeveloperGuide.md
│   ├── eslint.config.mjs
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── playwright.config.ts
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.core.vite.json
│   ├── tsconfig.desktop.vite.json
│   ├── tsconfig.json
│   ├── tsconfig.proprietary.vite.json
│   ├── tsconfig.prototypes.vite.json
│   ├── tsconfig.saas.vite.json
│   ├── vite-env.d.ts
│   ├── vite.config.ts
│   └── vitest.config.ts
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── images
│   ├── custom-home-dark.png
│   ├── custom-home.png
│   ├── home-light.png
│   └── home.png
├── scripts
│   ├── translations
│   │   ├── ai_translation_helper.py
│   │   ├── auto_translate.py
│   │   ├── batch_translator.py
│   │   ├── bulk_auto_translate.py
│   │   ├── compact_translator.py
│   │   ├── README.md
│   │   ├── toml_beautifier.py
│   │   ├── toml_validator.py
│   │   ├── translation_analyzer.py
│   │   ├── translation_merger.py
│   │   ├── validate_json_structure.py
│   │   └── validate_placeholders.py
│   ├── analyze_pdf_json.py
│   ├── aot-diagnostics.sh
│   ├── convert_cff_to_ttf.py
│   ├── counter_translation_v3.py
│   ├── download_pdf_samples.py
│   ├── download-security-jar.sh
│   ├── find-free-port.ps1
│   ├── find-free-port.sh
│   ├── generate_requirements.bat
│   ├── harvest_type3_fonts.py
│   ├── ignore_translation.toml
│   ├── index_type3_catalogue.py
│   ├── init-without-ocr.sh
│   ├── init.sh
│   ├── installFonts.sh
│   ├── PropSync.java
│   ├── remove_translation_keys.sh
│   ├── replace_translation_line.sh
│   ├── RestartHelper.java
│   ├── stirling-diagnostics.sh
│   ├── summarize_type3_signatures.py
│   ├── type3_to_cff.py
│   └── update_type3_library.py
├── testing
│   ├── compose
│   │   ├── docker-compose-keycloak-oauth.yml
│   │   ├── docker-compose-keycloak-saml.yml
│   │   ├── docker-compose-security-with-login.yml
│   │   ├── docker-compose-security.yml
│   │   ├── docker-compose-ultra-lite.yml
│   │   ├── keycloak-realm-oauth.json
│   │   ├── keycloak-realm-saml.json
│   │   ├── start-oauth-test.sh
│   │   ├── start-saml-test.sh
│   │   ├── validate-oauth-test.sh
│   │   └── validate-saml-test.sh
│   ├── cucumber
│   │   ├── exampleFiles
│   │   │   ├── example_html.zip
│   │   │   ├── example.docx
│   │   │   ├── example.html
│   │   │   ├── example.md
│   │   │   ├── example.msg
│   │   │   ├── example.odp
│   │   │   ├── example.odt
│   │   │   ├── example.pptx
│   │   │   ├── example.rtf
│   │   │   ├── ghost1.pdf
│   │   │   ├── ghost2.pdf
│   │   │   ├── ghost3.pdf
│   │   │   ├── images.pdf
│   │   │   ├── pdfa1.pdf
│   │   │   ├── pdfa2.pdf
│   │   │   └── tables.pdf
│   │   ├── features
│   │   │   ├── enterprise
│   │   │   │   ├── steps
│   │   │   │   │   └── steps.py
│   │   │   │   ├── audit.feature
│   │   │   │   ├── signatures.feature
│   │   │   │   └── teams.feature
│   │   │   ├── steps
│   │   │   │   ├── auth_step_definitions.py
│   │   │   │   ├── enterprise_step_definitions.py
│   │   │   │   └── step_definitions.py
│   │   │   ├── admin_settings.feature
│   │   │   ├── analysis.feature
│   │   │   ├── attachments.feature
│   │   │   ├── auto_split.feature
│   │   │   ├── bookmarks_chapters.feature
│   │   │   ├── convert_comic.feature
│   │   │   ├── convert_eml.feature
│   │   │   ├── convert_images.feature
│   │   │   ├── convert_new.feature
│   │   │   ├── environment.py
│   │   │   ├── examples.feature
│   │   │   ├── external.feature
│   │   │   ├── filter.feature
│   │   │   ├── form_advanced.feature
│   │   │   ├── forms.feature
│   │   │   ├── general_new.feature
│   │   │   ├── general.feature
│   │   │   ├── info.feature
│   │   │   ├── invite_links.feature
│   │   │   ├── jwt_auth.feature
│   │   │   ├── merge_overlay.feature
│   │   │   ├── misc_new.feature
│   │   │   ├── mobile_scanner.feature
│   │   │   ├── security_new.feature
│   │   │   └── user_management.feature
│   │   ├── behave.ini
│   │   ├── requirements.in
│   │   └── requirements.txt
│   ├── ledger
│   │   ├── arithmetic_error.pdf
│   │   ├── clean_invoice.pdf
│   │   ├── consistency_error.pdf
│   │   ├── generate_test_pdfs.py
│   │   ├── mixed_errors.pdf
│   │   ├── statement_errors.pdf
│   │   └── tally_error.pdf
│   ├── testdriver
│   │   └── test.yml
│   ├── allEndpointsRemovedSettings.yml
│   ├── crop_test.pdf
│   ├── endpoints.txt
│   ├── smoke_resource_endpoints.sh
│   ├── test_disabledEndpoints.sh
│   ├── test_pdf_1.pdf
│   ├── test_pdf_2.pdf
│   ├── test_pdf_3.pdf
│   ├── test_pdf_4.pdf
│   ├── test_webpages.sh
│   ├── test.sh
│   ├── test2.sh
│   ├── webpage_urls_full.txt
│   └── webpage_urls.txt
├── .dockerignore
├── .editorconfig
├── .git-blame-ignore-revs
├── .gitattributes
├── .gitignore
├── .pre-commit-config.yaml
├── ADDING_TOOLS.md
├── AGENTS.md
├── build.gradle
├── CLAUDE.md
├── CONTRIBUTING.md
├── DATABASE.md
├── DeveloperGuide.md
├── FILE_SHARING.md
├── gradle.properties
├── gradlew
├── gradlew.bat
├── HowToUseOCR.md
├── launch4jConfig.xml
├── LICENSE
├── README.md
├── SECURITY.md
├── settings.gradle
├── SHARED_SIGNING.md
├── Taskfile.yml
├── test_globalsign.pdf
├── test_irs_signed.pdf
└── WINDOWS_SIGNING.md
```

## Code Digest

### `.devcontainer/git-init.sh`

```sh
#!/usr/bin/env bash

GIT_USER=$(git config --get user.name)
GIT_EMAIL=$(git config --get user.email)

# Exit if GIT_USER or GIT_EMAIL is empty
if [ -z "$GIT_USER" ] || [ -z "$GIT_EMAIL" ]; then
  echo "GIT_USER or GIT_EMAIL is not set. Exiting."
  exit 1
fi

git config --local user.name "$GIT_USER"
git config --local user.email "$GIT_EMAIL"

# This directory should contain custom Git hooks for the repository
# Set the path for Git hooks to /workspace/hooks
git config --local core.hooksPath '%(prefix)/workspace/hooks'
# Set the safe directory to the workspace path
git config --local --add safe.directory /workspace

```

### `.git-blame-ignore-revs`

```git-blame-ignore-revs
# Formatting
5f771b785130154ed47952635b7acef371ffe0ec
7fa5e130d99227c2202ebddfdd91348176ec0c7b
14d4fbb2a36195eedb034785e5a5ff6a47f268c6
ee8030c1c4148062cde15c49c67d04ef03930c55
fcd41924f5f261febfa9d9a92994671f3ebc97d6

# Normalize files
55d4fda01b2f39f5b7d7b4fda5214bd7ff0fd5dd

```

### `.gitattributes`

```gitattributes
* text=auto eol=lf

# Ignore all JavaScript files in a directory
app/core/src/main/resources/static/pdfjs/* linguist-vendored
app/core/src/main/resources/static/pdfjs/** linguist-vendored
app/core/src/main/resources/static/pdfjs-legacy/* linguist-vendored
app/core/src/main/resources/static/pdfjs-legacy/** linguist-vendored
app/core/src/main/resources/static/css/bootstrap-icons.css linguist-vendored
app/core/src/main/resources/static/css/bootstrap.min.css linguist-vendored
app/core/src/main/resources/static/css/fonts/* linguist-vendored

```

### `.github/config/dependency-review-config.yml`

```yml
allow-ghsas: GHSA-wrw7-89jp-8q8g

```

### `.github/config/repo_devs.json`

```json
{
  "label_changer": [
    "Frooodle",
    "Ludy87",
    "balazs-szucs"
  ],
  "repo_devs": [
    "Frooodle",
    "sf298",
    "Ludy87",
    "LaserKaspar",
    "sbplat",
    "reecebrowne",
    "DarioGii",
    "ConnorYoh",
    "EthanHealy01",
    "jbrunton96",
    "balazs-szucs"
  ]
}

```

### `.github/ISSUE_TEMPLATE/config.yml`

```yml
blank_issues_enabled: true
contact_links:
  - name: 💬 Discord Server
    url: https://discord.gg/HYmhKj45pU
    about: You can join our Discord server for real time discussion and support

```

### `.github/scripts/requirements_dev.in`

```in
pip
setuptools
WeasyPrint
pdf2image
pillow
unoserver
opencv-python-headless
pre-commit
brotli @ git+https://github.com/google/brotli.git@028fb5a23661f123017c060daa546b55cf4bde29

```

### `.github/scripts/requirements_pre_commit.in`

```in
pre-commit

```

### `.github/scripts/requirements_sync_readme.in`

```in
tomlkit
tomli-w

```

### `app/common/src/main/java/stirling/software/common/configuration/interfaces/ShowAdminInterface.java`

```java
package stirling.software.common.configuration.interfaces;

public interface ShowAdminInterface {
    default boolean getShowUpdateOnlyAdmins() {
        return true;
    }
}

```

### `app/common/src/main/java/stirling/software/common/model/api/converters/HTMLToPdfRequest.java`

```java
package stirling.software.common.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class HTMLToPdfRequest extends PDFFile {

    @Schema(
            description = "Zoom level for displaying the website. Default is '1'.",
            requiredMode = Schema.RequiredMode.REQUIRED,
            defaultValue = "1")
    private float zoom;
}

```

### `app/common/src/main/java/stirling/software/common/model/api/GeneralFile.java`

```java
package stirling.software.common.model.api;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class GeneralFile {

    @Schema(
            description = "The input file",
            requiredMode = Schema.RequiredMode.REQUIRED,
            format = "binary")
    private MultipartFile fileInput;
}

```

### `app/common/src/main/java/stirling/software/common/model/api/misc/HighContrastColorCombination.java`

```java
package stirling.software.common.model.api.misc;

public enum HighContrastColorCombination {
    WHITE_TEXT_ON_BLACK,
    BLACK_TEXT_ON_WHITE,
    YELLOW_TEXT_ON_BLACK,
    GREEN_TEXT_ON_BLACK,
}

```

### `app/common/src/main/java/stirling/software/common/model/api/misc/ReplaceAndInvert.java`

```java
package stirling.software.common.model.api.misc;

public enum ReplaceAndInvert {
    HIGH_CONTRAST_COLOR,
    CUSTOM_COLOR,
    FULL_INVERSION,
    COLOR_SPACE_CONVERSION,
}

```

### `app/common/src/main/java/stirling/software/common/model/api/security/UserSummaryDTO.java`

```java
package stirling.software.common.model.api.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSummaryDTO {
    private Long userId;
    private String username;
    private String displayName;
    private String teamName;
    private boolean enabled;
}

```

### `app/common/src/main/java/stirling/software/common/model/enumeration/UsernameAttribute.java`

```java
package stirling.software.common.model.enumeration;

import lombok.Getter;

@Getter
public enum UsernameAttribute {
    MAIL("mail"),
    EMAIL("email"),
    LOGIN("login"),
    PROFILE("profile"),
    NAME("name"),
    UID("uid"),
    USERNAME("username"),
    NICKNAME("nickname"),
    GIVEN_NAME("given_name"),
    MIDDLE_NAME("middle_name"),
    FAMILY_NAME("family_name"),
    PREFERRED_NAME("preferred_name"),
    PREFERRED_USERNAME("preferred_username");

    private final String name;

    UsernameAttribute(final String name) {
        this.name = name;
    }
}

```

### `app/common/src/main/java/stirling/software/common/model/exception/UnsupportedClaimException.java`

```java
package stirling.software.common.model.exception;

public class UnsupportedClaimException extends RuntimeException {
    public UnsupportedClaimException(String message) {
        super(message);
    }
}

```

### `app/common/src/main/java/stirling/software/common/model/exception/UnsupportedProviderException.java`

```java
package stirling.software.common.model.exception;

public class UnsupportedProviderException extends Exception {
    public UnsupportedProviderException(String message) {
        super(message);
    }
}

```

### `app/common/src/main/java/stirling/software/common/model/job/JobProgress.java`

```java
package stirling.software.common.model.job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobProgress {
    private String jobId;
    private String status;
    private int percentComplete;
    private String message;
}

```

### `app/common/src/main/java/stirling/software/common/model/job/JobResponse.java`

```java
package stirling.software.common.model.job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobResponse<T> {
    private boolean async;
    private String jobId;
    private T result;
}

```

### `app/common/src/main/java/stirling/software/common/model/job/ResultFile.java`

```java
package stirling.software.common.model.job;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Represents a single file result from a job execution */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResultFile {

    /** The file ID for accessing the file */
    private String fileId;

    /** The original file name */
    private String fileName;

    /** MIME type of the file */
    private String contentType;

    /** Size of the file in bytes */
    private long fileSize;
}

```

### `app/common/src/main/java/stirling/software/common/model/PdfMetadata.java`

```java
package stirling.software.common.model;

import java.time.ZonedDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PdfMetadata {
    private String author;
    private String producer;
    private String title;
    private String creator;
    private String subject;
    private String keywords;
    private ZonedDateTime creationDate;
    private ZonedDateTime modificationDate;
}

```

### `app/common/src/main/java/stirling/software/common/service/LicenseServiceInterface.java`

```java
package stirling.software.common.service;

/**
 * Interface for checking license status dynamically. Implementation provided by proprietary module
 * when available.
 */
public interface LicenseServiceInterface {

    /**
     * Get the license type as a string.
     *
     * @return "NORMAL", "SERVER", or "ENTERPRISE"
     */
    String getLicenseTypeName();

    /**
     * Check if running Pro or higher (SERVER or ENTERPRISE license).
     *
     * @return true if SERVER or ENTERPRISE license is active
     */
    boolean isRunningProOrHigher();

    /**
     * Check if running Enterprise edition.
     *
     * @return true if ENTERPRISE license is active
     */
    boolean isRunningEE();
}

```

### `app/common/src/main/java/stirling/software/common/service/LineArtConversionService.java`

```java
package stirling.software.common.service;

import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

public interface LineArtConversionService {
    PDImageXObject convertImageToLineArt(
            PDDocument doc, PDImageXObject originalImage, double threshold, int edgeLevel)
            throws IOException;
}

```

### `app/common/src/main/java/stirling/software/common/service/UserServiceInterface.java`

```java
package stirling.software.common.service;

public interface UserServiceInterface {
    String getApiKeyForUser(String username);

    String getCurrentUsername();

    String getCurrentUserApiKey();

    long getTotalUsersCount();

    boolean isCurrentUserAdmin();

    boolean isCurrentUserFirstLogin();
}

```

### `app/common/src/main/java/stirling/software/common/util/JobContext.java`

```java
package stirling.software.common.util;

/** Thread-local context for passing job ID across async boundaries */
public class JobContext {
    private static final ThreadLocal<String> CURRENT_JOB_ID = new ThreadLocal<>();

    public static void setJobId(String jobId) {
        CURRENT_JOB_ID.set(jobId);
    }

    public static String getJobId() {
        return CURRENT_JOB_ID.get();
    }

    public static void clear() {
        CURRENT_JOB_ID.remove();
    }
}

```

### `app/common/src/main/java/stirling/software/common/util/ValidationUtils.java`

```java
package stirling.software.common.util;

import java.util.Collection;

public class ValidationUtils {

    public static boolean isStringEmpty(String input) {
        return input == null || input.isBlank();
    }

    public static boolean isCollectionEmpty(Collection<String> input) {
        return input == null || input.isEmpty();
    }
}

```

### `app/common/src/test/java/stirling/software/common/configuration/interfaces/ShowAdminInterfaceTest.java`

```java
package stirling.software.common.configuration.interfaces;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ShowAdminInterfaceTest {

    // Create a simple implementation for testing
    static class TestImpl implements ShowAdminInterface {}

    @Test
    void getShowUpdateOnlyAdmins_returnsTrueByDefault() {
        ShowAdminInterface instance = new TestImpl();
        assertTrue(instance.getShowUpdateOnlyAdmins(), "Default should return true");
    }
}

```

### `app/common/src/test/resources/saml/dummy.txt`

```txt
ok

```

### `app/core/src/main/java/stirling/software/SPDF/config/LogbackPropertyLoader.java`

```java
package stirling.software.SPDF.config;

import stirling.software.common.configuration.InstallationPathConfig;

import ch.qos.logback.core.PropertyDefinerBase;

public class LogbackPropertyLoader extends PropertyDefinerBase {
    @Override
    public String getPropertyValue() {
        return InstallationPathConfig.getLogPath();
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/config/StartupApplicationListener.java`

```java
package stirling.software.SPDF.config;

import java.time.LocalDateTime;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class StartupApplicationListener implements ApplicationListener<ContextRefreshedEvent> {

    public static LocalDateTime startTime;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        startTime = LocalDateTime.now();
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/config/TelegramBotConfig.java`

```java
package stirling.software.SPDF.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

@Configuration
@ConditionalOnProperty(prefix = "telegram", name = "enabled", havingValue = "true")
public class TelegramBotConfig {

    @Bean
    public TelegramBotsApi telegramBotsApi() throws TelegramApiException {
        return new TelegramBotsApi(DefaultBotSession.class);
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/exception/CacheUnavailableException.java`

```java
package stirling.software.SPDF.exception;

public class CacheUnavailableException extends RuntimeException {

    public CacheUnavailableException(String message) {
        super(message);
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/ConvertCbrToPdfRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ConvertCbrToPdfRequest {

    @Schema(
            description = "The input CBR file to be converted to a PDF file",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private MultipartFile fileInput;

    @Schema(
            description = "Optimize the output PDF for ebook reading using Ghostscript",
            defaultValue = "false")
    private boolean optimizeForEbook;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/ConvertCbzToPdfRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ConvertCbzToPdfRequest {

    @Schema(
            description = "The input CBZ file to be converted to a PDF file",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private MultipartFile fileInput;

    @Schema(
            description = "Optimize the output PDF for ebook reading using Ghostscript",
            defaultValue = "false")
    private boolean optimizeForEbook;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/ConvertPdfToCbrRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ConvertPdfToCbrRequest {

    @Schema(
            description = "The input PDF file to be converted to a CBR file",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private MultipartFile fileInput;

    @Schema(
            description = "The DPI (Dots Per Inch) for rendering PDF pages as images",
            example = "150",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private int dpi = 150;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/ConvertPdfToCbzRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ConvertPdfToCbzRequest {

    @Schema(
            description = "The input PDF file to be converted to a CBZ file",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private MultipartFile fileInput;

    @Schema(
            description = "The DPI (Dots Per Inch) for rendering PDF pages as images",
            example = "150",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private int dpi = 150;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/PdfToBookRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PdfToBookRequest extends PDFFile {

    @Schema(
            description = "The output Ebook format",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {
                "epub", "mobi", "azw3", "docx", "rtf", "txt", "html", "lit", "fb2", "pdb", "lrf"
            })
    private String outputFormat;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/PdfToPresentationRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PdfToPresentationRequest extends PDFFile {

    @Schema(
            description = "The output Presentation format",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {"ppt", "pptx", "odp"})
    private String outputFormat;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/PdfToTextOrRTFRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PdfToTextOrRTFRequest extends PDFFile {

    @Schema(
            description = "The output Text or RTF format",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {"rtf", "txt"})
    private String outputFormat;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/PdfToWordRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PdfToWordRequest extends PDFFile {

    @Schema(
            description = "The output Word document format",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {"doc", "docx", "odt"})
    private String outputFormat;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/converters/UrlToPdfRequest.java`

```java
package stirling.software.SPDF.model.api.converters;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class UrlToPdfRequest {

    @Schema(
            description = "The input URL to be converted to a PDF file",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String urlInput;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/filter/ContainsTextRequest.java`

```java
package stirling.software.SPDF.model.api.filter;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.SPDF.model.api.PDFWithPageNums;

@Data
@EqualsAndHashCode(callSuper = true)
public class ContainsTextRequest extends PDFWithPageNums {

    @Schema(
            description = "The text to check for",
            defaultValue = "text",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String text;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/filter/FileSizeRequest.java`

```java
package stirling.software.SPDF.model.api.filter;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.SPDF.model.api.PDFComparison;

@Data
@EqualsAndHashCode(callSuper = true)
public class FileSizeRequest extends PDFComparison {

    @Schema(
            description = "Size of the file in bytes",
            requiredMode = Schema.RequiredMode.REQUIRED,
            defaultValue = "0")
    private long fileSize;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/filter/PageRotationRequest.java`

```java
package stirling.software.SPDF.model.api.filter;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.SPDF.model.api.PDFComparison;

@Data
@EqualsAndHashCode(callSuper = true)
public class PageRotationRequest extends PDFComparison {

    @Schema(
            description = "Rotation in degrees",
            requiredMode = Schema.RequiredMode.REQUIRED,
            defaultValue = "0")
    private int rotation;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/filter/PageSizeRequest.java`

```java
package stirling.software.SPDF.model.api.filter;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.SPDF.model.api.PDFComparison;

@Data
@EqualsAndHashCode(callSuper = true)
public class PageSizeRequest extends PDFComparison {

    @Schema(
            description = "Standard Page Size",
            allowableValues = {"A0", "A1", "A2", "A3", "A4", "A5", "A6", "LETTER", "LEGAL"},
            defaultValue = "A4",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String standardPageSize;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/general/RotatePDFRequest.java`

```java
package stirling.software.SPDF.model.api.general;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class RotatePDFRequest extends PDFFile {

    @Schema(
            description =
                    "The clockwise angle by which to rotate the PDF file. Must be a multiple of"
                            + " 90.",
            type = "integer",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {"0", "90", "180", "270"})
    private Integer angle = 90;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/general/ScalePagesRequest.java`

```java
package stirling.software.SPDF.model.api.general;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.SPDF.model.api.PDFWithPageSize;

@Data
@EqualsAndHashCode(callSuper = true)
public class ScalePagesRequest extends PDFWithPageSize {

    @Schema(
            minimum = "0",
            defaultValue = "1",
            requiredMode = Schema.RequiredMode.REQUIRED,
            description =
                    "The scale of the content on the pages of the output PDF. Acceptable values are"
                            + " floats.")
    private float scaleFactor;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/ImageFile.java`

```java
package stirling.software.SPDF.model.api;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ImageFile {
    @Schema(
            description = "The input image file",
            requiredMode = Schema.RequiredMode.REQUIRED,
            format = "binary")
    private MultipartFile fileInput;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/AttachmentInfo.java`

```java
package stirling.software.SPDF.model.api.misc;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttachmentInfo {
    private String filename;
    private Long size;
    private String contentType;
    private String description;
    private String creationDate;
    private String modificationDate;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/AutoSplitPdfRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class AutoSplitPdfRequest extends PDFFile {

    @Schema(
            description =
                    "Flag indicating if the duplex mode is active, where the page after the divider also gets removed.",
            requiredMode = Schema.RequiredMode.NOT_REQUIRED,
            defaultValue = "false")
    private Boolean duplexMode;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/DeleteAttachmentRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class DeleteAttachmentRequest extends PDFFile {

    @Schema(
            description = "The name of the attachment to delete",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String attachmentName;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/ExtractAttachmentsRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class ExtractAttachmentsRequest extends PDFFile {}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/ExtractHeaderRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class ExtractHeaderRequest extends PDFFile {

    @Schema(
            description =
                    "Flag indicating whether to use the first text as a fallback if no suitable title is found. Defaults to false.",
            requiredMode = Schema.RequiredMode.NOT_REQUIRED,
            defaultValue = "false")
    private Boolean useFirstTextAsFallback;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/ListAttachmentsRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class ListAttachmentsRequest extends PDFFile {}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/PrintFileRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PrintFileRequest extends PDFFile {

    @Schema(
            description = "Name of printer to match against",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String printerName;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/misc/RenameAttachmentRequest.java`

```java
package stirling.software.SPDF.model.api.misc;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class RenameAttachmentRequest extends PDFFile {

    @Schema(
            description = "The current name of the attachment to rename",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String attachmentName;

    @Schema(
            description = "The new name for the attachment",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String newName;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/MultiplePDFFiles.java`

```java
package stirling.software.SPDF.model.api;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class MultiplePDFFiles {
    @Schema(description = "The input PDF files", requiredMode = Schema.RequiredMode.REQUIRED)
    private MultipartFile[] fileInput;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/PDFComparison.java`

```java
package stirling.software.SPDF.model.api;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFComparison extends PDFFile {

    @Schema(
            description = "The comparison type, accepts Greater, Equal, Less than",
            allowableValues = {"Greater", "Equal", "Less"},
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String comparator;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/PDFComparisonAndCount.java`

```java
package stirling.software.SPDF.model.api;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFComparisonAndCount extends PDFComparison {
    @Schema(description = "Count", requiredMode = Schema.RequiredMode.REQUIRED, defaultValue = "0")
    private int pageCount;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/PDFExtractImagesRequest.java`

```java
package stirling.software.SPDF.model.api;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFExtractImagesRequest extends PDFWithImageFormatRequest {

    // @Schema(
    //         description =
    //                 "Boolean to enable/disable the saving of duplicate images, true to enable"
    //                         + " duplicates",
    //         defaultValue = "false")
    // private Boolean allowDuplicates;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/PDFWithImageFormatRequest.java`

```java
package stirling.software.SPDF.model.api;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFWithImageFormatRequest extends PDFFile {

    @Schema(
            description = "The output image format e.g., 'png', 'jpeg', or 'gif'",
            allowableValues = {"png", "jpeg", "gif"},
            requiredMode = Schema.RequiredMode.REQUIRED,
            defaultValue = "png")
    private String format;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/PDFWithPageSize.java`

```java
package stirling.software.SPDF.model.api;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFWithPageSize extends PDFFile {

    @Schema(
            description =
                    "The scale of pages in the output PDF. Acceptable values are A0-A6, LETTER,"
                            + " LEGAL, KEEP.",
            requiredMode = Schema.RequiredMode.REQUIRED,
            allowableValues = {"A0", "A1", "A2", "A3", "A4", "A5", "A6", "LETTER", "LEGAL", "KEEP"})
    private String pageSize;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/security/PDFPasswordRequest.java`

```java
package stirling.software.SPDF.model.api.security;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFPasswordRequest extends PDFFile {

    @Schema(
            description = "The password of the PDF file",
            format = "password",
            requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private String password;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/security/PDFVerificationRequest.java`

```java
package stirling.software.SPDF.model.api.security;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class PDFVerificationRequest extends PDFFile {}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/security/SignatureValidationRequest.java`

```java
package stirling.software.SPDF.model.api.security;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.common.model.api.PDFFile;

@Data
@EqualsAndHashCode(callSuper = true)
public class SignatureValidationRequest extends PDFFile {

    @Schema(
            description = "(Optional) file to compare PDF cert signatures against x.509 format",
            requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private MultipartFile certFile;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/signature/SavedSignatureRequest.java`

```java
package stirling.software.SPDF.model.api.signature;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SavedSignatureRequest {
    private String id;
    private String label;
    private String type; // "canvas", "image", "text"
    private String scope; // "personal", "shared"
    private String dataUrl; // For canvas and image types
    private String signerName; // For text type
    private String fontFamily; // For text type
    private Integer fontSize; // For text type
    private String textColor; // For text type
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/api/signature/SavedSignatureResponse.java`

```java
package stirling.software.SPDF.model.api.signature;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SavedSignatureResponse {
    private String id;
    private String label;
    private String type; // "canvas", "image", "text"
    private String scope; // "personal", "shared"
    private String dataUrl; // For canvas and image types (or URL to fetch image)
    private String signerName; // For text type
    private String fontFamily; // For text type
    private Integer fontSize; // For text type
    private String textColor; // For text type
    private Long createdAt;
    private Long updatedAt;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/Dependency.java`

```java
package stirling.software.SPDF.model;

import lombok.Data;

@Data
public class Dependency {
    private String moduleName;
    private String moduleUrl;
    private String moduleVersion;
    private String moduleLicense;
    private String moduleLicenseUrl;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/json/PdfJsonFontCidSystemInfo.java`

```java
package stirling.software.SPDF.model.json;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PdfJsonFontCidSystemInfo {

    private String registry;
    private String ordering;
    private Integer supplement;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/json/PdfJsonFontConversionStatus.java`

```java
package stirling.software.SPDF.model.json;

public enum PdfJsonFontConversionStatus {
    SUCCESS,
    WARNING,
    FAILURE,
    SKIPPED,
    UNSUPPORTED
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/json/PdfJsonMetadata.java`

```java
package stirling.software.SPDF.model.json;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PdfJsonMetadata {

    private String title;
    private String author;
    private String subject;
    private String keywords;
    private String creator;
    private String producer;
    private String creationDate;
    private String modificationDate;
    private String trapped;
    private Integer numberOfPages;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/json/PdfJsonPageDimension.java`

```java
package stirling.software.SPDF.model.json;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class PdfJsonPageDimension {
    private int pageNumber;
    private float width;
    private float height;
    private int rotation;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/json/PdfJsonTextColor.java`

```java
package stirling.software.SPDF.model.json;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PdfJsonTextColor {

    private String colorSpace;
    private float[] components;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/PDFText.java`

```java
package stirling.software.SPDF.model;

import lombok.Data;

@Data
public class PDFText {
    private final int pageIndex;
    private final float x1;
    private final float y1;
    private final float x2;
    private final float y2;
    private final String text;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/PipelineConfig.java`

```java
package stirling.software.SPDF.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PipelineConfig {
    private String name;

    @JsonProperty("pipeline")
    private List<PipelineOperation> operations;

    private String outputDir;

    @JsonProperty("outputFileName")
    private String outputPattern;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/PipelineOperation.java`

```java
package stirling.software.SPDF.model;

import java.util.Map;

import lombok.Data;

@Data
public class PipelineOperation {
    private String operation;
    private Map<String, Object> parameters;
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/SignatureFile.java`

```java
package stirling.software.SPDF.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignatureFile {
    private String fileName;
    private String category; // "Personal" or "Shared"
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/SortTypes.java`

```java
package stirling.software.SPDF.model;

public enum SortTypes {
    CUSTOM,
    REVERSE_ORDER,
    DUPLEX_SORT,
    BOOKLET_SORT,
    SIDE_STITCH_BOOKLET_SORT,
    ODD_EVEN_SPLIT,
    REMOVE_FIRST,
    REMOVE_LAST,
    REMOVE_FIRST_AND_LAST,
    DUPLICATE
}

```

### `app/core/src/main/java/stirling/software/SPDF/model/SplitTypes.java`

```java
package stirling.software.SPDF.model;

public enum SplitTypes {
    CUSTOM,
    SPLIT_ALL_EXCEPT_FIRST_AND_LAST,
    SPLIT_ALL_EXCEPT_FIRST,
    SPLIT_ALL_EXCEPT_LAST,
    SPLIT_ALL
}

```

### `app/core/src/main/java/stirling/software/SPDF/pdf/FlexibleCSVWriter.java`

```java
package stirling.software.SPDF.pdf;

import org.apache.commons.csv.CSVFormat;

import technology.tabula.writers.CSVWriter;

public class FlexibleCSVWriter extends CSVWriter {

    public FlexibleCSVWriter() {
        super();
    }

    public FlexibleCSVWriter(CSVFormat csvFormat) {
        super(csvFormat);
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/service/pdfjson/type3/library/Type3FontLibraryMatch.java`

```java
package stirling.software.SPDF.service.pdfjson.type3.library;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Type3FontLibraryMatch {
    Type3FontLibraryEntry entry;
    String matchType;
    String signature;
}

```

### `app/core/src/main/java/stirling/software/SPDF/service/pdfjson/type3/library/Type3FontLibraryPayload.java`

```java
package stirling.software.SPDF.service.pdfjson.type3.library;

import lombok.Value;

@Value
public class Type3FontLibraryPayload {
    String base64;
    String format;

    public boolean hasPayload() {
        return base64 != null && !base64.isBlank();
    }
}

```

### `app/core/src/main/java/stirling/software/SPDF/service/pdfjson/type3/model/Type3GlyphOutline.java`

```java
package stirling.software.SPDF.service.pdfjson.type3.model;

import java.awt.geom.GeneralPath;

import org.apache.pdfbox.pdmodel.common.PDRectangle;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Type3GlyphOutline {
    String glyphName;
    int charCode;
    float advanceWidth;
    PDRectangle boundingBox;
    GeneralPath outline;
    boolean hasStroke;
    boolean hasFill;
    boolean hasImages;
    boolean hasText;
    boolean hasShading;
    String warnings;
    Integer unicode;
}

```

### `app/core/src/main/java/stirling/software/SPDF/service/pdfjson/type3/Type3ConversionRequest.java`

```java
package stirling.software.SPDF.service.pdfjson.type3;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.font.PDType3Font;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Type3ConversionRequest {
    private final PDDocument document;
    private final PDType3Font font;
    private final String fontId;
    private final int pageNumber;
    private final String fontUid;
}

```

### `app/core/src/main/java/stirling/software/SPDF/service/telegram/FeedbackEnum.java`

```java
package stirling.software.SPDF.service.telegram;

/**
 * Enumeration representing different feedback types for Telegram service.
 *
 * @since 2.2.x
 */
public enum FeedbackEnum {
    /** Indicates that the provided document is not valid. */
    NO_VALID_DOCUMENT,

    /** Represents a generic error message. */
    ERROR_MESSAGE,

    /** Indicates that an error occurred during processing. */
    ERROR_PROCESSING,

    /** Indicates that processing is ongoing. */
    PROCESSING
}

```

### `app/core/src/main/resources/banner.txt`

```txt
 ____ _____ ___ ____  _     ___ _   _  ____       ____  ____  _____
/ ___|_   _|_ _|  _ \| |   |_ _| \ | |/ ___|     |  _ \|  _ \|  ___|
\___ \ | |  | || |_) | |    | ||  \| | |  _ _____| |_) | | | | |_
 ___) || |  | ||  _ <| |___ | || |\  | |_| |_____|  __/| |_| |  _|
|____/ |_| |___|_| \_\_____|___|_| \_|\____|     |_|   |____/|_|
Powered by Spring Boot ${spring-boot.version}
```

### `app/core/src/main/resources/messages.properties`

```properties

```

### `app/core/src/main/resources/static/browserconfig.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#00aba9</TileColor>
        </tile>
    </msapplication>
</browserconfig>

```

### `app/core/src/main/resources/static/css/account.css`

```css
.buttons-container {
  margin-top: 20px;
  text-align: center;
}

```

### `app/core/src/main/resources/static/css/error.css`

```css
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 3fr));
  gap: 25px 30px;
}

.feature-card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.feature-card .card-text {
  flex: 1;
}

#button-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#home-button,
#github-button,
#discord-button {
  display: inline-block;
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}
```

### `app/core/src/main/resources/static/css/licenses.css`

```css
td a {
  text-decoration: none;
}

td a:hover,
td a:focus {
  text-decoration: underline;
  /* Adds underline on hover/focus for clarity */
}

```

### `app/core/src/main/resources/static/css/merge.css`

```css
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filename {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 10px;
}

.arrows {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}
.arrows .btn {
  margin: 0 3px;
}

.move-up span,
.move-down span {
  font-weight: bold;
  font-size: 1.2em;
}

```

### `app/core/src/main/resources/static/css/pipeline.css`

```css
.btn-margin {
  margin-right: 2px;
}

.bordered-box {
  border: 1px solid #ddd;
  padding: 2rem;
  margin: 2rem;
  width: 70%;
}

.center-element {
  width: 100%;
  text-align: center;
  margin: auto;
  margin-top: 2rem;
}

.element-margin {
  margin: 1rem 0;
  /* Adjust this value to increase/decrease the margin as needed */
}

#pipelineList {
  margin-bottom: 2rem;
}
```

### `app/core/src/main/resources/static/css/split-pdf-by-sections.css`

```css
.pdf-visual-aid {
  width: 150px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  border: 1px solid black; /* Represents the PDF page */
  position: relative;
}
.line {
  position: absolute;
  background-color: red; /* Line color */
}
#pageToSplitSection {
  display: none;
}

```

### `app/core/src/main/resources/static/css/stamp.css`

```css
.a4container {
  position: relative;
  width: 50%;
  aspect-ratio: 0.707;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background-color: white;
}

.pageNumber {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: #333;
  cursor: pointer;
  background-color: #ccc;
  width: 15%;
  height: 15%;
  transform: translate(-50%, -50%);
}

.pageNumber:hover {
  background-color: #eee;
}

#myForm {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.selectedPosition {
  background-color: #0a0;
}

.selectedPosition.selectedHovered {
  background-color: #006600;
}

```

### `app/core/src/main/resources/static/css/tab-container.css`

```css
.tab-group {
}

.tab-container {
  display: none;
}
.tab-container.active {
  display: block;
  border: 1px solid rgba(var(--base-font-color), 0.25);
  padding: 15px;
}
.tab-buttons > button {
  margin-bottom: -1px;
  background: 0 0;
  border: 1px solid transparent;
  color: rgb(var(--base-font-color));

  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.tab-buttons > button.active {
  background-color: rgb(var(--body-background-color));
  border-color: rgba(var(--base-font-color), 0.25) rgba(var(--base-font-color), 0.25) rgb(var(--body-background-color));
}

```

### `app/core/src/main/resources/static/manifest.json`

```json
{
  "short_name": "Stirling PDF",
  "name": "Stirling PDF",
  "icons": [
    {
      "src": "modern-logo/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "modern-logo/logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "modern-logo/logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### `app/core/src/main/resources/static/pdfjs-legacy/cmaps/CNS2-V.bcmap`

```bcmap
�RCopyright 1990-2009 Adobe Systems Incorporated.
All rights reserved.
See ./LICENSE�CNS2-H
```

### `app/core/src/main/resources/static/pdfjs-legacy/cmaps/ETenms-B5-H.bcmap`

```bcmap
�RCopyright 1990-2009 Adobe Systems Incorporated.
All rights reserved.
See ./LICENSE�	ETen-B5-H` ^
```

### `app/core/src/main/resources/static/pdfjs-legacy/cmaps/GB-H.bcmap`

```bcmap
�RCopyright 1990-2009 Adobe Systems Incorporated.
All rights reserved.
See ./LICENSE!!��]aX!!]`�21�>	�p�z�$]��"R�d�-U�7�*�4�%�+ �Z �{�/�%�<�9K�b�1]�.�"��`]�,�"]�
�"]�h�"]�F�"]�$�"]��"]�`�"]�>�"]��"]�z�"]�X�"]�6�"]��"]�r�"]�P�"]�.�"]��"]�j�"]�H�"]�&�"]��"]�b�"]�@�"]��"]�|�"]�Z�"]�8�"]��"]�t�"]�R�"]�0�"]��"]�l�"]�J�"]�(�"]��"]�d�"]�B�"]� �"X�~�']�W�"]�5�"]��"]�q�"]�O�"]�-�"]��"]�i�"]�G�"]�%�"]��"]�a�"]�?�"]��"]�{�"]�Y�"]�7�"]��"]�s�"]�Q�"]�/�"]��"]�k�"]�I�"]�'�"]��"]�c�"]�A�"]��"]�}�"]�[�"]�9
```

### `app/core/src/main/resources/static/site.webmanifest`

```webmanifest
{
    "name": "Stirling-PDF",
    "short_name": "Stirling-PDF",
    "icons": [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}

```

### `app/core/src/test/java/stirling/software/SPDF/service/telegram/FeedbackEnumTest.java`

```java
package stirling.software.SPDF.service.telegram;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class FeedbackEnumTest {

    @Test
    void allExpectedValuesExist() {
        FeedbackEnum[] values = FeedbackEnum.values();
        assertEquals(4, values.length);
        assertNotNull(FeedbackEnum.valueOf("NO_VALID_DOCUMENT"));
        assertNotNull(FeedbackEnum.valueOf("ERROR_MESSAGE"));
        assertNotNull(FeedbackEnum.valueOf("ERROR_PROCESSING"));
        assertNotNull(FeedbackEnum.valueOf("PROCESSING"));
    }

    @Test
    void valueOfThrowsForInvalidName() {
        assertThrows(IllegalArgumentException.class, () -> FeedbackEnum.valueOf("UNKNOWN"));
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/config/AuditJpaConfig.java`

```java
package stirling.software.proprietary.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/** Configuration for audit system transaction management. */
@Configuration
@EnableTransactionManagement
public class AuditJpaConfig {
    // Scheduling is enabled on SPDFApplication — no duplicate @EnableScheduling needed.
    // JPA repositories are now managed by DatabaseConfig to avoid conflicts.
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/AiConversationMessage.java`

```java
package stirling.software.proprietary.model.api.ai;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
@Schema(description = "A prior message in the chat conversation")
public class AiConversationMessage {

    @NotNull
    @NotBlank
    @Schema(description = "The role of the message sender", example = "user")
    private String role;

    @NotNull
    @Schema(description = "The content of the message")
    private String content;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/AiWorkflowFileInput.java`

```java
package stirling.software.proprietary.model.api.ai;

import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
@Schema(description = "A single PDF file input")
public class AiWorkflowFileInput {

    @NotNull
    @Schema(
            description = "The input PDF file",
            contentMediaType = MediaType.APPLICATION_PDF_VALUE,
            format = "binary")
    private MultipartFile fileInput;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/AiWorkflowFileRequest.java`

```java
package stirling.software.proprietary.model.api.ai;

import java.util.ArrayList;
import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;

@Data
@Schema(description = "Per-file content extraction request from the AI engine")
public class AiWorkflowFileRequest {

    @Schema(description = "Original filename of the requested file", example = "contract.pdf")
    private String fileName;

    @Schema(description = "Specific 1-based page numbers to extract from this file")
    private List<Integer> pageNumbers = new ArrayList<>();

    @Schema(description = "Content types to extract from this file")
    private List<AiPdfContentType> contentTypes = new ArrayList<>();
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/AiWorkflowTextSelection.java`

```java
package stirling.software.proprietary.model.api.ai;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;

@Data
@Schema(description = "Page-scoped extracted text selection")
public class AiWorkflowTextSelection {

    @Schema(description = "1-based page number", example = "2")
    private Integer pageNumber;

    @Schema(description = "Extracted text or evidence snippet")
    private String text;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/AuditSeverity.java`

```java
package stirling.software.proprietary.model.api.ai;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Severity of a mathematical discrepancy. Mirrors the Python {@code Severity} enum in {@code
 * contracts/ledger.py}.
 */
public enum AuditSeverity {
    ERROR,
    WARNING;

    @JsonValue
    public String toJson() {
        return name().toLowerCase();
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/DiscrepancyKind.java`

```java
package stirling.software.proprietary.model.api.ai;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Category of a mathematical discrepancy found by the auditor. Mirrors the Python {@code
 * DiscrepancyKind} enum in {@code contracts/ledger.py}.
 */
public enum DiscrepancyKind {
    TALLY,
    ARITHMETIC,
    CONSISTENCY,
    STATEMENT;

    @JsonValue
    public String toJson() {
        return name().toLowerCase();
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/ai/FolioType.java`

```java
package stirling.software.proprietary.model.api.ai;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Java's classification of a single PDF page after a cheap PDFBox character-count scan. Mirrors the
 * Python {@code FolioType} enum in {@code ledger/models.py}.
 */
public enum FolioType {
    /** Selectable text layer is present — PDFBox can extract text directly. */
    TEXT,
    /** Image-only page — OCRmyPDF is required before any text is available. */
    IMAGE,
    /** Partial text layer plus embedded images — both PDFBox and OCRmyPDF may be useful. */
    MIXED;

    @JsonValue
    public String toJson() {
        return name().toLowerCase();
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/audit/AuditDataRequest.java`

```java
package stirling.software.proprietary.model.api.audit;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

import stirling.software.proprietary.security.config.EnterpriseEndpoint;

/** Request object used for querying audit events. */
@Data
@EnterpriseEndpoint
@EqualsAndHashCode(callSuper = true)
public class AuditDataRequest extends AuditExportRequest {

    @Schema(description = "Page number for pagination", example = "0", defaultValue = "0")
    private int page = 0;

    @Schema(description = "Page size for pagination", example = "30", defaultValue = "30")
    private int size = 30;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/signature/SavedSignatureRequest.java`

```java
package stirling.software.proprietary.model.api.signature;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SavedSignatureRequest {
    private String id;
    private String label;
    private String type; // "canvas", "image", "text"
    private String scope; // "personal", "shared"
    private String dataUrl; // For canvas and image types
    private String signerName; // For text type
    private String fontFamily; // For text type
    private Integer fontSize; // For text type
    private String textColor; // For text type
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/api/signature/SavedSignatureResponse.java`

```java
package stirling.software.proprietary.model.api.signature;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SavedSignatureResponse {
    private String id;
    private String label;
    private String type; // "canvas", "image", "text"
    private String scope; // "personal", "shared"
    private String dataUrl; // For canvas and image types (or URL to fetch image)
    private String signerName; // For text type
    private String fontFamily; // For text type
    private Integer fontSize; // For text type
    private String textColor; // For text type
    private Long createdAt;
    private Long updatedAt;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/model/dto/TeamWithUserCountDTO.java`

```java
package stirling.software.proprietary.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TeamWithUserCountDTO {
    private Long id;
    private String name;
    private Long userCount;

    // Constructor for JPQL projection
    public TeamWithUserCountDTO(Long id, String name, Long userCount) {
        this.id = id;
        this.name = name;
        this.userCount = userCount;
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/pdf/FlexibleCSVWriter.java`

```java
package stirling.software.proprietary.pdf;

import org.apache.commons.csv.CSVFormat;

import technology.tabula.writers.CSVWriter;

/** Exposes Tabula's protected {@link CSVWriter#CSVWriter(CSVFormat)} constructor. */
public class FlexibleCSVWriter extends CSVWriter {

    public FlexibleCSVWriter() {
        super();
    }

    public FlexibleCSVWriter(CSVFormat csvFormat) {
        super(csvFormat);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/config/EnterpriseEndpoint.java`

```java
package stirling.software.proprietary.security.config;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/** Annotation to mark endpoints that require an Enterprise license. */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface EnterpriseEndpoint {}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/config/PremiumEndpoint.java`

```java
package stirling.software.proprietary.security.config;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/** Annotation to mark endpoints that require a Pro or higher license. */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface PremiumEndpoint {}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/database/DatabaseNotificationServiceInterface.java`

```java
package stirling.software.proprietary.security.database;

public interface DatabaseNotificationServiceInterface {
    void notifyBackupsSuccess(String subject, String message);

    void notifyBackupsFailure(String subject, String message);

    void notifyImportsSuccess(String subject, String message);

    void notifyImportsFailure(String subject, String message);
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/database/repository/AuthorityRepository.java`

```java
package stirling.software.proprietary.security.database.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import stirling.software.proprietary.security.model.Authority;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    // Set<Authority> findByUsername(String username);
    Set<Authority> findByUser_Username(String username);

    Authority findByUserId(long user_id);
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/database/repository/PersistentLoginRepository.java`

```java
package stirling.software.proprietary.security.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import stirling.software.proprietary.security.model.PersistentLogin;

@Repository
public interface PersistentLoginRepository extends JpaRepository<PersistentLogin, String> {
    void deleteByUsername(String username);
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/admin/SettingValueResponse.java`

```java
package stirling.software.proprietary.security.model.api.admin;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Response containing a setting key and its current value")
public class SettingValueResponse {

    @Schema(
            description = "The setting key in dot notation (e.g., 'system.enableAnalytics')",
            example = "system.enableAnalytics")
    private String key;

    @Schema(description = "The current value of the setting", example = "true")
    private Object value;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/admin/UpdateSettingValueRequest.java`

```java
package stirling.software.proprietary.security.model.api.admin;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
@Schema(description = "Request to update a single setting value")
public class UpdateSettingValueRequest {

    @NotNull
    @Schema(description = "The new value for the setting", example = "false")
    private Object value;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/MfaCodeRequest.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;

@Data
public class MfaCodeRequest {

    @Schema(description = "6-digit authentication code from your authenticator app")
    private String code;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/UpdateUserDetails.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UpdateUserDetails extends UpdateUserUsername {

    @Schema(
            description = "new password for user",
            format = "password",
            requiredMode = Schema.RequiredMode.REQUIRED)
    private String newPassword;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/UpdateUserUsername.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UpdateUserUsername extends UsernameAndPass {

    @Schema(description = "new username for user")
    private String newUsername;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/Username.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Username {

    @Schema(description = "username of user", requiredMode = Schema.RequiredMode.REQUIRED)
    private String username;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/UsernameAndPass.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UsernameAndPass extends Username {

    @Schema(description = "password of user", format = "password")
    private String password;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/api/user/UsernameAndPassMfa.java`

```java
package stirling.software.proprietary.security.model.api.user;

import io.swagger.v3.oas.annotations.media.Schema;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UsernameAndPassMfa extends UsernameAndPass {

    @Schema(description = "6-digit authentication code from authenticator app", example = "123456")
    private String mfaCode;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/AuthenticationType.java`

```java
package stirling.software.proprietary.security.model;

public enum AuthenticationType {
    WEB,
    @Deprecated(since = "1.0.2")
    SSO,
    OAUTH2,
    SAML2
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/exception/AuthenticationFailureException.java`

```java
package stirling.software.proprietary.security.model.exception;

import org.springframework.security.core.AuthenticationException;

public class AuthenticationFailureException extends AuthenticationException {
    public AuthenticationFailureException(String message) {
        super(message);
    }

    public AuthenticationFailureException(String message, Throwable cause) {
        super(message, cause);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/exception/BackupNotFoundException.java`

```java
package stirling.software.proprietary.security.model.exception;

public class BackupNotFoundException extends RuntimeException {
    public BackupNotFoundException(String message) {
        super(message);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/exception/NoProviderFoundException.java`

```java
package stirling.software.proprietary.security.model.exception;

public class NoProviderFoundException extends Exception {
    public NoProviderFoundException(String message) {
        super(message);
    }

    public NoProviderFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/PersistentLogin.java`

```java
package stirling.software.proprietary.security.model;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "persistent_logins")
@Data
public class PersistentLogin {

    @Id
    @Column(name = "series")
    private String series;

    @Column(name = "username", length = 64, nullable = false)
    private String username;

    @Column(name = "token", length = 64, nullable = false)
    private String token;

    @Column(name = "last_used", nullable = false)
    private Instant lastUsed;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/model/SessionEntity.java`

```java
package stirling.software.proprietary.security.model;

import java.io.Serializable;
import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "sessions")
public class SessionEntity implements Serializable {
    @Id private String sessionId;

    private String principalName;

    private Instant lastRequest;

    private boolean expired;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/RateLimitResetScheduler.java`

```java
package stirling.software.proprietary.security;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

import stirling.software.proprietary.security.filter.IPRateLimitingFilter;

@Component
@RequiredArgsConstructor
public class RateLimitResetScheduler {

    private final IPRateLimitingFilter rateLimitingFilter;

    @Scheduled(cron = "${security.rate-limit.reset-schedule:0 0 0 * * MON}")
    public void resetRateLimit() {
        rateLimitingFilter.resetRequestCounts();
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/repository/UserLicenseSettingsRepository.java`

```java
package stirling.software.proprietary.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import stirling.software.proprietary.model.UserLicenseSettings;

@Repository
public interface UserLicenseSettingsRepository extends JpaRepository<UserLicenseSettings, Long> {

    /**
     * Finds the singleton UserLicenseSettings record.
     *
     * @return Optional containing the settings if they exist
     */
    default Optional<UserLicenseSettings> findSettings() {
        return findById(UserLicenseSettings.SINGLETON_ID);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/service/DatabaseServiceInterface.java`

```java
package stirling.software.proprietary.security.service;

import java.sql.SQLException;
import java.util.List;

import org.apache.commons.lang3.tuple.Pair;

import stirling.software.common.model.FileInfo;
import stirling.software.common.model.exception.UnsupportedProviderException;

public interface DatabaseServiceInterface {
    void exportDatabase() throws SQLException, UnsupportedProviderException;

    void importDatabase();

    boolean hasBackup();

    List<FileInfo> getBackupList();

    List<Pair<FileInfo, Boolean>> deleteAllBackups();

    List<Pair<FileInfo, Boolean>> deleteLastBackup();
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/security/session/SessionRegistryConfig.java`

```java
package stirling.software.proprietary.security.session;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.session.SessionRegistryImpl;

import stirling.software.proprietary.security.database.repository.SessionRepository;

@Configuration
public class SessionRegistryConfig {

    @Bean
    public SessionRegistryImpl sessionRegistry() {
        return new SessionRegistryImpl();
    }

    @Bean
    public SessionPersistentRegistry sessionPersistentRegistry(
            SessionRepository sessionRepository) {
        return new SessionPersistentRegistry(sessionRepository);
    }
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/CreateShareLinkRequest.java`

```java
package stirling.software.proprietary.storage.model.api;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CreateShareLinkRequest {
    private String accessRole;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/SharedUserResponse.java`

```java
package stirling.software.proprietary.storage.model.api;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SharedUserResponse {
    private final String username;
    private final String accessRole;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/ShareLinkAccessResponse.java`

```java
package stirling.software.proprietary.storage.model.api;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ShareLinkAccessResponse {
    private final String username;
    private final String accessType;
    private final LocalDateTime accessedAt;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/ShareLinkMetadataResponse.java`

```java
package stirling.software.proprietary.storage.model.api;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ShareLinkMetadataResponse {
    private final String shareToken;
    private final Long fileId;
    private final String fileName;
    private final String owner;
    private final boolean ownedByCurrentUser;
    private final String accessRole;
    private final LocalDateTime createdAt;
    private final LocalDateTime expiresAt;
    private final LocalDateTime lastAccessedAt;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/ShareLinkResponse.java`

```java
package stirling.software.proprietary.storage.model.api;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ShareLinkResponse {
    private final String token;
    private final String accessRole;
    private final LocalDateTime createdAt;
    private final LocalDateTime expiresAt;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/api/ShareWithUserRequest.java`

```java
package stirling.software.proprietary.storage.model.api;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ShareWithUserRequest {
    private String username;
    private String accessRole;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/FilePurpose.java`

```java
package stirling.software.proprietary.storage.model;

/**
 * Defines the purpose classification for stored files. Used to categorize files based on their role
 * in the system.
 */
public enum FilePurpose {
    /** Regular file sharing - generic uploaded files */
    GENERIC,

    /** Original PDF in a signing session - the document to be signed */
    SIGNING_ORIGINAL,

    /** Final signed PDF - the completed document with all signatures applied */
    SIGNING_SIGNED,

    /** Audit trail for signing session - history and metadata */
    SIGNING_HISTORY
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/FileShareAccessType.java`

```java
package stirling.software.proprietary.storage.model;

public enum FileShareAccessType {
    VIEW,
    DOWNLOAD
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/model/ShareAccessRole.java`

```java
package stirling.software.proprietary.storage.model;

public enum ShareAccessRole {
    EDITOR,
    COMMENTER,
    VIEWER
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/provider/StorageProvider.java`

```java
package stirling.software.proprietary.storage.provider;

import java.io.IOException;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import stirling.software.proprietary.security.model.User;

public interface StorageProvider {
    StoredObject store(User owner, MultipartFile file) throws IOException;

    Resource load(String storageKey) throws IOException;

    void delete(String storageKey) throws IOException;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/provider/StoredObject.java`

```java
package stirling.software.proprietary.storage.provider;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class StoredObject {
    private final String storageKey;
    private final String originalFilename;
    private final String contentType;
    private final long sizeBytes;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/repository/StorageCleanupEntryRepository.java`

```java
package stirling.software.proprietary.storage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import stirling.software.proprietary.storage.model.StorageCleanupEntry;

public interface StorageCleanupEntryRepository extends JpaRepository<StorageCleanupEntry, Long> {
    List<StorageCleanupEntry> findTop50ByOrderByUpdatedAtAsc();
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/storage/repository/StoredFileBlobRepository.java`

```java
package stirling.software.proprietary.storage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import stirling.software.proprietary.storage.model.StoredFileBlob;

public interface StoredFileBlobRepository extends JpaRepository<StoredFileBlob, String> {}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/dto/CertificateInfo.java`

```java
package stirling.software.proprietary.workflow.dto;

import java.util.Date;

/**
 * Certificate metadata extracted from a keystore submission. Returned by
 * CertificateSubmissionValidator after successful validation so callers can surface details
 * (expiry, subject) to the user.
 */
public record CertificateInfo(
        String subjectName, String issuerName, Date notBefore, Date notAfter, boolean selfSigned) {}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/dto/SignRequestSummaryDTO.java`

```java
package stirling.software.proprietary.workflow.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import stirling.software.proprietary.workflow.model.ParticipantStatus;

/** DTO for sign request summary (participant view) */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignRequestSummaryDTO {
    private String sessionId;
    private String documentName;
    private String ownerUsername;
    private String createdAt;
    private String dueDate;
    private ParticipantStatus myStatus;
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/model/CertificateType.java`

```java
package stirling.software.proprietary.workflow.model;

public enum CertificateType {
    AUTO_GENERATED,
    USER_UPLOADED
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/model/ParticipantStatus.java`

```java
package stirling.software.proprietary.workflow.model;

/**
 * Defines the status of a participant in a workflow session. Tracks participant progress through
 * the workflow lifecycle.
 */
public enum ParticipantStatus {
    /** Participant has been added but not yet notified */
    PENDING,

    /** Participant has been notified via email or other means */
    NOTIFIED,

    /** Participant has viewed the document */
    VIEWED,

    /** Participant has completed their action (e.g., signed the document) */
    SIGNED,

    /** Participant has declined to participate or rejected the action */
    DECLINED
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/model/WorkflowStatus.java`

```java
package stirling.software.proprietary.workflow.model;

/**
 * Defines the overall status of a workflow session. Tracks the lifecycle from creation through
 * completion or cancellation.
 */
public enum WorkflowStatus {
    /** Workflow is active and awaiting participant actions */
    IN_PROGRESS,

    /** Workflow has been successfully completed by all participants */
    COMPLETED,

    /** Workflow has been cancelled by the owner or system */
    CANCELLED
}

```

### `app/proprietary/src/main/java/stirling/software/proprietary/workflow/model/WorkflowType.java`

```java
package stirling.software.proprietary.workflow.model;

/**
 * Defines the type of workflow being executed. Determines the business logic and lifecycle for the
 * workflow session.
 */
public enum WorkflowType {
    /** Document signing workflow - participants sign a PDF with digital certificates */
    SIGNING,

    /** Document review workflow - participants review and comment on a document */
    REVIEW,

    /** Document approval workflow - participants approve or reject a document */
    APPROVAL
}

```

### `app/proprietary/src/main/resources/application-proprietary.properties`

```properties

```

### `CLAUDE.md`

```md
AGENTS.md
```

### `devGuide/DeveloperGuide.md`

```md
# Developer Guide

This guide has moved to the repository root for easier discovery.

**See [DeveloperGuide.md](../DeveloperGuide.md) for the current developer guide.**

```

### `devTools/package.json`

```json
{
  "name": "stirling-pdf",
  "version": "1.0.0",
  "scripts": {
    "lint:css:check": "stylelint \"../app/core/src/main/**/*.css\" \"../app/proprietary/src/main/resources/static/css/*.css\" --config .stylelintrc.json",
    "lint:css:fix": "stylelint \"../app/core/src/main/**/*.css\" \"../app/proprietary/src/main/resources/static/css/*.css\" --config .stylelintrc.json --fix"
  },
  "devDependencies": {
    "@stylistic/stylelint-plugin": "^5.1.0",
    "stylelint": "^17.8.0",
    "stylelint-config-standard": "^40.0.0"
  }
}

```

### `docker/frontend/entrypoint.sh`

```sh
#!/bin/sh

# Set default backend URL if not provided
VITE_API_BASE_URL=${VITE_API_BASE_URL:-"http://backend:8080"}

# Replace the placeholder in nginx.conf with the actual backend URL
sed -i "s|\${VITE_API_BASE_URL}|${VITE_API_BASE_URL}|g" /etc/nginx/nginx.conf

# Start nginx
exec nginx -g "daemon off;"

```

### `engine/.gitignore`

```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
build/
dist/
*.egg-info/

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.vite/

# Environment
.env.local

# Root .gitignore ignores all .env* - whitelist our committed .env here
!.env

# LaTeX outputs
*.aux
*.log
*.out
*.toc
*.pdf
*.tex
!src/default_templates/*.tex
data/
output/
logs/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

```

### `engine/.python-version`

```python-version
3.13.8

```

### `engine/Dockerfile.dev`

```dev
# syntax=docker/dockerfile:1.5
FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen

ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONUNBUFFERED=1

EXPOSE 5001

CMD ["uv", "run", "uvicorn", "stirling.api.app:app", "--host", "0.0.0.0", "--port", "5001", "--reload"]

```

### `engine/src/stirling/__init__.py`

```py
"""Stirling AI engine package."""

from .api.app import app

__all__ = [
    "app",
]

```

### `engine/src/stirling/agents/__init__.py`

```py
"""Agent modules for Stirling AI reasoning flows."""

from .execution import ExecutionPlanningAgent
from .orchestrator import OrchestratorAgent
from .pdf_edit import PdfEditAgent, PdfEditParameterSelector, PdfEditPlanSelection
from .pdf_questions import PdfQuestionAgent
from .user_spec import UserSpecAgent

__all__ = [
    "ExecutionPlanningAgent",
    "OrchestratorAgent",
    "PdfEditAgent",
    "PdfEditParameterSelector",
    "PdfEditPlanSelection",
    "PdfQuestionAgent",
    "UserSpecAgent",
]

```

### `engine/src/stirling/agents/_page_text.py`

```py
from __future__ import annotations

from stirling.contracts import ExtractedFileText


def has_page_text(page_text: list[ExtractedFileText]) -> bool:
    return any(selection.text.strip() for file_text in page_text for selection in file_text.pages)


def format_page_text(page_text: list[ExtractedFileText], empty: str = "None") -> str:
    if not has_page_text(page_text):
        return empty
    sections = [
        f"[File: {file_text.file_name}, Page {selection.page_number or '?'}]\n{selection.text}"
        for file_text in page_text
        for selection in file_text.pages
    ]
    return "\n\n".join(sections)

```

### `engine/src/stirling/agents/execution.py`

```py
from __future__ import annotations

from stirling.contracts import AgentExecutionRequest, CannotContinueExecutionAction, NextExecutionAction
from stirling.services import AppRuntime


class ExecutionPlanningAgent:
    def __init__(self, runtime: AppRuntime) -> None:
        self.runtime = runtime

    async def next_action(self, request: AgentExecutionRequest) -> NextExecutionAction:
        return CannotContinueExecutionAction(
            reason=f"Execution planning is not implemented yet for step {request.current_step_index}."
        )

```

### `engine/src/stirling/agents/ledger/__init__.py`

```py
"""Math Auditor Agent (mathAuditorAgent) — AI-powered math validation for PDF documents."""

from .agent import MathAuditorAgent

__all__ = ["MathAuditorAgent"]

```

### `engine/src/stirling/agents/ledger/validators/__init__.py`

```py
from .arithmetic import ArithmeticScanner
from .figures import FigureTracker
from .formula import FormulaEvaluator

__all__ = ["ArithmeticScanner", "FigureTracker", "FormulaEvaluator"]

```

### `engine/src/stirling/api/__init__.py`

```py
"""API surface for the Stirling AI service."""

from .app import app

__all__ = [
    "app",
]

```

### `engine/src/stirling/api/routes/__init__.py`

```py
from .agent_drafts import router as agent_draft_router
from .execution import router as execution_router
from .ledger import router as ledger_router
from .orchestrator import router as orchestrator_router
from .pdf_edit import router as pdf_edit_router
from .pdf_questions import router as pdf_question_router
from .rag import router as rag_router

__all__ = [
    "agent_draft_router",
    "execution_router",
    "ledger_router",
    "orchestrator_router",
    "pdf_edit_router",
    "pdf_question_router",
    "rag_router",
]

```

### `engine/src/stirling/api/routes/execution.py`

```py
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends

from stirling.agents import ExecutionPlanningAgent
from stirling.api.dependencies import get_execution_planning_agent
from stirling.contracts import AgentExecutionRequest, NextExecutionAction

router = APIRouter(prefix="/api/v1/agents", tags=["agents"])


@router.post("/next-action", response_model=NextExecutionAction)
async def next_action(
    request: AgentExecutionRequest,
    agent: Annotated[ExecutionPlanningAgent, Depends(get_execution_planning_agent)],
) -> NextExecutionAction:
    return await agent.next_action(request)

```

### `engine/src/stirling/api/routes/orchestrator.py`

```py
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends

from stirling.agents import OrchestratorAgent
from stirling.api.dependencies import get_orchestrator_agent
from stirling.contracts import OrchestratorRequest, OrchestratorResponse

router = APIRouter(prefix="/api/v1/orchestrator", tags=["orchestrator"])


@router.post("", response_model=OrchestratorResponse)
async def orchestrate(
    request: OrchestratorRequest,
    agent: Annotated[OrchestratorAgent, Depends(get_orchestrator_agent)],
) -> OrchestratorResponse:
    return await agent.handle(request)

```

### `engine/src/stirling/api/routes/pdf_edit.py`

```py
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends

from stirling.agents import PdfEditAgent
from stirling.api.dependencies import get_pdf_edit_agent
from stirling.contracts import PdfEditRequest, PdfEditResponse

router = APIRouter(prefix="/api/v1/pdf/edit", tags=["pdf-edit"])


@router.post("", response_model=PdfEditResponse)
async def pdf_edit(
    request: PdfEditRequest,
    agent: Annotated[PdfEditAgent, Depends(get_pdf_edit_agent)],
) -> PdfEditResponse:
    return await agent.handle(request)

```

### `engine/src/stirling/api/routes/pdf_questions.py`

```py
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends

from stirling.agents import PdfQuestionAgent
from stirling.api.dependencies import get_pdf_question_agent
from stirling.contracts import PdfQuestionRequest, PdfQuestionResponse

router = APIRouter(prefix="/api/v1/pdf/questions", tags=["pdf-questions"])


@router.post("", response_model=PdfQuestionResponse)
async def pdf_questions(
    request: PdfQuestionRequest,
    agent: Annotated[PdfQuestionAgent, Depends(get_pdf_question_agent)],
) -> PdfQuestionResponse:
    return await agent.handle(request)

```

### `engine/src/stirling/config/__init__.py`

```py
"""Configuration models and loaders for the Stirling AI service."""

from .settings import ENGINE_ROOT, AppSettings, RagBackend, load_settings

__all__ = [
    "ENGINE_ROOT",
    "AppSettings",
    "RagBackend",
    "load_settings",
]

```

### `engine/src/stirling/contracts/agent_specs.py`

```py
from __future__ import annotations

from typing import Annotated, Literal

from pydantic import Field

from stirling.models import ApiModel, ToolEndpoint

from .common import StepKind, ToolOperationStep


class AiToolAgentStep(ApiModel):
    kind: Literal[StepKind.AI_TOOL] = StepKind.AI_TOOL
    title: str
    description: str
    tool: ToolEndpoint
    instruction: str


AgentSpecStep = Annotated[ToolOperationStep | AiToolAgentStep, Field(discriminator="kind")]


class AgentSpec(ApiModel):
    name: str
    description: str
    objective: str
    steps: list[AgentSpecStep] = Field(default_factory=list)

```

### `engine/src/stirling/contracts/health.py`

```py
from __future__ import annotations

from stirling.models import ApiModel


class HealthResponse(ApiModel):
    status: str
    smart_model: str
    fast_model: str

```

### `engine/src/stirling/models/__init__.py`

```py
from . import tool_models
from .base import ApiModel
from .tool_models import OPERATIONS, ParamToolModel, ToolEndpoint

__all__ = [
    "ApiModel",
    "OPERATIONS",
    "ParamToolModel",
    "ToolEndpoint",
    "tool_models",
]

```

### `engine/src/stirling/models/base.py`

```py
from __future__ import annotations

from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel


class ApiModel(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        extra="forbid",
        validate_by_name=True,
        validate_by_alias=True,
    )

```

### `engine/src/stirling/rag/__init__.py`

```py
from __future__ import annotations

from stirling.rag.capability import RagCapability
from stirling.rag.embedder import EmbeddingService
from stirling.rag.pgvector_store import PgVectorStore
from stirling.rag.service import RagService
from stirling.rag.sqlite_vec_store import SqliteVecStore
from stirling.rag.store import Document, SearchResult, VectorStore

__all__ = [
    "Document",
    "EmbeddingService",
    "PgVectorStore",
    "RagCapability",
    "RagService",
    "SearchResult",
    "SqliteVecStore",
    "VectorStore",
]

```

### `engine/src/stirling/services/__init__.py`

```py
"""Shared services used by the Stirling AI runtime."""

from .runtime import AppRuntime, build_model_settings, build_runtime
from .tracking import setup_posthog_tracking

__all__ = [
    "AppRuntime",
    "build_model_settings",
    "build_runtime",
    "setup_posthog_tracking",
]

```

### `engine/tests/ledger/__init__.py`

```py

```

### `frontend/.gitignore`

```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
.env.local
.env.*.local

# Root .gitignore ignores all .env* - whitelist our committed ones here
!.env
!.env.desktop
!.env.saas

npm-debug.log*
yarn-debug.log*
yarn-error.log*

playwright-report
test-results

# auto-generated files
/src/assets/material-symbols-icons.json
/src/assets/material-symbols-icons.d.ts

```

### `frontend/.prettierignore`

```prettierignore
dist/
# Tauri/Cargo build output (binary assets named *.js etc. confuse Prettier)
src-tauri/target/
node_modules/
public/vendor/
public/pdfjs*/
public/js/thirdParty/
public/css/cookieconsent.css
src-tauri/target/
*.min.*
*.md
*.wxs
src/output.css

```

### `frontend/.prettierrc`

```prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf"
}

```

### `frontend/postcss.config.js`

```js
module.exports = {
  plugins: [require("@tailwindcss/postcss"), require("autoprefixer")],
};

```

### `frontend/public/manifest-classic.json`

```json
{
  "short_name": "Stirling PDF",
  "name": "Stirling PDF",
  "icons": [
    {
      "src": "classic-logo/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "classic-logo/logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "classic-logo/logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### `frontend/public/manifest.json`

```json
{
  "short_name": "Stirling PDF",
  "name": "Stirling PDF",
  "icons": [
    {
      "src": "modern-logo/favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "modern-logo/logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "modern-logo/logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### `frontend/public/robots.txt`

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

### `frontend/scripts/tsconfig.json`

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "module": "node16",
    "moduleResolution": "node16",
    "noEmit": true
  },
  "include": ["./**/*.ts"],
  "exclude": []
}

```

### `frontend/src-tauri/.gitignore`

```gitignore
# Generated by Cargo
# will have compiled files and executables
/target/
/gen/schemas
/runtime/

**/stirling_thumbnail_handler.dll

```

### `frontend/src-tauri/build.rs`

```rs
fn main() {
    tauri_build::build()
}

```

### `frontend/src-tauri/Info.plist`

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>NSLocalNetworkUsageDescription</key>
  <string>Stirling-PDF needs access to your local network to connect to self-hosted servers.</string>
</dict>
</plist>

```

### `frontend/src-tauri/provisioner/Cargo.toml`

```toml
[package]
name = "stirling-provisioner"
version = "0.1.0"
edition = "2021"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

```

### `frontend/src-tauri/src/commands/platform.rs`

```rs
use serde::Serialize;

#[derive(Clone, Copy, Debug, Eq, PartialEq, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum DesktopOS {
    MacOS,
    Windows,
    Linux,
    Unknown,
}

#[tauri::command]
pub fn get_desktop_os() -> DesktopOS {
    match std::env::consts::OS {
        "macos" => DesktopOS::MacOS,
        "windows" => DesktopOS::Windows,
        "linux" => DesktopOS::Linux,
        _ => DesktopOS::Unknown,
    }
}

```

### `frontend/src-tauri/src/main.rs`

```rs
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  app_lib::run();
}

```

### `frontend/src-tauri/src/state/mod.rs`

```rs
pub mod connection_state;

```

### `frontend/src-tauri/src/utils/mod.rs`

```rs
pub mod logging;
pub mod paths;

pub use logging::{add_log, get_tauri_logs};
pub use paths::{app_data_dir, system_provisioning_dir};

```

### `frontend/src-tauri/stirling-pdf.desktop`

```desktop
[Desktop Entry]
Version=1.0
Type=Application
Name=Stirling-PDF
Comment=Locally hosted web application that allows you to perform various operations on PDF files
TryExec={{exec}}
Exec={{exec}} %F
Icon={{icon}}
Terminal=false
MimeType=application/pdf;
Categories=Office;Graphics;Utility;
Actions=open-file;

[Desktop Action open-file]
Name=Open PDF File
Exec={{exec}} %F
```

### `frontend/src-tauri/thumbnail-handler/.gitignore`

```gitignore
/target

```

### `frontend/src-tauri/thumbnail-handler/Cargo.toml`

```toml
[package]
name = "stirling-thumbnail-handler"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies.windows]
version = "0.58"
features = [
    "implement",
    "Win32_Foundation",
    "Win32_System_Com",
    "Win32_System_Com_StructuredStorage",
    "Win32_Graphics_Gdi",
    "Win32_Graphics_Imaging",
    "Win32_UI_Shell",
    "Win32_UI_Shell_PropertiesSystem",
    "Storage_Streams",
    "Data_Pdf",
    "Foundation",
]

[dependencies]
windows-core = "0.58"

```

### `frontend/src/core/auth/UseSession.tsx`

```tsx
export interface AuthContextType {
  session: null;
  user: { id?: string; email?: string; [key: string]: unknown } | null;
  loading: boolean;
  error: Error | null;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

/**
 * Core (open-source) auth hook stub.
 * Proprietary/desktop builds override this file via path resolution.
 */
export function useAuth(): AuthContextType {
  return {
    session: null,
    user: null,
    loading: false,
    error: null,
    signOut: async () => {},
    refreshSession: async () => {},
  };
}

```

### `frontend/src/core/components/fileEditor/FileEditorFileName.tsx`

```tsx
import React from "react";
import { StirlingFileStub } from "@app/types/fileContext";
import { PrivateContent } from "@app/components/shared/PrivateContent";

interface FileEditorFileNameProps {
  file: StirlingFileStub;
}

const FileEditorFileName = ({ file }: FileEditorFileNameProps) => (
  <PrivateContent>{file.name}</PrivateContent>
);

export default FileEditorFileName;

```

### `frontend/src/core/components/fileManager/HiddenFileInput.tsx`

```tsx
import React from "react";
import { useFileManagerContext } from "@app/contexts/FileManagerContext";

const HiddenFileInput: React.FC = () => {
  const { fileInputRef, onFileInputChange } = useFileManagerContext();

  return (
    <input
      ref={fileInputRef}
      type="file"
      multiple={true}
      onChange={onFileInputChange}
      style={{ display: "none" }}
      data-testid="file-input"
    />
  );
};

export default HiddenFileInput;

```

### `frontend/src/core/components/home/HomePageExtensions.tsx`

```tsx
/**
 * Core stub for HomePage extensions.
 */

export function HomePageExtensions() {
  return null;
}

```

### `frontend/src/core/components/layout/Workbench.module.css`

```css
.workbenchScrollable {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.workbenchScrollable::-webkit-scrollbar {
  width: 0.375rem;
}

.workbenchScrollable::-webkit-scrollbar-track {
  background: transparent;
}

.workbenchScrollable::-webkit-scrollbar-thumb {
  background-color: var(--mantine-color-gray-4);
  border-radius: 0.1875rem;
}

.workbenchScrollable::-webkit-scrollbar-thumb:hover {
  background-color: var(--mantine-color-gray-5);
}

```

### `frontend/src/core/components/onboarding/slides/unifiedBackgroundConfig.ts`

```ts
import { AnimatedCircleConfig } from "@app/types/types";

/**
 * Unified circle background configuration used across all onboarding slides.
 * Only gradient colors change between slides, creating smooth transitions.
 */
export const UNIFIED_CIRCLE_CONFIG: AnimatedCircleConfig[] = [
  {
    position: "bottom-left",
    size: 270,
    color: "rgba(255, 255, 255, 0.25)",
    opacity: 0.9,
    amplitude: 24,
    duration: 4.5,
    offsetX: 18,
    offsetY: 14,
  },
  {
    position: "top-right",
    size: 300,
    color: "rgba(255, 255, 255, 0.2)",
    opacity: 0.9,
    amplitude: 28,
    duration: 4.5,
    delay: 0.5,
    offsetX: 24,
    offsetY: 18,
  },
];

```

### `frontend/src/core/components/onboarding/tourGlow.ts`

```ts
export const addGlowToElements = (selectors: string[]) => {
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      if (selector === '[data-tour="settings-content-area"]') {
        element.classList.add("tour-content-glow");
      } else {
        element.classList.add("tour-nav-glow");
      }
    }
  });
};

export const removeAllGlows = () => {
  document
    .querySelectorAll(".tour-content-glow")
    .forEach((el) => el.classList.remove("tour-content-glow"));
  document
    .querySelectorAll(".tour-nav-glow")
    .forEach((el) => el.classList.remove("tour-nav-glow"));
};

```

### `frontend/src/core/components/pageEditor/constants.ts`

```ts
// Shared constants for PageEditor grid layout
export const GRID_CONSTANTS = {
  ITEM_WIDTH: "20rem", // page width
  ITEM_HEIGHT: "21.5rem", // 20rem + 1.5rem gap
  ITEM_GAP: "1.5rem", // gap between items
  OVERSCAN_SMALL: 8, // Overscan for normal documents
  OVERSCAN_LARGE: 12, // Overscan for large documents (12 rows = ~96 pages pre-rendered)
} as const;

```

### `frontend/src/core/components/quickAccessBar/QuickAccessBarFooterExtensions.tsx`

```tsx
/**
 * Core stub for QuickAccessBar footer extensions
 * Desktop build overrides this with actual credit counter implementation
 */

interface QuickAccessBarFooterExtensionsProps {
  className?: string;
}

export function QuickAccessBarFooterExtensions(
  _props: QuickAccessBarFooterExtensionsProps,
) {
  return null;
}

```

### `frontend/src/core/components/rightRail/RightRailFooterExtensions.tsx`

```tsx
interface RightRailFooterExtensionsProps {
  className?: string;
}

export function RightRailFooterExtensions(
  _props: RightRailFooterExtensionsProps,
) {
  return null;
}

```

### `frontend/src/core/components/shared/CloudBadge.tsx`

```tsx
interface CloudBadgeProps {
  className?: string;
}

/**
 * Stub component for cloud badge (desktop override provides real implementation)
 * In web builds, this returns null since cloud routing is desktop-only
 */
export function CloudBadge(_props: CloudBadgeProps) {
  return null; // Stub - does nothing in web builds
}

```

### `frontend/src/core/components/shared/config/configSections/SaasPlanSection.tsx`

```tsx
/**
 * Core stub for SaasPlanSection
 * This component returns null in non-desktop builds
 * The desktop layer shadows this with the real implementation
 */
export function SaasPlanSection() {
  return null;
}

```

### `frontend/src/core/components/shared/config/configSections/SaaSTeamsSection.tsx`

```tsx
/**
 * Core stub for SaaS Teams Section
 * Desktop layer provides the real implementation
 * This component only appears in SaaS mode
 */
export function SaaSTeamsSection() {
  // Core stub - return null (no team management in web builds)
  return null;
}

```

### `frontend/src/core/components/shared/config/OverviewHeader.tsx`

```tsx
import { Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

export function OverviewHeader() {
  const { t } = useTranslation();

  return (
    <div>
      <Text fw={600} size="lg">
        {t("config.overview.title", "Application Configuration")}
      </Text>
      <Text size="sm" c="dimmed">
        {t(
          "config.overview.description",
          "Current application settings and configuration details.",
        )}
      </Text>
    </div>
  );
}

```

### `frontend/src/core/components/shared/config/PendingBadge.tsx`

```tsx
import { Badge } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface PendingBadgeProps {
  show: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

/**
 * Badge to show when a setting has been saved but requires restart to take effect.
 */
export default function PendingBadge({ show, size = "xs" }: PendingBadgeProps) {
  const { t } = useTranslation();

  if (!show) return null;

  return (
    <Badge color="orange" size={size} variant="light">
      {t("admin.settings.restartRequired", "Restart Required")}
    </Badge>
  );
}

```

### `frontend/src/core/components/shared/HoverActionMenu.module.css`

```css
/* Base Hover Menu */
.hoverMenu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  align-items: center;
  background: var(--bg-toolbar);
  border: 1px solid var(--border-default);
  padding: 6px 12px;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  white-space: nowrap;
  pointer-events: auto;
  transition: opacity 0.2s ease-in-out;
}

/* Inside positioning (Page Editor style) - within container */
.inside {
  bottom: 8px;
}

/* Outside positioning (File Editor style) - below container */
.outside {
  bottom: -8px;
}

```

### `frontend/src/core/components/shared/LoadingFallback.tsx`

```tsx
/**
 * Loading fallback component for i18next suspense
 */
export function LoadingFallback() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "18px",
        color: "#666",
      }}
    >
      Loading...
    </div>
  );
}

```

### `frontend/src/core/components/shared/LogoIcon.tsx`

```tsx
import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { useLogoPath } from "@app/hooks/useLogoPath";

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
}

export function LogoIcon({ alt = "", ...props }: LogoIconProps) {
  const { colorScheme } = useMantineColorScheme();
  const logoPaths = useLogoPath();
  const src = colorScheme === "dark" ? logoPaths.dark : logoPaths.light;
  return <img src={src} alt={alt} {...props} />;
}

```

### `frontend/src/core/components/shared/modals/CreditExhaustedModal.tsx`

```tsx
/**
 * Core stub for Credit Exhausted Modal
 * Desktop build overrides this with actual modal implementation
 */

interface CreditExhaustedModalProps {
  opened: boolean;
  onClose: () => void;
}

export function CreditExhaustedModal(_props: CreditExhaustedModalProps) {
  return null;
}

```

### `frontend/src/core/components/shared/modals/InsufficientCreditsModal.tsx`

```tsx
/**
 * Core stub for Insufficient Credits Modal
 * Desktop build overrides this with actual modal implementation
 */

interface InsufficientCreditsModalProps {
  opened: boolean;
  onClose: () => void;
  toolId?: string;
  requiredCredits?: number;
}

export function InsufficientCreditsModal(
  _props: InsufficientCreditsModalProps,
) {
  return null;
}

```

### `frontend/src/core/components/shared/Wordmark.tsx`

```tsx
import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { useLogoAssets } from "@app/hooks/useLogoAssets";

interface WordmarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  muted?: boolean;
}

export function Wordmark({ alt = "", muted = false, ...props }: WordmarkProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { wordmark } = useLogoAssets();

  // light: black text (standard) or grey text (muted)
  // dark:  white text for both variants
  const src = isDark ? wordmark.white : muted ? wordmark.grey : wordmark.black;

  return <img src={src} alt={alt} {...props} />;
}

```

### `frontend/src/core/components/tools/getPdfInfo/sections/KeyValueSection.tsx`

```tsx
import React from "react";
import SectionBlock from "@app/components/tools/getPdfInfo/shared/SectionBlock";
import KeyValueList from "@app/components/tools/getPdfInfo/shared/KeyValueList";

interface KeyValueSectionProps {
  title: string;
  anchorId: string;
  obj?: Record<string, unknown> | null;
  emptyLabel?: string;
}

const KeyValueSection: React.FC<KeyValueSectionProps> = ({
  title,
  anchorId,
  obj,
  emptyLabel,
}) => {
  return (
    <SectionBlock title={title} anchorId={anchorId}>
      <KeyValueList obj={obj} emptyLabel={emptyLabel} />
    </SectionBlock>
  );
};

export default KeyValueSection;

```

### `frontend/src/core/components/tools/getPdfInfo/shared/accordionStyles.ts`

```ts
import type { AccordionStylesNames } from "@mantine/core";
import type { CSSProperties } from "react";

type AccordionStyles = Partial<Record<AccordionStylesNames, CSSProperties>>;

export const pdfInfoAccordionStyles: AccordionStyles = {
  item: {
    backgroundColor: "var(--accordion-item-bg)",
  },
  control: {
    backgroundColor: "transparent",
  },
};

```

### `frontend/src/core/components/tools/getPdfInfo/shared/SectionBlock.tsx`

```tsx
import React from "react";
import { Stack, Text, Divider } from "@mantine/core";

interface SectionBlockProps {
  title: string;
  anchorId: string;
  children: React.ReactNode;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  anchorId,
  children,
}) => {
  return (
    <Stack gap="sm" id={anchorId}>
      <Text fw={700} size="lg">
        {title}
      </Text>
      <Divider />
      {children}
    </Stack>
  );
};

export default SectionBlock;

```

### `frontend/src/core/components/tools/pageLayout/PageLayoutPreview.tsx`

```tsx
import { PageLayoutParameters } from "@app/hooks/tools/pageLayout/usePageLayoutParameters";
import LayoutPreview from "@app/components/tools/pageLayout/LayoutPreview";
import { Stack } from "@mantine/core";

export default function PageLayoutPreview({
  parameters,
}: {
  parameters: PageLayoutParameters;
}) {
  return (
    <Stack gap="sm">
      <LayoutPreview parameters={parameters} />
    </Stack>
  );
}

```

### `frontend/src/core/components/tools/removeAnnotations/RemoveAnnotationsSettings.tsx`

```tsx
import { Stack } from "@mantine/core";

const RemoveAnnotationsSettings = () => {
  return (
    <Stack gap="md">
      {/* No settings needed for this tool - description is in tooltip */}
    </Stack>
  );
};

export default RemoveAnnotationsSettings;

```

### `frontend/src/core/components/tools/shared/ErrorNotification.tsx`

```tsx
import { Notification } from "@mantine/core";
import { useTranslation } from "react-i18next";

export interface ErrorNotificationProps {
  error: string | null;
  onClose: () => void;
  title?: string;
  color?: string;
  mb?: string;
}

const ErrorNotification = ({
  error,
  onClose,
  title,
  color = "red",
  mb = "md",
}: ErrorNotificationProps) => {
  const { t } = useTranslation();

  if (!error) return null;

  return (
    <Notification
      color={color}
      title={title || t("error._value", "Error")}
      onClose={onClose}
      mb={mb}
    >
      {error}
    </Notification>
  );
};

export default ErrorNotification;

```

### `frontend/src/core/components/tools/shared/FileMetadata.tsx`

```tsx
import { Stack, Text } from "@mantine/core";
import { formatFileSize, getFileDate } from "@app/utils/fileUtils";

export interface FileMetadataProps {
  file: File;
}

const FileMetadata = ({ file }: FileMetadataProps) => {
  return (
    <Stack gap="xs" style={{ flex: 1, minWidth: 0 }}>
      <Stack gap="0.125rem">
        <Text size="xs" c="dimmed">
          {formatFileSize(file.size)}
        </Text>
        <Text size="xs" c="dimmed">
          {file.type || "Unknown"}
        </Text>
        <Text size="xs" c="dimmed">
          {getFileDate(file)}
        </Text>
      </Stack>
    </Stack>
  );
};

export default FileMetadata;

```

### `frontend/src/core/components/tools/shared/NoToolsFound.tsx`

```tsx
import React from "react";
import { Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const NoToolsFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Text c="dimmed" size="sm" p="sm">
      {t("toolPicker.noToolsFound", "No tools found")}
    </Text>
  );
};

export default NoToolsFound;

```

### `frontend/src/core/components/tools/shared/SubcategoryHeader.tsx`

```tsx
import React from "react";

interface SubcategoryHeaderProps {
  label: string;
  mt?: string | number;
  mb?: string | number;
}

export const SubcategoryHeader: React.FC<SubcategoryHeaderProps> = ({
  label,
  mt = "1rem",
  mb = "0.25rem",
}) => (
  <div
    className="tool-subcategory-row"
    style={{
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: mt,
      marginBottom: mb,
    }}
  >
    <div className="tool-subcategory-row-rule" />
    <span className="tool-subcategory-row-title">{label}</span>
    <div className="tool-subcategory-row-rule" />
  </div>
);

export default SubcategoryHeader;

```

### `frontend/src/core/components/tools/ToolLoadingFallback.tsx`

```tsx
import { Center, Stack, Loader, Text } from "@mantine/core";

export default function ToolLoadingFallback({
  toolName,
}: {
  toolName?: string;
}) {
  return (
    <Center h="100%" w="100%">
      <Stack align="center" gap="md">
        <Loader size="lg" />
        <Text c="dimmed" size="sm">
          {toolName ? `Loading ${toolName}...` : "Loading tool..."}
        </Text>
      </Stack>
    </Center>
  );
}

```

### `frontend/src/core/components/tools/toolPicker/ToolPickerFooterExtensions.tsx`

```tsx
/**
 * Stub — returns null in core/web builds.
 * Desktop build shadows this with a sign-in prompt for local mode.
 */
export function ToolPickerFooterExtensions() {
  return null;
}

```

### `frontend/src/core/components/tools/validateSignature/reportView/ThumbnailPreview.tsx`

```tsx
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "@app/components/tools/validateSignature/reportView/styles.css";

const ThumbnailPreview = ({
  thumbnailUrl,
  fileName,
}: {
  thumbnailUrl?: string | null;
  fileName: string;
}) => {
  if (thumbnailUrl) {
    return (
      <div className="thumbnail-container">
        <img
          src={thumbnailUrl}
          alt={`${fileName} thumbnail`}
          className="thumbnail-image"
        />
      </div>
    );
  }

  return (
    <div className="thumbnail-placeholder">
      <PictureAsPdfIcon fontSize="large" />
    </div>
  );
};

export default ThumbnailPreview;

```

### `frontend/src/core/components/tooltips/useAddAttachmentsTips.ts`

```ts
import { useTranslation } from "react-i18next";
import { TooltipContent } from "@app/types/tips";

export const useAddAttachmentsTips = (): TooltipContent => {
  const { t } = useTranslation();

  return {
    header: {
      title: t(
        "AddAttachmentsRequest.tooltip.header.title",
        "About Add Attachments",
      ),
    },
    tips: [
      {
        title: t(
          "AddAttachmentsRequest.tooltip.description.title",
          "What it does",
        ),
        description: t(
          "AddAttachmentsRequest.info",
          "Select files to attach to your PDF. These files will be embedded and accessible through the PDF's attachment panel.",
        ),
      },
    ],
  };
};

```

### `frontend/src/core/components/tooltips/useAddPasswordPermissionsTips.ts`

```ts
import { useTranslation } from "react-i18next";
import { TooltipContent } from "@app/types/tips";

export const useAddPasswordPermissionsTips = (): TooltipContent => {
  const { t } = useTranslation();

  return {
    header: {
      title: t("addPassword.tooltip.permissions.title", "Change Permissions"),
    },
    tips: [
      {
        description: t(
          "addPassword.tooltip.permissions.text",
          "These permissions control what users can do with the PDF. Most effective when combined with an owner password.",
        ),
      },
    ],
  };
};

```

### `frontend/src/core/components/tooltips/useExtractPagesTips.ts`

```ts
import { useTranslation } from "react-i18next";
import { TooltipContent } from "@app/types/tips";
import { usePageSelectionTips } from "@app/components/tooltips/usePageSelectionTips";

export const useExtractPagesTips = (): TooltipContent => {
  const { t } = useTranslation();
  const base = usePageSelectionTips();

  return {
    header: base.header,
    tips: [
      {
        description: t(
          "extractPages.tooltip.description",
          "Extracts the selected pages into a new PDF, preserving order.",
        ),
      },
      ...(base.tips || []),
    ],
  };
};

export default useExtractPagesTips;

```

### `frontend/src/core/components/tooltips/useRemoveAnnotationsTips.ts`

```ts
import { useTranslation } from "react-i18next";
import { TooltipContent } from "@app/types/tips";

export const useRemoveAnnotationsTips = (): TooltipContent => {
  const { t } = useTranslation();

  return {
    header: {
      title: t(
        "removeAnnotations.tooltip.header.title",
        "About Remove Annotations",
      ),
    },
    tips: [
      {
        title: t("removeAnnotations.tooltip.description.title", "What it does"),
        description: t(
          "removeAnnotations.info.description",
          "This tool will remove all annotations (comments, highlights, notes, etc.) from your PDF documents.",
        ),
      },
    ],
  };
};

```

### `frontend/src/core/components/tooltips/useRemovePasswordTips.ts`

```ts
import { useTranslation } from "react-i18next";
import { TooltipContent } from "@app/types/tips";

export const useRemovePasswordTips = (): TooltipContent => {
  const { t } = useTranslation();

  return {
    header: {
      title: t("removePassword.title", "Remove Password"),
    },
    tips: [
      {
        description: t(
          "removePassword.tooltip.description",
          "Removing password protection requires the current password that was used to encrypt the PDF. This will decrypt the document, making it accessible without a password.",
        ),
      },
    ],
  };
};

```

### `frontend/src/core/components/viewer/constants/search.ts`

```ts
export const SEARCH_CONSTANTS = {
  HIGHLIGHT_COLORS: {
    BACKGROUND: "#ffff00",
    ACTIVE_BACKGROUND: "#ff6b35",
    OPACITY: 0.4,
  },
  TIMING: {
    DEBOUNCE_DELAY: 300,
  },
  UI: {
    HIGHLIGHT_PADDING: 2,
    MIN_SEARCH_LENGTH: 1,
    MAX_RESULTS_DISPLAY: 100,
  },
} as const;

```

### `frontend/src/core/components/viewer/useActiveDocumentId.ts`

```ts
import { useActiveDocument } from "@app/components/viewer/ActiveDocumentContext";

/**
 * Hook to get the currently active document ID.
 * Uses a shared context to avoid multiple subscriptions.
 */
export function useActiveDocumentId(): string | null {
  return useActiveDocument();
}

```

### `frontend/src/core/constants/addWatermarkConstants.ts`

```ts
export interface AlphabetOption {
  value: string;
  label: string;
}

export const alphabetOptions: AlphabetOption[] = [
  { value: "roman", label: "Roman" },
  { value: "arabic", label: "العربية" },
  { value: "japanese", label: "日本語" },
  { value: "korean", label: "한국어" },
  { value: "chinese", label: "简体中文" },
  { value: "thai", label: "ไทย" },
];

```

### `frontend/src/core/constants/cropConstants.ts`

```ts
import { PAGE_SIZES } from "@app/constants/pageSizeConstants";

// Default crop area (covers entire page)
export const DEFAULT_CROP_AREA = {
  x: 0,
  y: 0,
  width: PAGE_SIZES.A4.width,
  height: PAGE_SIZES.A4.height,
} as const;

export type ResizeHandle =
  | "nw"
  | "ne"
  | "sw"
  | "se"
  | "n"
  | "e"
  | "s"
  | "w"
  | null;

```

### `frontend/src/core/constants/downloads.ts`

```ts
// Centralized download URLs for Stirling PDF desktop installers
export const DOWNLOAD_URLS = {
  WINDOWS: "https://files.stirlingpdf.com/win-installer.exe",
  MAC_APPLE_SILICON: "https://files.stirlingpdf.com/mac-installer.dmg",
  MAC_INTEL: "https://files.stirlingpdf.com/mac-x86_64-installer.dmg",
  LINUX_DOCS: "https://docs.stirlingpdf.com/Installation/Unix%20Installation/",
} as const;

export const DOWNLOAD_BASE_URL = "https://files.stirlingpdf.com/";

```

### `frontend/src/core/constants/links.ts`

```ts
export const devApiLink = "/swagger-ui/index.html";

```

### `frontend/src/core/constants/logo.ts`

```ts
import type { LogoVariant } from "@app/services/preferencesService";

export const LOGO_FOLDER_BY_VARIANT: Record<LogoVariant, string> = {
  modern: "modern-logo",
  classic: "classic-logo",
};

export const ensureLogoVariant = (value?: string | null): LogoVariant => {
  return value === "classic" ? "classic" : "modern";
};

export const getLogoFolder = (variant?: LogoVariant | null): string => {
  return LOGO_FOLDER_BY_VARIANT[ensureLogoVariant(variant)];
};

```

### `frontend/src/core/constants/pageSizeConstants.ts`

```ts
// Default PDF page sizes in points (1 point = 1/72 inch)
export const PAGE_SIZES = {
  A4: { width: 595, height: 842 },
  LETTER: { width: 612, height: 792 },
  A3: { width: 842, height: 1191 },
  A5: { width: 420, height: 595 },
  LEGAL: { width: 612, height: 1008 },
} as const;

```

### `frontend/src/core/constants/routes.ts`

```ts
/**
 * Route constants used across the application
 */

/**
 * Routes where onboarding, cookie consent, and upgrade banners should not appear.
 * These are authentication-related pages where users are not yet logged in or
 * the main app chrome is not displayed.
 */
export const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/auth",
  "/invite",
  "/forgot-password",
  "/reset-password",
];

/**
 * Check if a pathname matches any auth route
 */
export function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route));
}

```

### `frontend/src/core/constants/theme.ts`

```ts
// Theme constants and utilities

export type ThemeMode = "light" | "dark" | "rainbow";

// Detect OS theme preference
export function getSystemTheme(): "light" | "dark" {
  return window?.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

```

### `frontend/src/core/constants/toolPanel.ts`

```ts
// Tool panel constants

export type ToolPanelMode = "sidebar" | "fullscreen";

export const DEFAULT_TOOL_PANEL_MODE: ToolPanelMode = "sidebar";

```

### `frontend/src/core/constants/zIndex.ts`

```ts
/**
 * Z-index constants for layering elements across the application
 * Organized in ascending order to prevent conflicts
 */

export const ZINDEX = {
  // Base layers
  BASE: 0,

  // Overlay/modal layers
  MODAL_BACKDROP: 1000,
  MODAL_CONTENT: 1001,

  // Popover/tooltip layers
  POPOVER: 1100,
  TOOLTIP: 1200,

  // Viewer specific layers
  VIEWER_HIGHLIGHT: 999,
  VIEWER_ANNOTATION_MENU: 1300,

  // Sticky/fixed layers
  STICKY_HEADER: 900,
  STICKY_SIDEBAR: 850,
} as const;

```

### `frontend/src/core/contexts/BannerContext.tsx`

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface BannerContextType {
  banner: ReactNode;
  setBanner: (banner: ReactNode) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: ReactNode }) {
  const [banner, setBanner] = useState<ReactNode>(null);

  return (
    <BannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within BannerProvider");
  }
  return context;
}

```

### `frontend/src/core/contexts/CommentAuthorContext.tsx`

```tsx
import { createContext, useContext, type ReactNode } from "react";

export interface CommentAuthorValue {
  displayName: string;
}

const defaultValue: CommentAuthorValue = { displayName: "Guest" };

const CommentAuthorContext = createContext<CommentAuthorValue>(defaultValue);

export function CommentAuthorProvider({
  children,
  displayName = "Guest",
}: {
  children: ReactNode;
  displayName?: string;
}) {
  return (
    <CommentAuthorContext.Provider value={{ displayName }}>
      {children}
    </CommentAuthorContext.Provider>
  );
}

export function useCommentAuthor(): CommentAuthorValue {
  return useContext(CommentAuthorContext);
}

```

### `frontend/src/core/contexts/file/contexts.ts`

```ts
/**
 * React contexts for file state and actions
 */

import { createContext } from "react";
import {
  FileContextStateValue,
  FileContextActionsValue,
} from "@app/types/fileContext";

// Split contexts for performance
export const FileStateContext = createContext<
  FileContextStateValue | undefined
>(undefined);
export const FileActionsContext = createContext<
  FileContextActionsValue | undefined
>(undefined);

// Export types for use in hooks
export type { FileContextStateValue, FileContextActionsValue };

```

### `frontend/src/core/contexts/SaasBillingContext.tsx`

```tsx
/**
 * Core stub for SaasBillingContext.
 * Returns null in web/core builds — desktop layer shadows this with the real implementation.
 * See: frontend/src/desktop/contexts/SaasBillingContext.tsx
 */
export const useSaaSBilling = (): null => null;

export function SaasBillingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

```

### `frontend/src/core/contexts/ToolActionsContext.tsx`

```tsx
import { createContext, useContext } from "react";

interface ToolActionsContextValue {
  /**
   * Called when the user clicks the disabled execute button while the reason
   * is 'endpointUnavailable'. Desktop provides a sign-in modal dispatch;
   * web builds leave this undefined (button stays disabled with tooltip only).
   */
  onEndpointUnavailableClick?: () => void;
}

export const ToolActionsContext = createContext<ToolActionsContextValue>({});

export function useToolActions(): ToolActionsContextValue {
  return useContext(ToolActionsContext);
}

```

### `frontend/src/core/data/useProprietaryToolRegistry.tsx`

```tsx
import { useMemo } from "react";
import { type ProprietaryToolRegistry } from "@app/data/toolsTaxonomy";

/**
 * Proprietary tool registry extension.
 * This file is overridden in src/proprietary/data/useProprietaryToolRegistry.tsx
 * to add proprietary-specific tools.
 *
 * No tools should be defined in this file.
 */

// Empty hook that returns empty registry (overridden in proprietary version)
export function useProprietaryToolRegistry(): ProprietaryToolRegistry {
  return useMemo(() => ({}) as ProprietaryToolRegistry, []);
}

```

### `frontend/src/core/extensions/accountLogout.ts`

```ts
type SignOutFn = () => Promise<void>;

interface AccountLogoutDeps {
  signOut: SignOutFn;
  redirectToLogin: () => void;
}

/**
 * Core (open-source) logout handler: sign out and redirect to /login.
 * Proprietary/desktop builds override this file via path resolution.
 */
export function useAccountLogout() {
  return async ({
    signOut,
    redirectToLogin,
  }: AccountLogoutDeps): Promise<void> => {
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "stirling_sso_auto_login_logged_out",
          "1",
        );
      }
      await signOut();
    } finally {
      redirectToLogin();
    }
  };
}

```

### `frontend/src/core/extensions/cookieConsentConfig.ts`

```ts
/**
 * Optional overrides for cookie consent config.
 */
export function getCookieConsentOverrides(): Record<string, unknown> {
  return {};
}

```

### `frontend/src/core/hooks/tools/autoRename/useAutoRenameParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface AutoRenameParameters extends BaseParameters {
  useFirstTextAsFallback: boolean;
}

export const defaultParameters: AutoRenameParameters = {
  useFirstTextAsFallback: false,
};

export type AutoRenameParametersHook = BaseParametersHook<AutoRenameParameters>;

export const useAutoRenameParameters = (): AutoRenameParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "auto-rename",
  });
};

```

### `frontend/src/core/hooks/tools/extractImages/useExtractImagesParameters.ts`

```ts
import { useBaseParameters } from "@app/hooks/tools/shared/useBaseParameters";

export interface ExtractImagesParameters {
  format: "png" | "jpg" | "gif";
  // allowDuplicates: boolean;
}

export const defaultParameters: ExtractImagesParameters = {
  format: "png",
  // allowDuplicates: false,
};

export const useExtractImagesParameters = () => {
  return useBaseParameters<ExtractImagesParameters>({
    defaultParameters,
    endpointName: "extract-images",
    validateFn: () => true, // All parameters have valid defaults
  });
};

```

### `frontend/src/core/hooks/tools/extractPages/useExtractPagesParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface ExtractPagesParameters extends BaseParameters {
  pageNumbers: string;
}

export const defaultParameters: ExtractPagesParameters = {
  pageNumbers: "",
};

export type ExtractPagesParametersHook =
  BaseParametersHook<ExtractPagesParameters>;

export const useExtractPagesParameters = (): ExtractPagesParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "rearrange-pages",
    validateFn: (p) => (p.pageNumbers || "").trim().length > 0,
  });
};

```

### `frontend/src/core/hooks/tools/flatten/useFlattenParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface FlattenParameters extends BaseParameters {
  flattenOnlyForms: boolean;
  renderDpi?: number;
}

export const defaultParameters: FlattenParameters = {
  flattenOnlyForms: false,
  renderDpi: undefined,
};

export type FlattenParametersHook = BaseParametersHook<FlattenParameters>;

export const useFlattenParameters = (): FlattenParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "flatten",
  });
};

```

### `frontend/src/core/hooks/tools/getPdfInfo/useGetPdfInfoParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface GetPdfInfoParameters extends BaseParameters {
  // No parameters needed
}

export const defaultParameters: GetPdfInfoParameters = {};

export type GetPdfInfoParametersHook = BaseParametersHook<GetPdfInfoParameters>;

export const useGetPdfInfoParameters = (): GetPdfInfoParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "get-info-on-pdf",
  });
};

```

### `frontend/src/core/hooks/tools/merge/useMergeParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  BaseParametersHook,
  useBaseParameters,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface MergeParameters extends BaseParameters {
  removeDigitalSignature: boolean;
  generateTableOfContents: boolean;
}

export const defaultParameters: MergeParameters = {
  removeDigitalSignature: false,
  generateTableOfContents: false,
};

export type MergeParametersHook = BaseParametersHook<MergeParameters>;

export const useMergeParameters = (): MergeParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "merge-pdfs",
  });
};

```

### `frontend/src/core/hooks/tools/removeAnnotations/useRemoveAnnotationsParameters.ts`

```ts
import { useBaseParameters } from "@app/hooks/tools/shared/useBaseParameters";

export type RemoveAnnotationsParameters = Record<string, never>;

export const defaultParameters: RemoveAnnotationsParameters = {};

export const useRemoveAnnotationsParameters = () => {
  return useBaseParameters<RemoveAnnotationsParameters>({
    defaultParameters,
    endpointName: "remove-annotations", // Not used for client-side processing, but required by base hook
    validateFn: () => true, // No parameters to validate
  });
};

```

### `frontend/src/core/hooks/tools/removeImage/useRemoveImageParameters.ts`

```ts
import { useBaseParameters } from "@app/hooks/tools/shared/useBaseParameters";
import type { BaseParametersHook } from "@app/hooks/tools/shared/useBaseParameters";

export type RemoveImageParameters = Record<string, never>;

export const defaultParameters: RemoveImageParameters = {};

export type RemoveImageParametersHook =
  BaseParametersHook<RemoveImageParameters>;

export const useRemoveImageParameters = (): RemoveImageParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "remove-image-pdf",
  });
};

```

### `frontend/src/core/hooks/tools/removePassword/buildRemovePasswordFormData.ts`

```ts
import { RemovePasswordParameters } from "@app/hooks/tools/removePassword/useRemovePasswordParameters";

/**
 * Builds FormData for remove password API request.
 * Separated from operation config to avoid circular dependencies with FileContext.
 */
export const buildRemovePasswordFormData = (
  parameters: RemovePasswordParameters,
  file: File,
): FormData => {
  const formData = new FormData();
  formData.append("fileInput", file);
  formData.append("password", parameters.password);
  return formData;
};

```

### `frontend/src/core/hooks/tools/removePassword/useRemovePasswordParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface RemovePasswordParameters extends BaseParameters {
  password: string;
}

export type RemovePasswordParametersHook =
  BaseParametersHook<RemovePasswordParameters>;

export const defaultParameters: RemovePasswordParameters = {
  password: "",
};

export const useRemovePasswordParameters = (): RemovePasswordParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "remove-password",
    validateFn: (params) => {
      return params.password !== "";
    },
  });
};

```

### `frontend/src/core/hooks/tools/repair/useRepairParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface RepairParameters extends BaseParameters {
  // Extends BaseParameters - ready for future parameter additions if needed
}

export const defaultParameters: RepairParameters = {
  // No parameters needed
};

export type RepairParametersHook = BaseParametersHook<RepairParameters>;

export const useRepairParameters = (): RepairParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "repair",
    // validateFn: optional custom validation if needed in future
  });
};

```

### `frontend/src/core/hooks/tools/showJS/useShowJSParameters.ts`

```ts
import {
  useBaseParameters,
  type BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";
import { BaseParameters } from "@app/types/parameters";

export interface ShowJSParameters extends BaseParameters {
  // Extends BaseParameters - ready for future parameter additions if needed
}

export const defaultParameters: ShowJSParameters = {
  // No parameters needed
};

export type ShowJSParametersHook = BaseParametersHook<ShowJSParameters>;

export const useShowJSParameters = (): ShowJSParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "show-javascript",
  });
};

```

### `frontend/src/core/hooks/tools/singleLargePage/useSingleLargePageParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface SingleLargePageParameters extends BaseParameters {
  // Extends BaseParameters - ready for future parameter additions if needed
}

export const defaultParameters: SingleLargePageParameters = {
  // No parameters needed
};

export type SingleLargePageParametersHook =
  BaseParametersHook<SingleLargePageParameters>;

export const useSingleLargePageParameters =
  (): SingleLargePageParametersHook => {
    return useBaseParameters({
      defaultParameters,
      endpointName: "pdf-to-single-page",
    });
  };

```

### `frontend/src/core/hooks/tools/unlockPdfForms/useUnlockPdfFormsParameters.ts`

```ts
import { BaseParameters } from "@app/types/parameters";
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface UnlockPdfFormsParameters extends BaseParameters {
  // Extends BaseParameters - ready for future parameter additions if needed
}

export const defaultParameters: UnlockPdfFormsParameters = {
  // No parameters needed
};

export type UnlockPdfFormsParametersHook =
  BaseParametersHook<UnlockPdfFormsParameters>;

export const useUnlockPdfFormsParameters = (): UnlockPdfFormsParametersHook => {
  return useBaseParameters({
    defaultParameters,
    endpointName: "unlock-pdf-forms",
  });
};

```

### `frontend/src/core/hooks/tools/validateSignature/useValidateSignatureParameters.ts`

```ts
import {
  useBaseParameters,
  BaseParametersHook,
} from "@app/hooks/tools/shared/useBaseParameters";

export interface ValidateSignatureParameters {
  certFile: File | null;
}

export const defaultParameters: ValidateSignatureParameters = {
  certFile: null,
};

export type ValidateSignatureParametersHook =
  BaseParametersHook<ValidateSignatureParameters>;

export const useValidateSignatureParameters =
  (): ValidateSignatureParametersHook => {
    return useBaseParameters({
      defaultParameters,
      endpointName: "validate-signature",
    });
  };

```

### `frontend/src/core/hooks/useAppInitialization.ts`

```ts
/**
 * App initialization hook
 * Core version: no initialization needed
 *
 * This hook is called once when the app starts to allow different builds
 * to perform initialization tasks that require access to contexts like FileContext.
 */
export function useAppInitialization(): void {
  // Core version has no initialization
}

```

### `frontend/src/core/hooks/useBackendHealth.ts`

```ts
import type { BackendHealthState } from "@app/types/backendHealth";

export function useBackendHealth(): BackendHealthState {
  return {
    status: "healthy",
    message: null,
    error: null,
    isOnline: true,
  };
}

```

### `frontend/src/core/hooks/useBaseUrl.ts`

```ts
import { useAppConfig } from "@app/contexts/AppConfigContext";

export const useBaseUrl = (): string => {
  const { config } = useAppConfig();
  return config?.baseUrl || "https://demo.stirlingpdf.com";
};

```

### `frontend/src/core/hooks/useConfigButtonIcon.tsx`

```tsx
/**
 * Core stub — config button uses the default settings icon.
 */
export function useConfigButtonIcon(): React.ReactNode {
  return null;
}

```

### `frontend/src/core/hooks/useConversionCloudStatus.ts`

```ts
/**
 * Comprehensive conversion status data
 */
export interface ConversionStatus {
  availability: Record<string, boolean>; // Available on local OR SaaS?
  cloudStatus: Record<string, boolean>; // Will use cloud?
  localOnly: Record<string, boolean>; // Available ONLY locally (not on SaaS)?
}

/**
 * Core stub for conversion cloud status checking
 * Desktop layer provides the real implementation
 * In web builds, always returns empty objects (no cloud routing)
 */
export function useConversionCloudStatus(): ConversionStatus {
  return {
    availability: {},
    cloudStatus: {},
    localOnly: {},
  }; // Core stub - web builds don't use cloud
}

```

### `frontend/src/core/hooks/useCreditCheck.ts`

```ts
/**
 * Core stub for credit checking before cloud operations
 * Desktop layer shadows this with the real implementation
 * In web builds, always allows the operation (no credit system)
 */
export function useCreditCheck(_operationType?: string, _endpoint?: string) {
  return {
    checkCredits: async (_runtimeEndpoint?: string): Promise<string | null> =>
      null, // null = allowed
  };
}

```

### `frontend/src/core/hooks/useFrontendVersionInfo.ts`

```ts
export interface FrontendVersionInfo {
  appVersion: string | null | undefined; // undefined = not applicable, null = loading, string = loaded
  mismatchVersion: boolean;
}

export function useFrontendVersionInfo(
  _backendVersion: string | undefined,
): FrontendVersionInfo {
  return { appVersion: undefined, mismatchVersion: false };
}

```

### `frontend/src/core/hooks/useGroupSigningEnabled.ts`

```ts
import { useAppConfig } from "@app/contexts/AppConfigContext";

/**
 * Returns whether the shared (group) signing feature is available.
 * Core implementation reads directly from server config.
 */
export function useGroupSigningEnabled(): boolean {
  const { config } = useAppConfig();
  return config?.storageGroupSigningEnabled === true;
}

```

### `frontend/src/core/hooks/useIsMobile.ts`

```ts
import { useMediaQuery } from "@mantine/hooks";

/**
 * Custom hook to detect mobile viewport
 * Uses a consistent breakpoint across the application
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery("(max-width: 1024px)") ?? false;
};

/**
 * Custom hook to detect phone-sized viewport (≤768px)
 * Use for layouts that need a more compact single-column arrangement
 */
export const useIsPhone = (): boolean => {
  return useMediaQuery("(max-width: 768px)") ?? false;
};

```

### `frontend/src/core/hooks/useLogoPath.ts`

```ts
import { useMemo } from "react";
import { useLogoAssets } from "@app/hooks/useLogoAssets";

/** Theme-specific no-text logo SVG URLs under the active variant folder (`modern-logo` / `classic-logo`). */
export function useLogoPath(): { dark: string; light: string } {
  const { folderPath } = useLogoAssets();

  return useMemo(
    () => ({
      dark: `${folderPath}/StirlingPDFLogoNoTextDark.svg`,
      light: `${folderPath}/StirlingPDFLogoNoTextLight.svg`,
    }),
    [folderPath],
  );
}

```

### `frontend/src/core/hooks/useRequestHeaders.ts`

```ts
export function useRequestHeaders(): HeadersInit {
  return {};
}

```

### `frontend/src/core/hooks/useSaaSMode.ts`

```ts
/**
 * Stub implementation for web builds.
 * In desktop builds this is shadowed by desktop/hooks/useSaaSMode.ts which
 * returns whether the app is currently in SaaS connection mode (vs self-hosted).
 */
export function useSaaSMode(): boolean {
  return false;
}

```

### `frontend/src/core/hooks/useSelfHostedToolAvailability.ts`

```ts
/**
 * Stub implementation for web / SaaS builds.
 * In self-hosted desktop mode this is shadowed by the desktop override which
 * returns the set of tool IDs that are unavailable when the self-hosted server
 * is offline (i.e. tools whose endpoints the local bundled backend does not support).
 */
export function useSelfHostedToolAvailability(
  _tools: Array<{ id: string; endpoints?: string[] }>,
): Set<string> {
  return new Set<string>();
}

```

### `frontend/src/core/hooks/useSharingEnabled.ts`

```ts
import { useAppConfig } from "@app/contexts/AppConfigContext";

export interface SharingEnabledResult {
  sharingEnabled: boolean;
  shareLinksEnabled: boolean;
}

/**
 * Returns whether file-sharing features are available.
 * Core implementation reads directly from server config.
 */
export function useSharingEnabled(): SharingEnabledResult {
  const { config } = useAppConfig();
  return {
    sharingEnabled: config?.storageSharingEnabled === true,
    shareLinksEnabled: config?.storageShareLinksEnabled === true,
  };
}

```

### `frontend/src/core/hooks/useShouldShowWelcomeModal.ts`

```ts
import { usePreferences } from "@app/contexts/PreferencesContext";
import { useIsMobile } from "@app/hooks/useIsMobile";

export function useShouldShowWelcomeModal(): boolean {
  const { preferences } = usePreferences();
  const isMobile = useIsMobile();

  return (
    preferences.hasSeenIntroOnboarding &&
    !preferences.hasCompletedOnboarding &&
    preferences.toolPanelModePromptSeen &&
    !isMobile
  );
}

```

### `frontend/src/core/hooks/useToolCloudStatus.ts`

```ts
/**
 * Core stub for tool cloud status checking
 * Desktop layer provides the real implementation
 * In web builds, always returns false (no cloud routing)
 */
export function useToolCloudStatus(_endpointName?: string): boolean {
  return false; // Core stub - web builds don't use cloud
}

```

### `frontend/src/core/hooks/useTranslation.ts`

```ts
// Re-export react-i18next hook with our custom types
export { useTranslation } from "react-i18next";

// You can add custom hooks here later if needed
// For example, a hook that returns commonly used translations
import { useTranslation as useI18nTranslation } from "react-i18next";

export const useCommonTranslations = () => {
  const { t } = useI18nTranslation();

  return {
    submit: t("genericSubmit"),
    selectPdf: t("pdfPrompt"),
    selectPdfs: t("multiPdfPrompt"),
    selectImages: t("imgPrompt"),
    loading: t("loading", "Loading..."), // fallback if not found
    error: t("error._value", "Error"),
    success: t("success", "Success"),
  };
};

```

### `frontend/src/core/hooks/useViewerKeyCommand.ts`

```ts
// Default implementation for non-desktop environments (overridden in desktop)
export function useViewerKeyCommand(): (event: KeyboardEvent) => boolean {
  return () => false;
}

```

### `frontend/src/core/hooks/useWillUseCloud.ts`

```ts
/**
 * Core stub for cloud usage detection
 * Desktop layer provides the real implementation
 * In web builds, always returns false since there's no cloud routing
 */
export function useWillUseCloud(_endpoint?: string): boolean {
  return false; // Core stub - web builds don't use cloud
}

```

### `frontend/src/core/responses/Mfa/MfaResponse.ts`

```ts
export interface MfaErrorResponse {
  error: string;
}

export interface MfaSetupResponse {
  otpauthUri: string | null;
  secret: string | null;
  error: MfaErrorResponse | null;
}

export interface MfaSetupCancelResponse {
  cleared: boolean | null;
  error: MfaErrorResponse | null;
}

/**
 * /mfa/disable/admin/{username}
 * /mfa/disable
 * /mfa/enable
 */
export interface MfaStatusResponse {
  enabled: boolean | null;
  error: MfaErrorResponse | null;
}

```

### `frontend/src/core/services/apiClientSetup.ts`

```ts
import type { AxiosInstance } from "axios";
import { getBrowserId } from "@app/utils/browserIdentifier";

export function setupApiInterceptors(client: AxiosInstance): void {
  // Add browser ID header for WAU tracking
  client.interceptors.request.use(
    (config) => {
      const browserId = getBrowserId();
      config.headers["X-Browser-Id"] = browserId;
      return config;
    },
    (error) => Promise.reject(error),
  );
}

/** Auth headers for raw fetch() calls (SSE streams, etc.). Proprietary overrides with JWT + XSRF. */
export function getAuthHeaders(): Record<string, string> {
  return {};
}

```

### `frontend/src/core/services/backendReadinessGuard.ts`

```ts
/**
 * Default backend readiness guard (web builds do not need to wait for
 * anything outside the browser, so we always report ready).
 * @param _endpoint - Optional endpoint path (not used in web builds)
 */
export async function ensureBackendReady(_endpoint?: string): Promise<boolean> {
  return true;
}

```

### `frontend/src/core/services/desktopNotificationService.ts`

```ts
// Stub - overridden in desktop builds
export async function notifyPdfProcessingComplete(
  _fileCount: number,
): Promise<void> {
  // Web builds: no-op
}

```

### `frontend/src/core/services/fileDialogService.ts`

```ts
// Core stub - no-op implementation for web builds
// Desktop overrides this with actual Tauri implementation

export interface FileWithPath {
  file: File;
  path: string;
  quickKey: string;
}

export interface FileDialogOptions {
  multiple?: boolean;
  filters?: Array<{
    name: string;
    extensions: string[];
  }>;
}

/**
 * Open native file dialog and read selected files
 * Core stub - returns empty array (no native dialog in web)
 * Desktop builds override this with actual Tauri implementation
 */
export async function openFileDialog(
  _options?: FileDialogOptions,
): Promise<FileWithPath[]> {
  // Web build: no native file dialog support
  return [];
}

```

### `frontend/src/core/services/pendingFilePathMappings.ts`

```ts
// Module-level storage for file path mappings (quickKey -> localFilePath)
// Used to pass file paths from Tauri file dialog to FileManagerContext
export const pendingFilePathMappings = new Map<string, string>();

```

### `frontend/src/core/services/saasErrorInterceptor.ts`

```ts
/**
 * Core stub for SaaS backend error interception.
 * Desktop layer shadows this with the real implementation.
 * In web builds there are no SaaS requests, so this always returns false.
 */
export function handleSaaSError(_error: unknown): boolean {
  return false;
}

```

### `frontend/src/core/setupTests.js`

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

```

### `frontend/src/core/styles/tailwind.css`

```css
/* Import minimal theme variables */
@import "./theme.css";

@layer base {
  @tailwind base;
}

@layer components {
  @tailwind components;
}

@layer utilities {
  @tailwind utilities;
}

@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

```

### `frontend/src/core/tests/test-fixtures/sample.csv`

```csv
Name,Age,City,Country
John Doe,30,New York,USA
Jane Smith,25,London,UK
Bob Johnson,35,Toronto,Canada
Alice Brown,28,Sydney,Australia
Charlie Wilson,42,Berlin,Germany
```

### `frontend/src/core/tests/test-fixtures/sample.doc`

```doc
# Test DOC File

This is a test DOC file for conversion testing.

Content:
- Test bullet point 1
- Test bullet point 2
- Test bullet point 3

This file should be sufficient for testing office document conversions.
```

### `frontend/src/core/tests/test-fixtures/sample.pptx`

```pptx
# Test PPTX Presentation

## Slide 1: Title
This is a test PowerPoint presentation for conversion testing.

## Slide 2: Content
- Test bullet point 1
- Test bullet point 2  
- Test bullet point 3

## Slide 3: Conclusion
This file should be sufficient for testing presentation conversions.
```

### `frontend/src/core/tests/test-fixtures/sample.txt`

```txt
This is a test text file for conversion testing.

It contains multiple lines of text to test various conversion scenarios.
Special characters: àáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ
Numbers: 1234567890
Symbols: !@#$%^&*()_+-=[]{}|;':\",./<>?

This file should be sufficient for testing text-based conversions.
```

### `frontend/src/core/tests/test-fixtures/sample.xlsx`

```xlsx
Name,Age,City,Country,Department,Salary
John Doe,30,New York,USA,Engineering,75000
Jane Smith,25,London,UK,Marketing,65000
Bob Johnson,35,Toronto,Canada,Sales,70000
Alice Brown,28,Sydney,Australia,Design,68000
Charlie Wilson,42,Berlin,Germany,Operations,72000
```

### `frontend/src/core/tests/test-fixtures/sample.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<document>
    <title>Test Document</title>
    <content>
        <section id="1">
            <heading>Introduction</heading>
            <paragraph>This is a test XML document for conversion testing.</paragraph>
        </section>
        <section id="2">
            <heading>Data</heading>
            <data>
                <item name="test1" value="value1"/>
                <item name="test2" value="value2"/>
                <item name="test3" value="value3"/>
            </data>
        </section>
    </content>
</document>
```

### `frontend/src/core/tools/AddImage.tsx`

```tsx
import { createStampTool } from "@app/tools/stamp/createStampTool";

// AddImage allows users to place image-only stamps
const AddImage = createStampTool({
  toolId: "addImage",
  translationScope: "addImage",
  allowedSignatureSources: ["image"],
  defaultSignatureSource: "image",
  defaultSignatureType: "image",
  enableApplyAction: true,
});

export default AddImage;

```

### `frontend/src/core/tools/AddText.tsx`

```tsx
import { createStampTool } from "@app/tools/stamp/createStampTool";

// AddText is text-only annotation (no drawing, no images, no save-to-library)
const AddText = createStampTool({
  toolId: "addText",
  translationScope: "addText",
  allowedSignatureSources: ["text"],
  defaultSignatureSource: "text",
  defaultSignatureType: "text",
  enableApplyAction: true,
});

export default AddText;

```

### `frontend/src/core/tools/formFill/providers/index.ts`

```ts
export type { IFormDataProvider } from "@app/tools/formFill/providers/types";
export { PdfiumFormProvider } from "@app/tools/formFill/providers/PdfiumFormProvider";
export { PdfBoxFormProvider } from "@app/tools/formFill/providers/PdfBoxFormProvider";

```

### `frontend/src/core/tools/Sign.tsx`

```tsx
import { createStampTool } from "@app/tools/stamp/createStampTool";

const Sign = createStampTool({
  toolId: "sign",
  translationScope: "sign",
  allowedSignatureSources: ["canvas", "image", "text", "saved"],
  defaultSignatureSource: "canvas",
  defaultSignatureType: "canvas",
  enableApplyAction: true,
});

export default Sign;

```

### `frontend/src/core/tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../",
    "paths": {
      "@app/*": ["src/core/*"]
    }
  },
  "include": ["../global.d.ts", "../*.js", "../*.ts", "../*.tsx", "."]
}

```

### `frontend/src/core/types/backendHealth.ts`

```ts
export type BackendStatus = "stopped" | "starting" | "healthy" | "unhealthy";

export interface BackendHealthState {
  status: BackendStatus;
  message?: string | null;
  error: string | null;
  isOnline: boolean;
}

```

### `frontend/src/core/types/endpointAvailability.ts`

```ts
export type EndpointDisableReason =
  | "CONFIG"
  | "DEPENDENCY"
  | "UNKNOWN"
  | "NOT_SUPPORTED_LOCALLY"
  | null;

export interface EndpointAvailabilityDetails {
  enabled: boolean;
  reason?: EndpointDisableReason;
}

```

### `frontend/src/core/types/groupEnabled.ts`

```ts
export interface GroupEnabledResult {
  enabled: boolean | null;
  /** Human-readable reason shown when the feature is unavailable. Null while loading or when enabled. */
  unavailableReason: string | null;
}

```

### `frontend/src/core/types/metadata.ts`

```ts
export enum TrappedStatus {
  TRUE = "True",
  FALSE = "False",
  UNKNOWN = "Unknown",
}

export interface CustomMetadataEntry {
  key: string;
  value: string;
  id: string; // For React uniqueness
}

export interface ExtractedPDFMetadata {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
  producer: string;
  creationDate: string;
  modificationDate: string;
  trapped: TrappedStatus;
  customMetadata: CustomMetadataEntry[];
}

```

### `frontend/src/core/types/navigation.ts`

```ts
/**
 * Navigation types for workbench and tool separation
 */

import { WorkbenchType } from "@app/types/workbench";
import { ToolId } from "@app/types/toolId";

// Navigation state
export interface NavigationState {
  workbench: WorkbenchType;
  selectedTool: ToolId | null;
}

// Route parsing result
export interface ToolRoute {
  workbench: WorkbenchType;
  toolId: ToolId | null;
}

```

### `frontend/src/core/types/parameters.ts`

```ts
// Base parameter interfaces for reusable patterns

// Base interface that all tool parameters should extend
// Provides a foundation for adding common properties across all tools
// Examples of future additions: userId, sessionId, commonFlags, etc.
export type BaseParameters = object;

```

### `frontend/src/core/types/signature.ts`

```ts
export type SavedSignatureType = "canvas" | "image" | "text";
export type SignatureScope = "personal" | "shared" | "localStorage";

export type SavedSignaturePayload =
  | {
      type: "canvas";
      dataUrl: string;
    }
  | {
      type: "image";
      dataUrl: string;
    }
  | {
      type: "text";
      dataUrl: string;
      signerName: string;
      fontFamily: string;
      fontSize: number;
      textColor: string;
    };

export type SavedSignature = SavedSignaturePayload & {
  id: string;
  label: string;
  scope: SignatureScope;
  createdAt: number;
  updatedAt: number;
};

```

### `frontend/src/core/types/tips.ts`

```ts
export interface TooltipTip {
  title?: string;
  description?: string;
  bullets?: string[];
  body?: React.ReactNode;
}

export interface TooltipContent {
  header?: {
    title: string;
    logo?: string | React.ReactNode;
  };
  tips?: TooltipTip[];
  content?: React.ReactNode;
}

```

### `frontend/src/core/types/types.ts`

```ts
import { ReactNode } from "react";

export interface AnimatedCircleConfig {
  size: number;
  color: string;
  opacity?: number;
  blur?: number;
  position: "bottom-left" | "top-right";
  amplitude?: number;
  duration?: number;
  delay?: number;
  offsetX?: number;
  offsetY?: number;
}

export interface AnimatedSlideBackgroundProps {
  gradientStops: [string, string];
  circles: AnimatedCircleConfig[];
}

export interface SlideConfig {
  key: string;
  title: ReactNode;
  body: ReactNode;
  background: AnimatedSlideBackgroundProps;
  downloadUrl?: string;
}

export interface LicenseNotice {
  totalUsers: number | null;
  freeTierLimit: number;
  isOverLimit: boolean;
  requiresLicense: boolean;
}

```

### `frontend/src/core/utils/fileDialogUtils.ts`

```ts
export function getDocumentFileDialogFilter() {
  return [
    {
      name: "Documents",
      extensions: [
        "pdf",
        "jpg",
        "jpeg",
        "png",
        "gif",
        "tiff",
        "bmp",
        "html",
        "zip",
      ],
    },
  ];
}

```

### `frontend/src/core/utils/fileIdSafety.ts`

```ts
/**
 * Runtime validation utilities for FileId safety
 */

import { FileId } from "@app/types/fileContext";

// Validate that a string is a proper FileId (has UUID format)
export function isValidFileId(id: string): id is FileId {
  // Check UUID v4 format: 8-4-4-4-12 hex digits
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
}

```

### `frontend/src/desktop/components/SaveShortcutListener.tsx`

```tsx
import { useSaveShortcut } from "@app/hooks/useSaveShortcut";
import { useExitWarning } from "@app/hooks/useExitWarning";

/**
 * Desktop-only component that sets up keyboard shortcuts and exit warnings
 * - Ctrl/Cmd+S to save selected files
 * - Warning on app exit if unsaved files
 * Renders nothing, just sets up the listeners
 */
export function SaveShortcutListener() {
  useSaveShortcut();
  useExitWarning();
  return null;
}

```

### `frontend/src/desktop/components/SetupWizard/SelfHostedLink.tsx`

```tsx
import React from "react";
import { useTranslation } from "react-i18next";
import "@app/routes/authShared/auth.css";

interface SelfHostedLinkProps {
  onClick: () => void;
  disabled?: boolean;
}

export const SelfHostedLink: React.FC<SelfHostedLinkProps> = ({
  onClick,
  disabled = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="navigation-link-container" style={{ marginTop: "1.5rem" }}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="navigation-link-button"
      >
        {t("setup.selfhosted.link", "or connect to a self hosted account")}
      </button>
    </div>
  );
};

```

### `frontend/src/desktop/components/shared/config/configSections/GeneralSection.tsx`

```tsx
import React from "react";
import { Stack } from "@mantine/core";
import CoreGeneralSection from "@core/components/shared/config/configSections/GeneralSection";
import { DefaultAppSettings } from "@app/components/shared/config/configSections/DefaultAppSettings";

/**
 * Desktop extension of GeneralSection that adds default PDF editor settings
 */
const GeneralSection: React.FC = () => {
  return (
    <Stack gap="lg">
      <DefaultAppSettings />
      <CoreGeneralSection />
    </Stack>
  );
};

export default GeneralSection;

```

### `frontend/src/desktop/components/shared/config/types.ts`

```ts
import { VALID_NAV_KEYS as CORE_NAV_KEYS } from "@core/components/shared/config/types";

export const VALID_NAV_KEYS = [
  ...CORE_NAV_KEYS,
  "connectionMode",
  "planBilling",
] as const;

export type NavKey = (typeof VALID_NAV_KEYS)[number];

```

### `frontend/src/desktop/config/defaultAppConfig.ts`

```ts
import { AppConfig } from "@app/contexts/AppConfigContext";

/**
 * Default configuration used while the bundled backend starts up.
 */
export const DESKTOP_DEFAULT_APP_CONFIG: AppConfig = {
  enableLogin: false,
  premiumEnabled: false,
  runningProOrHigher: false,
};

```

### `frontend/src/desktop/constants/backendErrors.ts`

```ts
import i18n from "@app/i18n";

export const BACKEND_NOT_READY_CODE = "BACKEND_NOT_READY" as const;

export interface BackendNotReadyError extends Error {
  code: typeof BACKEND_NOT_READY_CODE;
}

export function createBackendNotReadyError(): BackendNotReadyError {
  return Object.assign(
    new Error(i18n.t("backendHealth.starting", "Backend starting up...")),
    {
      code: BACKEND_NOT_READY_CODE,
    },
  );
}

export function isBackendNotReadyError(
  error: unknown,
): error is BackendNotReadyError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: unknown }).code === BACKEND_NOT_READY_CODE
  );
}

```

### `frontend/src/desktop/constants/connection.ts`

```ts
/**
 * Connection-related constants for desktop app
 */

// SaaS authentication server URL
export const STIRLING_SAAS_URL: string = import.meta.env.VITE_SAAS_SERVER_URL;

// Stirling SaaS backend API server (for team endpoints, etc.)
export const STIRLING_SAAS_BACKEND_API_URL: string = import.meta.env
  .VITE_SAAS_BACKEND_API_URL;

// Supabase publishable key — used for SaaS authentication
export const SUPABASE_KEY: string = import.meta.env
  .VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

// Desktop deep link callback for Supabase email confirmations
export const DESKTOP_DEEP_LINK_CALLBACK = "stirlingpdf://auth/callback";

```

### `frontend/src/desktop/constants/creditEvents.ts`

```ts
/**
 * Credit event constants for desktop credit system
 * Used for communication between credit monitoring, UI, and operations
 */

export const CREDIT_EVENTS = {
  EXHAUSTED: "credits:exhausted",
  INSUFFICIENT: "credits:insufficient",
  REFRESH_NEEDED: "credits:refresh-needed",
} as const;

export type CreditEventType =
  (typeof CREDIT_EVENTS)[keyof typeof CREDIT_EVENTS];

```

### `frontend/src/desktop/constants/signInEvents.ts`

```ts
/**
 * CustomEvent name for opening the desktop sign-in modal (SetupWizard).
 * Kept in a leaf module so apiClientSetup and others avoid importing SignInModal (heavy graph).
 */
export const OPEN_SIGN_IN_EVENT = "stirling:open-sign-in";

```

### `frontend/src/desktop/extensions/cookieConsentConfig.ts`

```ts
export function getCookieConsentOverrides(): Record<string, unknown> {
  return {
    cookie: {
      useLocalStorage: true, // Cookies don't reliably persist on desktop, but localStorage does
    },
  };
}

```

### `frontend/src/desktop/hooks/useGroupSigningEnabled.ts`

```ts
import { useAppConfig } from "@app/contexts/AppConfigContext";
import { useSelfHostedAuth } from "@app/hooks/useSelfHostedAuth";

/**
 * Desktop override: shared (group) signing requires self-hosted mode AND
 * an authenticated session. Returns false in SaaS/local mode or when logged out.
 */
export function useGroupSigningEnabled(): boolean {
  const { config } = useAppConfig();
  const { isSelfHosted, isAuthenticated } = useSelfHostedAuth();
  return (
    isSelfHosted &&
    isAuthenticated &&
    config?.storageGroupSigningEnabled === true
  );
}

```

### `frontend/src/desktop/hooks/useSaaSMode.ts`

```ts
import { useState, useEffect } from "react";
import { connectionModeService } from "@app/services/connectionModeService";

/**
 * Returns whether the app is currently in SaaS connection mode.
 * Starts optimistically true (most common for desktop) to avoid tools
 * being incorrectly marked unavailable during initial load.
 */
export function useSaaSMode(): boolean {
  const [isSaaSMode, setIsSaaSMode] = useState(true);

  useEffect(() => {
    void connectionModeService
      .getCurrentMode()
      .then((mode) => setIsSaaSMode(mode === "saas"));
    return connectionModeService.subscribeToModeChanges((cfg) =>
      setIsSaaSMode(cfg.mode === "saas"),
    );
  }, []);

  return isSaaSMode;
}

```

### `frontend/src/desktop/hooks/useViewerKeyCommand.ts`

```ts
import { useViewer } from "@app/contexts/ViewerContext";
import { useCallback } from "react";

export function useViewerKeyCommand(): (event: KeyboardEvent) => boolean {
  const { rotationActions } = useViewer();
  return useCallback(
    (event: KeyboardEvent): boolean => {
      switch (event.key) {
        case "r":
        case "R":
          event.preventDefault();
          if (event.shiftKey) {
            rotationActions.rotateBackward();
          } else {
            rotationActions.rotateForward();
          }
          return true;
      }
      return false;
    },
    [rotationActions],
  );
}

```

### `frontend/src/desktop/routes/Landing.tsx`

```tsx
import HomePage from "@app/pages/HomePage";

/**
 * Desktop override of Landing.
 * In desktop builds, authentication is managed entirely by AppProviders,
 * the DesktopOnboardingModal, and the SignInModal — never by routing to /login.
 * Always render the main app; the onboarding/sign-in modals appear on top
 * when authentication is required.
 */
export default function Landing() {
  return <HomePage />;
}

```

### `frontend/src/desktop/routes/Login.tsx`

```tsx
import { Navigate } from "react-router-dom";

/**
 * Desktop override of the /login route.
 * The legacy web login page must never appear in desktop builds — authentication
 * is handled exclusively through the DesktopOnboardingModal and SignInModal.
 * Any navigation to /login (e.g. from Spring Boot auth redirects) is intercepted
 * here and immediately redirected to /.
 * The sign-in modal is opened by the desktop httpErrorHandler before navigation
 * occurs, so no additional dispatch is needed here.
 */
export default function Login() {
  return <Navigate to="/" replace />;
}

```

### `frontend/src/desktop/services/platformService.ts`

```ts
import { invoke } from "@tauri-apps/api/core";

export enum DesktopOs {
  Mac = "macos",
  Windows = "windows",
  Linux = "linux",
  Unknown = "unknown",
}

let desktopOsPromise: Promise<DesktopOs> | null = null;

export async function getDesktopOs() {
  if (!desktopOsPromise) {
    desktopOsPromise = invoke<DesktopOs>("get_desktop_os");
  }

  return desktopOsPromise;
}

```

### `frontend/src/desktop/tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../",
    "paths": {
      "@app/*": ["src/desktop/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "include": [
    "../global.d.ts",
    "../*.js",
    "../*.ts",
    "../*.tsx",
    "../core/setupTests.ts",
    "."
  ]
}

```

### `frontend/src/proprietary/auth/oauthTypes.ts`

```ts
/**
 * Known OAuth providers with dedicated UI support.
 * Custom providers are also supported - the backend determines availability.
 */
export const KNOWN_OAUTH_PROVIDERS = [
  "github",
  "google",
  "apple",
  "azure",
  "keycloak",
  "cloudron",
  "authentik",
  "oidc",
] as const;

export type KnownOAuthProvider = (typeof KNOWN_OAUTH_PROVIDERS)[number];

/**
 * OAuth provider ID - can be any known provider or custom string.
 * The backend configuration determines which providers are available.
 *
 * @example 'github' | 'google' | 'mycompany' | 'authentik'
 */
export type OAuthProvider = KnownOAuthProvider | (string & {});

```

### `frontend/src/proprietary/components/shared/stripeCheckout/components/PricingBadge.tsx`

```tsx
import React from "react";
import { Badge } from "@mantine/core";

interface PricingBadgeProps {
  type: "current" | "popular" | "savings";
  label: string;
  savingsPercent?: number;
}

export const PricingBadge: React.FC<PricingBadgeProps> = ({ type, label }) => {
  const color = type === "current" || type === "savings" ? "green" : "blue";
  const size = type === "savings" ? "lg" : "sm";

  return (
    <Badge
      color={color}
      variant="filled"
      size={size}
      style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      className={type === "current" ? "current-plan-badge" : undefined}
    >
      {label}
    </Badge>
  );
};

```

### `frontend/src/proprietary/components/shared/stripeCheckout/index.ts`

```ts
export { default as StripeCheckout } from "@app/components/shared/stripeCheckout/StripeCheckout";
export type {
  StripeCheckoutProps,
  CheckoutStage,
  CheckoutState,
  PollingStatus,
  SavingsCalculation,
} from "@app/components/shared/stripeCheckout/types/checkout";

```

### `frontend/src/proprietary/components/shared/stripeCheckout/stages/ErrorStage.tsx`

```tsx
import React from "react";
import { Alert, Stack, Text, Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface ErrorStageProps {
  error: string;
  onClose: () => void;
}

export const ErrorStage: React.FC<ErrorStageProps> = ({ error, onClose }) => {
  const { t } = useTranslation();

  return (
    <Alert color="red" title={t("payment.error", "Payment Error")}>
      <Stack gap="md">
        <Text size="sm">{error}</Text>
        <Button variant="outline" onClick={onClose}>
          {t("common.close", "Close")}
        </Button>
      </Stack>
    </Alert>
  );
};

```

### `frontend/src/proprietary/components/shared/UpgradeBannerInitializer.tsx`

```tsx
import { useEffect } from "react";
import { useBanner } from "@app/contexts/BannerContext";
import UpgradeBanner from "@app/components/shared/UpgradeBanner";

export function UpgradeBannerInitializer() {
  const { setBanner } = useBanner();

  useEffect(() => {
    setBanner(<UpgradeBanner />);
    return () => {
      setBanner(null);
    };
  }, [setBanner]);

  return null;
}

```

### `frontend/src/proprietary/data/useProprietaryToolRegistry.tsx`

```tsx
import { useMemo } from "react";
import { type ProprietaryToolRegistry } from "@app/data/toolsTaxonomy";

/**
 * Hook that provides the proprietary tool registry.
 *
 * This is the definition of all proprietary tools,
 * and will be included in the main tool registry.
 */
export function useProprietaryToolRegistry(): ProprietaryToolRegistry {
  return useMemo<ProprietaryToolRegistry>(() => ({}), []);
}

```

### `frontend/src/proprietary/extensions/accountLogout.ts`

```ts
type SignOutFn = () => Promise<void>;

interface AccountLogoutDeps {
  signOut: SignOutFn;
  redirectToLogin: () => void;
}

/**
 * Default (web/proprietary) logout handler: sign out and redirect to /login.
 * Desktop builds override this file via path resolution.
 */
export function useAccountLogout() {
  return async ({
    signOut,
    redirectToLogin,
  }: AccountLogoutDeps): Promise<void> => {
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "stirling_sso_auto_login_logged_out",
          "1",
        );
      }
      await signOut();
    } finally {
      redirectToLogin();
    }
  };
}

```

### `frontend/src/proprietary/extensions/authCallback.ts`

```ts
/**
 * Extension hook for platform-specific OAuth callback handling.
 * Proprietary/web builds are no-op.
 */
export async function handleAuthCallbackSuccess(_token: string): Promise<void> {
  // no-op for web builds
}

```

### `frontend/src/proprietary/extensions/authSessionCleanup.ts`

```ts
/**
 * Extension hooks for platform-specific auth cleanup.
 * Proprietary/web builds are no-op.
 */
export async function clearPlatformAuthAfterSignOut(): Promise<void> {
  // no-op for web builds
}

export async function clearPlatformAuthOnLoginInit(): Promise<void> {
  // no-op for web builds
}

```

### `frontend/src/proprietary/extensions/oauthNavigation.ts`

```ts
/**
 * Extension hook for platform-specific OAuth navigation.
 * Proprietary/web builds default to in-window navigation.
 */
export async function startOAuthNavigation(
  _redirectUrl: string,
): Promise<boolean> {
  return false;
}

```

### `frontend/src/proprietary/hooks/useRequestHeaders.ts`

```ts
export function useRequestHeaders(): HeadersInit {
  const token = localStorage.getItem("stirling_jwt");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

```

### `frontend/src/proprietary/hooks/useServerExperience.ts`

```ts
import { useServerExperienceContext } from "@app/contexts/ServerExperienceContext";

export function useServerExperience() {
  return useServerExperienceContext();
}

```

### `frontend/src/proprietary/hooks/useShouldShowWelcomeModal.ts`

```ts
import { usePreferences } from "@app/contexts/PreferencesContext";
import { useAuth } from "@app/auth/UseSession";
import { useIsMobile } from "@app/hooks/useIsMobile";

export function useShouldShowWelcomeModal(): boolean {
  const { preferences } = usePreferences();
  const { session, loading } = useAuth();
  const isMobile = useIsMobile();

  // Only show welcome modal if user is authenticated (session exists)
  // This prevents the modal from showing on login screens when security is enabled
  return (
    !loading &&
    !preferences.hasCompletedOnboarding &&
    preferences.toolPanelModePromptSeen &&
    !isMobile &&
    !!session
  );
}

```

### `frontend/src/proprietary/routes/login/ErrorMessage.tsx`

```tsx
interface ErrorMessageProps {
  error: string | null;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <div className="error-message">
      <p className="error-message-text">{error}</p>
    </div>
  );
}

```

### `frontend/src/proprietary/routes/login/LoginHeader.tsx`

```tsx
import { Wordmark } from "@app/components/shared/Wordmark";

interface LoginHeaderProps {
  title: string;
  subtitle?: string;
  centerOnly?: boolean;
}

export default function LoginHeader({
  title,
  subtitle,
  centerOnly = false,
}: LoginHeaderProps) {
  return (
    <div
      className={`login-header${centerOnly ? " login-header-centered" : ""}`}
    >
      <div className="login-header-logos">
        <Wordmark alt="Stirling PDF" className="login-logo-text" />
      </div>
      {title && <h1 className="login-title">{title}</h1>}
      {subtitle && <p className="login-subtitle">{subtitle}</p>}
    </div>
  );
}

```

### `frontend/src/proprietary/routes/login/NavigationLink.tsx`

```tsx
import { Button } from "@mantine/core";

interface NavigationLinkProps {
  onClick: () => void;
  text: string;
  isDisabled?: boolean;
}

export default function NavigationLink({
  onClick,
  text,
  isDisabled = false,
}: NavigationLinkProps) {
  return (
    <div className="navigation-link-container">
      <Button
        onClick={onClick}
        disabled={isDisabled}
        className="navigation-link-button"
        variant="subtle"
      >
        {text}
      </Button>
    </div>
  );
}

```

### `frontend/src/proprietary/tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../",
    "paths": {
      "@app/*": ["src/proprietary/*", "src/core/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "include": [
    "../global.d.ts",
    "../*.js",
    "../*.ts",
    "../*.tsx",
    "../core/setupTests.ts",
    "."
  ]
}

```

### `frontend/src/proprietary/types/license.ts`

```ts
export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface LicenseInfo {
  licenseType: "NORMAL" | "SERVER" | "ENTERPRISE";
  enabled: boolean;
  maxUsers: number;
  hasKey: boolean;
  licenseKey?: string;
}

```

### `frontend/src/proprietary/types/proprietaryToolId.ts`

```ts
/**
 * Proprietary tool ID definitions.
 * This file overrides src/core/types/proprietaryToolId.ts
 * to add proprietary-specific tool IDs.
 */

export const PROPRIETARY_REGULAR_TOOL_IDS = [] as const;

export const PROPRIETARY_SUPER_TOOL_IDS = [] as const;

export const PROPRIETARY_LINK_TOOL_IDS = [] as const;

export type ProprietaryRegularToolId =
  (typeof PROPRIETARY_REGULAR_TOOL_IDS)[number];
export type ProprietarySuperToolId =
  (typeof PROPRIETARY_SUPER_TOOL_IDS)[number];
export type ProprietaryLinkToolId = (typeof PROPRIETARY_LINK_TOOL_IDS)[number];
export type ProprietaryToolId =
  | ProprietaryRegularToolId
  | ProprietarySuperToolId
  | ProprietaryLinkToolId;

```

### `frontend/src/proprietary/utils/urlMapping.ts`

```ts
/**
 * Proprietary URL mappings.
 * This file overrides src/core/utils/urlMapping.ts
 * to add proprietary-specific URL mappings.
 */

import { ToolId } from "@app/types/toolId";
import { URL_TO_TOOL_MAP as CORE_URL_TO_TOOL_MAP } from "@core/utils/urlMapping";

// Proprietary URL mappings
const PROPRIETARY_URL_MAPPINGS: Record<string, ToolId> = {};

// Merge core and proprietary mappings
export const URL_TO_TOOL_MAP: Record<string, ToolId> = {
  ...CORE_URL_TO_TOOL_MAP,
  ...PROPRIETARY_URL_MAPPINGS,
};

```

### `frontend/src/prototypes/components/AppProviders.tsx`

```tsx
import { AppProviders as ProprietaryAppProviders } from "@proprietary/components/AppProviders";
import { type AppProvidersProps } from "@core/components/AppProviders";
import { ChatProvider } from "@app/components/chat/ChatContext";

export type { AppProvidersProps };

export function AppProviders({
  children,
  appConfigRetryOptions,
  appConfigProviderProps,
}: AppProvidersProps) {
  return (
    <ProprietaryAppProviders
      appConfigRetryOptions={appConfigRetryOptions}
      appConfigProviderProps={appConfigProviderProps}
    >
      <ChatProvider>{children}</ChatProvider>
    </ProprietaryAppProviders>
  );
}

```

### `frontend/src/prototypes/components/home/HomePageExtensions.tsx`

```tsx
import { ChatPanel } from "@app/components/chat/ChatPanel";

export function HomePageExtensions() {
  return <ChatPanel />;
}

```

### `frontend/src/prototypes/tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../",
    "paths": {
      "@app/*": ["src/prototypes/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "include": [
    "../global.d.ts",
    "../*.js",
    "../*.ts",
    "../*.tsx",
    "../core/setupTests.ts",
    "."
  ]
}

```

### `frontend/src/reportWebVitals.js`

```js
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

### `frontend/src/saas/components/home/HomePageExtensions.tsx`

```tsx
import UserbackWidget from "@app/components/feedback/UserbackWidget";

export function HomePageExtensions() {
  const userbackToken = import.meta.env.VITE_USERBACK_TOKEN;
  return userbackToken ? <UserbackWidget token={userbackToken} /> : null;
}

```

### `frontend/src/saas/components/onboarding/OnboardingTour.tsx`

```tsx
/**
 * SaaS stub — core tour system is suppressed in SaaS.
 * SaaS uses SaasOnboardingModal instead.
 */
export default function OnboardingTour() {
  return null;
}

```

### `frontend/src/saas/components/shared/utils/date.ts`

```ts
export function formatUTC(iso: string, withTime: boolean): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "-";
  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...(withTime ? { hour: "2-digit", minute: "2-digit", hour12: false } : {}),
    timeZone: "UTC",
  }).format(date);
  return withTime ? `${formatted} UTC` : formatted;
}

```

### `frontend/src/saas/constants/app.ts`

```ts
// Re-export all constants from core
export * from "@core/constants/app";

// SaaS-specific overrides
// Get base URL with fallback (for use outside React components)
export const getBaseUrl = (): string => {
  // Try to get from window object if set by app config
  return window.__STIRLING_PDF_BASE_URL__ || window.location.origin;
};

// Helper to set base URL (to be called when app config loads)
export const setBaseUrl = (url: string): void => {
  window.__STIRLING_PDF_BASE_URL__ = url;
};

```

### `frontend/src/saas/constants/authProviders.ts`

```ts
export type OAuthProviderId = "google" | "apple" | "github" | "azure";

export type OAuthProviderMeta = {
  id: OAuthProviderId;
  label: string;
  file: string;
  isDisabled: boolean;
};

export const oauthProviders: readonly OAuthProviderMeta[] = [
  { id: "google", label: "Google", file: "google.svg", isDisabled: false },
  { id: "github", label: "GitHub", file: "github.svg", isDisabled: false },
] as const;

```

### `frontend/src/saas/constants/links.ts`

```ts
export const devApiLink =
  "https://registry.scalar.com/@stirlingpdf/apis/stirling-pdf-processing-api/";

```

### `frontend/src/saas/contexts/OnboardingContext.tsx`

```tsx
/**
 * SaaS stub — core onboarding is suppressed in SaaS builds.
 * OnboardingBootstrap calls these to clear any pending core tour state.
 */
export function useOnboarding() {
  return {
    clearPendingTourRequest: () => {},
    setStartAfterToolModeSelection: (_value: boolean) => {},
  };
}

```

### `frontend/src/saas/hooks/useConfigButtonIcon.tsx`

```tsx
import { Avatar } from "@mantine/core";
import { useAuth } from "@app/auth/UseSession";

export function useConfigButtonIcon(): React.ReactNode {
  const { profilePictureUrl } = useAuth();
  return profilePictureUrl ? (
    <Avatar src={profilePictureUrl} radius="xl" size={24} />
  ) : null;
}

```

### `frontend/src/saas/hooks/useJwtConfigSync.ts`

```ts
/**
 * SaaS no-op: Supabase handles auth, no JWT event listener needed,
 * and config is fetched on all pages (401 handling covers unauthenticated state).
 */
export function useJwtConfigSync(_fetchConfig: (force?: boolean) => void): {
  isAuthPage: boolean;
} {
  return { isAuthPage: false };
}

```

### `frontend/src/saas/routes/authShared/GuestSignInButton.tsx`

```tsx
import React from "react";
import "@app/routes/authShared/auth.css";
import "@app/routes/authShared/saas-auth.css";

interface GuestSignInButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function GuestSignInButton({
  label,
  onClick,
  disabled,
}: GuestSignInButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full px-4 py-[0.75rem] rounded-[0.625rem] text-base font-semibold mb-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed auth-guest-button"
    >
      {label}
    </button>
  );
}

```

### `frontend/src/saas/routes/login/LoadingState.tsx`

```tsx
import { useTranslation } from "@app/hooks/useTranslation";

export default function LoadingState() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "32px", marginBottom: "16px" }}>⏳</div>
        <p style={{ color: "#6b7280" }}>{t("loading")}</p>
      </div>
    </div>
  );
}

```

### `frontend/src/saas/routes/login/SuccessMessage.tsx`

```tsx
interface SuccessMessageProps {
  success: string | null;
}

export default function SuccessMessage({ success }: SuccessMessageProps) {
  if (!success) return null;

  return (
    <div className="success-message">
      <p className="success-message-text">{success}</p>
    </div>
  );
}

```

### `frontend/src/saas/styles/zIndex.ts`

```ts
// Centralized z-index constants for new usages added in this branch.
// Keep values identical to their original inline usages.

// Re-export all core z-index constants
export * from "@core/styles/zIndex";

// SaaS-specific z-index constants
export const Z_ANALYTICS_MODAL = 1301;
export const Z_INDEX_OVER_SETTINGS_MODAL = 1400;

```

### `frontend/src/saas/tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../../",
    "paths": {
      "@app/*": ["src/saas/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "include": ["../global.d.ts", "../*.js", "../*.ts", "../*.tsx", "."]
}

```

### `frontend/src/saas/types/charts.ts`

```ts
export interface FractionData {
  name: string;
  numerator: number;
  denominator: number;
  numeratorLabel: string;
  denominatorLabel: string;
  color: string;
}

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface StackedBarChartProps {
  fractions: FractionData[];
  width?: number;
  height?: number;
  showLegend?: boolean;
  className?: string;
  tooltipPosition?: TooltipPosition;
  loading?: boolean;
  animate?: boolean;
  animationDurationMs?: number;
  ariaLabel?: string;
}

export interface TooltipData {
  fractions: FractionData[];
  isDark: boolean;
}

```

### `frontend/tsconfig.core.vite.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/core/*"]
    }
  },
  "exclude": ["src/proprietary", "src/desktop", "node_modules"]
}

```

### `frontend/tsconfig.desktop.vite.json`

```json
{
  "extends": "./tsconfig.proprietary.vite.json",
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/desktop/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "exclude": [
    "src/core/**/*.test.ts*",
    "src/core/**/*.spec.ts*",
    "src/proprietary/**/*.test.ts*",
    "src/proprietary/**/*.spec.ts*",
    "node_modules"
  ]
}

```

### `frontend/tsconfig.proprietary.vite.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "exclude": [
    "src/core/**/*.test.ts*",
    "src/core/**/*.spec.ts*",
    "src/desktop",
    "node_modules"
  ]
}

```

### `frontend/tsconfig.prototypes.vite.json`

```json
{
  "extends": "./tsconfig.proprietary.vite.json",
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/prototypes/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "exclude": [
    "src/core/**/*.test.ts*",
    "src/core/**/*.spec.ts*",
    "src/proprietary/**/*.test.ts*",
    "src/proprietary/**/*.spec.ts*",
    "src/desktop",
    "src/saas",
    "node_modules"
  ]
}

```

### `frontend/tsconfig.saas.vite.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/saas/*", "src/proprietary/*", "src/core/*"],
      "@proprietary/*": ["src/proprietary/*"],
      "@core/*": ["src/core/*"]
    }
  },
  "exclude": [
    "src/core/**/*.test.ts*",
    "src/core/**/*.spec.ts*",
    "src/proprietary/**/*.test.ts*",
    "src/proprietary/**/*.spec.ts*",
    "src/desktop",
    "node_modules"
  ]
}

```

### `gradle.properties`

```properties
# Enables parallel execution of tasks, allowing multiple tasks to run simultaneously
org.gradle.parallel=true

# Enables build caching to reuse outputs from previous builds for faster execution
org.gradle.caching=true

org.gradle.build-scan=true
# allow Gradle to download the toolchain version requested by the build
org.gradle.java.installations.auto-download=true

org.gradle.daemon=true
# org.gradle.configuration-cache=true

```

### `gradle/wrapper/gradle-wrapper.properties`

```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-9.3.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists

```

### `scripts/remove_translation_keys.sh`

```sh
#!/bin/bash

# Check if a key was provided
if [ $# -eq 0 ]; then
    echo "Please provide a key to remove."
    exit 1
fi

key_to_remove="$1"

for file in ../app/core/src/main/resources/messages_*.properties; do
    # If the key ends with a dot, remove all keys starting with it
    if [[ "$key_to_remove" == *. ]]; then
        sed -i "/^${key_to_remove//./\\.}/d" "$file"
    else
        # Otherwise, remove only the exact key match
        sed -i "/^${key_to_remove//./\\.}=/d" "$file"
    fi
    echo "Updated $file"
done

```

### `scripts/replace_translation_line.sh`

```sh
#!/bin/bash

translation_key="pdfToPDFA.credit"
old_value="qpdf"
new_value="liibreoffice"

for file in ../app/core/src/main/resources/messages_*.properties; do
  sed -i "/^$translation_key=/s/$old_value/$new_value/" "$file"
  echo "Updated $file"
done

```

### `testing/cucumber/behave.ini`

```ini
[behave]
# Enterprise and premium-licensed features live in features/enterprise/.
# They are excluded from the default CI run because the test environment
# does not have a commercial licence.  To run them explicitly:
#
#   python -m behave features/enterprise
#
exclude_re = features/enterprise

```

### `testing/cucumber/exampleFiles/example.html`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>

```

### `testing/cucumber/exampleFiles/example.md`

```md
header
============

Header2
------------
text

text2

## **PDF Features**

### **Page Operations**

- View and modify PDFs - View multi page PDFs with custom viewing sorting and searching. Plus on page edit features like annotate, draw and adding text and images. (Using PDF.js with Joxit and Liberation.Liberation fonts)
- Full interactive GUI for merging/splitting/rotating/moving PDFs and their pages.
- Merge multiple PDFs together into a single resultant file.
```

### `testing/cucumber/requirements.in`

```in
behave
behave-html-formatter
requests
pypdf
reportlab
PyCryptodome
qrcode[pil]

```
