define(function(require, exports, module) {
// Generated from cql.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var Context = require("./parse_context").Context
var CompositeType = require("./model").CompositeType
var ListType = require("./model").ListType
var SimpleType = require('./model').SimpleType
var ResolverType = require("./model").ResolverType
var Resolver = require("./parse_context").Resolver
var System = require("./model").System  
var ModelManager = require("./model_manager").ModelManagerInstance
var LibMan =require("./library_manager")
var LibraryManager = require("./library_manager").LibraryManagerInstance
 

function qualifiedResolver(ctx,context){
  var parts = []
  var qs = ctx.qualifier();
  for(var i = 0; qs && i < qs.length; i++){
    parts.push(qs[i].getText());
  }
  var id = ctx.identifier();
  if(id) {parts.push(id.getText())}
  return new ResolverType(new Resolver(context,parts))
}
// This class defines a complete listener for a parse tree produced by cqlParser.
function cqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
  this.includes = {};// just the name and alias for now.  SHould be expandable to pull in other info from lib 
  this.models = [];  // just model names 
  this.paramteters = {}; // just name, maybe type in the meta
  this.functions = {}; // name, params?
  this.expressions = []; // just identifiers ?
  this.valuesets = []; // should be indentified as a valueset
  this.currentContext = null;
  this.types = [];
  this.rules = [];
  this.index=0;
  LibraryManager = require("./library_manager").LibraryManagerInstance
 
	return this;
}



cqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
cqlListener.prototype.constructor = cqlListener;

cqlListener.prototype.toModel = function(){
 return {includes: this.includes,
   models: this.models,
  // paramteters: this.paramteters,
   functions: this.functions,
   expressions: this.expressions,
   valuesets: this.valuesets}
}

cqlListener.prototype.exitEveryRule = function( ctx){
if(ctx && ctx.start && ctx.stop){
   //console.log("have rule "+ this.index++);
  this.rules.push({index: this.index++, start: ctx.start.start, stop: ctx.stop.stop , ruleContext: ctx, context: this.currentContext});
}else if(ctx && ctx.start) {
  this.rules.push({index: this.index++,start: ctx.start.start, stop: ctx.start.stop , ruleContext: ctx, context: this.currentContext});

}

}

cqlListener.prototype.getRuleAt = function(index) {

  var filtered = this.rules.filter(function(r){
    return r.start <= index && r.stop >= index;
  })
  //sort the list so we can easily grab the closest value
  filtered.sort(function(b,a){ 
     //sort based on the  rules that exit first. These will be the most
     //specific rules even if when there are rules that have the same 
     //start and end because the encompassing rule will have to wait for the 
     //child rules to finsih and exit first
      return (a.index > b.index)? -1 : 1
    
      // if(a.start < b.start){
      //   return -1;
      // }
      // if(a.start > b.start ){
      //   return 1;
      // }
      // if(a.start == b.start){
      //   if(a.stop > b.stop){
      //     return -1
      //   }else if(a.stop < b.stop){
      //     return 1;
      //   }else {
      //     return 0
      //   }
      // }
    });

  var rule = filtered[0]
  return rule;
};
// Enter a parse tree produced by cqlParser#logic.
cqlListener.prototype.enterLogic = function(ctx) {
  this.currentContext = new Context()
  console.log("start logic")
};

// Exit a parse tree produced by cqlParser#logic.
cqlListener.prototype.exitLogic = function(ctx) {
  if(this.models[0]){
    var ptype = this.models[0].patientClassName
    if(ptype){
      this.currentContext.set("Patient", this.models[0].resolve(ptype))
    }
  }
};


// Enter a parse tree produced by cqlParser#libraryDefinition.
cqlListener.prototype.enterLibraryDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#libraryDefinition.
cqlListener.prototype.exitLibraryDefinition = function(ctx) {
};


// Enter a parse tree produced by cqlParser#usingDefinition.
cqlListener.prototype.enterUsingDefinition = function(ctx) {
 
};

// Exit a parse tree produced by cqlParser#usingDefinition.
cqlListener.prototype.exitUsingDefinition = function(ctx) {
   var mid = ctx.identifier().getText()
   ModelManager.loadModel(mid)
   this.models.push(ModelManager.getModel(mid));
   this.currentContext.set(ctx.identifier().getText(), ModelManager.getModel(mid))
};


// Enter a parse tree produced by cqlParser#includeDefinition.
cqlListener.prototype.enterIncludeDefinition = function(ctx) {
 
};

// Exit a parse tree produced by cqlParser#includeDefinition.
cqlListener.prototype.exitIncludeDefinition = function(ctx) {
   var libId = ctx.identifier().getText();
   var alias = ctx.localIdentifier() ? ctx.localIdentifier().getText(): ctx.identifier().getText() ;
   this.includes[libId] = alias;
   LibraryManager.loadLibrary(libId)
   this.currentContext.set(alias, LibraryManager.getLibrary(libId))
};


// Enter a parse tree produced by cqlParser#localIdentifier.
cqlListener.prototype.enterLocalIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#localIdentifier.
cqlListener.prototype.exitLocalIdentifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#accessModifier.
cqlListener.prototype.enterAccessModifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#accessModifier.
cqlListener.prototype.exitAccessModifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#parameterDefinition.
cqlListener.prototype.enterParameterDefinition = function(ctx) {
 
};

// Exit a parse tree produced by cqlParser#parameterDefinition.
cqlListener.prototype.exitParameterDefinition = function(ctx) {
   var spec = ctx.typeSpecifier() || ctx.expression()
   var type = spec ? spec.__type : null
   // create parame type with access modifier
   this.currentContext.set(ctx.identifier().getText(), type)
};


// Enter a parse tree produced by cqlParser#codesystemDefinition.
cqlListener.prototype.enterCodesystemDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codesystemDefinition.
cqlListener.prototype.exitCodesystemDefinition = function(ctx) {
};


// Enter a parse tree produced by cqlParser#valuesetDefinition.
cqlListener.prototype.enterValuesetDefinition = function(ctx) {
  
};

// Exit a parse tree produced by cqlParser#valuesetDefinition.
cqlListener.prototype.exitValuesetDefinition = function(ctx) {
  this.valuesets.push(ctx.identifier().getText());
};


// Enter a parse tree produced by cqlParser#codesystems.
cqlListener.prototype.enterCodesystems = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codesystems.
cqlListener.prototype.exitCodesystems = function(ctx) {
};


// Enter a parse tree produced by cqlParser#codesystemIdentifier.
cqlListener.prototype.enterCodesystemIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codesystemIdentifier.
cqlListener.prototype.exitCodesystemIdentifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#libraryIdentifier.
cqlListener.prototype.enterLibraryIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#libraryIdentifier.
cqlListener.prototype.exitLibraryIdentifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#codesystemId.
cqlListener.prototype.enterCodesystemId = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codesystemId.
cqlListener.prototype.exitCodesystemId = function(ctx) {
};


// Enter a parse tree produced by cqlParser#valuesetId.
cqlListener.prototype.enterValuesetId = function(ctx) {
};

// Exit a parse tree produced by cqlParser#valuesetId.
cqlListener.prototype.exitValuesetId = function(ctx) {
};


// Enter a parse tree produced by cqlParser#versionSpecifier.
cqlListener.prototype.enterVersionSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#versionSpecifier.
cqlListener.prototype.exitVersionSpecifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#typeSpecifier.
cqlListener.prototype.enterTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#typeSpecifier.
cqlListener.prototype.exitTypeSpecifier = function(ctx) {
  if(ctx.namedTypeSpecifier()){
    ctx.__type = ctx.namedTypeSpecifier().__type 
  }else if(ctx.listTypeSpecifier()){
    ctx.__type = ctx.listTypeSpecifier().__type 
  }else if(ctx.intervalTypeSpecifier()){
    ctx.__type = ctx.intervalTypeSpecifier().__type 
  }else if(ctx.tupleTypeSpecifier()){
    ctx.__type = ctx.tupleTypeSpecifier().__type
  }
};


// Enter a parse tree produced by cqlParser#namedTypeSpecifier.
cqlListener.prototype.enterNamedTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#namedTypeSpecifier.
cqlListener.prototype.exitNamedTypeSpecifier = function(ctx) {
   var model = (ctx.modelIdentifier()) ? ctx.modelIdentifier().getText() : null
   var klass = (ctx.identifier()) ? ctx.identifier().getText() : null

   if(model){
      if(model == "System"){
        ctx.__type = System.resolve(klass) 
      }else{
        ctx.__type = this.currentContext.resolve(model).resolve(klass)
      }
   }else if(this.models.length == 1){
      ctx.__type = this.models[0].resolve(klass)
   }else{
      ctx.__type = System.ANY
   }
};


// Enter a parse tree produced by cqlParser#modelIdentifier.
cqlListener.prototype.enterModelIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#modelIdentifier.
cqlListener.prototype.exitModelIdentifier = function(ctx) {

};


// Enter a parse tree produced by cqlParser#listTypeSpecifier.
cqlListener.prototype.enterListTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#listTypeSpecifier.
cqlListener.prototype.exitListTypeSpecifier = function(ctx) {
  ctx.__type = new ListType(ctx.__type)
};


// Enter a parse tree produced by cqlParser#intervalTypeSpecifier.
cqlListener.prototype.enterIntervalTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#intervalTypeSpecifier.
cqlListener.prototype.exitIntervalTypeSpecifier = function(ctx) {
  ctx.__type = System.Interval 
};


// Enter a parse tree produced by cqlParser#tupleTypeSpecifier.
cqlListener.prototype.enterTupleTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#tupleTypeSpecifier.
cqlListener.prototype.exitTupleTypeSpecifier = function(ctx) {
  
  ctx.__aliases = {}
  for(var i = 0; i < ctx.children.length; i++){
    var child = ctx.children[i];
    if(child.__alias){
      ctx.__aliases[child.__alias] = child.__type
    }
    
  }
  ctx.__type =  new CompositeType("tuple",ctx.__aliases)
};


// Enter a parse tree produced by cqlParser#tupleElementDefinition.
cqlListener.prototype.enterTupleElementDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#tupleElementDefinition.
cqlListener.prototype.exitTupleElementDefinition = function(ctx) {
  ctx.__alias = ctx.identifier().getText()
  ctx.__type = ctx.typeSpecifier().__type
};


// Enter a parse tree produced by cqlParser#statement.
cqlListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by cqlParser#statement.
cqlListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by cqlParser#expressionDefinition.
cqlListener.prototype.enterExpressionDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#expressionDefinition.
cqlListener.prototype.exitExpressionDefinition = function(ctx) {
  // TO-DO :
  /*
    This should set the expression identifier to the type of 
    whatever is returned from the expression handling. This may
    be a boolean in the case of And expressions or a hard coded
    Tuple or the return value from a query.  Whatever it is it
    should be set to that

    this.currentContext.set(ctx.identifier().__identifier, ctx.expression().__type)
  */
  this.expressions.push(ctx.identifier().getText());
  this.currentContext.set(ctx.identifier().getText(),ctx.expression().__type)
};


// Enter a parse tree produced by cqlParser#contextDefinition.
cqlListener.prototype.enterContextDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#contextDefinition.
cqlListener.prototype.exitContextDefinition = function(ctx) {
};


// Enter a parse tree produced by cqlParser#functionDefinition.
cqlListener.prototype.enterFunctionDefinition = function(ctx) {
  this.currentContext = this.currentContext.createChildContext(ctx.start,ctx.end)
};

// Exit a parse tree produced by cqlParser#functionDefinition.
cqlListener.prototype.exitFunctionDefinition = function(ctx) {
  /*
    This should set just like it was an expression def.
    this.currentContext.set(ctx.identifier().__identifier, ctx.functionBody().__type)
    this.currentContext = this.currentContext.parent
  */
  this.functions[ctx.identifier().getText()] = ctx.operandDefinition().map(function(o){return [o.identifier(),o.typeSpecifier()]});
  this.currentContext = this.currentContext.parent;
};


// Enter a parse tree produced by cqlParser#operandDefinition.
cqlListener.prototype.enterOperandDefinition = function(ctx) {
};

// Exit a parse tree produced by cqlParser#operandDefinition.
cqlListener.prototype.exitOperandDefinition = function(ctx) {
  this.currentContext.set(ctx.identifier().getText(),ctx.typeSpecifier().__type)
};


// Enter a parse tree produced by cqlParser#functionBody.
cqlListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by cqlParser#functionBody.
cqlListener.prototype.exitFunctionBody = function(ctx) {
  // this should be able to set its type to the return type of the expression
  ctx.__type = ctx.expression().__type
};


// Enter a parse tree produced by cqlParser#querySource.
cqlListener.prototype.enterQuerySource = function(ctx) {
};

// Exit a parse tree produced by cqlParser#querySource.
cqlListener.prototype.exitQuerySource = function(ctx) {
  if(ctx.retrieve()){
    ctx.__type = ctx.retrieve().__type;
  }else if(ctx.qualifiedIdentifier()){
    ctx.__type = qualifiedResolver(ctx.qualifiedIdentifier(), this.currentContext)
  }else if(ctx.expression()) {
    ctx.__type = ctx.expression().__type;
  }
};


// Enter a parse tree produced by cqlParser#aliasedQuerySource.
cqlListener.prototype.enterAliasedQuerySource = function(ctx) {
};

// Exit a parse tree produced by cqlParser#aliasedQuerySource.
cqlListener.prototype.exitAliasedQuerySource = function(ctx) {
  // must set its type to that of what is beeing aliased. 
  // context.set(alias, type)
  // type may have to behave like a promis of sorts or a lookup
  // if it is not something like a retrieve
  ctx.__alias = ctx.alias().identifier().getText()
  ctx.__type = ctx.querySource().__type
  this.currentContext.set(ctx.__alias, ctx.__type)
};


// Enter a parse tree produced by cqlParser#alias.
cqlListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by cqlParser#alias.
cqlListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by cqlParser#queryInclusionClause.
cqlListener.prototype.enterQueryInclusionClause = function(ctx) {
  //create a new context
  this.currentContext = this.currentContext.createChildContext(ctx.start,ctx.stop)
};

// Exit a parse tree produced by cqlParser#queryInclusionClause.
cqlListener.prototype.exitQueryInclusionClause = function(ctx) {
  // close the context.  AliasedQS should have set itself on the context 
  this.currentContext = this.currentContext.parent;
};


// Enter a parse tree produced by cqlParser#withClause.
cqlListener.prototype.enterWithClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#withClause.
cqlListener.prototype.exitWithClause = function(ctx) {
};


// Enter a parse tree produced by cqlParser#withoutClause.
cqlListener.prototype.enterWithoutClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#withoutClause.
cqlListener.prototype.exitWithoutClause = function(ctx) {
};


// Enter a parse tree produced by cqlParser#retrieve.
cqlListener.prototype.enterRetrieve = function(ctx) {

};

// Exit a parse tree produced by cqlParser#retrieve.
cqlListener.prototype.exitRetrieve = function(ctx) {
  // set the type that gets returned 
   ctx.__type =ctx.namedTypeSpecifier().__type // new ModelType(this,model,klass) should be model class from ctx.namedTypeSpecifier()
};


// Enter a parse tree produced by cqlParser#valuesetPathIdentifier.
cqlListener.prototype.enterValuesetPathIdentifier = function(ctx) {
  var a = 1;
};

// Exit a parse tree produced by cqlParser#valuesetPathIdentifier.
cqlListener.prototype.exitValuesetPathIdentifier = function(ctx) {
  var a = 1;
};


// Enter a parse tree produced by cqlParser#valueset.
cqlListener.prototype.enterValueset = function(ctx) {
};

// Exit a parse tree produced by cqlParser#valueset.
cqlListener.prototype.exitValueset = function(ctx) {
};


// Enter a parse tree produced by cqlParser#qualifier.
cqlListener.prototype.enterQualifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#qualifier.
cqlListener.prototype.exitQualifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#query.
cqlListener.prototype.enterQuery = function(ctx) {
  this.currentContext = this.currentContext.createChildContext(ctx.start,ctx.stop)
};

// Exit a parse tree produced by cqlParser#query.
cqlListener.prototype.exitQuery = function(ctx) {
 
  //queries always return lists so we just need to know what
  // type is in the list Tuple, Class, Integer .....
  var listType = null;
  if (ctx.returnClause()){
   listType = ctx.returnClause().__type 
  }else if(ctx.sourceClause().__alias){ 
    listType = ctx.sourceClause().__type
  }else{
    listType = new CompositeType("tupel",ctx.sourceClause().__aliases) // new TupleType(ctx.__aliases, this.context) // make into tuple type with aliases ctx.__aliases; // this will be a tuple of all the aliased q sources and defined vars
  }// this will be a list of whatever the return result is
  // return clause may be a tuple or not.  Need to figure that out
  ctx.__type = new ListType(listType);
  this.currentContext = this.currentContext.parent;
};


// Enter a parse tree produced by cqlParser#sourceClause.
cqlListener.prototype.enterSourceClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#sourceClause.
cqlListener.prototype.exitSourceClause = function(ctx) {
  if(ctx.singleSourceClause()){
    ctx.__alias= ctx.singleSourceClause().__alias 
    ctx.__type = ctx.singleSourceClause().__type
  }else {
    ctx.__aliases = ctx.multipleSourceClause().__aliases;
  }
};


// Enter a parse tree produced by cqlParser#singleSourceClause.
cqlListener.prototype.enterSingleSourceClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#singleSourceClause.
cqlListener.prototype.exitSingleSourceClause = function(ctx) {
  ctx.__alias = ctx.aliasedQuerySource().__alias
  ctx.__type = ctx.aliasedQuerySource().__type;
};


// Enter a parse tree produced by cqlParser#multipleSourceClause.
cqlListener.prototype.enterMultipleSourceClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#multipleSourceClause.
cqlListener.prototype.exitMultipleSourceClause = function(ctx) {
  ctx.__aliases = {}
  var children = ctx.aliasedQuerySource()
  for(var i = 0; i < children.length; i++){
    var child = children[i];
    if(child.__alias){
      ctx.__aliases[child.__alias] = child.__type
    }
    
  }
};


// Enter a parse tree produced by cqlParser#defineClause.
cqlListener.prototype.enterDefineClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#defineClause.
cqlListener.prototype.exitDefineClause = function(ctx) {

};


// Enter a parse tree produced by cqlParser#defineClauseItem.
cqlListener.prototype.enterDefineClauseItem = function(ctx) {
};

// Exit a parse tree produced by cqlParser#defineClauseItem.
cqlListener.prototype.exitDefineClauseItem = function(ctx) {
  this.currentContext.set(ctx.identifier().getText(),ctx.expression().__type)
};


// Enter a parse tree produced by cqlParser#whereClause.
cqlListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#whereClause.
cqlListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by cqlParser#returnClause.
cqlListener.prototype.enterReturnClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#returnClause.
cqlListener.prototype.exitReturnClause = function(ctx) {
  ctx.__type = ctx.expression().__type
};


// Enter a parse tree produced by cqlParser#sortClause.
cqlListener.prototype.enterSortClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#sortClause.
cqlListener.prototype.exitSortClause = function(ctx) {
};


// Enter a parse tree produced by cqlParser#sortDirection.
cqlListener.prototype.enterSortDirection = function(ctx) {
};

// Exit a parse tree produced by cqlParser#sortDirection.
cqlListener.prototype.exitSortDirection = function(ctx) {
};


// Enter a parse tree produced by cqlParser#sortByItem.
cqlListener.prototype.enterSortByItem = function(ctx) {
};

// Exit a parse tree produced by cqlParser#sortByItem.
cqlListener.prototype.exitSortByItem = function(ctx) {
};


// Enter a parse tree produced by cqlParser#qualifiedIdentifier.
cqlListener.prototype.enterQualifiedIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#qualifiedIdentifier.
cqlListener.prototype.exitQualifiedIdentifier = function(ctx) {
  ctx.__type = new ResolverType(new Resolver(this.currentContext, ctx.getText()))
};


// Enter a parse tree produced by cqlParser#durationBetweenExpression.
cqlListener.prototype.enterDurationBetweenExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#durationBetweenExpression.
cqlListener.prototype.exitDurationBetweenExpression = function(ctx) {
 ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#inFixSetExpression.
cqlListener.prototype.enterInFixSetExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#inFixSetExpression.
cqlListener.prototype.exitInFixSetExpression = function(ctx) {
  ctx.__type = ctx.expression()[0].__type
};


// Enter a parse tree produced by cqlParser#retrieveExpression.
cqlListener.prototype.enterRetrieveExpression = function(ctx) {

};

// Exit a parse tree produced by cqlParser#retrieveExpression.
cqlListener.prototype.exitRetrieveExpression = function(ctx) {
  ctx.__type = ctx.retrieve().__type
};


// Enter a parse tree produced by cqlParser#timingExpression.
cqlListener.prototype.enterTimingExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#timingExpression.
cqlListener.prototype.exitTimingExpression = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#notExpression.
cqlListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#notExpression.
cqlListener.prototype.exitNotExpression = function(ctx) {
  ctx.__type = System.Boolean 
};


// Enter a parse tree produced by cqlParser#queryExpression.
cqlListener.prototype.enterQueryExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#queryExpression.
cqlListener.prototype.exitQueryExpression = function(ctx) {
  ctx.__type = ctx.query().__type 
};


// Enter a parse tree produced by cqlParser#booleanExpression.
cqlListener.prototype.enterBooleanExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#booleanExpression.
cqlListener.prototype.exitBooleanExpression = function(ctx) {
   ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#orExpression.
cqlListener.prototype.enterOrExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#orExpression.
cqlListener.prototype.exitOrExpression = function(ctx) {
   ctx.__type =System.Boolean
};


// Enter a parse tree produced by cqlParser#castExpression.
cqlListener.prototype.enterCastExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#castExpression.
cqlListener.prototype.exitCastExpression = function(ctx) {
   ctx.__type = ctx.typeSpecifier().__type
};


// Enter a parse tree produced by cqlParser#andExpression.
cqlListener.prototype.enterAndExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#andExpression.
cqlListener.prototype.exitAndExpression = function(ctx) {
  ctx.__type = System.Boolean 
};


// Enter a parse tree produced by cqlParser#betweenExpression.
cqlListener.prototype.enterBetweenExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#betweenExpression.
cqlListener.prototype.exitBetweenExpression = function(ctx) {
  ctx.__type = System.Boolean 
};


// Enter a parse tree produced by cqlParser#membershipExpression.
cqlListener.prototype.enterMembershipExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#membershipExpression.
cqlListener.prototype.exitMembershipExpression = function(ctx) {
  ctx.__type = System.Boolean 
};


// Enter a parse tree produced by cqlParser#differenceBetweenExpression.
cqlListener.prototype.enterDifferenceBetweenExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#differenceBetweenExpression.
cqlListener.prototype.exitDifferenceBetweenExpression = function(ctx) {
  ctx.__type = System.Decimal
};


// Enter a parse tree produced by cqlParser#inequalityExpression.
cqlListener.prototype.enterInequalityExpression = function(ctx) {
  ctx.__type = System.Boolean
};

// Exit a parse tree produced by cqlParser#inequalityExpression.
cqlListener.prototype.exitInequalityExpression = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#equalityExpression.
cqlListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#equalityExpression.
cqlListener.prototype.exitEqualityExpression = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#existenceExpression.
cqlListener.prototype.enterExistenceExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#existenceExpression.
cqlListener.prototype.exitExistenceExpression = function(ctx) {
  ctx.__type = System.Boolean 
};


// Enter a parse tree produced by cqlParser#termExpression.
cqlListener.prototype.enterTermExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#termExpression.
cqlListener.prototype.exitTermExpression = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type 
};


// Enter a parse tree produced by cqlParser#typeExpression.
cqlListener.prototype.enterTypeExpression = function(ctx) {
};

// Exit a parse tree produced by cqlParser#typeExpression.
cqlListener.prototype.exitTypeExpression = function(ctx) {
  if(ctx.children[1].getText() == "is"){
    ctx.__type = Syastem.Boolean
  }else{
    ctx.__type = ctx.typeSpecifier().__type
  }
};


// Enter a parse tree produced by cqlParser#dateTimePrecision.
cqlListener.prototype.enterDateTimePrecision = function(ctx) {
};

// Exit a parse tree produced by cqlParser#dateTimePrecision.
cqlListener.prototype.exitDateTimePrecision = function(ctx) {
};


// Enter a parse tree produced by cqlParser#dateTimeComponent.
cqlListener.prototype.enterDateTimeComponent = function(ctx) {
};

// Exit a parse tree produced by cqlParser#dateTimeComponent.
cqlListener.prototype.exitDateTimeComponent = function(ctx) {
};


// Enter a parse tree produced by cqlParser#pluralDateTimePrecision.
cqlListener.prototype.enterPluralDateTimePrecision = function(ctx) {
};

// Exit a parse tree produced by cqlParser#pluralDateTimePrecision.
cqlListener.prototype.exitPluralDateTimePrecision = function(ctx) {
};


// Enter a parse tree produced by cqlParser#additionExpressionTerm.
cqlListener.prototype.enterAdditionExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#additionExpressionTerm.
cqlListener.prototype.exitAdditionExpressionTerm = function(ctx) {
  ctx.__type = System.Decimal 
};


// Enter a parse tree produced by cqlParser#indexedExpressionTerm.
cqlListener.prototype.enterIndexedExpressionTerm = function(ctx) {
 
};

// Exit a parse tree produced by cqlParser#indexedExpressionTerm.
cqlListener.prototype.exitIndexedExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type 
};


// Enter a parse tree produced by cqlParser#widthExpressionTerm.
cqlListener.prototype.enterWidthExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#widthExpressionTerm.
cqlListener.prototype.exitWidthExpressionTerm = function(ctx) {
  ctx.__type = System.Any 
};


// Enter a parse tree produced by cqlParser#timeUnitExpressionTerm.
cqlListener.prototype.enterTimeUnitExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#timeUnitExpressionTerm.
cqlListener.prototype.exitTimeUnitExpressionTerm = function(ctx) {
};


// Enter a parse tree produced by cqlParser#ifThenElseExpressionTerm.
cqlListener.prototype.enterIfThenElseExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#ifThenElseExpressionTerm.
cqlListener.prototype.exitIfThenElseExpressionTerm = function(ctx) {
  ctx.__type = System.Any 
};


// Enter a parse tree produced by cqlParser#timeBoundaryExpressionTerm.
cqlListener.prototype.enterTimeBoundaryExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#timeBoundaryExpressionTerm.
cqlListener.prototype.exitTimeBoundaryExpressionTerm = function(ctx) {
  ctx.__type = System.DateTime 
};


// Enter a parse tree produced by cqlParser#elementExtractorExpressionTerm.
cqlListener.prototype.enterElementExtractorExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#elementExtractorExpressionTerm.
cqlListener.prototype.exitElementExtractorExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type 
};


