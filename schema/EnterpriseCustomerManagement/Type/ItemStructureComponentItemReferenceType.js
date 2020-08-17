var Modeler = require("../Modeler.js");
var className = 'TypeItemStructureComponentItemReferenceType';

var TypeItemStructureComponentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureIdentification: {
      type: "TypeItemStructureIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemStructureIdentification",
        type: "ItemStructureIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemStructureComponentItemIdentification: {
      type: "TypeItemStructureComponentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemStructureComponentItemIdentification",
        type: "ItemStructureComponentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureComponentItemReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ItemStructureIdentification: {
      type: "TypeItemStructureIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemStructureIdentification",
        type: "ItemStructureIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemStructureComponentItemIdentification: {
      type: "TypeItemStructureComponentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemStructureComponentItemIdentification",
        type: "ItemStructureComponentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureComponentItemReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemStructureComponentItemReferenceType;
Modeler.register(TypeItemStructureComponentItemReferenceType, "TypeItemStructureComponentItemReferenceType");
