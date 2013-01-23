/*!
 * VisualEditor ModelRegistry tests.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

QUnit.module( 've.dm.ModelRegistry' );

/* Stubs */
function checkForPickMe( element ) {
	return element.hasAttribute( 'pickme' );
}

ve.dm.StubNothingSetAnnotation = function VeDmStubNothingSetAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubNothingSetAnnotation, ve.dm.Annotation );
ve.dm.StubNothingSetAnnotation.static.name = 'stubnothingset';

ve.dm.StubSingleTagAnnotation = function VeDmStubSingleTagAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubSingleTagAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTagAnnotation.static.name = 'stubsingletag';
ve.dm.StubSingleTagAnnotation.static.matchTagNames = ['a'];

ve.dm.StubSingleTypeAnnotation = function VeDmStubSingleTypeAnnotation( element ) {
	ve.dm.Annotation.call( this, 'stubsingletype', element );
};
ve.inheritClass( ve.dm.StubSingleTypeAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTypeAnnotation.static.name = 'stubsingletype';
ve.dm.StubSingleTypeAnnotation.static.matchRdfaTypes = ['mw:foo'];

ve.dm.StubSingleTagAndTypeAnnotation = function VeDmStubSingleTagAndTypeAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubSingleTagAndTypeAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTagAndTypeAnnotation.static.name = 'stubsingletagandtype';
ve.dm.StubSingleTagAndTypeAnnotation.static.matchTagNames = ['a'];
ve.dm.StubSingleTagAndTypeAnnotation.static.matchRdfaTypes = ['mw:foo'];

ve.dm.StubFuncAnnotation = function VeDmStubFuncAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubFuncAnnotation, ve.dm.Annotation );
ve.dm.StubFuncAnnotation.static.name = 'stubfunc';
ve.dm.StubFuncAnnotation.static.matchFunction = checkForPickMe;

ve.dm.StubSingleTagAndFuncAnnotation = function VeDmStubSingleTagAndFuncAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubSingleTagAndFuncAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTagAndFuncAnnotation.static.name = 'stubsingletagandfunc';
ve.dm.StubSingleTagAndFuncAnnotation.static.matchTagNames = ['a'];
ve.dm.StubSingleTagAndFuncAnnotation.static.matchFunction = checkForPickMe;

ve.dm.StubSingleTypeAndFuncAnnotation = function VeDmStubSingleTypeAndFuncAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubSingleTypeAndFuncAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTypeAndFuncAnnotation.static.name = 'stubsingletypeandfunc';
ve.dm.StubSingleTypeAndFuncAnnotation.static.matchRdfaTypes = ['mw:foo'];
ve.dm.StubSingleTypeAndFuncAnnotation.static.matchFunction = checkForPickMe;

ve.dm.StubSingleTagAndTypeAndFuncAnnotation = function VeDmStubSingleTagAndTypeAndFuncAnnotation( element ) {
	ve.dm.Annotation.call( this, element );
};
ve.inheritClass( ve.dm.StubSingleTagAndTypeAndFuncAnnotation, ve.dm.Annotation );
ve.dm.StubSingleTagAndTypeAndFuncAnnotation.static.name = 'stubsingletagandtypeandfunc';
ve.dm.StubSingleTagAndTypeAndFuncAnnotation.static.matchTagNames = ['a'];
ve.dm.StubSingleTagAndTypeAndFuncAnnotation.static.matchRdfaTypes = ['mw:foo'];
ve.dm.StubSingleTagAndTypeAndFuncAnnotation.static.matchFunction = checkForPickMe;

/* Tests */

QUnit.test( 'matchElement', 9, function ( assert ) {
	var registry = new ve.dm.ModelRegistry(), element;
	element = document.createElement( 'a' );
	assert.deepEqual( registry.matchElement( element ), null, 'matchElement() returns null if registry empty' );

	registry.register( ve.dm.StubNothingSetAnnotation );
	registry.register( ve.dm.StubSingleTagAnnotation );
	registry.register( ve.dm.StubSingleTypeAnnotation );
	registry.register( ve.dm.StubSingleTagAndTypeAnnotation );
	registry.register( ve.dm.StubFuncAnnotation );
	registry.register( ve.dm.StubSingleTagAndFuncAnnotation );
	registry.register( ve.dm.StubSingleTypeAndFuncAnnotation );
	registry.register( ve.dm.StubSingleTagAndTypeAndFuncAnnotation );

	element = document.createElement( 'b' );
	assert.deepEqual( registry.matchElement( element ), 'stubnothingset', 'nothingset matches anything' );
	element.setAttribute( 'rel', 'mw:foo' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletype', 'type-only match' );
	element = document.createElement( 'a' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletag', 'tag-only match' );
	element.setAttribute( 'rel', 'mw:foo' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletagandtype', 'tag and type match' );
	element.setAttribute( 'pickme', 'true' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletagandtypeandfunc', 'tag, type and func match' );
	element.setAttribute( 'rel', 'mw:bar' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletagandfunc', 'tag and func match' );
	element = document.createElement( 'b' );
	element.setAttribute( 'pickme', 'true' );
	assert.deepEqual( registry.matchElement( element ), 'stubfunc', 'func-only match' );
	element.setAttribute( 'rel', 'mw:foo' );
	assert.deepEqual( registry.matchElement( element ), 'stubsingletypeandfunc', 'type and func match' );
} );