var Modeler = require("../Modeler.js");
var className = 'ElementContactIdentification';

var ElementContactIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactIdentification: {
      type: "TypeContactIdentificationType",
      wsdlDefinition: {
        name: "ContactIdentification",
        type: "ContactIdentificationType",
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
	  ContactIdentification: {
      type: "TypeContactIdentificationType",
      wsdlDefinition: {
        name: "ContactIdentification",
        type: "ContactIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactIdentification;
Modeler.register(ElementContactIdentification, "ElementContactIdentification");
