define(function(require, exports, module) {
// Generated from cql.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by cqlParser.

function cqlVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

cqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
cqlVisitor.prototype.constructor = cqlVisitor;

// Visit a parse tree produced by cqlParser#logic.
cqlVisitor.prototype.visitLogic = function(ctx) {
};


// Visit a parse tree produced by cqlParser#libraryDefinition.
cqlVisitor.prototype.visitLibraryDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#usingDefinition.
cqlVisitor.prototype.visitUsingDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#includeDefinition.
cqlVisitor.prototype.visitIncludeDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#localIdentifier.
cqlVisitor.prototype.visitLocalIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#accessModifier.
cqlVisitor.prototype.visitAccessModifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#parameterDefinition.
cqlVisitor.prototype.visitParameterDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codesystemDefinition.
cqlVisitor.prototype.visitCodesystemDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#valuesetDefinition.
cqlVisitor.prototype.visitValuesetDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codesystems.
cqlVisitor.prototype.visitCodesystems = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codesystemIdentifier.
cqlVisitor.prototype.visitCodesystemIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#libraryIdentifier.
cqlVisitor.prototype.visitLibraryIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codesystemId.
cqlVisitor.prototype.visitCodesystemId = function(ctx) {
};


// Visit a parse tree produced by cqlParser#valuesetId.
cqlVisitor.prototype.visitValuesetId = function(ctx) {
};


// Visit a parse tree produced by cqlParser#versionSpecifier.
cqlVisitor.prototype.visitVersionSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#typeSpecifier.
cqlVisitor.prototype.visitTypeSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#namedTypeSpecifier.
cqlVisitor.prototype.visitNamedTypeSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#modelIdentifier.
cqlVisitor.prototype.visitModelIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#listTypeSpecifier.
cqlVisitor.prototype.visitListTypeSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#intervalTypeSpecifier.
cqlVisitor.prototype.visitIntervalTypeSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#tupleTypeSpecifier.
cqlVisitor.prototype.visitTupleTypeSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#tupleElementDefinition.
cqlVisitor.prototype.visitTupleElementDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#statement.
cqlVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by cqlParser#expressionDefinition.
cqlVisitor.prototype.visitExpressionDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#contextDefinition.
cqlVisitor.prototype.visitContextDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#functionDefinition.
cqlVisitor.prototype.visitFunctionDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#operandDefinition.
cqlVisitor.prototype.visitOperandDefinition = function(ctx) {
};


// Visit a parse tree produced by cqlParser#functionBody.
cqlVisitor.prototype.visitFunctionBody = function(ctx) {
};


// Visit a parse tree produced by cqlParser#querySource.
cqlVisitor.prototype.visitQuerySource = function(ctx) {
};


// Visit a parse tree produced by cqlParser#aliasedQuerySource.
cqlVisitor.prototype.visitAliasedQuerySource = function(ctx) {
};


// Visit a parse tree produced by cqlParser#alias.
cqlVisitor.prototype.visitAlias = function(ctx) {
};


// Visit a parse tree produced by cqlParser#queryInclusionClause.
cqlVisitor.prototype.visitQueryInclusionClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#withClause.
cqlVisitor.prototype.visitWithClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#withoutClause.
cqlVisitor.prototype.visitWithoutClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#retrieve.
cqlVisitor.prototype.visitRetrieve = function(ctx) {
};


// Visit a parse tree produced by cqlParser#valuesetPathIdentifier.
cqlVisitor.prototype.visitValuesetPathIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#valueset.
cqlVisitor.prototype.visitValueset = function(ctx) {
};


// Visit a parse tree produced by cqlParser#qualifier.
cqlVisitor.prototype.visitQualifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#query.
cqlVisitor.prototype.visitQuery = function(ctx) {
};


// Visit a parse tree produced by cqlParser#sourceClause.
cqlVisitor.prototype.visitSourceClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#singleSourceClause.
cqlVisitor.prototype.visitSingleSourceClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#multipleSourceClause.
cqlVisitor.prototype.visitMultipleSourceClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#defineClause.
cqlVisitor.prototype.visitDefineClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#defineClauseItem.
cqlVisitor.prototype.visitDefineClauseItem = function(ctx) {
};


// Visit a parse tree produced by cqlParser#whereClause.
cqlVisitor.prototype.visitWhereClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#returnClause.
cqlVisitor.prototype.visitReturnClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#sortClause.
cqlVisitor.prototype.visitSortClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#sortDirection.
cqlVisitor.prototype.visitSortDirection = function(ctx) {
};


// Visit a parse tree produced by cqlParser#sortByItem.
cqlVisitor.prototype.visitSortByItem = function(ctx) {
};


// Visit a parse tree produced by cqlParser#qualifiedIdentifier.
cqlVisitor.prototype.visitQualifiedIdentifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#durationBetweenExpression.
cqlVisitor.prototype.visitDurationBetweenExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#inFixSetExpression.
cqlVisitor.prototype.visitInFixSetExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#retrieveExpression.
cqlVisitor.prototype.visitRetrieveExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#timingExpression.
cqlVisitor.prototype.visitTimingExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#notExpression.
cqlVisitor.prototype.visitNotExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#queryExpression.
cqlVisitor.prototype.visitQueryExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#booleanExpression.
cqlVisitor.prototype.visitBooleanExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#orExpression.
cqlVisitor.prototype.visitOrExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#castExpression.
cqlVisitor.prototype.visitCastExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#andExpression.
cqlVisitor.prototype.visitAndExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#betweenExpression.
cqlVisitor.prototype.visitBetweenExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#membershipExpression.
cqlVisitor.prototype.visitMembershipExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#differenceBetweenExpression.
cqlVisitor.prototype.visitDifferenceBetweenExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#inequalityExpression.
cqlVisitor.prototype.visitInequalityExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#equalityExpression.
cqlVisitor.prototype.visitEqualityExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#existenceExpression.
cqlVisitor.prototype.visitExistenceExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#termExpression.
cqlVisitor.prototype.visitTermExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#typeExpression.
cqlVisitor.prototype.visitTypeExpression = function(ctx) {
};


// Visit a parse tree produced by cqlParser#dateTimePrecision.
cqlVisitor.prototype.visitDateTimePrecision = function(ctx) {
};


// Visit a parse tree produced by cqlParser#dateTimeComponent.
cqlVisitor.prototype.visitDateTimeComponent = function(ctx) {
};


// Visit a parse tree produced by cqlParser#pluralDateTimePrecision.
cqlVisitor.prototype.visitPluralDateTimePrecision = function(ctx) {
};


// Visit a parse tree produced by cqlParser#additionExpressionTerm.
cqlVisitor.prototype.visitAdditionExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#indexedExpressionTerm.
cqlVisitor.prototype.visitIndexedExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#widthExpressionTerm.
cqlVisitor.prototype.visitWidthExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#timeUnitExpressionTerm.
cqlVisitor.prototype.visitTimeUnitExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#ifThenElseExpressionTerm.
cqlVisitor.prototype.visitIfThenElseExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#timeBoundaryExpressionTerm.
cqlVisitor.prototype.visitTimeBoundaryExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#elementExtractorExpressionTerm.
cqlVisitor.prototype.visitElementExtractorExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#conversionExpressionTerm.
cqlVisitor.prototype.visitConversionExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#typeExtentExpressionTerm.
cqlVisitor.prototype.visitTypeExtentExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#predecessorExpressionTerm.
cqlVisitor.prototype.visitPredecessorExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#accessorExpressionTerm.
cqlVisitor.prototype.visitAccessorExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#multiplicationExpressionTerm.
cqlVisitor.prototype.visitMultiplicationExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#aggregateExpressionTerm.
cqlVisitor.prototype.visitAggregateExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#durationExpressionTerm.
cqlVisitor.prototype.visitDurationExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#caseExpressionTerm.
cqlVisitor.prototype.visitCaseExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#powerExpressionTerm.
cqlVisitor.prototype.visitPowerExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#successorExpressionTerm.
cqlVisitor.prototype.visitSuccessorExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#polarityExpressionTerm.
cqlVisitor.prototype.visitPolarityExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#termExpressionTerm.
cqlVisitor.prototype.visitTermExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#invocationExpressionTerm.
cqlVisitor.prototype.visitInvocationExpressionTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#caseExpressionItem.
cqlVisitor.prototype.visitCaseExpressionItem = function(ctx) {
};


// Visit a parse tree produced by cqlParser#dateTimePrecisionSpecifier.
cqlVisitor.prototype.visitDateTimePrecisionSpecifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#relativeQualifier.
cqlVisitor.prototype.visitRelativeQualifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#offsetRelativeQualifier.
cqlVisitor.prototype.visitOffsetRelativeQualifier = function(ctx) {
};


// Visit a parse tree produced by cqlParser#quantityOffset.
cqlVisitor.prototype.visitQuantityOffset = function(ctx) {
};


// Visit a parse tree produced by cqlParser#concurrentWithIntervalOperatorPhrase.
cqlVisitor.prototype.visitConcurrentWithIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#includesIntervalOperatorPhrase.
cqlVisitor.prototype.visitIncludesIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#includedInIntervalOperatorPhrase.
cqlVisitor.prototype.visitIncludedInIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#beforeOrAfterIntervalOperatorPhrase.
cqlVisitor.prototype.visitBeforeOrAfterIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#withinIntervalOperatorPhrase.
cqlVisitor.prototype.visitWithinIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#meetsIntervalOperatorPhrase.
cqlVisitor.prototype.visitMeetsIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#overlapsIntervalOperatorPhrase.
cqlVisitor.prototype.visitOverlapsIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#startsIntervalOperatorPhrase.
cqlVisitor.prototype.visitStartsIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#endsIntervalOperatorPhrase.
cqlVisitor.prototype.visitEndsIntervalOperatorPhrase = function(ctx) {
};


// Visit a parse tree produced by cqlParser#identifierTerm.
cqlVisitor.prototype.visitIdentifierTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#literalTerm.
cqlVisitor.prototype.visitLiteralTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#intervalSelectorTerm.
cqlVisitor.prototype.visitIntervalSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#tupleSelectorTerm.
cqlVisitor.prototype.visitTupleSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#instanceSelectorTerm.
cqlVisitor.prototype.visitInstanceSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#listSelectorTerm.
cqlVisitor.prototype.visitListSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codeSelectorTerm.
cqlVisitor.prototype.visitCodeSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#conceptSelectorTerm.
cqlVisitor.prototype.visitConceptSelectorTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#parenthesizedTerm.
cqlVisitor.prototype.visitParenthesizedTerm = function(ctx) {
};


// Visit a parse tree produced by cqlParser#intervalSelector.
cqlVisitor.prototype.visitIntervalSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#tupleSelector.
cqlVisitor.prototype.visitTupleSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#tupleElementSelector.
cqlVisitor.prototype.visitTupleElementSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#instanceSelector.
cqlVisitor.prototype.visitInstanceSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#instanceElementSelector.
cqlVisitor.prototype.visitInstanceElementSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#listSelector.
cqlVisitor.prototype.visitListSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#displayClause.
cqlVisitor.prototype.visitDisplayClause = function(ctx) {
};


// Visit a parse tree produced by cqlParser#codeSelector.
cqlVisitor.prototype.visitCodeSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#conceptSelector.
cqlVisitor.prototype.visitConceptSelector = function(ctx) {
};


// Visit a parse tree produced by cqlParser#literal.
cqlVisitor.prototype.visitLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#nullLiteral.
cqlVisitor.prototype.visitNullLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#booleanLiteral.
cqlVisitor.prototype.visitBooleanLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#stringLiteral.
cqlVisitor.prototype.visitStringLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#dateTimeLiteral.
cqlVisitor.prototype.visitDateTimeLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#timeLiteral.
cqlVisitor.prototype.visitTimeLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#quantityLiteral.
cqlVisitor.prototype.visitQuantityLiteral = function(ctx) {
};


// Visit a parse tree produced by cqlParser#unit.
cqlVisitor.prototype.visitUnit = function(ctx) {
};


// Visit a parse tree produced by cqlParser#identifier.
cqlVisitor.prototype.visitIdentifier = function(ctx) {
};



exports.cqlVisitor = cqlVisitor;
});