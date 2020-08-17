var Modeler = require("../Modeler.js");
var className = 'TypeItemStructureReferenceType';

var TypeItemStructureReferenceType = function(json, parentObj) {
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
    ItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemIdentification",
        type: "ItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureReferenceType",
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
    ItemIdentification: {
      type: "TypeItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemIdentification",
        type: "ItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemStructureReferenceType;
Modeler.register(TypeItemStructureReferenceType, "TypeItemStructureReferenceType");
