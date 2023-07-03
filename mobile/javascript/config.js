	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="請聯繫<a href=mailto:author@sample.com><u>本人</u></a>來訪問本書";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#589492";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=24;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2518;;bookConfig.securityType="1";bookConfig.CreatedTime ="220712012800";bookConfig.bookTitle="西瓜之旅.indd";bookConfig.bookmarkCR="241c3d060332ae49834363bbcfa950ee4e81d3b1";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227554036","alpha":"1","location":{"tannoName":"sound1","x":"0.48601077104952056","y":"0.464111816072219","width":"0.3975342928449457","height":"0.0535330435050584","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/1.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227553191","alpha":"1","location":{"tannoName":"sound2","x":"0.27772044059972606","y":"0.08584727233705786","width":"0.41395357565067276","height":"0.05573365883757427","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/2.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227552223","alpha":"1","location":{"tannoName":"sound3","x":"0.2871028879172844","y":"0.301806816809969","width":"0.42783959768065905","height":"0.05762420480696649","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/3.mp3"}}}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227558408","alpha":"1","location":{"tannoName":"sound4","x":"0.12197181512825807","y":"0.6317822698555351","width":"0.39049745735677693","height":"0.052581454306447936","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/4 前.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227555810","alpha":"1","location":{"tannoName":"sound5","x":"0.12197181512825807","y":"0.4252122707944897","width":"0.35840948753072754","height":"0.04828909068959504","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/5.mp3"}}}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227554014","alpha":"1","location":{"tannoName":"sound6","x":"0.48225779212249725","y":"0.4520395433998203","width":"0.4053217241185191","height":"0.054593499751847734","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/6.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227556616","alpha":"1","location":{"tannoName":"sound7","x":"0.11634234673772308","y":"0.061702726992260336","width":"0.3512788275693832","height":"0.047283067966895145","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/7.mp3"}}}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227551362","alpha":"1","location":{"tannoName":"sound8","x":"0.2983618246983543","y":"0.8249386326139153","width":"0.39087275524947934","height":"0.052648522487961265","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":[{"url":"./files/pageConfig/8.mp3"},{"url":"./files/pageConfig/4 切 接到P16.mp3"}]}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227559686","alpha":"1","location":{"tannoName":"sound9","x":"0.13135426244581638","y":"0.04024090890799587","width":"0.39406278733744915","height":"0.053050931577041216","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/9.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227555696","alpha":"1","location":{"tannoName":"sound10","x":"0.12384830459176972","y":"0.2816863623559711","width":"0.33213863504156427","height":"0.044734477069388746","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/10.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227553617","alpha":"1","location":{"tannoName":"sound11","x":"0.11446585727421141","y":"0.04292363616852893","width":"0.41282768197256575","height":"0.05559952247454763","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/11.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227559364","alpha":"1","location":{"tannoName":"sound12","x":"0.09945394156611811","y":"0.2722968169441054","width":"0.3338274755587248","height":"0.04493568161392872","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/12.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227553720","alpha":"1","location":{"tannoName":"sound13","x":"0.16137809386200297","y":"0.24144545344797522","width":"0.27209097220919104","height":"0.036644499174672565","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/13.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"202211222755956","alpha":"1","location":{"tannoName":"sound14","x":"0.5141581130021955","y":"0.24144545344797522","width":"0.2734983393068248","height":"0.03682043165081622","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/14單字2.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227558703","alpha":"1","location":{"tannoName":"sound16","x":"0.1707605411795613","y":"0.5110595431315476","width":"0.26270852489163277","height":"0.03541199983903636","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/14 單字3.mp3"}}}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227553383","alpha":"1","location":{"tannoName":"sound15","x":"0.4728753448049389","y":"0.2736381805743719","width":"0.36178716856504856","height":"0.04873117486862302","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/15 前.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2022112227551262","alpha":"1","location":{"tannoName":"sound17","x":"0.4728753448049389","y":"0.4493568161392872","width":"0.3608489238332927","height":"0.04860436657095687","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"532.91","pageHeight":"745.51"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer06","className":"StandardAudioPlayer06","H5Replay":"false","H5PlaybackNumber":"1","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/15 後.mp3"}}}}],[],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}