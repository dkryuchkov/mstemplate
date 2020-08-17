var Modeler = require("../Modeler.js");
var className = 'TypeEngineeringChangeOrderReferenceType';

var TypeEngineeringChangeOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EngineeringChangeOrderIdentification: {
      type: "TypeEngineeringChangeOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EngineeringChangeOrderIdentification",
        type: "EngineeringChangeOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the change order type e.g., New Product, ECO, Document Change, AML Change etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InitiationDate: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InitiationDate",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Creation date of the Change Order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationDate: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationDate",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Implementation date of the entire change order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEngineeringChangeOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEngineeringChangeOrderReferenceType",
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
	  EngineeringChangeOrderIdentification: {
      type: "TypeEngineeringChangeOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EngineeringChangeOrderIdentification",
        type: "EngineeringChangeOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the change order type e.g., New Product, ECO, Document Change, AML Change etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InitiationDate: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InitiationDate",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Creation date of the Change Order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ImplementationDate: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationDate",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Implementation date of the entire change order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEngineeringChangeOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEngineeringChangeOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEngineeringChangeOrderReferenceType;
Modeler.register(TypeEngineeringChangeOrderReferenceType, "TypeEngineeringChangeOrderReferenceType");
