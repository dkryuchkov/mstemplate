var Modeler = require("../Modeler.js");
var className = 'TypeItemStructureSpecificationGroupType';

var TypeItemStructureSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for a set of user defined attributes of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationGroup: {
      type: "TypeSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroup",
        type: "SpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Group of user defined attributes for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureSpecificationGroupType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for a set of user defined attributes of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationGroup: {
      type: "TypeSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroup",
        type: "SpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Group of user defined attributes for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureSpecificationGroupType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemStructureSpecificationGroupType;
Modeler.register(TypeItemStructureSpecificationGroupType, "TypeItemStructureSpecificationGroupType");
