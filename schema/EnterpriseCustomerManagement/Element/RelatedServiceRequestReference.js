var Modeler = require("../Modeler.js");
var className = 'ElementRelatedServiceRequestReference';

var ElementRelatedServiceRequestReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedServiceRequestReference: {
      type: "TypeRelatedServiceRequestReferenceType",
      wsdlDefinition: {
        name: "RelatedServiceRequestReference",
        type: "RelatedServiceRequestReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Service Request may be related to one or more Service Requests. E.g. Duplicates service Requests can be related . Service Requests caused by issues logged in other Service requests."
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
	  RelatedServiceRequestReference: {
      type: "TypeRelatedServiceRequestReferenceType",
      wsdlDefinition: {
        name: "RelatedServiceRequestReference",
        type: "RelatedServiceRequestReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Service Request may be related to one or more Service Requests. E.g. Duplicates service Requests can be related . Service Requests caused by issues logged in other Service requests."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedServiceRequestReference;
Modeler.register(ElementRelatedServiceRequestReference, "ElementRelatedServiceRequestReference");
