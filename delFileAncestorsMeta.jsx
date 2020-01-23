//forums.adobe.com/message/9671488#9671488
#target photoshop;  
var inputFolder= Folder.selectDialog ("Please select folder to process");  
if(inputFolder != null){  
var fileList  = inputFolder.getFiles(/\.(jpg|tif|psd|png)$/i);  
for(var a in fileList){delFileAncestorsMeta(fileList[a]);}  
}  
function delFileAncestorsMeta(selectedFile) {          
if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");       
var xmpFile = new XMPFile( selectedFile.fsName, XMPConst.FILE_UNKNOWN, XMPConst.OPEN_FOR_UPDATE | XMPConst.OPEN_USE_SMART_HANDLER );   
var xmp = xmpFile.getXMP();  
xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");  
if (xmpFile.canPutXMP(xmp)) {   
        xmpFile.putXMP(xmp);  
         xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);   
         }                
};    
