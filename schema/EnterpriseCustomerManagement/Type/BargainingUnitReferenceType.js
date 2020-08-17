var Modeler = require("../Modeler.js");
var className = 'TypeBargainingUnitReferenceType';

var TypeBargainingUnitReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BargainingUnitIdentification: {
      type: "TypeBargainingUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BargainingUnitIdentification",
        type: "BargainingUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBargainingUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBargainingUnitReferenceType",
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
	  BargainingUnitIdentification: {
      type: "TypeBargainingUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BargainingUnitIdentification",
        type: "BargainingUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBargainingUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBargainingUnitReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBargainingUnitReferenceType;
Modeler.register(TypeBargainingUnitReferenceType, "TypeBargainingUnitReferenceType");