// Enter a parse tree produced by cqlParser#conversionExpressionTerm.
cqlListener.prototype.enterConversionExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#conversionExpressionTerm.
cqlListener.prototype.exitConversionExpressionTerm = function(ctx) {
  ctx.__type = ctx.typeSpecifier().__type
};


// Enter a parse tree produced by cqlParser#typeExtentExpressionTerm.
cqlListener.prototype.enterTypeExtentExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#typeExtentExpressionTerm.
cqlListener.prototype.exitTypeExtentExpressionTerm = function(ctx) {
  ctx.__type = System.Any 
};


// Enter a parse tree produced by cqlParser#predecessorExpressionTerm.
cqlListener.prototype.enterPredecessorExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#predecessorExpressionTerm.
cqlListener.prototype.exitPredecessorExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type
};


// Enter a parse tree produced by cqlParser#accessorExpressionTerm.
cqlListener.prototype.enterAccessorExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#accessorExpressionTerm.
cqlListener.prototype.exitAccessorExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type ?  ctx.expressionTerm().__type.resolve(ctx.identifier().getText()) : System.Any 
};


// Enter a parse tree produced by cqlParser#multiplicationExpressionTerm.
cqlListener.prototype.enterMultiplicationExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#multiplicationExpressionTerm.
cqlListener.prototype.exitMultiplicationExpressionTerm = function(ctx) {
  ctx.__type = new SimpleType("number")
};


