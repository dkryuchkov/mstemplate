var Modeler = require("../Modeler.js");
var className = 'ElementCitizenship';

var ElementCitizenship = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Citizenship: {
      type: "TypeCitizenshipType",
      wsdlDefinition: {
        name: "Citizenship",
        type: "CitizenshipType",
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
	  Citizenship: {
      type: "TypeCitizenshipType",
      wsdlDefinition: {
        name: "Citizenship",
        type: "CitizenshipType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCitizenship;
Modeler.register(ElementCitizenship, "ElementCitizenship");
