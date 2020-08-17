var Modeler = require("../Modeler.js");
var className = 'TypeCustomChartOfAccountsReferenceType';

var TypeCustomChartOfAccountsReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomChartOfAccountsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChartOfAccountsReferenceType",
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
	  CustomChartOfAccountsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChartOfAccountsReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomChartOfAccountsReferenceType;
Modeler.register(TypeCustomChartOfAccountsReferenceType, "TypeCustomChartOfAccountsReferenceType");
