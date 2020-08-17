var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesTerritoryReferenceType';

var TypeCustomSalesTerritoryReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesTerritoryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesTerritoryReferenceType",
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
	  CustomSalesTerritoryReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesTerritoryReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesTerritoryReferenceType;
Modeler.register(TypeCustomSalesTerritoryReferenceType, "TypeCustomSalesTerritoryReferenceType");
