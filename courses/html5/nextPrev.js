/* if (window.location.href.indexOf("html5_01_default.htmlx") > -1) {
    alert("found it");
} */

var qq = 'html5_01_default.htmlhtml5_02_intro.htmlhtml5_03_editors.htmlhtml5_04_basic.htmlhtml5_05_elements.htmlhtml5_06_attributes.htmlhtml5_07_headings.htmlhtml5_08_paragraphs.htmlhtml5_09_styles.htmlhtml5_10_formatting.htmlhtml5_11_quotation_elements.htmlhtml5_12_comments.htmlhtml5_13_colors.htmlhtml5_14_css.htmlhtml5_15_links.htmlhtml5_16_images.htmlhtml5_17_tables.htmlhtml5_18_lists.htmlhtml5_19_blocks.htmlhtml5_20_classes.htmlhtml5_21_id.htmlhtml5_22_iframe.htmlhtml5_23_scripts.htmlhtml5_24_filepaths.htmlhtml5_25_head.htmlhtml5_26_layout.htmlhtml5_27_responsive.htmlhtml5_28_computercode_elements.htmlhtml5_29_entities.htmlhtml5_30_symbols.htmlhtml5_31_charset.htmlhtml5_32_urlencode.htmlhtml5_33_xhtml.htmlhtml5_34_forms.htmlhtml5_35_form_elements.htmlhtml5_36_form_input_types.htmlhtml5_37_form_attributes.htmlhtml5_38_intro.htmlhtml5_39_browsers.htmlhtml5_40_new_elements.htmlhtml5_41_semantic_elements.htmlhtml5_42_migration.htmlhtml5_43_syntax.htmlhtml5_44_canvas.htmlhtml5_45_svg.htmlhtml5_46_googlemaps.htmlhtml5_47_media.htmlhtml5_48_video.htmlhtml5_49_audio.htmlhtml5_50_object.htmlhtml5_51_youtube.htmlhtml5_52_geolocation.htmlhtml5_53_draganddrop.htmlhtml5_54_webstorage.htmlhtml5_55_webworkers.htmlhtml5_56_serversentevents.html';

var fullPath = window.location.href;
var filename = fullPath.replace(/^.*[\\\/]/, '').replace('html5_','');
var av = parseInt(filename.charAt(0)+filename.charAt(1)) + 1;
var nstr = 'html5_0' + av + '_';
//alert(nstr);
var search = qq.search(nstr+/[.*]/+'.html');
if(av<10){
$('.tpNextPev>.pull-left').attr('href',search);
}