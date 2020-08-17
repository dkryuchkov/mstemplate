var Modeler = require("../Modeler.js");
var className = 'ElementESBHeaderExtension';

var ElementESBHeaderExtension = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ESBHeaderExtension: {
      type: "TypeESBHeaderExtensionType",
      wsdlDefinition: {
        name: "ESBHeaderExtension",
        type: "ESBHeaderExtensionType",
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
	  ESBHeaderExtension: {
      type: "TypeESBHeaderExtensionType",
      wsdlDefinition: {
        name: "ESBHeaderExtension",
        type: "ESBHeaderExtensionType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementESBHeaderExtension;
Modeler.register(ElementESBHeaderExtension, "ElementESBHeaderExtension");
