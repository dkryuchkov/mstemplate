var Modeler = require("../Modeler.js");
var className = 'TypeCustomTalentProfileContentItemCatalogReferenceType';

var TypeCustomTalentProfileContentItemCatalogReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTalentProfileContentItemCatalogReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentItemCatalogReferenceType",
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
	  CustomTalentProfileContentItemCatalogReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTalentProfileContentItemCatalogReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTalentProfileContentItemCatalogReferenceType;
Modeler.register(TypeCustomTalentProfileContentItemCatalogReferenceType, "TypeCustomTalentProfileContentItemCatalogReferenceType");
