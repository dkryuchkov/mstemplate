var Modeler = require("../Modeler.js");
var className = 'ElementBusinessScope';

var ElementBusinessScope = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessScope: {
      type: "TypeBusinessScopeType",
      wsdlDefinition: {
        name: "BusinessScope",
        type: "BusinessScopeType",
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
	  BusinessScope: {
      type: "TypeBusinessScopeType",
      wsdlDefinition: {
        name: "BusinessScope",
        type: "BusinessScopeType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBusinessScope;
Modeler.register(ElementBusinessScope, "ElementBusinessScope");