// Enter a parse tree produced by cqlParser#aggregateExpressionTerm.
cqlListener.prototype.enterAggregateExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#aggregateExpressionTerm.
cqlListener.prototype.exitAggregateExpressionTerm = function(ctx) {
  ctx.__type = ctx.expression().__type
};


// Enter a parse tree produced by cqlParser#durationExpressionTerm.
cqlListener.prototype.enterDurationExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#durationExpressionTerm.
cqlListener.prototype.exitDurationExpressionTerm = function(ctx) {
  ctx.__type = System.Decimal  
};


// Enter a parse tree produced by cqlParser#caseExpressionTerm.
cqlListener.prototype.enterCaseExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#caseExpressionTerm.
cqlListener.prototype.exitCaseExpressionTerm = function(ctx) {
  ctx.__type = System.Any // need to do this for now, not really sure what else can be done
};


// Enter a parse tree produced by cqlParser#powerExpressionTerm.
cqlListener.prototype.enterPowerExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#powerExpressionTerm.
cqlListener.prototype.exitPowerExpressionTerm = function(ctx) {
  ctx.__type = System.Decimal 
};


// Enter a parse tree produced by cqlParser#successorExpressionTerm.
cqlListener.prototype.enterSuccessorExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#successorExpressionTerm.
cqlListener.prototype.exitSuccessorExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type 
};


