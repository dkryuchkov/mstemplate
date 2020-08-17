var Modeler = require("../Modeler.js");
var className = 'ElementLocationParent';

var ElementLocationParent = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LocationParent: {
      type: "TypeLocationParentType",
      wsdlDefinition: {
        name: "LocationParent",
        type: "LocationParentType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the parent location of any location in the case of hierarchical location definitions"
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
	  LocationParent: {
      type: "TypeLocationParentType",
      wsdlDefinition: {
        name: "LocationParent",
        type: "LocationParentType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the parent location of any location in the case of hierarchical location definitions"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLocationParent;
Modeler.register(ElementLocationParent, "ElementLocationParent");
