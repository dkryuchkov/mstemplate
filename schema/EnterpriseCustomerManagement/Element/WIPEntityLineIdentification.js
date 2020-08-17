var Modeler = require("../Modeler.js");
var className = 'ElementWIPEntityLineIdentification';

var ElementWIPEntityLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPEntityLineIdentification: {
      type: "TypeWIPEntityLineIdentificationType",
      wsdlDefinition: {
        name: "WIPEntityLineIdentification",
        type: "WIPEntityLineIdentificationType",
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
	  WIPEntityLineIdentification: {
      type: "TypeWIPEntityLineIdentificationType",
      wsdlDefinition: {
        name: "WIPEntityLineIdentification",
        type: "WIPEntityLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPEntityLineIdentification;
Modeler.register(ElementWIPEntityLineIdentification, "ElementWIPEntityLineIdentification");
