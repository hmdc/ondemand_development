# frozen_string_literal: true

module SlurmCluster
  # Utility methods to format data for the cluster templates.
  class ClusterHelper
    def state_class(partition_state)
      return 'bg-primary' if partition_state.nil?

      if partition_state.to_s.downcase == 'up'
        return 'bg-success'
      else
        return 'bg-danger'
      end
    end

    def state_icon(partition_state)
      if partition_state.to_s.downcase == 'up'
        return '<i class="fa fa-check-circle fa-fw text-success"></i>'
      else
        return  '<i class="fa fa-times-circle fa-fw text-danger"></i>'
      end
    end

    def nodes_class(nodes_metrics)
      available_percentage = nodes_metrics[1] / nodes_metrics[3].to_f
      if available_percentage > 0.45
        return 'bg-success'
      elsif available_percentage < 0.2
        return 'bg-danger'
      else
        return 'bg-warning'
      end
    end

    def cores_class(cores_metrics)
      available_percentage = cores_metrics[1] / cores_metrics[3].to_f
      if available_percentage > 0.45
        return 'bg-success'
      elsif available_percentage < 0.2
        return 'bg-danger'
      else
        return 'bg-warning'
      end
    end

    def memory_class(memory_mb)
      memory_gb = convert_mb_to_gb(memory_mb).to_f
      if memory_gb > 64
        return 'bg-success'
      elsif memory_gb < 16
        return 'bg-danger'
      else
        return 'bg-warning'
      end
    end

    def convert_mb_to_gb(mb_value)
      # Convert the input string to a float for division
      mb = mb_value.to_f

      # Perform the conversion from MB to GB
      gb = mb / 1024

      # Format the output as a string with two decimal places and append " GB"
      '%.1f' % gb
    end

  end
end