// Enter a parse tree produced by cqlParser#polarityExpressionTerm.
cqlListener.prototype.enterPolarityExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#polarityExpressionTerm.
cqlListener.prototype.exitPolarityExpressionTerm = function(ctx) {
  ctx.__type = ctx.expressionTerm().__type 
};


// Enter a parse tree produced by cqlParser#termExpressionTerm.
cqlListener.prototype.enterTermExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#termExpressionTerm.
cqlListener.prototype.exitTermExpressionTerm = function(ctx) {
  ctx.__type = ctx.term().__type
};


// Enter a parse tree produced by cqlParser#invocationExpressionTerm.
cqlListener.prototype.enterInvocationExpressionTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#invocationExpressionTerm.
cqlListener.prototype.exitInvocationExpressionTerm = function(ctx) {
};


// Enter a parse tree produced by cqlParser#caseExpressionItem.
cqlListener.prototype.enterCaseExpressionItem = function(ctx) {
};

// Exit a parse tree produced by cqlParser#caseExpressionItem.
cqlListener.prototype.exitCaseExpressionItem = function(ctx) {
};


// Enter a parse tree produced by cqlParser#dateTimePrecisionSpecifier.
cqlListener.prototype.enterDateTimePrecisionSpecifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#dateTimePrecisionSpecifier.
cqlListener.prototype.exitDateTimePrecisionSpecifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#relativeQualifier.
cqlListener.prototype.enterRelativeQualifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#relativeQualifier.
cqlListener.prototype.exitRelativeQualifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#offsetRelativeQualifier.
cqlListener.prototype.enterOffsetRelativeQualifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#offsetRelativeQualifier.
cqlListener.prototype.exitOffsetRelativeQualifier = function(ctx) {
};


