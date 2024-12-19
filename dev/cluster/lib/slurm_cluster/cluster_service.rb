# frozen_string_literal: true

module SlurmCluster
  # Service to manages retrieving and caching cluster data.
  class ClusterService
    attr_reader :cluster

    def initialize
      @cluster = Configuration.job_clusters.select(&:slurm?).first
    end

    def read_partitions
      nodes = @cluster.job_adapter.nodes
      partitions = {}
      nodes.each do |node_info|
        partition_info = partitions.fetch(node_info.partition, {})
        partition_info[:partition] = node_info.partition
        partition_info[:partition_state] = node_info.partition_state
        partition_info[:total_memory] = node_info.total_memory
        partition_info[:free_memory] = node_info.free_memory
        partition_info[:procs_by_state] = node_info.procs_by_state.zip(partition_info.fetch(:procs_by_state, [0, 0, 0, 0])).map { |a, b| a + b }
        partition_info[:nodes_by_state] = node_info.nodes_by_state.zip(partition_info.fetch(:nodes_by_state, [0, 0, 0, 0])).map { |a, b| a + b }
        partitions[node_info.partition] = partition_info
      end

      partitions.values
    end
  end
end
