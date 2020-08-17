var Modeler = require("../Modeler.js");
var className = 'TypeListOfCandidateAddressType';

var TypeListOfCandidateAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CandidateAddress: {
      type: "TypeCandidateAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:CandidateAddress",
        type: "CandidateAddressType",
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
	  CandidateAddress: {
      type: "TypeCandidateAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:CandidateAddress",
        type: "CandidateAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfCandidateAddressType;
Modeler.register(TypeListOfCandidateAddressType, "TypeListOfCandidateAddressType");