// Enter a parse tree produced by cqlParser#quantityOffset.
cqlListener.prototype.enterQuantityOffset = function(ctx) {
};

// Exit a parse tree produced by cqlParser#quantityOffset.
cqlListener.prototype.exitQuantityOffset = function(ctx) {
};


// Enter a parse tree produced by cqlParser#concurrentWithIntervalOperatorPhrase.
cqlListener.prototype.enterConcurrentWithIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#concurrentWithIntervalOperatorPhrase.
cqlListener.prototype.exitConcurrentWithIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#includesIntervalOperatorPhrase.
cqlListener.prototype.enterIncludesIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#includesIntervalOperatorPhrase.
cqlListener.prototype.exitIncludesIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#includedInIntervalOperatorPhrase.
cqlListener.prototype.enterIncludedInIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#includedInIntervalOperatorPhrase.
cqlListener.prototype.exitIncludedInIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#beforeOrAfterIntervalOperatorPhrase.
cqlListener.prototype.enterBeforeOrAfterIntervalOperatorPhrase = function(ctx) {

};

// Exit a parse tree produced by cqlParser#beforeOrAfterIntervalOperatorPhrase.
cqlListener.prototype.exitBeforeOrAfterIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#withinIntervalOperatorPhrase.
cqlListener.prototype.enterWithinIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};

