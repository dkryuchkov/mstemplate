var Modeler = require("../Modeler.js");
var className = 'ElementBusinessScopeReference';

var ElementBusinessScopeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessScopeReference: {
      type: "TypeBusinessScopeReferenceType",
      wsdlDefinition: {
        name: "BusinessScopeReference",
        type: "BusinessScopeReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  BusinessScopeReference: {
      type: "TypeBusinessScopeReferenceType",
      wsdlDefinition: {
        name: "BusinessScopeReference",
        type: "BusinessScopeReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessScopeReference;
Modeler.register(ElementBusinessScopeReference, "ElementBusinessScopeReference");
