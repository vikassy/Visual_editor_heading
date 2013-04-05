/*!
 * VisualEditor UserInterface EditorPanelLayout class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Editor panel layout.
 *
 * @class
 * @extends ve.ui.PanelLayout
 * @mixins ve.ui.LabeledElement
 *
 * @constructor
 * @param {Object} [config] Config options
 * @cfg {string} [icon=''] Symbolic icon name
 */
ve.ui.EditorPanelLayout = function VeUiEditorPanelLayout( config ) {
	// Config initialization
	config = ve.extendObject( config, { 'scroll': true } );

	// Parent constructor
	ve.ui.PanelLayout.call( this, config );

	// Mixin constructors
	ve.ui.LabeledElement.call( this, this.$$( '<div>' ), config );

	// Initialization
	this.$label.addClass( 've-ui-icon-' + config.icon + '-big' );
	this.$.append( this.$label ).addClass( 've-ui-editorPanelLayout' );
};

/* Inheritance */

ve.inheritClass( ve.ui.EditorPanelLayout, ve.ui.PanelLayout );

ve.mixinClass( ve.ui.EditorPanelLayout, ve.ui.LabeledElement );