// Exit a parse tree produced by cqlParser#withinIntervalOperatorPhrase.
cqlListener.prototype.exitWithinIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#meetsIntervalOperatorPhrase.
cqlListener.prototype.enterMeetsIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#meetsIntervalOperatorPhrase.
cqlListener.prototype.exitMeetsIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#overlapsIntervalOperatorPhrase.
cqlListener.prototype.enterOverlapsIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#overlapsIntervalOperatorPhrase.
cqlListener.prototype.exitOverlapsIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#startsIntervalOperatorPhrase.
cqlListener.prototype.enterStartsIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#startsIntervalOperatorPhrase.
cqlListener.prototype.exitStartsIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#endsIntervalOperatorPhrase.
cqlListener.prototype.enterEndsIntervalOperatorPhrase = function(ctx) {
};

// Exit a parse tree produced by cqlParser#endsIntervalOperatorPhrase.
cqlListener.prototype.exitEndsIntervalOperatorPhrase = function(ctx) {
  ctx.__type = System.Boolean
};


// Enter a parse tree produced by cqlParser#identifierTerm.
cqlListener.prototype.enterIdentifierTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#identifierTerm.
cqlListener.prototype.exitIdentifierTerm = function(ctx) {
  ctx.__type = new ResolverType(new Resolver(this.currentContext,ctx.getText()))
};


