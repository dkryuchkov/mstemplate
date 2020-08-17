var Modeler = require("../Modeler.js");
var className = 'ElementB2BMHeader';

var ElementB2BMHeader = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BMHeader: {
      type: "TypeB2BMHeaderType",
      wsdlDefinition: {
        name: "B2BMHeader",
        type: "B2BMHeaderType",
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
	  B2BMHeader: {
      type: "TypeB2BMHeaderType",
      wsdlDefinition: {
        name: "B2BMHeader",
        type: "B2BMHeaderType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementB2BMHeader;
Modeler.register(ElementB2BMHeader, "ElementB2BMHeader");
