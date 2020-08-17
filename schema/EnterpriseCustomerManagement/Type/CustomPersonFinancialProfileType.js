var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonFinancialProfileType';

var TypeCustomPersonFinancialProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonFinancialProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonFinancialProfileType",
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
	  CustomPersonFinancialProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonFinancialProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonFinancialProfileType;
Modeler.register(TypeCustomPersonFinancialProfileType, "TypeCustomPersonFinancialProfileType");