// Enter a parse tree produced by cqlParser#literalTerm.
cqlListener.prototype.enterLiteralTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#literalTerm.
cqlListener.prototype.exitLiteralTerm = function(ctx) {
  ctx.__type = ctx.literal().__type
};


// Enter a parse tree produced by cqlParser#intervalSelectorTerm.
cqlListener.prototype.enterIntervalSelectorTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#intervalSelectorTerm.
cqlListener.prototype.exitIntervalSelectorTerm = function(ctx) {
  ctx.__type = System.Interval
};


// Enter a parse tree produced by cqlParser#tupleSelectorTerm.
cqlListener.prototype.enterTupleSelectorTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#tupleSelectorTerm.
cqlListener.prototype.exitTupleSelectorTerm = function(ctx) {
  ctx.__type = ctx.tupleSelector().__type
};


// Enter a parse tree produced by cqlParser#instanceSelectorTerm.
cqlListener.prototype.enterInstanceSelectorTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#instanceSelectorTerm.
cqlListener.prototype.exitInstanceSelectorTerm = function(ctx) {
};


// Enter a parse tree produced by cqlParser#listSelectorTerm.
cqlListener.prototype.enterListSelectorTerm = function(ctx) {
  ctx.__type = ctx.listSelector().__type
};

// Exit a parse tree produced by cqlParser#listSelectorTerm.
cqlListener.prototype.exitListSelectorTerm = function(ctx) {
};


// Enter a parse tree produced by cqlParser#codeSelectorTerm.
cqlListener.prototype.enterCodeSelectorTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codeSelectorTerm.
cqlListener.prototype.exitCodeSelectorTerm = function(ctx) {
    ctx.__type = System.Code 
};


// Enter a parse tree produced by cqlParser#conceptSelectorTerm.
cqlListener.prototype.enterConceptSelectorTerm = function(ctx) {

};

// Exit a parse tree produced by cqlParser#conceptSelectorTerm.
cqlListener.prototype.exitConceptSelectorTerm = function(ctx) {
  ctx.__type = System.Concept
};


