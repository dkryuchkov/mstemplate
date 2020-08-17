var Modeler = require("../Modeler.js");
var className = 'ElementProjectIdentfication';

var ElementProjectIdentfication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectIdentfication: {
      type: "TypeProjectIdentficationType",
      wsdlDefinition: {
        name: "ProjectIdentfication",
        type: "ProjectIdentficationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a project"
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
	  ProjectIdentfication: {
      type: "TypeProjectIdentficationType",
      wsdlDefinition: {
        name: "ProjectIdentfication",
        type: "ProjectIdentficationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a project"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectIdentfication;
Modeler.register(ElementProjectIdentfication, "ElementProjectIdentfication");
