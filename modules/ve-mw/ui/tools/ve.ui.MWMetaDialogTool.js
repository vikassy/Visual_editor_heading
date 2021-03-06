/*!
 * VisualEditor MediaWiki UserInterface meta tool classes.
 *
 * @copyright 2011-2014 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * MediaWiki UserInterface meta dialog tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.MWMetaDialogTool = function VeUiMWMetaDialogTool( toolbar, config ) {
	ve.ui.DialogTool.call( this, toolbar, config );
};
OO.inheritClass( ve.ui.MWMetaDialogTool, ve.ui.DialogTool );
ve.ui.MWMetaDialogTool.static.name = 'meta';
ve.ui.MWMetaDialogTool.static.group = 'utility';
ve.ui.MWMetaDialogTool.static.icon = 'window';
ve.ui.MWMetaDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-meta-tool' );
ve.ui.MWMetaDialogTool.static.dialog = 'meta';
ve.ui.MWMetaDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.MWMetaDialogTool );

/**
 * MediaWiki UserInterface page settings tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.MWPageSettingsDialogTool = function VeUiMWPageSettingsDialogTool( toolbar, config ) {
	ve.ui.DialogTool.call( this, toolbar, config );
};
OO.inheritClass( ve.ui.MWPageSettingsDialogTool, ve.ui.DialogTool );
ve.ui.MWPageSettingsDialogTool.static.name = 'settings';
ve.ui.MWPageSettingsDialogTool.static.group = 'utility';
ve.ui.MWPageSettingsDialogTool.static.icon = 'settings';
ve.ui.MWPageSettingsDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-settings-tool' );
ve.ui.MWPageSettingsDialogTool.static.dialog = 'meta';
ve.ui.MWPageSettingsDialogTool.static.config = { 'page': 'settings' };
ve.ui.MWPageSettingsDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.MWPageSettingsDialogTool );

/**
 * MediaWiki UserInterface advanced page settings tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.MWAdvancedPageSettingsDialogTool = function VeUiMWAdvancedPageSettingsDialogTool( toolbar, config ) {
	ve.ui.DialogTool.call( this, toolbar, config );
};
OO.inheritClass( ve.ui.MWAdvancedPageSettingsDialogTool, ve.ui.DialogTool );
ve.ui.MWAdvancedPageSettingsDialogTool.static.name = 'advancedSettings';
ve.ui.MWAdvancedPageSettingsDialogTool.static.group = 'utility';
ve.ui.MWAdvancedPageSettingsDialogTool.static.icon = 'advanced';
ve.ui.MWAdvancedPageSettingsDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-advancedsettings-tool' );
ve.ui.MWAdvancedPageSettingsDialogTool.static.dialog = 'meta';
ve.ui.MWAdvancedPageSettingsDialogTool.static.config = { 'page': 'advancedSettings' };
ve.ui.MWAdvancedPageSettingsDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.MWAdvancedPageSettingsDialogTool );

/**
 * MediaWiki UserInterface categories tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.MWCategoriesDialogTool = function VeUiMWCategoriesDialogTool( toolbar, config ) {
	ve.ui.DialogTool.call( this, toolbar, config );
};
OO.inheritClass( ve.ui.MWCategoriesDialogTool, ve.ui.DialogTool );
ve.ui.MWCategoriesDialogTool.static.name = 'categories';
ve.ui.MWCategoriesDialogTool.static.group = 'utility';
ve.ui.MWCategoriesDialogTool.static.icon = 'tag';
ve.ui.MWCategoriesDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-categories-tool' );
ve.ui.MWCategoriesDialogTool.static.dialog = 'meta';
ve.ui.MWCategoriesDialogTool.static.config = { 'page': 'categories' };
ve.ui.MWCategoriesDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.MWCategoriesDialogTool );

/**
 * MediaWiki UserInterface languages tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.Toolbar} toolbar
 * @param {Object} [config] Configuration options
 */
ve.ui.MWLanguagesDialogTool = function VeUiMWLanguagesDialogTool( toolbar, config ) {
	ve.ui.DialogTool.call( this, toolbar, config );
};
OO.inheritClass( ve.ui.MWLanguagesDialogTool, ve.ui.DialogTool );
ve.ui.MWLanguagesDialogTool.static.name = 'languages';
ve.ui.MWLanguagesDialogTool.static.group = 'utility';
ve.ui.MWLanguagesDialogTool.static.icon = 'language';
ve.ui.MWLanguagesDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-languages-tool' );
ve.ui.MWLanguagesDialogTool.static.dialog = 'meta';
ve.ui.MWLanguagesDialogTool.static.config = { 'page': 'languages' };
ve.ui.MWLanguagesDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.MWLanguagesDialogTool );
