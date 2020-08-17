var Modeler = require("../Modeler.js");
var className = 'TypeQueryCustomerPartyType';

var TypeQueryCustomerPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
        attribute: false,
        ns: "WL5G3N1"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyEBOType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyEBOType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQueryCustomerPartyType;
Modeler.register(TypeQueryCustomerPartyType, "TypeQueryCustomerPartyType");
