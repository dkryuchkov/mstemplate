var Modeler = require("../Modeler.js");
var className = 'TypeSpecificationGroupReferenceType';

var TypeSpecificationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecificationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSpecificationGroupReferenceType",
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
	  SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecificationGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSpecificationGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpecificationGroupReferenceType;
Modeler.register(TypeSpecificationGroupReferenceType, "TypeSpecificationGroupReferenceType");
