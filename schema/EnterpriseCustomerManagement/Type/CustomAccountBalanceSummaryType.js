var Modeler = require("../Modeler.js");
var className = 'TypeCustomAccountBalanceSummaryType';

var TypeCustomAccountBalanceSummaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAccountBalanceSummaryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountBalanceSummaryType",
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
	  CustomAccountBalanceSummaryType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountBalanceSummaryType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAccountBalanceSummaryType;
Modeler.register(TypeCustomAccountBalanceSummaryType, "TypeCustomAccountBalanceSummaryType");
