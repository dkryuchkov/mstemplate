var Modeler = require("../Modeler.js");
var className = 'TypeCustomChartOfAccountsStructureReferenceType';

var TypeCustomChartOfAccountsStructureReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomChartOfAccountsStructureReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChartOfAccountsStructureReferenceType",
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
	  CustomChartOfAccountsStructureReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomChartOfAccountsStructureReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomChartOfAccountsStructureReferenceType;
Modeler.register(TypeCustomChartOfAccountsStructureReferenceType, "TypeCustomChartOfAccountsStructureReferenceType");
