var Modeler = require("../Modeler.js");
var className = 'TypeComponentItemSpecificationGroupType';

var TypeComponentItemSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for a set of user defined attributes of the component item in the context of the item structure"
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
          "xsd:documentation": "Group of user defined attributes of the component item in the context of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomComponentItemSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomComponentItemSpecificationGroupType",
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
          "xsd:documentation": "Unique identifier for a set of user defined attributes of the component item in the context of the item structure"
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
          "xsd:documentation": "Group of user defined attributes of the component item in the context of the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomComponentItemSpecificationGroupType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomComponentItemSpecificationGroupType",
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

module.exports = TypeComponentItemSpecificationGroupType;
Modeler.register(TypeComponentItemSpecificationGroupType, "TypeComponentItemSpecificationGroupType");
