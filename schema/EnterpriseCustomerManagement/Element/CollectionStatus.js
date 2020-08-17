var Modeler = require("../Modeler.js");
var className = 'ElementCollectionStatus';

var ElementCollectionStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CollectionStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "CollectionStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of receivables due for a customer party along with details about the date of effectivity of the status"
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
	  CollectionStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "CollectionStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of receivables due for a customer party along with details about the date of effectivity of the status"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCollectionStatus;
Modeler.register(ElementCollectionStatus, "ElementCollectionStatus");
