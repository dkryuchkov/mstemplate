var Modeler = require("../Modeler.js");
var className = 'ElementB2BM';

var ElementB2BM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BM: {
      type: "TypeB2BMType",
      wsdlDefinition: {
        name: "B2BM",
        type: "B2BMType",
        "xsd:annotation": {
          "xsd:documentation": "B2B message element. Contains the B2B payload being sent to or received from a remote trading partner and header information describing the B2B document and sending, receiving trading partners"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  B2BM: {
      type: "TypeB2BMType",
      wsdlDefinition: {
        name: "B2BM",
        type: "B2BMType",
        "xsd:annotation": {
          "xsd:documentation": "B2B message element. Contains the B2B payload being sent to or received from a remote trading partner and header information describing the B2B document and sending, receiving trading partners"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementB2BM;
Modeler.register(ElementB2BM, "ElementB2BM");
