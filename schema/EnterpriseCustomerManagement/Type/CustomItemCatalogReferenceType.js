var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemCatalogReferenceType';

var TypeCustomItemCatalogReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemCatalogReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemCatalogReferenceType",
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
	  CustomItemCatalogReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemCatalogReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemCatalogReferenceType;
Modeler.register(TypeCustomItemCatalogReferenceType, "TypeCustomItemCatalogReferenceType");
