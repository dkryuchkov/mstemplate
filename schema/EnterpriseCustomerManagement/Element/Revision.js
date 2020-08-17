var Modeler = require("../Modeler.js");
var className = 'ElementRevision';

var ElementRevision = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Revision: {
      type: "TypeRevisionType",
      wsdlDefinition: {
        name: "Revision",
        type: "RevisionType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying the revision details of an object or component"
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
	  Revision: {
      type: "TypeRevisionType",
      wsdlDefinition: {
        name: "Revision",
        type: "RevisionType",
        "xsd:annotation": {
          "xsd:documentation": "Means of identifying the revision details of an object or component"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRevision;
Modeler.register(ElementRevision, "ElementRevision");
