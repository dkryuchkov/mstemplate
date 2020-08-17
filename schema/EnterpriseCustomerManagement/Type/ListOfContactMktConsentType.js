var Modeler = require("../Modeler.js");
var className = 'TypeListOfContactMktConsentType';

var TypeListOfContactMktConsentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MktConsent: {
      type: "TypeMktConsentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:MktConsent",
        type: "MktConsentType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  MktConsent: {
      type: "TypeMktConsentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:MktConsent",
        type: "MktConsentType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfContactMktConsentType;
Modeler.register(TypeListOfContactMktConsentType, "TypeListOfContactMktConsentType");
