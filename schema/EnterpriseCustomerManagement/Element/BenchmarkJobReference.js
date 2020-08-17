var Modeler = require("../Modeler.js");
var className = 'ElementBenchmarkJobReference';

var ElementBenchmarkJobReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BenchmarkJobReference: {
      type: "TypeJobReferenceType",
      wsdlDefinition: {
        name: "BenchmarkJobReference",
        type: "JobReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job against which the job in context is benchmarked."
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
	  BenchmarkJobReference: {
      type: "TypeJobReferenceType",
      wsdlDefinition: {
        name: "BenchmarkJobReference",
        type: "JobReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a job against which the job in context is benchmarked."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBenchmarkJobReference;
Modeler.register(ElementBenchmarkJobReference, "ElementBenchmarkJobReference");
