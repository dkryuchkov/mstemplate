var Modeler = require("../Modeler.js");
var className = 'TypeCustomInvestmentRestrictionType';

var TypeCustomInvestmentRestrictionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomInvestmentRestrictionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvestmentRestrictionType",
        attribute: false,
        type: "xsd:string"
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
	  CustomInvestmentRestrictionType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomInvestmentRestrictionType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomInvestmentRestrictionType;
Modeler.register(TypeCustomInvestmentRestrictionType, "TypeCustomInvestmentRestrictionType");
