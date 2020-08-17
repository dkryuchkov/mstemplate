var Modeler = require("../Modeler.js");
var className = 'TypeListOfCandidateType';

var TypeListOfCandidateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Candidate: {
      type: "TypeCandidateType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:Candidate",
        type: "CandidateType",
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
	  Candidate: {
      type: "TypeCandidateType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:Candidate",
        type: "CandidateType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfCandidateType;
Modeler.register(TypeListOfCandidateType, "TypeListOfCandidateType");
