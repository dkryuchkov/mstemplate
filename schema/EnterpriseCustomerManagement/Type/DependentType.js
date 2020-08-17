var Modeler = require("../Modeler.js");
var className = 'TypeDependentType';

var TypeDependentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelationshipCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This is the dependent's relationship with the supporter\nFor example Spouse, Son, Daughter, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DependentPersonParty: {
      type: "TypeDependentPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DependentPersonParty",
        type: "DependentPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDependentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDependentType",
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
	  RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelationshipCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This is the dependent's relationship with the supporter\nFor example Spouse, Son, Daughter, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DependentPersonParty: {
      type: "TypeDependentPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DependentPersonParty",
        type: "DependentPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDependentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDependentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDependentType;
Modeler.register(TypeDependentType, "TypeDependentType");