// Enter a parse tree produced by cqlParser#parenthesizedTerm.
cqlListener.prototype.enterParenthesizedTerm = function(ctx) {
};

// Exit a parse tree produced by cqlParser#parenthesizedTerm.
cqlListener.prototype.exitParenthesizedTerm = function(ctx) {
  ctx.__type = ctx.expression().__type
};


// Enter a parse tree produced by cqlParser#intervalSelector.
cqlListener.prototype.enterIntervalSelector = function(ctx) {

};

// Exit a parse tree produced by cqlParser#intervalSelector.
cqlListener.prototype.exitIntervalSelector = function(ctx) {
  ctx.__type = System.Interval
};


// Enter a parse tree produced by cqlParser#tupleSelector.
cqlListener.prototype.enterTupleSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#tupleSelector.
cqlListener.prototype.exitTupleSelector = function(ctx) {
  var properties = {}
  var children = ctx.tupleElementSelector()
  for(var i = 0; i< children.length ; i++){
    properties[children[i].__alias] = children[i].__type
  }
  ctx.__type = new CompositeType("tuple", properties);
};


// Enter a parse tree produced by cqlParser#tupleElementSelector.
cqlListener.prototype.enterTupleElementSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#tupleElementSelector.
cqlListener.prototype.exitTupleElementSelector = function(ctx) {
  ctx.__alias = ctx.identifier().getText()
   ctx.__type = ctx.expression().__type
};


// Enter a parse tree produced by cqlParser#instanceSelector.
cqlListener.prototype.enterInstanceSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#instanceSelector.
cqlListener.prototype.exitInstanceSelector = function(ctx) {
};


// Enter a parse tree produced by cqlParser#instanceElementSelector.
cqlListener.prototype.enterInstanceElementSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#instanceElementSelector.
cqlListener.prototype.exitInstanceElementSelector = function(ctx) {
};


// Enter a parse tree produced by cqlParser#listSelector.
cqlListener.prototype.enterListSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#listSelector.
cqlListener.prototype.exitListSelector = function(ctx) {
  if(ctx.typeSpecifier())
    ctx.__type = new ListeType(ctx.typeSpecifier().__type)
};


// Enter a parse tree produced by cqlParser#displayClause.
cqlListener.prototype.enterDisplayClause = function(ctx) {
};

// Exit a parse tree produced by cqlParser#displayClause.
cqlListener.prototype.exitDisplayClause = function(ctx) {
};


// Enter a parse tree produced by cqlParser#codeSelector.
cqlListener.prototype.enterCodeSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#codeSelector.
cqlListener.prototype.exitCodeSelector = function(ctx) {
  ctx.__type = System.Code
};


// Enter a parse tree produced by cqlParser#conceptSelector.
cqlListener.prototype.enterConceptSelector = function(ctx) {
};

// Exit a parse tree produced by cqlParser#conceptSelector.
cqlListener.prototype.exitConceptSelector = function(ctx) {
  ctx.__type = System.Concept
};


// Enter a parse tree produced by cqlParser#literal.
cqlListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#literal.
cqlListener.prototype.exitLiteral = function(ctx) {
  ctx.__type = ctx.children[0].__type
};


// Enter a parse tree produced by cqlParser#nullLiteral.
cqlListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#nullLiteral.
cqlListener.prototype.exitNullLiteral = function(ctx) {
   ctx.__type = System.NULL 
};


// Enter a parse tree produced by cqlParser#booleanLiteral.
cqlListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#booleanLiteral.
cqlListener.prototype.exitBooleanLiteral = function(ctx) {
   ctx.__type = System.Boolean
}

// Enter a parse tree produced by cqlParser#stringLiteral.
cqlListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#stringLiteral.
cqlListener.prototype.exitStringLiteral = function(ctx) {
   ctx.__type = System.String
};


// Enter a parse tree produced by cqlParser#dateTimeLiteral.
cqlListener.prototype.enterDateTimeLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#dateTimeLiteral.
cqlListener.prototype.exitDateTimeLiteral = function(ctx) {
   ctx.__type = System.DateTime
};

// Enter a parse tree produced by cqlParser#timeLiteral.
cqlListener.prototype.enterTimeLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#timeLiteral.
cqlListener.prototype.exitTimeLiteral = function(ctx) {
  ctx.__type = System.Time 
};


// Enter a parse tree produced by cqlParser#quantityLiteral.
cqlListener.prototype.enterQuantityLiteral = function(ctx) {
};

// Exit a parse tree produced by cqlParser#quantityLiteral.
cqlListener.prototype.exitQuantityLiteral = function(ctx) {
  ctx.type = System.QuantityLiteral 
};


// Enter a parse tree produced by cqlParser#unit.
cqlListener.prototype.enterUnit = function(ctx) {
};

// Exit a parse tree produced by cqlParser#unit.
cqlListener.prototype.exitUnit = function(ctx) {
  ctx.__type = System.String;
};


// Enter a parse tree produced by cqlParser#identifier.
cqlListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by cqlParser#identifier.
cqlListener.prototype.exitIdentifier = function(ctx) {
  var id = ctx.QUOTEDIDENTIFIER() || ctx.IDENTIFIER();
  ctx.__identifier = id.toString();
};



exports.cqlListener = cqlListener;
});