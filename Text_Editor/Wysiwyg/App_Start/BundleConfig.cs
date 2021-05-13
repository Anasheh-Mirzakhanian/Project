using System.Web.Optimization;

namespace Wysiwyg
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/script/js").Include(
                        "~/Scripts/baseCustomControl.js",
                        "~/Scripts/wysiwyg.js",                       
                         "~/Scripts/BaseBars/baseBar.js",
                         "~/Scripts/BaseBars/toolBar.js",                                 
                         "~/Scripts/BaseButtons/baseButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/toolButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/boldButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/italicButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/underlineButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/strikeThroughButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/subScriptButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/superScriptButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/highlightColorInputButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/highlightColorButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/fontColorInputButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/fontColorButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/alignLeftButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/alignCenterButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/alignRightButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/redoButton.js",
                         "~/Scripts/BaseButtons/ToolButtons/undoButton.js",
                         "~/Scripts/editor.js",
                         "~/Scripts/BaseBars/fileBar.js",
                         "~/Scripts/fileDiv.js",
                         "~/Scripts/fileInput.js",
                         "~/Scripts/fileLabel.js",
                         "~/Scripts/fileSpan.js",
                         "~/Scripts/BaseBars/buttonBar.js",
                         "~/Scripts/BaseButtons/ActionButtons/actionButton.js",
                         "~/Scripts/BaseButtons/ActionButtons/newButton.js",
                         "~/Scripts/BaseButtons/ActionButtons/saveButton.js",
                         "~/Scripts/BaseButtons/ActionButtons/deleteButton.js"
                        ));;

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/style/wysiwyg.css"
                      ));
        }
    }
}
