var Modeler = require("../Modeler.js");
var className = 'TypeBusinessUnitFunctionReferenceType';

var TypeBusinessUnitFunctionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessUnitFunctionIdentification: {
      type: "TypeBusinessUnitFunctionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitFunctionIdentification",
        type: "BusinessUnitFunctionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessUnitFunctionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessUnitFunctionReferenceType",
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
	  BusinessUnitIdentification: {
      type: "TypeBusinessUnitIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitIdentification",
        type: "BusinessUnitIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessUnitFunctionIdentification: {
      type: "TypeBusinessUnitFunctionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessUnitFunctionIdentification",
        type: "BusinessUnitFunctionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBusinessUnitFunctionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBusinessUnitFunctionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBusinessUnitFunctionReferenceType;
Modeler.register(TypeBusinessUnitFunctionReferenceType, "TypeBusinessUnitFunctionReferenceType");
